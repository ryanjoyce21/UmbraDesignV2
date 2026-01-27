import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../../data/projects'
import ProjectModal from '../work/ProjectModal'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './FeaturedWork.css'

const FeaturedWork = () => {
  const workRef = useRef(null)
  const titleRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const featuredProjects = projects.slice(0, 4)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scrollTriggers = []

    // Animate section header
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

    // Staggered project cards
    if (workRef.current) {
      const cards = workRef.current.querySelectorAll('.project-card')
      cards.forEach((card, index) => {
        const cardTrigger = gsap.fromTo(
          card,
          { opacity: 0, y: 100, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
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
    <>
      <section className="featured-work-section section">
        {/* Background Elements */}
        <div className="work-bg-gradient" />

        <div className="container">
          <div className="work-header" ref={titleRef}>
            <div className="work-header-top">
              <span className="section-label">Portfolio</span>
              <Link to="/work" className="work-view-all">
                <span>View All</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <h2 className="section-title">
              Featured <span className="title-accent">Work</span>
            </h2>
          </div>

          <div className="projects-grid" ref={workRef}>
            {featuredProjects.map((project, index) => (
              <article
                key={project.id}
                className={`project-card ${hoveredIndex !== null && hoveredIndex !== index ? 'dimmed' : ''}`}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Container */}
                <div className="project-image-wrapper">
                  <div className="project-image-inner">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="project-overlay">
                    <div className="project-overlay-content">
                      <span className="project-view-label">View Project</span>
                      <div className="project-view-icon">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <span className="project-category">{project.category}</span>

                  {/* Number */}
                  <span className="project-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Info */}
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                {/* Border Glow */}
                <div className="project-border-glow" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}

export default FeaturedWork
