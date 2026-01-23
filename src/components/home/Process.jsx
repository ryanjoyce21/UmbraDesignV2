import { useEffect, useRef } from 'react'
import { staggerFadeIn } from '../../utils/scrollAnimations'
import './Process.css'

const Process = () => {
  const processRef = useRef(null)

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and target audience.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our design process creates a visual identity that resonates with your brand.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'We build your site using modern technologies and best practices.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'We ensure everything is perfect before going live and provide ongoing support.',
    },
  ]

  useEffect(() => {
    if (processRef.current) {
      const stepItems = processRef.current.querySelectorAll('.process-step')
      staggerFadeIn(stepItems)
    }
  }, [])

  return (
    <section className="process-section section">
      <div className="container">
        <h2 className="section-title text-center">Our Process</h2>
        <div className="process-steps" ref={processRef}>
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-number">{step.number}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

