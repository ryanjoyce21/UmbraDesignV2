import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, MapPin, Award } from 'lucide-react'
import './TrustSignals.css'

const TrustSignals = () => {
  const signalsRef = useRef(null)

  const signals = [
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Get your site live in weeks, not months. Our streamlined process delivers quality at speed.',
      highlight: '2-4 Weeks'
    },
    {
      icon: MapPin,
      title: 'Irish-Based',
      description: 'Local expertise for Irish businesses. We understand your market and speak your language.',
      highlight: '100% Local'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Trusted by businesses across Ireland. Our track record speaks for itself.',
      highlight: '50+ Projects'
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scrollTriggers = []

    if (signalsRef.current) {
      const signalCards = signalsRef.current.querySelectorAll('.trust-signal')
      signalCards.forEach((card, index) => {
        const trigger = gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
        scrollTriggers.push(trigger.scrollTrigger)
      })
    }

    return () => {
      scrollTriggers.forEach(trigger => trigger && trigger.kill())
    }
  }, [])

  return (
    <section className="trust-signals-section section">
      {/* Background */}
      <div className="trust-bg-gradient" />

      <div className="container">
        <div className="trust-signals-grid" ref={signalsRef}>
          {signals.map((signal, index) => {
            const IconComponent = signal.icon
            return (
              <article key={index} className="trust-signal">
                <div className="trust-signal-inner">
                  {/* Decorative Corner */}
                  <div className="trust-corner trust-corner-tl" />
                  <div className="trust-corner trust-corner-br" />

                  {/* Icon */}
                  <div className="trust-icon">
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="trust-title">{signal.title}</h3>
                  <p className="trust-description">{signal.description}</p>

                  {/* Highlight Badge */}
                  <span className="trust-highlight">{signal.highlight}</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TrustSignals
