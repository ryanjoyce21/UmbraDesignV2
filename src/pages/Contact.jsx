import { Helmet } from 'react-helmet-async'
import ContactForm from '../components/contact/ContactForm'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Umbra Design</title>
        <meta
          name="description"
          content="Get in touch with Umbra Design to discuss your web design project."
        />
      </Helmet>
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

