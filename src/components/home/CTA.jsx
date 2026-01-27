import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import './CTA.css'

const CTA = () => {
  const ctaRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scrollTriggers = []

    if (contentRef.current) {
      const trigger = gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
      scrollTriggers.push(trigger.scrollTrigger)
    }

    return () => {
      scrollTriggers.forEach(trigger => trigger && trigger.kill())
    }
  }, [])

  return (
    <section className="cta-section section" ref={ctaRef}>
      {/* Background Elements */}
      <div className="cta-bg-glow cta-bg-glow-1" />
      <div className="cta-bg-glow cta-bg-glow-2" />
      <div className="cta-bg-pattern" />

      <div className="container">
        <div className="cta-wrapper" ref={contentRef}>
          {/* Decorative Elements */}
          <div className="cta-corner cta-corner-tl" />
          <div className="cta-corner cta-corner-tr" />
          <div className="cta-corner cta-corner-bl" />
          <div className="cta-corner cta-corner-br" />

          <div className="cta-content">
            {/* Label */}
            <span className="cta-label">Let's Work Together</span>

            {/* Title */}
            <h2 className="cta-title">
              Ready to Transform
              <span className="cta-title-accent"> Your Digital Presence?</span>
            </h2>

            {/* Description */}
            <p className="cta-text">
              Let's discuss how we can bring your vision to life with a website that truly represents your brand.
            </p>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <Link to="/contact" className="btn cta-btn-primary">
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/work" className="btn btn-secondary cta-btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
