import { motion } from 'framer-motion'
import { getReducedMotionSetting } from '../../constants/animations'

const FloatingMesh = () => {
  const prefersReducedMotion = getReducedMotionSetting()

  const createMeshVariants = (duration, delay) => ({
    animate: {
      y: prefersReducedMotion ? 0 : [-25, 0, -25],
      transition: {
        duration: prefersReducedMotion ? 0.01 : duration,
        ease: 'easeInOut',
        repeat: Infinity,
        delay: prefersReducedMotion ? 0 : delay
      }
    }
  })

  const meshVariants = createMeshVariants(10, 0)
  const meshVariants2 = createMeshVariants(12, 1.5)
  const meshVariants3 = createMeshVariants(8, 2)

  return (
    <div className="flex justify-center items-center gap-6 mt-8 pointer-events-none">
      <motion.div
        className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232, 0, 125, 0.22) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
        variants={meshVariants}
        animate="animate"
      />
      <motion.div
        className="w-[120px] h-[120px] md:w-[250px] md:h-[250px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 180, 160, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
        variants={meshVariants2}
        animate="animate"
      />
      <motion.div
        className="w-[80px] h-[80px] md:w-[180px] md:h-[180px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232, 0, 125, 0.12) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
        variants={meshVariants3}
        animate="animate"
      />
    </div>
  )
}

export default FloatingMesh