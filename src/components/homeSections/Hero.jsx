
import { motion } from 'framer-motion'
import FloatingMesh from '../animations/FloatingMesh'
import { ButtonLink } from '../common/Button'
import SectionChip from '../common/SectionChip'

const FloatingStats = ({ stat, delay }) => {
  return (
    <motion.div
      className="bg-dark-card/90 backdrop-blur-md border border-border-secondary rounded-2xl px-5 py-5 w-[220px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0]
      }}
      transition={{
        opacity: {
          duration: 0.6,
          delay: 0.3 + delay
        },
        y: {
          duration: stat.duration || 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: stat.delayAnim || 0
        }
      }}
    >
      <div className="text-xs uppercase font-bold letter-spacing-2px text-primary-pink3 mb-1">
        {stat.label}
      </div>

      <div className="font-black text-[1.3rem] text-white">
        {stat.value}
      </div>

      <div className="text-xs text-text-light mt-0.5">
        {stat.subtext}
      </div>
    </motion.div>
  )
}

const Hero = () => {
  const stats = [
    {
      label: 'Projects Done',
      value: '150+',
      subtext: 'Projects Done',
      duration: 4,
      delayAnim: 0
    },
    {
      label: 'Client Satisfaction',
      value: '98%',
      subtext: 'Client Satisfaction',
      duration: 5,
      delayAnim: 1
    },
    {
      label: 'Brands Scaled',
      value: '80+',
      subtext: 'Brands Scaled',
      duration: 4.5,
      delayAnim: 2
    },
    {
      label: 'Avg ROI Boost',
      value: '3.4×',
      subtext: 'Avg ROI Boost',
      duration: 5.5,
      delayAnim: 1.5
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

  return (
    <section
      id="home"
      className="md:relative z-10 mt-10 flex flex-col items-center justify-center overflow-hidden pt-20 pb-10 md:pb-0 mb-0"
    >
      <video autoPlay muted playsInline className="hidden md:flex md:absolute z-0 inset-0 h-full w-full object-cover bg-cover bg-fixed">
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <motion.div
        className="z-10 max-w-full md:max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <SectionChip className='bg-black'>Creative Digital Agency · Karachi, PK</SectionChip>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className=" font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight letter-spacing-tighter mb-6 mt-4"
          variants={itemVariants}
        >
          We Turn Ideas Into
          <br />
          <span className="gradient-text-pink">Creative Digital</span>
          <br />
          <span className="gradient-text-teal">Experiences</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl md:text-black max-w-2xl mx-auto mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Built for startups. Designed for growth. We craft brands, visuals, and AI powered strategies that stop the scroll and convert attention into real revenue.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
          variants={itemVariants}
        >
          <ButtonLink
            href="/contact"
          >
            Start Your Project ✦
          </ButtonLink>
          <ButtonLink
            href="/portfolio"
            variant="secondary"
            className='text-black md:text-white border-black md:border-white'
          >
            View Our Work →
          </ButtonLink>
        </motion.div>
      </motion.div>

      {/* Stats Cards Row */}
      <div className="relative z-10 mt-16 mb-10 flex flex-wrap justify-center gap-6 px-4">
        {stats.map((stat, i) => (
          <FloatingStats
            key={i}
            stat={stat}
            delay={i * 1}
          />
        ))}
      </div>

      {/* Floating Mesh */}
      <div className="absolute left-0 right-0 bottom-8 flex justify-center z-0 pointer-events-none">
        <FloatingMesh />
      </div>
    </section>
  )
}

export default Hero
