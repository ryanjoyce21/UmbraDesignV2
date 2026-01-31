import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  const services = [
    'Web Design',
    'E-Commerce',
    'Booking Systems',
    'Brochure Sites',
  ]

  return (
    <footer className="footer">
      {/* Background Elements */}
      <div className="footer-gradient" />
      <div className="footer-line footer-line-left" />
      <div className="footer-line footer-line-right" />

      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-text">UMBRA</span>
              <span className="footer-logo-dot" />
            </Link>
            <p className="footer-tagline">
              Crafting digital experiences that captivate and convert. Premium web design for Irish businesses ready to stand out.
            </p>

            {/* Contact Info */}
            <div className="footer-contact">
              <a href="mailto:ryan@umbradesign.ie" className="footer-contact-item">
                <Mail size={16} strokeWidth={1.5} />
                <span>ryan@umbradesign.ie</span>
              </a>
              <div className="footer-contact-item">
                <MapPin size={16} strokeWidth={1.5} />
                <span>Dublin, Ireland</span>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-column">
            <h4 className="footer-heading">
              <span className="footer-heading-number">01</span>
              Navigation
            </h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    <span className="footer-link-text">{link.label}</span>
                    <ArrowUpRight size={14} className="footer-link-icon" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h4 className="footer-heading">
              <span className="footer-heading-number">02</span>
              Services
            </h4>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service}>
                  <span className="footer-service">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="footer-column footer-column-cta">
            <h4 className="footer-heading">
              <span className="footer-heading-number">03</span>
              Start a Project
            </h4>
            <p className="footer-cta-text">
              Ready to elevate your digital presence? Let's create something extraordinary together.
            </p>
            <Link to="/contact" className="footer-cta-btn">
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              © {currentYear} Umbra Design. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/privacy" className="footer-legal-link">Privacy</Link>
              <span className="footer-legal-divider" />
              <Link to="/terms" className="footer-legal-link">Terms</Link>
            </div>
          </div>

          {/* Decorative Bottom Line */}
          <div className="footer-accent-line">
            <div className="footer-accent-glow" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
