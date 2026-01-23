import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { fadeInOnScroll } from '../utils/scrollAnimations'
import { Palette, ShoppingCart, Calendar, Globe } from 'lucide-react'
import CTA from '../components/home/CTA'
import './About.css'

const About = () => {
  const storyRef = useRef(null)
  const approachRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    if (storyRef.current) {
      fadeInOnScroll(storyRef.current)
    }
    if (approachRef.current) {
      fadeInOnScroll(approachRef.current)
    }
    if (servicesRef.current) {
      fadeInOnScroll(servicesRef.current)
    }
  }, [])

  const services = [
    {
      icon: Palette,
      title: 'Web Design',
      description: 'Custom designs tailored to your brand and audience.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete online stores with payment processing.',
    },
    {
      icon: Calendar,
      title: 'Booking Systems',
      description: 'Streamlined appointment and reservation systems.',
    },
    {
      icon: Globe,
      title: 'Brochure Websites',
      description: 'Professional sites that showcase your business.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>About Us - Umbra Design</title>
        <meta
          name="description"
          content="Learn about Umbra Design and our approach to creating premium websites for Irish businesses."
        />
      </Helmet>
      <section className="about-hero section">
        <div className="container">
          <h1 className="about-hero-title">About Umbra Design</h1>
          <p className="about-hero-text">
            We're a web design agency focused on delivering premium results for Irish businesses.
          </p>
        </div>
      </section>

      <section className="about-story section" ref={storyRef}>
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Our Story</h2>
            <div className="about-text">
              <p className="body-text">
                Umbra Design was founded with a simple mission: to help Irish businesses 
                establish a strong online presence without the complexity and high costs 
                typically associated with web development.
              </p>
              <p className="body-text">
                We specialize in creating premium websites that not only look stunning but 
                also drive real business results. Our proven template system allows us to 
                deliver high-quality sites faster, which means better value for our clients.
              </p>
              <p className="body-text">
                Whether you're a traditional business looking to modernize or a startup 
                ready to launch, we work closely with you to understand your goals and 
                create a solution that fits your needs and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-approach section" ref={approachRef}>
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Our Approach</h2>
            <div className="about-text">
              <p className="body-text">
                We believe in transparency, clear communication, and delivering on our promises. 
                Every project starts with understanding your business, your goals, and your audience.
              </p>
              <p className="body-text">
                Our process is streamlined but thorough. We use modern technologies and best 
                practices to ensure your site is fast, secure, and built to last. And because 
                we work with proven templates, we can offer competitive pricing without 
                compromising on quality.
              </p>
              <p className="body-text">
                From initial concept to final launch, we're with you every step of the way, 
                providing support and guidance to ensure your project succeeds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-services section" ref={servicesRef}>
        <div className="container">
          <h2 className="section-title text-center">What We Offer</h2>
          <div className="services-grid">
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

      <CTA />
    </>
  )
}

export default About

