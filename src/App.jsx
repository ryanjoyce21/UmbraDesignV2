import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { initSmoothScroll, getLenis } from './utils/smoothScroll'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CustomCursor from './components/shared/CustomCursor'
import PageTransition from './components/shared/PageTransition'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  const location = useLocation()

  useEffect(() => {
    initSmoothScroll()
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    // Small delay to ensure DOM has updated
    const timer = setTimeout(() => {
      const lenis = getLenis()
      if (lenis) {
        lenis.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo(0, 0)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      <CustomCursor />
      <div className="film-grain" />
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/work"
            element={
              <PageTransition>
                <Work />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </>
  )
}

export default App

