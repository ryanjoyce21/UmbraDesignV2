import { useEffect, useRef } from 'react'
import SEO from '../components/shared/SEO'
import { fadeInOnScroll } from '../utils/scrollAnimations'
import { Palette, ShoppingCart, Calendar, Globe } from 'lucide-react'
import CTA from '../components/home/CTA'
import './About.css'

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Umbra Design',
  url: 'https://www.umbradesign.ie/about',
  description:
    'Learn about Umbra Design — a Dublin-based web design studio creating premium websites for Irish businesses.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Umbra Design',
    url: 'https://www.umbradesign.ie',
    email: 'ryan@umbradesign.ie',
    description:
      'Premium web design and development for Irish businesses.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dublin',
      addressCountry: 'IE',
    },
    areaServed: { '@type': 'Country', name: 'Ireland' },
  },
}

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
      <SEO
        title="About Us - Umbra Design"
        description="Learn about Umbra Design — a Dublin-based web design studio creating premium websites for Irish businesses. Transparent process, fast turnaround, proven results."
        path="/about"
        jsonLd={aboutJsonLd}
      />
      <section className="about-hero section">
        <div className="container">
          <h1 className="about-hero-title">About Umbra Design</h1>
          <p className="about-hero-text">
            We're a Dublin-based web design studio focused on delivering premium results for Irish businesses.
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
                typically associated with bespoke web development. We saw too many small
                and mid-sized companies priced out of a quality digital presence, and built
                our studio to change that.
              </p>
              <p className="body-text">
                We specialise in creating premium websites that not only look stunning but
                also drive real business results — more enquiries, more bookings, and more
                sales. Our proven component system allows us to deliver high-quality sites
                in weeks rather than months, which means better value for our clients and
                faster time-to-launch without compromising on craft.
              </p>
              <p className="body-text">
                Whether you're a long-established business looking to modernise or a
                startup ready to launch, we work closely with you to understand your goals,
                your audience, and your market. Every site we build is shaped by the
                specifics of your business — not a one-size-fits-all template.
              </p>
              <p className="body-text">
                We also work alongside supports available to Irish SMEs through local
                initiatives like the{' '}
                <a
                  href="https://www.localenterprise.ie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-link"
                >
                  Local Enterprise Office
                </a>
                , including Trading Online Vouchers that can offset a portion of digital
                project costs for eligible businesses.
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
                We believe in transparency, clear communication, and delivering on our
                promises. Every project starts with a discovery conversation — understanding
                your business, your goals, your audience, and the specific outcomes you
                need the site to produce. No jargon, no hidden fees, no scope creep.
              </p>
              <p className="body-text">
                Our process is streamlined but thorough. We use modern technologies and
                best practices — built on{' '}
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-link"
                >
                  React
                </a>{' '}
                and deployed on performant infrastructure — to ensure your site is fast,
                accessible, secure, and built to last. Because we work from a proven
                component foundation rather than reinventing the wheel on every project,
                we can offer competitive pricing without sacrificing craft.
              </p>
              <p className="body-text">
                Performance and SEO are built in from day one. We test on real devices,
                optimise Core Web Vitals, and make sure your site is discoverable by the
                people you actually want to reach. For e-commerce builds we integrate
                trusted payment providers like{' '}
                <a
                  href="https://stripe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-link"
                >
                  Stripe
                </a>
                , so your customers get a checkout experience they already recognise
                and trust.
              </p>
              <p className="body-text">
                From initial concept to final launch — and beyond — we're with you every
                step of the way, providing support and guidance to ensure your project
                succeeds. After launch we offer ongoing maintenance and iteration so your
                site keeps pace with your business as it grows.
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
