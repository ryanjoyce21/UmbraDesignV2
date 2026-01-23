import { useEffect, useRef } from 'react'
import { staggerFadeIn } from '../../utils/scrollAnimations'
import { Zap, MapPin, Award } from 'lucide-react'
import './TrustSignals.css'

const TrustSignals = () => {
  const signalsRef = useRef(null)

  const signals = [
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Get your site live in weeks, not months.',
    },
    {
      icon: MapPin,
      title: 'Irish-Based',
      description: 'Local expertise for Irish businesses.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Trusted by businesses across Ireland.',
    },
  ]

  useEffect(() => {
    if (signalsRef.current) {
      const signalCards = signalsRef.current.querySelectorAll('.trust-signal')
      staggerFadeIn(signalCards)
    }
  }, [])

  return (
    <section className="trust-signals-section section">
      <div className="container">
        <div className="trust-signals-grid" ref={signalsRef}>
          {signals.map((signal, index) => {
            const IconComponent = signal.icon
            return (
              <div key={index} className="trust-signal">
                <div className="trust-icon">
                  <IconComponent size={40} />
                </div>
                <h3 className="trust-title">{signal.title}</h3>
                <p className="trust-description">{signal.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TrustSignals

