# Umbra Design Website Refactor PRD v2.0
## AI-Implementation-Ready Specification

**Project Code:** UMBRA-REFACTOR-2026  
**Last Updated:** January 23, 2026  
**Implementation Method:** AI-Assisted (Claude Code / AI Coding Assistant)  
**Target Completion:** 4-6 weeks

---

## 1. Executive Summary

### 1.1 Project Overview
Refactor the existing Umbra Design agency showcase website (currently at umbra-design.vercel.app) into a **sophisticated, cinematic dark experience** that positions Umbra as a premium web agency for Irish SMBs. The site must deliver an "Active Theory-inspired wow factor" while remaining pragmatic and AI-buildable.

**Core Objective:** Create a website so visually impressive that it becomes the primary sales tool—proving capability through execution quality rather than case studies alone.

### 1.2 Business Context
- **Business:** Solo web agency targeting Irish small/medium businesses
- **Services:** Website design/development, e-commerce, booking systems, brochure sites
- **Budget Range:** €600-800 (basic) to €4,000-5,000 (enterprise)
- **Differentiator:** Fast turnaround using proven template system
- **Target Clients:** Mixed bag—from traditional businesses modernizing to creative startups

### 1.3 Success Criteria
- Site evokes "what the fuck, this is amazing" reaction from visitors
- Clearly differentiates from generic AI-generated sites
- Loads in under 2.5 seconds on 4G
- Generates qualified leads through contact form
- Mobile-responsive across all devices
- SEO-optimized for Irish market discovery

---

## 2. Design System Specification

### 2.1 Color Palette

```css
/* PRIMARY PALETTE */
--color-bg-primary: #0D0D0D;        /* Main background - deep charcoal */
--color-bg-secondary: #1A1A1A;      /* Cards, sections - lighter charcoal */
--color-bg-tertiary: #242424;       /* Hover states, borders */

/* TEXT COLORS */
--color-text-primary: #E8E8E8;      /* Main text - off-white */
--color-text-secondary: #888888;    /* Secondary text - mid-gray */
--color-text-tertiary: #666666;     /* Muted text - dark gray */

/* ACCENT COLOR */
--color-accent: #2D5C4A;            /* Forest green - primary accent */
--color-accent-hover: #3A7359;      /* Lighter forest green - hover state */
--color-accent-muted: #1F4237;      /* Darker forest green - backgrounds */

/* UTILITY COLORS */
--color-border: rgba(255, 255, 255, 0.08);  /* Subtle borders */
--color-overlay: rgba(0, 0, 0, 0.6);        /* Modal overlays */
--color-success: #4A9D5C;           /* Form success states */
--color-error: #D45C5C;             /* Form error states */
```

### 2.2 Typography System

**Font Family:** Inter (Google Fonts - free)
- **Weights needed:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold)
- **Google Fonts URL:** `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap`

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
font-family: 'Inter', sans-serif;
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
    const interactiveElements = document.querySelectorAll('a, button, .project-card');
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
  background-color: rgba(45, 92, 74, 0.3);
  border: 1px solid var(--color-accent);
}

/* Hide default cursor on interactive elements */
body,
a,
button,
.project-card {
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
  .project-card {
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

*[Due to length constraints, I've included the first major sections. The full document continues with detailed specifications for Site Structure, Media Requirements, Technical Implementation, SEO, Security, Testing, Deployment, AI Implementation Prompts, and more. Would you like me to continue with specific sections, or would you prefer to receive this as a downloadable file?]*

---

## QUICK START: Master AI Implementation Prompt

**Use this prompt with Claude Code to build the entire site:**

```
Build a complete React website for Umbra Design agency following UMBRA_DESIGN_PRD_FINAL.md. 

Read the entire PRD first, then implement in this order:

PHASE 1: Project Setup
- Initialize Create React App
- Install dependencies: gsap, framer-motion, lenis, lucide-react, @emailjs/browser, react-router-dom, react-helmet-async
- Create file structure with components/layout, components/home, components/work, components/shared, components/contact, pages, utils, styles, data, assets
- Set up CSS architecture (variables.css with forest green #2D5C4A accent, reset.css, global.css)
- Configure React Router with Home, Work, About, Contact routes
- Add Inter font from Google Fonts
- Create .env.example

PHASE 2: Layout & Design System
- Build Header (fixed, transparent→solid on scroll, UMBRA logo, nav links)
- Build Footer (3-column layout)
- Build CustomCursor (12px dot, grows to 40px on hover, forest green, desktop only)
- Implement all CSS variables from PRD Section 2
- Add film grain overlay to body

PHASE 3: Homepage (Section 4.2 in PRD)
- Hero (fullscreen, scroll-reactive animation, "Premium Websites for Irish Businesses")
- Intro (max-width 900px, fade in on scroll)
- Services (3-column grid: Design, E-Commerce, Booking - with lucide-react icons)
- Featured Work (2x2 grid, hover effects, modal trigger)
- Process (4 steps: Discovery, Design, Development, Launch)
- Trust Signals (Fast Turnaround, Irish-Based, Proven Results)
- CTA ("Ready to get started?")

PHASE 4: Work Page
- Hero section
- Projects grid (2 columns)
- Project modal (slide-in from right, image gallery, description, tech stack)
- Use projects data from /src/data/projects.js

PHASE 5: About & Contact
- About: Story, Approach, Services list, CTA
- Contact: Split layout - form (name, email, phone, message) + contact info
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
- Project modals
- Film grain overlay
- SEO optimized
- Mobile responsive

Use placeholder images from Pexels search terms in PRD or https://placehold.co

Start implementation now.
```

---

**END OF QUICK REFERENCE - Full PRD available above**
