import { motion } from 'framer-motion'
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect, useCallback } from 'react'
import logo from '../../../public/img/logo.png'
import { ButtonLink } from './Button'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Throttled scroll handler
    let timeoutId
    const handleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 10)
      }, 16)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  // Close menu when clicking on a link
  const handleNavClick = useCallback(() => {
    setIsMobileOpen(false)
  }, [])

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
  ]

  return (
    <div className="fixed border-spacing-0 top-0 left-0 right-0 z-50 px-gutter-xs sm:px-gutter-sm md:px-4 lg:px-8 pt-3 sm:pt-4">
      <motion.nav
        className={`relative mx-auto max-w-7xl flex items-center justify-between gap-3 rounded-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-base/80 backdrop-blur-lg border border-border-secondary shadow-lg shadow-black/20'
            : 'bg-dark-base/60 backdrop-blur-md border border-border-secondary/60'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-2 sm:gap-3" aria-label="Pixnix Digital home">
            <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex-shrink-0">
              <img src={logo} alt="Pixnix Digital Logo" className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>

            <span className="font-black text-xl sm:text-2xl hidden sm:inline-flex items-center whitespace-nowrap">
              <span className="gradient-text-pink">Pixnix</span>
              <span className="text-white ml-1">Digital</span>
            </span>

            <span className="font-black text-lg sm:hidden">
              <span className="gradient-text-pink">PX</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu - perfectly centered regardless of side widths */}
        <motion.div
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ul className="flex items-center gap-1 lg:gap-2">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path
              return (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`relative block whitespace-nowrap rounded-full px-3 lg:px-4 py-1.5 lg:py-2 text-xs sm:text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-text-light hover:text-primary-pink3'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              )
            })}
          </ul>
        </motion.div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <ButtonLink
            href="https://wa.me/923093210056"
            variant="primary"
            external
            className="hidden md:inline-block !rounded-full text-xs lg:text-sm px-4 lg:px-6"
            aria-label="Contact us on WhatsApp"
          >
            Book Free Consultation ➡
          </ButtonLink>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-9 h-9 sm:w-10 sm:h-10 flex flex-col justify-center items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-primary-pink rounded-full"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <motion.div
            className="absolute top-[calc(100%+0.5rem)] left-0 right-0 bg-dark-base/95 backdrop-blur-lg border border-border-secondary rounded-3xl md:hidden overflow-hidden"
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col px-gutter-xs py-4 gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium py-2 px-3 rounded-full transition-colors duration-200 ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-text-light hover:text-primary-pink3 hover:bg-dark-base/50'
                    }`}
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <ButtonLink
                href="https://wa.me/923093210056"
                variant="primary"
                external
                className="w-full text-center text-sm py-3 !rounded-full mt-1"
                onClick={handleNavClick}
                aria-label="Contact us on WhatsApp"
              >
                Let's Talk →
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  )
}

export default Navbar




// import { motion } from 'framer-motion'
// import { Link } from "react-router-dom"
// import { useState, useEffect, useCallback } from 'react'
// import logo from '../../../public/img/logo.png'
// import { ButtonLink } from './Button'

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileOpen, setIsMobileOpen] = useState(false)

//   useEffect(() => {
//     // Throttled scroll handler
//     let timeoutId
//     const handleScroll = () => {
//       clearTimeout(timeoutId)
//       timeoutId = setTimeout(() => {
//         setIsScrolled(window.scrollY > 10)
//       }, 16)
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//       clearTimeout(timeoutId)
//     }
//   }, [])

//   // Close menu when clicking on a link
//   const handleNavClick = useCallback(() => {
//     setIsMobileOpen(false)
//   }, [])

//   const navLinks = [
//     { label: "Home", path: "/" },
//     { label: "About", path: "/about" },
//     { label: "Services", path: "/services" },
//     { label: "Portfolio", path: "/portfolio" },
//     { label: "Contact", path: "/contact" },
//   ]

//   return (
//     <motion.nav
//       className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-gutter-xs sm:px-gutter-sm md:px-gutter-md lg:px-gutter-lg py-3 sm:py-4 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-dark-base/80 backdrop-blur-lg border-b border-border-secondary'
//           : 'bg-transparent'
//       }`}
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       role="navigation"
//       aria-label="Main navigation"
//     >
//       {/* Logo */}
//       <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
//         <Link to="/" className="flex items-center gap-2 sm:gap-3" aria-label="Pixnix Digital home">
//           <img src={logo} alt="Pixnix Digital Logo" className="w-6 h-6 sm:w-8 sm:h-8" />

//           <span className="font-black text-2xl sm:text-3xl hidden sm:inline-flex items-center">
//             <span className="gradient-text-pink">Pixnix</span>
//             <span className="text-white ml-1">Digital</span>
//           </span>

//           <span className="font-black text-xl sm:hidden">
//             <span className="gradient-text-pink">PX</span>
//           </span>
//         </Link>
//       </motion.div>

//       {/* Desktop Menu */}
//       <motion.div
//         className="hidden md:flex md:ml-14 xs:ml-26 justify-center items-center gap-6 lg:gap-10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//       >
//         <ul className="flex w-full items-center gap-6 lg:gap-8">
//           {navLinks.map((link, index) => (
//             <motion.li
//               key={link.path}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
//             >
//               <Link
//                 to={link.path}
//                 className="text-text-light hover:text-primary-pink3 transition-colors duration-200 text-xs sm:text-sm font-medium"
//               >
//                 {link.label}
//               </Link>
//             </motion.li>
//           ))}
//         </ul>
//       </motion.div>

//       <div className="flex items-center gap-3 ml-auto">
//         <ButtonLink
//           href="https://wa.me/923093210056"
//           variant="primary"
//           external
//           className="hidden md:inline-block text-xs lg:text-sm px-4 lg:px-6"
//           aria-label="Contact us on WhatsApp"
//         >
//           Book Free Consultation ➡
//         </ButtonLink>

//         {/* Mobile Menu Button */}
//         <motion.button
//           className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-primary-pink rounded"
//           onClick={() => setIsMobileOpen(!isMobileOpen)}
//           whileTap={{ scale: 0.95 }}
//           aria-label={isMobileOpen ? "Close menu" : "Open menu"}
//           aria-expanded={isMobileOpen}
//           aria-controls="mobile-menu"
//         >
//           <span
//             className={`w-5 h-0.5 bg-white transition-all duration-300 ${
//               isMobileOpen ? 'rotate-45 translate-y-2' : ''
//             }`}
//           />
//           <span
//             className={`w-5 h-0.5 bg-white transition-all duration-300 ${
//               isMobileOpen ? 'opacity-0' : ''
//             }`}
//           />
//           <span
//             className={`w-5 h-0.5 bg-white transition-all duration-300 ${
//               isMobileOpen ? '-rotate-45 -translate-y-2' : ''
//             }`}
//           />
//         </motion.button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileOpen && (
//         <motion.div
//           className="absolute top-full left-0 right-0 bg-dark-base/95 backdrop-blur-lg border-b border-border-secondary md:hidden"
//           id="mobile-menu"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.2 }}
//         >
//           <div className="flex flex-col px-gutter-xs py-4 gap-3">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className="text-text-light hover:text-primary-pink3 transition-colors duration-200 text-sm font-medium py-2 px-3 rounded hover:bg-dark-base/50"
//                 onClick={handleNavClick}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <ButtonLink
//               href="https://wa.me/923093210056"
//               variant="primary"
//               external
//               className="w-full text-center text-sm py-3"
//               onClick={handleNavClick}
//               aria-label="Contact us on WhatsApp"
//             >
//               Let's Talk →
//             </ButtonLink>
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   )
// }

// export default Navbar
