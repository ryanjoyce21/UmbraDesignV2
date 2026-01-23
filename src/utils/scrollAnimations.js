import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Fade in on scroll
export const fadeInOnScroll = (element, options = {}) => {
  if (!element) return

  gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
        ...options,
      },
    }
  )
}

// Parallax effect
export const parallaxOnScroll = (element, speed = 0.5) => {
  if (!element) return

  gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}

// Stagger animation for lists
export const staggerFadeIn = (elements, options = {}) => {
  if (!elements || elements.length === 0) return

  gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 85%',
        ...options,
      },
    }
  )
}

