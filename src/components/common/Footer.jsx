import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../animations/ScrollReveal'
import logo from '../../../public/img/logo.png'
import { Button } from '../common/Button'

const Footer = () => {
  const serviceLinks = [
    'Graphic Design',
    'Branding',
    'Social Media',
    'AI Automations',
    'AI Agents',
    'Web Development',
    'Ads & Marketing'
  ]

  const companyLinks = [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Instagram', href: 'https://www.instagram.com/pixnix_digital/' },
    { label: 'WhatsApp', href: 'https://wa.me/923093210056' }
  ]

  const socialLinks = [
    {
      icon: 'Instagram',
      href: 'https://www.instagram.com/pixnix_digital/',
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
          <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
          <circle cx="18.406" cy="5.595" r="1.44" />
        </svg>
      )
    },
    {
      icon: 'WhatsApp',
      href: 'https://wa.me/923093210056',
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      )
    },
    {
      icon: 'Email',
      href: 'mailto:pixnixdesign@gmail.com',
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      )
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  // Motion-enabled react-router Link for consistent animations
  const MotionLink = motion(Link)

  return (
    <footer id="contact" className="section-base bg-dark-base2 border-t mt-5 border-border-secondary">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Contact Form */}
        {/* <ContactForm /> */}

        {/* Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-6  pt-12 border-t border-border-secondary"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Column */}
          <ScrollReveal direction="left">
            <motion.div variants={itemVariants}>
              <motion.div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Pixnix Digital Logo" className="w-9 h-9" />
                <span className=" font-black text-lg md:text-4xl gradient-text-pink">
                  Pixnix Digital
                </span>
              </motion.div>

              <p className="text-sm md:text-base text-text-light leading-relaxed mb-6 max-w-xs">
                A creative digital agency built for the next generation of brands. Bold ideas, premium execution, real results.
              </p>

              {/* Contact Info */}
              <motion.div className="space-y-3" variants={containerVariants}>
                <motion.a
                  href="https://wa.me/923093210056"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-light hover:text-primary-pink3 transition-colors"
                  whileHover={{ x: 4 }}
                  variants={itemVariants}
                >
                  <div className="w-8 h-8 bg-text-disabled rounded-lg flex items-center justify-center flex-shrink-0">
                    💬
                  </div>
                  +92 309 3210056
                </motion.a>

                <motion.a
                  href="mailto:pixnixdesign@gmail.com"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-light hover:text-primary-pink3 transition-colors"
                  whileHover={{ x: 4 }}
                  variants={itemVariants}
                >
                  <div className="w-8 h-8 bg-text-disabled rounded-lg flex items-center justify-center flex-shrink-0">
                    ✉️
                  </div>
                  pixnixdesign@gmail.com
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/pixnix_digital/"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-light hover:text-primary-pink3 transition-colors"
                  whileHover={{ x: 4 }}
                  variants={itemVariants}
                >
                  <div className="w-8 h-8 bg-text-disabled rounded-lg flex items-center justify-center flex-shrink-0">
                    📸
                  </div>
                  @pixnix_digital
                </motion.a>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* Services Column */}
          <ScrollReveal>
            <motion.div variants={itemVariants}>
              <a href="/services" className=" font-black text-xs hover:text-primary-pink3 md:text-sm uppercase letter-spacing-2px text-white mb-4 md:mb-8">
                Services
              </a>

              <ul className="space-y-2 my-3 md:space-y-3">
                {serviceLinks.map((link, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <MotionLink
                      to="/services"
                      className="text-sm text-text-light hover:text-primary-pink3 transition-colors"
                    >
                      {link}
                    </MotionLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollReveal>

          {/* Company Column */}
          <ScrollReveal direction="right">
            <motion.div variants={itemVariants}>
              <h4 className=" font-black text-xs md:text-sm uppercase letter-spacing-2px text-white mb-4 md:mb-6">
                Company
              </h4>

              <ul className="space-y-2 md:space-y-3">
                {companyLinks.map((link, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.href.startsWith('http')? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-light hover:text-primary-pink3 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <MotionLink
                        to={link.href}
                        className="text-sm text-text-light hover:text-primary-pink3 transition-colors"
                      >
                        {link.label}
                      </MotionLink>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollReveal>
        </motion.div>

        {/* Bottom Section */}
        <motion.div className="border-t border-border-secondary pt-6 md:pt-8 mt-10 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-xs md:text-sm text-text-muted">© 2024 Pixnix Digital. Built with love in Karachi. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex gap-2 pb-4 md:gap-3">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-text-disabled border border-border-secondary rounded-full flex items-center justify-center text-white hover:bg-gradient-pink hover:border-transparent transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.svg}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
