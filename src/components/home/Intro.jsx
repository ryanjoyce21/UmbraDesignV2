import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Intro.css'

const Intro = () => {
  const introRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tweens = []

    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll('.intro-animate')
      elements.forEach((el, index) => {
        const tween = gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
        tweens.push(tween)
      })
    }

    return () => {
      tweens.forEach(tween => tween && tween.kill())
    }
  }, [])

  return (
    <section className="intro-section section" ref={introRef}>
      {/* Background Elements */}
      <div className="intro-gradient-orb" />
      <div className="intro-line intro-line-left" />
      <div className="intro-line intro-line-right" />

      <div className="container">
        <div className="intro-content" ref={contentRef}>
          {/* Label */}
          <span className="section-label intro-animate">About Umbra</span>

          {/* Large Display Text */}
          <h2 className="intro-headline intro-animate">
            We Bring Your Business
            <span className="headline-accent"> Into the Light</span>
          </h2>

          {/* Divider */}
          <div className="intro-divider intro-animate" />

          {/* Two Column Text */}
          <div className="intro-columns">
            <p className="intro-text intro-animate">
              Umbra Design specializes in creating premium websites for Irish small and medium businesses.
              From elegant brochure sites to powerful e-commerce platforms, we deliver solutions that
              drive results and leave lasting impressions.
            </p>
            <p className="intro-text intro-animate">
              Our proven template system means faster turnaround times without compromising on quality.
              Whether you're a traditional business modernizing your online presence or a creative startup
              launching your first site, we've got you covered.
            </p>
          </div>

          {/* Stats */}
          <div className="intro-stats intro-animate">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">2-4</span>
              <span className="stat-label">Weeks Turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
