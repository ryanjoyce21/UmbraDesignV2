import { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { projects } from '../data/projects'
import { fadeInOnScroll, staggerFadeIn } from '../utils/scrollAnimations'
import ProjectModal from '../components/work/ProjectModal'
import './Work.css'

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const heroRef = useRef(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) {
      fadeInOnScroll(heroRef.current)
    }
    if (projectsRef.current) {
      const projectCards = projectsRef.current.querySelectorAll('.project-card')
      staggerFadeIn(projectCards)
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Our Work - Umbra Design</title>
        <meta
          name="description"
          content="View our portfolio of premium websites for Irish businesses."
        />
      </Helmet>
      <section className="work-hero section" ref={heroRef}>
        <div className="container">
          <h1 className="work-hero-title">Our Work</h1>
          <p className="work-hero-text">
            Explore our portfolio of premium websites and digital solutions.
          </p>
        </div>
      </section>
      <section className="work-projects section">
        <div className="container">
          <div className="projects-grid" ref={projectsRef}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <span className="project-tech">
                      {project.tech.join(' • ')}
                    </span>
                  </div>
                </div>
              </div>
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

export default Work

