import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { getLenis } from '../../utils/smoothScroll'
import './ProjectModal.css'

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    // Get Lenis instance and stop smooth scrolling
    const lenis = getLenis()
    if (lenis) {
      lenis.stop()
    }

    // Prevent body scroll when modal is open
    // Store original overflow value
    const originalOverflow = document.body.style.overflow
    const originalPaddingRight = document.body.style.paddingRight
    
    // Calculate scrollbar width to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    // Ensure modal can scroll natively by handling wheel events directly
    const handleModalWheel = (e) => {
      if (modalRef.current && modalRef.current.contains(e.target)) {
        // Allow the modal to scroll natively
        const modal = modalRef.current
        const { scrollTop, scrollHeight, clientHeight } = modal
        const isScrollingDown = e.deltaY > 0
        const isScrollingUp = e.deltaY < 0
        
        // Check if we can scroll in the direction of the wheel event
        const canScrollDown = scrollTop < scrollHeight - clientHeight
        const canScrollUp = scrollTop > 0
        
        // If we can scroll in this direction, prevent the event from bubbling to Lenis
        if ((isScrollingDown && canScrollDown) || (isScrollingUp && canScrollUp)) {
          e.stopPropagation()
        } else if ((isScrollingDown && !canScrollDown) || (isScrollingUp && !canScrollUp)) {
          // If we've reached the end, prevent default to stop body scroll
          e.preventDefault()
          e.stopPropagation()
        }
      }
    }

    // Close on Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    // Use capture phase to intercept before Lenis can handle it
    document.addEventListener('wheel', handleModalWheel, { passive: false, capture: true })
    document.addEventListener('touchmove', handleModalWheel, { passive: false, capture: true })

    return () => {
      // Re-enable body scroll
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = originalPaddingRight
      
      // Restart Lenis smooth scrolling
      if (lenis) {
        lenis.start()
      }
      
      window.removeEventListener('keydown', handleEscape)
      document.removeEventListener('wheel', handleModalWheel, { capture: true })
      document.removeEventListener('touchmove', handleModalWheel, { capture: true })
    }
  }, [onClose])

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="project-modal-overlay" onClick={handleOverlayClick}>
      <div className="project-modal" ref={modalRef}>
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

