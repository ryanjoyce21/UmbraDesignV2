import { Resend } from 'resend';

// Simple in-memory rate limiting (resets on cold start)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute per IP
const CLEANUP_INTERVAL = 5 * 60 * 1000; // Cleanup every 5 minutes

// Cleanup stale entries to prevent unbounded memory growth
function cleanupStaleEntries() {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap) {
    if (now - record.firstRequest > RATE_LIMIT_WINDOW) {
      rateLimitMap.delete(ip);
    }
  }
}

// Start periodic cleanup when module loads
const cleanupTimer = setInterval(cleanupStaleEntries, CLEANUP_INTERVAL);
// Prevent timer from keeping Node.js process alive
if (cleanupTimer.unref) {
  cleanupTimer.unref();
}

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  // Reset window if expired
  if (now - record.firstRequest > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  // Check if limit exceeded
  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  // Increment count
  record.count++;
  return false;
}

// Input validation
function validateInput(data) {
  const errors = {};

  // Name validation
  if (!data.name || typeof data.name !== 'string' || !data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length > 100) {
    errors.name = 'Name must be less than 100 characters';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || typeof data.email !== 'string' || !data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address';
  } else if (data.email.trim().length > 254) {
    errors.email = 'Email must be less than 254 characters';
  }

  // Phone validation (optional but sanitize if provided)
  if (data.phone && typeof data.phone === 'string') {
    const phoneClean = data.phone.replace(/[\s\-\(\)]/g, '');
    if (phoneClean.length > 0 && !/^\+?[0-9]{7,15}$/.test(phoneClean)) {
      errors.phone = 'Please enter a valid phone number';
    }
  }

  // Message validation
  if (!data.message || typeof data.message !== 'string' || !data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (data.message.trim().length > 5000) {
    errors.message = 'Message must be less than 5000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// Sanitize text to prevent XSS in email
function sanitize(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

export default async function handler(req, res) {
  console.log('Contact API called:', req.method);

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get client IP for rate limiting
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
             req.headers['x-real-ip'] ||
             'unknown';

  // Check rate limit
  if (isRateLimited(ip)) {
    return res.status(429).json({
      error: 'Too many requests. Please wait a minute before trying again.'
    });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validate input
    const validation = validateInput({ name, email, phone, message });
    if (!validation.isValid) {
      return res.status(400).json({
        error: 'Validation failed',
        details: validation.errors
      });
    }

    // Check for Resend API key
    const resendApiKey = process.env.RESEND_API_KEY;
    console.log('RESEND_API_KEY exists:', !!resendApiKey);
    if (!resendApiKey) {
      console.error('RESEND_API_KEY environment variable is not set');
      return res.status(500).json({
        error: 'Email service is not configured. Please contact us directly at ryan@umbradesign.ie'
      });
    }

    // Initialize Resend
    const resend = new Resend(resendApiKey);

    // Sanitize inputs for email content
    const safeName = sanitize(name.trim());
    const rawEmail = email.trim().toLowerCase(); // For replyTo header (must be valid email)
    const safeEmail = sanitize(rawEmail); // For HTML interpolation
    const safePhone = sanitize(phone?.trim() || 'Not provided');
    const safeMessage = sanitize(message.trim());

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Umbra Design <contact@umbradesign.ie>',
      to: ['ryan@umbradesign.ie'],
      replyTo: rawEmail,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #1a1a1a; padding: 30px; margin-bottom: 20px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
          </div>

          <div style="background-color: #f9f9f9; padding: 25px; border-left: 4px solid #2d5c4a;">
            <h2 style="color: #2d5c4a; margin-top: 0; font-size: 18px;">Contact Details</h2>

            <p style="margin: 10px 0;"><strong>Name:</strong> ${safeName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #2d5c4a;">${safeEmail}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${safePhone}</p>
          </div>

          <div style="margin-top: 20px; padding: 25px; background-color: #ffffff; border: 1px solid #e0e0e0;">
            <h2 style="color: #333; margin-top: 0; font-size: 18px;">Message</h2>
            <p style="white-space: pre-wrap; margin: 0;">${safeMessage}</p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background-color: #f0f0f0; font-size: 12px; color: #666;">
            <p style="margin: 0;">This message was sent from the contact form on umbradesign.ie</p>
            <p style="margin: 5px 0 0 0;">Reply directly to this email to respond to ${safeName}.</p>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${safeName}
Email: ${safeEmail}
Phone: ${safePhone}

Message:
${message.trim()}

---
This message was sent from the contact form on umbradesign.ie
Reply directly to this email to respond to ${safeName}.
      `.trim(),
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error, null, 2));
      return res.status(500).json({
        error: 'Failed to send email. Please try again or contact us directly at ryan@umbradesign.ie'
      });
    }
    console.log('Email sent successfully:', data?.id);

    // Success
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      id: data?.id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      error: 'An unexpected error occurred. Please try again or contact us directly at ryan@umbradesign.ie'
    });
  }
}
