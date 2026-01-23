import { useEffect, useRef, useState } from 'react'
import { staggerFadeIn } from '../../utils/scrollAnimations'
import { projects } from '../../data/projects'
import ProjectModal from '../work/ProjectModal'
import './FeaturedWork.css'

const FeaturedWork = () => {
  const workRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const featuredProjects = projects.slice(0, 4)

  useEffect(() => {
    if (workRef.current) {
      const projectCards = workRef.current.querySelectorAll('.project-card')
      staggerFadeIn(projectCards)
    }
  }, [])

  return (
    <>
      <section className="featured-work-section section">
        <div className="container">
          <h2 className="section-title text-center">Featured Work</h2>
          <div className="projects-grid" ref={workRef}>
            {featuredProjects.map((project) => (
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

export default FeaturedWork

