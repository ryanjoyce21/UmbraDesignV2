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
  const isVisibleRef = useRef(false)

  // Sync isVisible state to ref
  useEffect(() => {
    isVisibleRef.current = isVisible
  }, [isVisible])

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
      if (!isVisibleRef.current) {
        setIsVisible(true)
      }
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (target.closest('.btn, .header-cta, .footer-cta-btn, .mobile-cta')) {
        setCursorState('action')
      } else if (target.closest('.project-card, .service-card, .trust-signal')) {
        setCursorState('expand')
      } else if (target.closest('a, button, .nav-link, .mobile-nav-link, .footer-link')) {
        setCursorState('hover')
      } else {
        setCursorState('default')
      }
    }

    const handleMouseOut = (e) => {
      const relatedTarget = e.relatedTarget
      if (!relatedTarget || !relatedTarget.closest) {
        setCursorState('default')
        return
      }

      // Don't reset if moving to another interactive element
      const isMovingToInteractive = relatedTarget.closest(
        '.btn, .header-cta, .footer-cta-btn, .mobile-cta, .project-card, .service-card, .trust-signal, a, button, .nav-link, .mobile-nav-link, .footer-link'
      )

      if (!isMovingToInteractive) {
        setCursorState('default')
      }
    }

    const handleMouseDown = () => {
      setCursorState((prev) => {
        if (prev.endsWith('-click') || prev === 'click') {
          return prev
        }
        return prev === 'default' ? 'click' : prev + '-click'
      })
    }

    const handleMouseUp = () => {
      setCursorState((prev) => {
        if (prev === 'click') {
          return 'default'
        }
        return prev.replace(/-click$/, '')
      })
    }

    const handleDocMouseOut = () => {
      setIsVisible(false)
    }

    const handleDocMouseOver = () => {
      setIsVisible(true)
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseout', handleDocMouseOut)
    document.addEventListener('mouseover', handleDocMouseOver)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    // Start animation loop
    animationRef.current = requestAnimationFrame(animateCursor)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseout', handleDocMouseOut)
      document.removeEventListener('mouseover', handleDocMouseOver)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isMobile, animateCursor])

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
