import { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import CustomCursor from './components/common/CustomCursor'

// Lazy load pages for code splitting (improves LCP, FCP)
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))
const Portfolio = lazy(() => import('./pages/Portfolio'))

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-dark-base flex items-center justify-center">
    <div className="animate-pulse text-text-muted">Loading...</div>
  </div>
)

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="bg-dark-base text-white overflow-x-hidden">
      <CustomCursor />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
