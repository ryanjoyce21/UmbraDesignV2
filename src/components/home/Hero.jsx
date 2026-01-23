import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtextRef = useRef(null)
  const backgroundRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scrollTriggers = []

    // Entrance animation
    const tl = gsap.timeline()
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.6'
      )

    // Scroll-reactive fade out
    if (titleRef.current && heroRef.current) {
      const titleTrigger = gsap.to(titleRef.current, {
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      scrollTriggers.push(titleTrigger.scrollTrigger)
    }

    // Parallax background (now affects video)
    if (backgroundRef.current && heroRef.current) {
      const bgTrigger = gsap.to(backgroundRef.current, {
        y: 300,
        scale: 1.2,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      scrollTriggers.push(bgTrigger.scrollTrigger)
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

  return (
    <section className="hero-section" ref={heroRef}>
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
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title" ref={titleRef}>
            Premium Websites
            <br />
            for Irish Businesses
          </h1>
          <p className="hero-subtext" ref={subtextRef}>
            Fast turnaround. Proven results. Premium quality.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero