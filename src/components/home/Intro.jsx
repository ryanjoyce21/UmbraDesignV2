import { useEffect, useRef } from 'react'
import { fadeInOnScroll } from '../../utils/scrollAnimations'
import './Intro.css'

const Intro = () => {
  const introRef = useRef(null)

  useEffect(() => {
    if (introRef.current) {
      fadeInOnScroll(introRef.current)
    }
  }, [])

  return (
    <section className="intro-section section" ref={introRef}>
      <div className="container">
        <div className="intro-content">
          <h2 className="section-title">We Bring your Business Into the Light</h2>
          <div className="intro-text">
            <p className="body-text">
              Umbra Design specializes in creating premium websites for Irish small and medium businesses. 
              From elegant brochure sites to powerful e-commerce platforms, we deliver solutions that 
              drive results.
            </p>
            <p className="body-text">
              Our proven template system means faster turnaround times without compromising on quality. 
              Whether you're a traditional business modernizing your online presence or a creative startup 
              launching your first site, we've got you covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro

