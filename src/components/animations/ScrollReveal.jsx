import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ANIMATION_DURATIONS, EASING, getReducedMotionSetting } from '../../constants/animations'

const ScrollReveal = ({ children, delay = 0, direction = 'up' }) => {
  const ref = useRef(null)
  const prefersReducedMotion = getReducedMotionSetting()

  const getInitialState = () => {
    if (prefersReducedMotion) return { opacity: 1, x: 0, y: 0 }
    
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -36 }
      case 'right':
        return { opacity: 0, x: 36 }
      case 'up':
      default:
        return { opacity: 0, y: 36 }
    }
  }

  const animateTo = prefersReducedMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: 1, x: 0, y: 0 }

  return (
    <motion.div
      ref={ref}
      initial={getInitialState()}
      whileInView={animateTo}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : ANIMATION_DURATIONS.SLOWER,
        delay: prefersReducedMotion ? 0 : delay,
        ease: EASING.EASE_OUT
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
