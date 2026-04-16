import SEO from '../components/shared/SEO'
import ContactForm from '../components/contact/ContactForm'
import './Contact.css'

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Umbra Design',
  url: 'https://umbradesign.ie/contact',
  description:
    'Get in touch with Umbra Design to discuss your web design project.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Umbra Design',
    email: 'ryan@umbradesign.ie',
    url: 'https://umbradesign.ie',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'ryan@umbradesign.ie',
      contactType: 'customer service',
      areaServed: 'IE',
      availableLanguage: ['English'],
    },
  },
}

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us - Umbra Design"
        description="Get in touch with Umbra Design to discuss your web design project. Based in Dublin, working with businesses across Ireland."
        path="/contact"
        ogType="website"
        jsonLd={contactJsonLd}
      />
      <section className="contact-hero section">
        <div className="container">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-text">
            Ready to start your project? Let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>
      <section className="contact-section section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="contact-info-title">Let's Work Together</h2>
              <p className="contact-info-text">
                Whether you have a project in mind or just want to explore your options, 
                we'd love to hear from you. Fill out the form and we'll get back to you 
                within 24 hours.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <strong>Email:</strong>
                  <a href="mailto:ryan@umbradesign.ie">ryan@umbradesign.ie</a>
                </div>
                <div className="contact-detail">
                  <strong>Location:</strong>
                  <span>Ireland</span>
                </div>
                <div className="contact-detail">
                  <strong>Response Time:</strong>
                  <span>Within 24 hours</span>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

