import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const titleLine1Ref = useRef(null)
  const titleLine2Ref = useRef(null)
  const subtextRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const backgroundRef = useRef(null)
  const videoRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scrollTriggers = []

    // Staggered entrance animation
    const tl = gsap.timeline({ delay: 0.3 })

    // Animate first line
    tl.fromTo(
      titleLine1Ref.current,
      { opacity: 0, y: 120, rotateX: -40 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1.4, ease: 'power4.out' }
    )
    // Animate second line with slight delay
    .fromTo(
      titleLine2Ref.current,
      { opacity: 0, y: 120, rotateX: -40 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1.4, ease: 'power4.out' },
      '-=1.0'
    )
    // Animate subtext
    .fromTo(
      subtextRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
    // Animate scroll indicator
    .fromTo(
      scrollIndicatorRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    )

    // Scroll-reactive parallax and fade
    if (titleRef.current && heroRef.current) {
      const titleTrigger = gsap.to(titleRef.current, {
        opacity: 0,
        y: -150,
        scale: 0.95,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '80% top',
          scrub: 1.5,
        },
      })
      scrollTriggers.push(titleTrigger.scrollTrigger)
    }

    // Parallax background with zoom
    if (backgroundRef.current && heroRef.current) {
      const bgTrigger = gsap.to(backgroundRef.current, {
        y: 400,
        scale: 1.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
      scrollTriggers.push(bgTrigger.scrollTrigger)
    }

    // Overlay darkening on scroll
    if (overlayRef.current && heroRef.current) {
      const overlayTrigger = gsap.to(overlayRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '50% top',
          scrub: 1,
        },
      })
      scrollTriggers.push(overlayTrigger.scrollTrigger)
    }

    // Hide scroll indicator on scroll
    if (scrollIndicatorRef.current && heroRef.current) {
      const scrollTrigger = gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: '5% top',
          end: '20% top',
          scrub: 1,
        },
      })
      scrollTriggers.push(scrollTrigger.scrollTrigger)
    }

    // Cleanup
    const heroElement = heroRef.current
    return () => {
      scrollTriggers.forEach((trigger) => {
        if (trigger) trigger.kill()
      })
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === heroElement) {
          trigger.kill()
        }
      })
    }
  }, [])

  const scrollToContent = () => {
    const nextSection = heroRef.current?.nextElementSibling
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-section" ref={heroRef}>
      {/* Background Layer */}
      <div className="hero-background" ref={backgroundRef}>
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
        <div className="hero-scroll-overlay" ref={overlayRef} />
      </div>

      {/* Atmospheric Elements */}
      <div className="hero-vignette" />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      {/* Content */}
      <div className="container hero-container">
        <div className="hero-content" ref={titleRef}>
          <div className="hero-label">
            <span className="hero-label-line" />
            <span>Umbra Design Studio</span>
            <span className="hero-label-line" />
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line" ref={titleLine1Ref}>
              <span className="hero-title-word">Premium</span>
              <span className="hero-title-word italic">Websites</span>
            </span>
            <span className="hero-title-line" ref={titleLine2Ref}>
              <span className="hero-title-word">for Irish</span>
              <span className="hero-title-word accent">Businesses</span>
            </span>
          </h1>

          <p className="hero-subtext" ref={subtextRef}>
            <span className="hero-subtext-divider" />
            Fast turnaround. Proven results. Premium quality.
            <span className="hero-subtext-divider" />
          </p>
        </div>

        {/* Scroll Indicator */}
        <button
          className="scroll-indicator"
          ref={scrollIndicatorRef}
          onClick={scrollToContent}
          aria-label="Scroll to content"
        >
          <span className="scroll-indicator-text">Scroll</span>
          <span className="scroll-indicator-icon">
            <ArrowDown size={16} />
          </span>
        </button>
      </div>

      {/* Bottom Gradient */}
      <div className="hero-bottom-fade" />
    </section>
  )
}

export default Hero
