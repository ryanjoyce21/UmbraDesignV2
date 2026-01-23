import { useEffect, useRef } from 'react'
import { staggerFadeIn } from '../../utils/scrollAnimations'
import { Palette, ShoppingCart, Calendar } from 'lucide-react'
import './Services.css'

const Services = () => {
  const servicesRef = useRef(null)

  const services = [
    {
      icon: Palette,
      title: 'Web Design',
      description: 'Beautiful, modern designs that reflect your brand and engage your audience.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      description: 'Full-featured online stores with secure payment processing and inventory management.',
    },
    {
      icon: Calendar,
      title: 'Booking Systems',
      description: 'Streamlined booking platforms that make scheduling easy for your customers.',
    },
  ]

  useEffect(() => {
    if (servicesRef.current) {
      const serviceCards = servicesRef.current.querySelectorAll('.service-card')
      staggerFadeIn(serviceCards)
    }
  }, [])

  return (
    <section className="services-section section">
      <div className="container">
        <h2 className="section-title text-center">Our Services</h2>
        <div className="services-grid" ref={servicesRef}>
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

