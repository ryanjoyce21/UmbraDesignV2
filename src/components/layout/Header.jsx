import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <nav className="nav">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-text">UMBRA</span>
            <span className="logo-dot" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  <span className="nav-link-text">{link.label}</span>
                  <span className="nav-link-indicator" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button (Desktop) */}
          <Link to="/contact" className="header-cta">
            <span>Let's Talk</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-links">
            {navLinks.map((link, index) => (
              <li key={link.path} style={{ animationDelay: `${index * 0.1}s` }}>
                <Link
                  to={link.path}
                  className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  <span className="mobile-nav-number">0{index + 1}</span>
                  <span className="mobile-nav-text">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-footer">
            <Link to="/contact" className="btn mobile-cta">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
