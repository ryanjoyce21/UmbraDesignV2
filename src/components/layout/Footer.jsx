import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-title">Umbra Design</h3>
            <p className="footer-text">
              Premium web design and development for Irish businesses.
            </p>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>Web Design</li>
              <li>E-Commerce</li>
              <li>Booking Systems</li>
              <li>Brochure Sites</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Umbra Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

