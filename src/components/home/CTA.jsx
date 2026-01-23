import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { fadeInOnScroll } from '../../utils/scrollAnimations'
import './CTA.css'

const CTA = () => {
  const ctaRef = useRef(null)

  useEffect(() => {
    if (ctaRef.current) {
      fadeInOnScroll(ctaRef.current)
    }
  }, [])

  return (
    <section className="cta-section section" ref={ctaRef}>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-text">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA

