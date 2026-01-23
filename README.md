# Umbra Design Website

A premium, cinematic dark-themed website for Umbra Design - a web design agency targeting Irish small and medium businesses.

## Features

- **Modern Design System**: Dark theme with forest green accents (#2D5C4A)
- **Smooth Animations**: GSAP ScrollTrigger, Framer Motion, and Lenis smooth scrolling
- **Custom Cursor**: Interactive cursor that responds to hover states (desktop only)
- **Film Grain Overlay**: Subtle texture effect for cinematic feel
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Contact Form**: EmailJS integration for form submissions
- **Project Modals**: Interactive project showcases with image galleries

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **React Router** - Client-side routing
- **GSAP** - Animation library
- **Framer Motion** - Page transitions
- **Lenis** - Smooth scrolling
- **Lucide React** - Icons
- **EmailJS** - Contact form handling
- **React Helmet Async** - SEO management

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── contact/        # Contact form component
│   ├── home/           # Homepage sections
│   ├── layout/         # Header, Footer
│   ├── shared/         # CustomCursor, PageTransition
│   └── work/           # Project modal
├── data/               # Projects data
├── pages/              # Page components
├── styles/             # Global styles, variables, reset
└── utils/              # Smooth scroll, scroll animations
```

## Design System

### Colors
- **Background**: Deep charcoal (#0D0D0D)
- **Accent**: Forest green (#2D5C4A)
- **Text**: Off-white (#E8E8E8) primary, mid-gray (#888888) secondary

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600

### Spacing
- 8px base unit scale
- Section padding: 64px mobile, 96px desktop

## Performance

- Lazy loading for images
- Optimized animations
- Code splitting with React Router
- Minimal dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project - All rights reserved

