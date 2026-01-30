import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import './Services.css'

const Services = () => {
  const servicesRef = useRef(null)
  const titleRef = useRef(null)

  const services = [
    {
      number: '01',
      title: 'Web Design',
      description: 'Beautiful, modern designs that reflect your brand and engage your audience with lasting impressions.',
      features: ['Custom Design', 'Responsive', 'Brand Identity']
    },
    {
      number: '02',
      title: 'E-Commerce',
      description: 'Full-featured online stores with secure payment processing and seamless inventory management.',
      features: ['Payment Integration', 'Inventory', 'Analytics']
    },
    {
      number: '03',
      title: 'Booking Systems',
      description: 'Streamlined booking platforms that make scheduling effortless for you and your customers.',
      features: ['Calendars', 'Reminders', 'Payments']
    },
    {
      number: '04',
      title: 'Form Systems',
      description: 'Intelligent form submission systems that capture and organize customer data seamlessly.',
      features: ['Custom Fields', 'Validation', 'Integrations']
    }
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scrollTriggers = []

    // Animate section title
    if (titleRef.current) {
      const titleTrigger = gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
      scrollTriggers.push(titleTrigger.scrollTrigger)
    }

    // Staggered card animations
    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll('.service-card')
      cards.forEach((card, index) => {
        const cardTrigger = gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            rotateY: -5
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
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
        scrollTriggers.push(cardTrigger.scrollTrigger)
      })
    }

    return () => {
      scrollTriggers.forEach(trigger => trigger && trigger.kill())
    }
  }, [])

  return (
    <section className="services-section section">
      {/* Background Elements */}
      <div className="services-bg-line services-bg-line-1" />
      <div className="services-bg-line services-bg-line-2" />
      <div className="services-glow" />

      <div className="container">
        <div className="services-header" ref={titleRef}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Services Tailored to
            <span className="title-accent"> Your Growth</span>
          </h2>
          <p className="services-subtitle">
            We craft digital experiences that transform businesses and captivate audiences.
          </p>
        </div>

        <div className="services-grid" ref={servicesRef}>
          {services.map((service, index) => {
            return (
              <article key={index} className="service-card">
                <div className="service-card-inner">
                  {/* Card Background Glow */}
                  <div className="service-card-glow" />

                  {/* Header */}
                  <div className="service-header">
                    <span className="service-number">{service.number}</span>
                  </div>

                  {/* Content */}
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i} className="service-feature">
                        <span className="feature-dot" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Arrow */}
                  <div className="service-arrow">
                    <ArrowUpRight size={20} />
                  </div>

                  {/* Border Gradient */}
                  <div className="service-border" />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
