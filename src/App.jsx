import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { initSmoothScroll } from './utils/smoothScroll'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CustomCursor from './components/shared/CustomCursor'
import PageTransition from './components/shared/PageTransition'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  useEffect(() => {
    initSmoothScroll()
  }, [])

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
    </>
  )
}

export default App

