import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
// Correct import from data file
import caseStudies from '../../hooks/caseStudies' 
import CaseStudyModal from '../../components/CaseStudyModal'

// ─── Framer Motion variants ────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}



const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

// ─── Featured Card ─────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const FeaturedCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-2xl border border-white/10 h-[280px] cursor-default bg-black/20"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* 1. Use image from data file as background */}
      {project.img && (
        <img src={project.img} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
      )}

      {/* 2. New Pink Background on Hover Layer - Subtle semi-transparent pink overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-primary-pink/15 z-15"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Existing Gradient overlay - z-10, always present to ensure readability */}
      <div className={`absolute inset-0 bg-gradient-to-br from-black/80 to-transparent z-10`} />
      
      {/* Content - z-20 (preserved design) */}
      <div className="relative z-20 h-full flex flex-col justify-end p-6">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 bg-white/5 text-white/80">
            {project.cat}
          </span>
        </div>

        <h3 className="font-black text-xl text-white mb-2 leading-tight">
          {project.name}
        </h3>
        
        <p className="text-xs text-white/60 leading-relaxed line-clamp-2">
          {project.headline}
        </p>
      </div>
    </motion.div>
  )
}

// ─── Main Component ────────────────────────────────────────────

const HomePortfolioPreview = () => {
  const navigate = useNavigate()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedProject, setSelectedProject] = useState(null)

  // Filter only featured ones, up to 4, using data from caseStudies.js
  const displayProjects = caseStudies.filter((p) => p.featured === true).slice(0, 4)

  return (
    <section
      id="portfolio-preview"
      className="bg-dark-base2 py-20 md:py-28 px-4 md:px-8"
      aria-labelledby="portfolio-preview-heading"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Header ── (Preserved design & animation) */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <motion.p
              custom={0}
              variants={headingVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-xs font-bold uppercase tracking-[0.2em] text-primary-pink3 mb-3"
            >
              Selected Work
            </motion.p>
            <motion.h2
              id="portfolio-preview-heading"
              custom={1}
              variants={headingVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="font-black text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight text-white"
            >
              Projects That{' '}
              <span className="gradient-text-teal">Speak for Themselves</span>
            </motion.h2>
          </div>

          <motion.p
            custom={2}
            variants={headingVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-sm md:text-base text-text-light max-w-xs leading-relaxed sm:text-right"
          >
            Every project here is a story of a brand that wanted to grow and did.
          </motion.p>
        </div>

        {/* ── Grid ── (Preserved layout, standard responsive grid) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {displayProjects.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* ── CTA ── (Preserved design & animation) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 md:mt-12 justify-center"
        >
          <motion.button
            onClick={() => navigate('/portfolio')}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm text-white overflow-hidden border border-primary-pink/40 bg-primary-pink/10 hover:border-primary-pink transition-colors duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            aria-label="View all portfolio projects"
          >
            {/* Animated fill */}
            <motion.span
              className="absolute inset-0 bg-primary-pink"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
            <span className="relative z-10">View All Work</span>
            <motion.svg
              className="relative z-10 w-4 h-4"
              fill="none"
              viewBox="0 0 16 16"
              stroke="currentColor"
              strokeWidth={2}
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.25 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8h10M9 4l4 4-4 4"
              />
            </motion.svg>
          </motion.button>

          <span className="text-xs text-text-light/50">
            {caseStudies.length} projects across {new Set(caseStudies.map((p) => p.cat)).size} categories
          </span>
        </motion.div>
      </div>

      <CaseStudyModal
        caseStudy={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export default HomePortfolioPreview