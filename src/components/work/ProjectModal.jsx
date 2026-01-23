import { useEffect } from 'react'
import { X } from 'lucide-react'
import './ProjectModal.css'

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'

    // Close on Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="project-modal-overlay" onClick={handleOverlayClick}>
      <div className="project-modal">
        <button className="project-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        <div className="project-modal-content">
          <div className="project-modal-images">
            {project.images && project.images.length > 0 ? (
              <div className="project-image-gallery">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    loading="lazy"
                  />
                ))}
              </div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="project-modal-main-image"
                loading="lazy"
              />
            )}
          </div>
          <div className="project-modal-info">
            <div className="project-modal-header">
              <span className="project-modal-category">{project.category}</span>
              <span className="project-modal-year">{project.year}</span>
            </div>
            <h2 className="project-modal-title">{project.title}</h2>
            <p className="project-modal-description">
              {project.longDescription || project.description}
            </p>
            {project.tech && project.tech.length > 0 && (
              <div className="project-modal-tech">
                <h3 className="project-modal-tech-title">Technologies</h3>
                <div className="project-modal-tech-list">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="project-modal-tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.client && (
              <div className="project-modal-client">
                <strong>Client:</strong> {project.client}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal

