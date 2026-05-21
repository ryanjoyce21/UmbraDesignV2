# [PROJECT_NAME] Website PRD
## AI-Implementation-Ready Specification

**Project Code:** [PROJECT_CODE]
**Last Updated:** [DATE]
**Implementation Method:** AI-Assisted (Claude Code / AI Coding Assistant)
**Target Completion:** [TIMELINE]

---

## 1. Executive Summary

### 1.1 Project Overview
Build a complete [WEBSITE_TYPE] website for [BUSINESS_NAME] — a **[VISUAL_STYLE] experience** that positions [BUSINESS_NAME] as a [MARKET_POSITION]. The site must deliver [DESIGN_INSPIRATION] while remaining pragmatic and AI-buildable.

**Core Objective:** [PRIMARY_GOAL — e.g., "Generate qualified leads", "Showcase a portfolio", "Drive product sales"]

### 1.2 Business Context
- **Business:** [BUSINESS_DESCRIPTION — e.g., "Solo web agency", "SaaS startup", "E-commerce brand"]
- **Services/Products:** [WHAT_YOU_OFFER — e.g., "Web design, e-commerce, booking systems"]
- **Price/Budget Range:** [PRICING — e.g., "$500–$5,000 per project"]
- **Differentiator:** [UNIQUE_SELLING_POINT — e.g., "Fast turnaround", "AI-powered tooling"]
- **Target Audience:** [TARGET_CUSTOMERS — e.g., "SMBs in [region]", "Indie game studios"]

### 1.3 Success Criteria
- [EMOTIONAL_REACTION — e.g., "Site evokes a 'wow' reaction from visitors"]
- Clearly differentiates from generic AI-generated sites
- Loads in under 2.5 seconds on 4G
- [PRIMARY_CONVERSION — e.g., "Generates qualified leads through contact form"]
- Mobile-responsive across all devices
- SEO-optimized for [TARGET_MARKET] discovery

---

## 2. Design System Specification

### 2.1 Color Palette

> **Fill in your brand colors below. Use a tool like [coolors.co](https://coolors.co) or your brand guidelines.**

```css
/* PRIMARY PALETTE */
--color-bg-primary: [HEX];        /* Main background — e.g., #0D0D0D deep dark */
--color-bg-secondary: [HEX];      /* Cards, sections — slightly lighter */
--color-bg-tertiary: [HEX];       /* Hover states, borders */

/* TEXT COLORS */
--color-text-primary: [HEX];      /* Main text — e.g., #E8E8E8 off-white */
--color-text-secondary: [HEX];    /* Secondary text — mid-gray */
--color-text-tertiary: [HEX];     /* Muted text — dark gray */

/* ACCENT COLOR */
--color-accent: [HEX];            /* Primary brand accent — e.g., a bold blue */
--color-accent-hover: [HEX];      /* Lighter accent for hover states */
--color-accent-muted: [HEX];      /* Darker accent for backgrounds */

/* UTILITY COLORS */
--color-border: rgba(255, 255, 255, 0.08);  /* Subtle borders */
--color-overlay: rgba(0, 0, 0, 0.6);        /* Modal overlays */
--color-success: [HEX];           /* Form success states */
--color-error: [HEX];             /* Form error states */
```

### 2.2 Typography System

> **Choose a font from [Google Fonts](https://fonts.google.com). Inter is a safe default.**

**Font Family:** [FONT_FAMILY — e.g., Inter, Space Grotesk, Syne] (Google Fonts - free)
- **Weights needed:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold)
- **Google Fonts URL:** `https://fonts.googleapis.com/css2?family=[FONT_NAME]:wght@300;400;500;600&display=swap`

```css
/* TYPOGRAPHY SCALE */
--font-size-xs: 0.75rem;      /* 12px - captions, labels */
--font-size-sm: 0.875rem;     /* 14px - small text */
--font-size-base: 1rem;       /* 16px - body text */
--font-size-lg: 1.125rem;     /* 18px - large body */
--font-size-xl: 1.5rem;       /* 24px - section subtitles */
--font-size-2xl: 2rem;        /* 32px - section titles */
--font-size-3xl: 3rem;        /* 48px - page titles */
--font-size-4xl: 4rem;        /* 64px - hero titles */
--font-size-5xl: 5rem;        /* 80px - massive hero (desktop only) */

/* LINE HEIGHTS */
--line-height-tight: 1.2;     /* Headings */
--line-height-normal: 1.5;    /* UI elements */
--line-height-relaxed: 1.7;   /* Body text */
--line-height-loose: 1.9;     /* Large body text */

/* LETTER SPACING */
--letter-spacing-tight: -0.02em;   /* Large headings */
--letter-spacing-normal: 0;        /* Body text */
--letter-spacing-wide: 0.05em;     /* Small caps, labels */
```

**Typography Usage:**
```css
/* Hero Title */
font-family: '[FONT_FAMILY]', sans-serif;
font-weight: 600;
font-size: var(--font-size-5xl);
line-height: var(--line-height-tight);
letter-spacing: var(--letter-spacing-tight);

/* Section Title */
font-weight: 500;
font-size: var(--font-size-2xl);
line-height: var(--line-height-tight);

/* Body Text */
font-weight: 400;
font-size: var(--font-size-base);
line-height: var(--line-height-relaxed);
color: var(--color-text-secondary);

/* Labels/Buttons */
font-weight: 500;
font-size: var(--font-size-sm);
letter-spacing: var(--letter-spacing-wide);
text-transform: uppercase;
```

### 2.3 Spacing System

```css
/* 8px BASE UNIT SCALE */
--space-1: 0.5rem;   /* 8px */
--space-2: 1rem;     /* 16px */
--space-3: 1.5rem;   /* 24px */
--space-4: 2rem;     /* 32px */
--space-5: 2.5rem;   /* 40px */
--space-6: 3rem;     /* 48px */
--space-8: 4rem;     /* 64px */
--space-10: 5rem;    /* 80px */
--space-12: 6rem;    /* 96px */
--space-16: 8rem;    /* 128px */
--space-20: 10rem;   /* 160px */

/* SECTION PADDING */
--section-padding-mobile: var(--space-8);    /* 64px top/bottom on mobile */
--section-padding-desktop: var(--space-12);  /* 96px top/bottom on desktop */

/* CONTAINER WIDTHS */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1400px;  /* Max content width */
```

### 2.4 Visual Effects

**Film Grain Overlay:**
```css
/* Apply to body or main wrapper */
.film-grain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.03;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)"/></svg>');
}
```

**Shadows:**
```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.5);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.6);
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.7);
```

**Transitions:**
```css
--transition-fast: 150ms ease-in-out;
--transition-base: 250ms ease-in-out;
--transition-slow: 400ms ease-in-out;
--transition-smooth: 600ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 3. Animation & Interaction Specifications

### 3.1 Animation Library Stack

**Required Libraries:**
```json
{
  "dependencies": {
    "gsap": "^3.12.5",
    "framer-motion": "^11.0.3",
    "lenis": "^1.0.42"
  }
}
```

**Installation Command:**
```bash
npm install gsap framer-motion lenis
```

### 3.2 Smooth Scrolling (Lenis)

**Implementation:**
```javascript
// src/utils/smoothScroll.js
import Lenis from 'lenis';

let lenis;

export const initSmoothScroll = () => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

export const getLenis = () => lenis;
```

**Usage in App.js:**
```javascript
import { useEffect } from 'react';
import { initSmoothScroll } from './utils/smoothScroll';

function App() {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    // Your app content
  );
}
```

### 3.3 Scroll-Triggered Animations (GSAP ScrollTrigger)

**Setup:**
```javascript
// src/utils/scrollAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Fade in on scroll
export const fadeInOnScroll = (element, options = {}) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
        ...options,
      },
    }
  );
};

// Parallax effect
export const parallaxOnScroll = (element, speed = 0.5) => {
  gsap.to(element, {
    y: () => (window.innerHeight * speed),
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

// Stagger animation for lists
export const staggerFadeIn = (elements, options = {}) => {
  gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 85%',
        ...options,
      },
    }
  );
};
```

### 3.4 Hero Section Animation

**Scroll-Reactive Hero Effect:**
```javascript
// src/components/Hero.js - useEffect for scroll animation
useEffect(() => {
  const heroText = document.querySelector('.hero-title');
  const heroSubtext = document.querySelector('.hero-subtext');
  const heroBackground = document.querySelector('.hero-background');

  // Entrance animation
  gsap.timeline()
    .fromTo(heroText,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(heroSubtext,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.6'
    );

  // Scroll-reactive fade out
  gsap.to(heroText, {
    opacity: 0,
    y: -100,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  // Parallax background
  gsap.to(heroBackground, {
    y: 300,
    scale: 1.2,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
}, []);
```

### 3.5 Custom Cursor

**Implementation:**
```javascript
// src/components/CustomCursor.js
import { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updatePosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
```

```css
/* src/components/CustomCursor.css */
.custom-cursor {
  position: fixed;
  width: 12px;
  height: 12px;
  background-color: var(--color-accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease, background-color 0.2s ease;
  mix-blend-mode: difference;
}

.custom-cursor.hovering {
  width: 40px;
  height: 40px;
  background-color: rgba(var(--color-accent-rgb), 0.3);
  border: 1px solid var(--color-accent);
}

/* Hide default cursor on interactive elements */
body,
a,
button,
.card {
  cursor: none;
}

/* Show default cursor on mobile */
@media (max-width: 768px) {
  .custom-cursor {
    display: none;
  }

  body,
  a,
  button,
  .card {
    cursor: auto;
  }
}
```

### 3.6 Page Transitions

**Using Framer Motion:**
```javascript
// src/components/PageTransition.js
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
```

---

## 4. Site Structure & Page Specifications

### 4.1 Routes

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | [HOME_PURPOSE — e.g., "Main landing, hero, services overview"] |
| `/[PAGE_2]` | [PAGE_2_NAME] | [PAGE_2_PURPOSE] |
| `/[PAGE_3]` | [PAGE_3_NAME] | [PAGE_3_PURPOSE] |
| `/[PAGE_4]` | [PAGE_4_NAME] | [PAGE_4_PURPOSE] |

### 4.2 Homepage Sections

> **Define each section of your homepage. Add or remove rows as needed.**

| # | Section | Content |
|---|---------|---------|
| 1 | Hero | [HERO_HEADLINE], [HERO_SUBHEADLINE], [CTA_BUTTON_TEXT] |
| 2 | Intro | [SHORT_INTRO_PARAGRAPH — max 2 sentences] |
| 3 | [SECTION_3_NAME] | [SECTION_3_CONTENT — e.g., "3-column grid of services"] |
| 4 | [SECTION_4_NAME] | [SECTION_4_CONTENT — e.g., "Featured work grid"] |
| 5 | [SECTION_5_NAME] | [SECTION_5_CONTENT — e.g., "Process steps"] |
| 6 | [SECTION_6_NAME] | [SECTION_6_CONTENT — e.g., "Trust signals / testimonials"] |
| 7 | CTA | [FINAL_CTA_HEADLINE], [FINAL_CTA_BUTTON] |

### 4.3 Navigation

**Header:**
- Logo: [LOGO_TEXT or image path]
- Nav Links: [NAV_LINK_1], [NAV_LINK_2], [NAV_LINK_3], [NAV_LINK_4]
- CTA Button: [HEADER_CTA_TEXT] → `/[HEADER_CTA_ROUTE]`
- Behavior: Fixed, transparent → solid background on scroll

**Footer:**
- Column 1: [FOOTER_COL_1 — e.g., Logo + tagline]
- Column 2: [FOOTER_COL_2 — e.g., Site links]
- Column 3: [FOOTER_COL_3 — e.g., Contact info / socials]

---

## 5. Content Specifications

### 5.1 Hero Copy

```
HEADLINE: [HERO_HEADLINE]
          e.g., "Build the web, your way."

SUBHEADLINE: [HERO_SUBHEADLINE]
             e.g., "We craft high-performance sites for ambitious brands."

CTA: [CTA_BUTTON_TEXT] → /[CTA_ROUTE]
```

### 5.2 Services / Features

> **List 3–6 key offerings. Each needs a title, description, and icon.**

```
SERVICE 1:
  Title: [SERVICE_1_TITLE]
  Description: [SERVICE_1_DESCRIPTION — 1–2 sentences]
  Icon: [LUCIDE_ICON_NAME — e.g., "Zap", "Globe", "ShoppingCart"]

SERVICE 2:
  Title: [SERVICE_2_TITLE]
  Description: [SERVICE_2_DESCRIPTION]
  Icon: [LUCIDE_ICON_NAME]

SERVICE 3:
  Title: [SERVICE_3_TITLE]
  Description: [SERVICE_3_DESCRIPTION]
  Icon: [LUCIDE_ICON_NAME]
```

### 5.3 Process / Steps

> **Describe your workflow in 3–5 steps.**

```
STEP 1: [STEP_1_TITLE] — [STEP_1_DESCRIPTION]
STEP 2: [STEP_2_TITLE] — [STEP_2_DESCRIPTION]
STEP 3: [STEP_3_TITLE] — [STEP_3_DESCRIPTION]
STEP 4: [STEP_4_TITLE] — [STEP_4_DESCRIPTION]
```

### 5.4 Trust Signals

> **3 short proof points — stats, credentials, or guarantees.**

```
SIGNAL 1: [TRUST_SIGNAL_1 — e.g., "50+ Projects Delivered"]
SIGNAL 2: [TRUST_SIGNAL_2 — e.g., "Average 2-week turnaround"]
SIGNAL 3: [TRUST_SIGNAL_3 — e.g., "100% satisfaction guarantee"]
```

### 5.5 About Copy

```
STORY: [BRIEF_ORIGIN_STORY — 2–3 sentences]
APPROACH: [HOW_YOU_WORK — 2–3 sentences]
```

### 5.6 Contact Information

```
EMAIL: [CONTACT_EMAIL]
PHONE: [CONTACT_PHONE] (optional)
LOCATION: [LOCATION] (optional)
SOCIAL_1: [PLATFORM] → [URL]
SOCIAL_2: [PLATFORM] → [URL]
```

---

## 6. Data Files

### 6.1 Projects / Portfolio Data

> **Fill in your work samples. Add as many entries as needed.**

```javascript
// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: '[PROJECT_1_TITLE]',
    category: '[CATEGORY — e.g., E-Commerce]',
    description: '[PROJECT_1_DESCRIPTION]',
    tags: ['[TAG_1]', '[TAG_2]', '[TAG_3]'],
    image: '[IMAGE_PATH or Pexels search term]',
    link: '[LIVE_URL or null]',
  },
  {
    id: 2,
    title: '[PROJECT_2_TITLE]',
    category: '[CATEGORY]',
    description: '[PROJECT_2_DESCRIPTION]',
    tags: ['[TAG_1]', '[TAG_2]'],
    image: '[IMAGE_PATH or Pexels search term]',
    link: '[LIVE_URL or null]',
  },
  // Add more projects...
];
```

---

## 7. Technical Stack

### 7.1 Framework & Dependencies

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-router-dom": "^6.x",
    "react-helmet-async": "^2.x",
    "gsap": "^3.12.x",
    "framer-motion": "^11.x",
    "lenis": "^1.x",
    "lucide-react": "^0.x",
    "@emailjs/browser": "^4.x"
  }
}
```

**Installation:**
```bash
npm install gsap framer-motion lenis lucide-react @emailjs/browser react-router-dom react-helmet-async
```

### 7.2 File Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.js + Header.css
│   │   └── Footer.js + Footer.css
│   ├── home/
│   │   ├── Hero.js + Hero.css
│   │   ├── [SECTION_NAME].js + [SECTION_NAME].css
│   │   └── ...
│   ├── [PAGE_NAME]/
│   │   └── ...
│   └── shared/
│       ├── CustomCursor.js + CustomCursor.css
│       └── PageTransition.js
├── pages/
│   ├── Home.js
│   ├── [PAGE_2].js
│   ├── [PAGE_3].js
│   └── [PAGE_4].js
├── utils/
│   ├── smoothScroll.js
│   └── scrollAnimations.js
├── styles/
│   ├── variables.css
│   ├── reset.css
│   └── global.css
├── data/
│   └── projects.js
└── assets/
    └── images/
```

### 7.3 Environment Variables

```bash
# .env.example
REACT_APP_EMAILJS_SERVICE_ID=[YOUR_SERVICE_ID]
REACT_APP_EMAILJS_TEMPLATE_ID=[YOUR_TEMPLATE_ID]
REACT_APP_EMAILJS_PUBLIC_KEY=[YOUR_PUBLIC_KEY]
```

---

## 8. SEO Specification

### 8.1 Meta Tags Per Page

```javascript
// Home
title: '[HOME_PAGE_TITLE — e.g., "Business Name | Tagline"]'
description: '[HOME_META_DESCRIPTION — 150–160 chars]'
keywords: '[KEYWORD_1], [KEYWORD_2], [KEYWORD_3]'

// [PAGE_2]
title: '[PAGE_2_TITLE]'
description: '[PAGE_2_DESCRIPTION]'

// [PAGE_3]
title: '[PAGE_3_TITLE]'
description: '[PAGE_3_DESCRIPTION]'

// [PAGE_4]
title: '[PAGE_4_TITLE]'
description: '[PAGE_4_DESCRIPTION]'
```

### 8.2 Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "[SCHEMA_TYPE — e.g., LocalBusiness, Organization, WebSite]",
  "name": "[BUSINESS_NAME]",
  "description": "[BUSINESS_DESCRIPTION]",
  "url": "https://[YOUR_DOMAIN]",
  "email": "[CONTACT_EMAIL]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[CITY]",
    "addressCountry": "[COUNTRY_CODE — e.g., IE, US, GB]"
  }
}
```

---

## 9. Responsive Breakpoints

```css
/* Mobile first */
/* Base styles: 0px+ (mobile) */

/* Tablet */
@media (min-width: 768px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }

/* Wide Desktop */
@media (min-width: 1280px) { ... }
```

---

## 10. Contact Form

### 10.1 Form Fields

> **Define the fields you need. Minimum: name, email, message.**

```
FIELD 1: Name (required, text)
FIELD 2: Email (required, email)
FIELD 3: [OPTIONAL_FIELD — e.g., Phone, Company, Subject]
FIELD 4: Message (required, textarea)
SUBMIT BUTTON: [SUBMIT_BUTTON_TEXT — e.g., "Send Message", "Get a Quote"]
```

### 10.2 EmailJS Setup

1. Create account at [emailjs.com](https://emailjs.com)
2. Add an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template — map fields: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Copy Service ID, Template ID, and Public Key into `.env`

---

## QUICK START: Master AI Implementation Prompt

**Copy this prompt into Claude Code to build the entire site:**

```
Build a complete React website for [BUSINESS_NAME] following WEBSITE_TEMPLATE.md.

Read the entire template first, then implement in this order:

PHASE 1: Project Setup
- Initialize Create React App
- Install dependencies: gsap, framer-motion, lenis, lucide-react, @emailjs/browser, react-router-dom, react-helmet-async
- Create file structure: components/layout, components/home, components/[page_name], components/shared, pages, utils, styles, data, assets
- Set up CSS architecture (variables.css with [ACCENT_COLOR] accent, reset.css, global.css)
- Configure React Router with [PAGE_1], [PAGE_2], [PAGE_3], [PAGE_4] routes
- Add [FONT_FAMILY] font from Google Fonts
- Create .env.example

PHASE 2: Layout & Design System
- Build Header (fixed, transparent→solid on scroll, [LOGO_TEXT] logo, nav links)
- Build Footer ([FOOTER_COLUMNS] layout)
- Build CustomCursor (12px dot, grows to 40px on hover, accent color, desktop only)
- Implement all CSS variables from Template Section 2
- Add film grain overlay to body

PHASE 3: Homepage (Section 4.2 in template)
- Hero (fullscreen, scroll-reactive animation, "[HERO_HEADLINE]")
- Intro ([INTRO_COPY])
- [SECTION_3] ([SECTION_3_DESCRIPTION])
- [SECTION_4] ([SECTION_4_DESCRIPTION])
- [SECTION_5] ([SECTION_5_DESCRIPTION])
- [SECTION_6] ([SECTION_6_DESCRIPTION])
- CTA ("[FINAL_CTA_HEADLINE]")

PHASE 4: [PAGE_2_NAME] Page
- [PAGE_2_SECTION_1]
- [PAGE_2_SECTION_2]
- Use data from /src/data/[DATA_FILE].js

PHASE 5: [PAGE_3_NAME] & [PAGE_4_NAME]
- [PAGE_3_NAME]: [PAGE_3_SECTIONS]
- [PAGE_4_NAME]: [PAGE_4_SECTIONS]
- EmailJS integration with validation

PHASE 6: Animations
- Lenis smooth scrolling (duration 1.2s)
- GSAP ScrollTrigger: fade-ins at 85% viewport, parallax hero background, stagger animations
- Page transitions with Framer Motion

PHASE 7: SEO & Polish
- SEO component with react-helmet-async
- Meta tags for all pages
- Structured data in index.html
- robots.txt
- Lazy loading images
- Responsive design (mobile/tablet/desktop)

DELIVERABLES:
- Fully functional React website
- External CSS files (no CSS-in-JS)
- Smooth scrolling and animations
- Custom cursor (desktop)
- Contact form with EmailJS
- Film grain overlay
- SEO optimized
- Mobile responsive

Use placeholder images from https://placehold.co or Pexels (search: [IMAGE_SEARCH_TERMS])

Start implementation now.
```

---

## Checklist: Before Handing to Claude Code

Replace every `[PLACEHOLDER]` above before running the implementation prompt.

- [ ] `[PROJECT_NAME]` — Name of this project
- [ ] `[BUSINESS_NAME]` — Your company/brand name
- [ ] `[WEBSITE_TYPE]` — e.g., portfolio, agency, SaaS, e-commerce
- [ ] `[VISUAL_STYLE]` — e.g., dark cinematic, clean minimal, bold editorial
- [ ] `[MARKET_POSITION]` — e.g., premium studio, budget-friendly agency
- [ ] `[HEX]` — All color values in Section 2.1
- [ ] `[FONT_FAMILY]` — Your chosen Google Font
- [ ] `[HERO_HEADLINE]` — Main hero text
- [ ] `[HERO_SUBHEADLINE]` — Supporting hero text
- [ ] All page names, routes, and section names
- [ ] Service titles, descriptions, and icons
- [ ] Process steps
- [ ] Trust signals
- [ ] Contact information
- [ ] SEO copy (titles, descriptions, keywords)
- [ ] EmailJS credentials (after setup)
- [ ] At least 2–4 project entries in `projects.js`

**Once all placeholders are filled → paste the Quick Start prompt into Claude Code.**

---

**END OF TEMPLATE**
