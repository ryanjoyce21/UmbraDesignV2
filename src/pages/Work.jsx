import { useState, useEffect, useRef } from 'react'
import SEO from '../components/shared/SEO'
import { projects } from '../data/projects'
import { fadeInOnScroll, staggerFadeIn } from '../utils/scrollAnimations'
import ProjectModal from '../components/work/ProjectModal'
import './Work.css'

// Curated external references for tech mentioned in project stacks.
// Only techs with a stable, authoritative URL are linked; others render as plain text.
const TECH_LINKS = {
  React: 'https://react.dev',
  'Next.js': 'https://nextjs.org',
  'Node.js': 'https://nodejs.org',
  Stripe: 'https://stripe.com',
  MongoDB: 'https://www.mongodb.com',
  PostgreSQL: 'https://www.postgresql.org',
  SendGrid: 'https://www.twilio.com/en-us/sendgrid',
  GSAP: 'https://gsap.com',
  'Framer Motion': 'https://motion.dev',
  TypeScript: 'https://www.typescriptlang.org',
  'Chart.js': 'https://www.chartjs.org',
  Firebase: 'https://firebase.google.com',
  'Sanity CMS': 'https://www.sanity.io',
  Cloudinary: 'https://cloudinary.com',
  'Netlify Forms': 'https://www.netlify.com',
}

const workJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Our Work - Umbra Design',
  url: 'https://umbradesign.ie/work',
  description:
    'Selected projects from Umbra Design — e-commerce platforms, booking systems, brochure sites, and web applications for Irish businesses.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Umbra Design',
    url: 'https://umbradesign.ie',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: projects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'CreativeWork',
        name: p.title,
        description: p.description,
        dateCreated: p.year,
        genre: p.category,
      },
    })),
  },
}

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

  const renderTech = (techList) =>
    techList.map((tech, idx) => {
      const href = TECH_LINKS[tech]
      const sep = idx < techList.length - 1 ? ' • ' : ''
      return (
        <span key={tech} className="project-tech-item">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="project-tech-link"
            >
              {tech}
            </a>
          ) : (
            tech
          )}
          {sep}
        </span>
      )
    })

  return (
    <>
      <SEO
        title="Our Work - Umbra Design"
        description="Selected projects from Umbra Design — e-commerce platforms, booking systems, brochure sites, and web applications for Irish businesses."
        path="/work"
        jsonLd={workJsonLd}
      />
      <section className="work-hero section" ref={heroRef}>
        <div className="container">
          <h1 className="work-hero-title">Our Work</h1>
          <p className="work-hero-text">
            Explore our portfolio of premium websites and digital solutions built for
            businesses across Ireland.
          </p>
          <div className="work-hero-body">
            <p className="body-text">
              Every project below was shaped end-to-end by Umbra Design — from discovery and
              user research through visual design, front-end engineering, and launch. We
              work across e-commerce, booking systems, brochure websites, portfolios, and
              bespoke web applications, tailoring each build to the specific goals and
              audience of the client.
            </p>
            <p className="body-text">
              We lean on a proven technology stack — modern JavaScript frameworks, trusted
              payment and data platforms, and performance-first infrastructure — so every
              site ships fast, ranks well, and stays reliable as traffic grows. Click any
              project to see the story, the stack, and the outcomes.
            </p>
          </div>
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
                      {renderTech(project.tech)}
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
