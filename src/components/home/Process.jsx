import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Process.css'

const Process = () => {
  const processRef = useRef(null)
  const titleRef = useRef(null)
  const lineRef = useRef(null)

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We dive deep into understanding your business, goals, target audience, and competitive landscape.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our design process creates a visual identity that resonates with your brand and captivates your audience.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'We build your site using modern technologies, ensuring performance, accessibility, and scalability.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'We ensure everything is perfect before going live and provide ongoing support for continued success.',
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scrollTriggers = []

    // Animate title
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

    // Animate connecting line
    if (lineRef.current && processRef.current) {
      const lineTrigger = gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      )
      scrollTriggers.push(lineTrigger.scrollTrigger)
    }

    // Staggered step animations
    if (processRef.current) {
      const stepItems = processRef.current.querySelectorAll('.process-step')
      stepItems.forEach((step, index) => {
        const stepTrigger = gsap.fromTo(
          step,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
        scrollTriggers.push(stepTrigger.scrollTrigger)
      })
    }

    return () => {
      scrollTriggers.forEach(trigger => trigger && trigger.kill())
    }
  }, [])

  return (
    <section className="process-section section">
      {/* Background Elements */}
      <div className="process-bg-pattern" />

      <div className="container">
        <div className="process-header" ref={titleRef}>
          <span className="section-label">How We Work</span>
          <h2 className="section-title">
            Our <span className="title-accent">Process</span>
          </h2>
          <p className="process-subtitle">
            A proven methodology that transforms ideas into exceptional digital experiences.
          </p>
        </div>

        <div className="process-timeline">
          {/* Connecting Line */}
          <div className="process-line" ref={lineRef} />

          <div className="process-steps" ref={processRef}>
            {steps.map((step, index) => {
              return (
                <div key={index} className="process-step">
                  {/* Step Connector Dot */}
                  <div className="step-connector">
                    <div className="step-dot" />
                    <div className="step-dot-ring" />
                  </div>

                  {/* Number */}
                  <span className="process-number">{step.number}</span>

                  {/* Content */}
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-description">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
