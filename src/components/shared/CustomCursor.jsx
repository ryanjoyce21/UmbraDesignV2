import { useState, useEffect, useRef, useCallback } from 'react'
import './CustomCursor.css'

const CustomCursor = () => {
  const [cursorState, setCursorState] = useState('default')
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorDotRef = useRef(null)
  const cursorRingRef = useRef(null)
  const cursorGlowRef = useRef(null)

  const mousePos = useRef({ x: 0, y: 0 })
  const dotPos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const animationRef = useRef(null)

  // Smooth cursor animation loop
  const animateCursor = useCallback(() => {
    const dotSpeed = 0.35
    const ringSpeed = 0.15

    // Lerp function for smooth movement
    const lerp = (start, end, factor) => start + (end - start) * factor

    // Update dot position (faster, inner)
    dotPos.current.x = lerp(dotPos.current.x, mousePos.current.x, dotSpeed)
    dotPos.current.y = lerp(dotPos.current.y, mousePos.current.y, dotSpeed)

    // Update ring position (slower, outer)
    ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, ringSpeed)
    ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, ringSpeed)

    // Apply positions
    if (cursorDotRef.current) {
      cursorDotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`
    }
    if (cursorRingRef.current) {
      cursorRingRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`
    }
    if (cursorGlowRef.current) {
      cursorGlowRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`
    }

    animationRef.current = requestAnimationFrame(animateCursor)
  }, [])

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    if (isMobile) return

    const updatePosition = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = (e) => {
      const target = e.target
      if (target.closest('.btn, .header-cta, .footer-cta-btn, .mobile-cta')) {
        setCursorState('action')
      } else if (target.closest('a, button, .nav-link, .mobile-nav-link, .footer-link')) {
        setCursorState('hover')
      } else if (target.closest('.project-card, .service-card, .trust-signal')) {
        setCursorState('expand')
      } else {
        setCursorState('hover')
      }
    }

    const handleMouseLeave = () => {
      setCursorState('default')
    }

    const handleMouseDown = () => {
      setCursorState((prev) => (prev === 'default' ? 'click' : prev + '-click'))
    }

    const handleMouseUp = () => {
      setCursorState((prev) => prev.replace('-click', ''))
    }

    const handleMouseOut = () => {
      setIsVisible(false)
    }

    const handleMouseOver = () => {
      setIsVisible(true)
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('mouseover', handleMouseOver)

    // Start animation loop
    animationRef.current = requestAnimationFrame(animateCursor)

    // Use MutationObserver to handle dynamically added elements
    const addListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, .btn, .project-card, .service-card, .trust-signal, .nav-link, .mobile-nav-link, .header-cta, .footer-cta-btn, .footer-link, .mobile-cta'
      )
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })
      return interactiveElements
    }

    let elements = addListeners()

    const observer = new MutationObserver(() => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      elements = addListeners()
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('mouseover', handleMouseOver)

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })

      observer.disconnect()
    }
  }, [isMobile, isVisible, animateCursor])

  if (isMobile) return null

  return (
    <div className={`cursor-container ${isVisible ? 'visible' : ''}`}>
      {/* Ambient glow (follows cursor loosely) */}
      <div
        ref={cursorGlowRef}
        className={`cursor-glow ${cursorState}`}
      />

      {/* Outer ring (follows with delay) */}
      <div
        ref={cursorRingRef}
        className={`cursor-ring ${cursorState}`}
      />

      {/* Inner dot (follows closely) */}
      <div
        ref={cursorDotRef}
        className={`cursor-dot ${cursorState}`}
      />
    </div>
  )
}

export default CustomCursor
