import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { PROJECTS } from '../../hooks/portfolioData'
// ─── Framer Motion variants ────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
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

const FeaturedCard = ({ project, isLarge = false }) => {
  return (
    <motion.div
      variants={cardVariants}
      className={`group relative overflow-hidden rounded-2xl border border-white/8 cursor-pointer
        ${isLarge ? 'row-span-2 min-h-[340px] md:min-h-[460px]' : 'min-h-[220px] md:min-h-[240px]'}
      `}
    >
      {/* Gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Decorative geometry */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/2 -right-1/4 w-3/4 h-3/4 rounded-full opacity-10 blur-3xl"
          style={{ background: project.accentColor }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
        <svg
          className="absolute right-4 top-4 opacity-10"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <circle cx="40" cy="40" r="39" stroke="white" strokeWidth="1" />
          <circle cx="40" cy="40" r="28" stroke="white" strokeWidth="0.5" />
          <circle cx="40" cy="40" r="16" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Scan-line hover accent — the signature micro-interaction */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[2px] origin-left"
        style={{ background: project.accentColor }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      {/* Content overlay — slides up on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
        {/* Always-visible chip */}
        <div className="absolute top-4 left-5">
          <span
            className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border"
            style={{
              color: project.accentColor,
              borderColor: `${project.accentColor}40`,
              background: `${project.accentColor}15`,
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Title always visible */}
        <h3
          className={`font-black leading-tight text-white mb-0 transition-transform duration-300 group-hover:-translate-y-2
            ${isLarge ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}
          `}
        >
          {project.title}
        </h3>

        {/* Description + tags — revealed on hover */}
        <motion.div
          className="overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          whileHover={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs text-white/70 mt-2 mb-3 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, isLarge ? 4 : 2).map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full border"
                style={{
                  color: project.accentColor,
                  borderColor: `${project.accentColor}40`,
                  background: `${project.accentColor}15`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// ─── Main Component ────────────────────────────────────────────

const HomePortfolioPreview = () => {
  const navigate = useNavigate()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // Pick first 3 featured projects; fallback to first 3 if none flagged
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3)
  const displayProjects = featured.length >= 3 ? featured : PROJECTS.slice(0, 3)

  // Asymmetric layout: card[0] spans 2 rows (large), cards[1-2] stack right
  const [large, ...small] = displayProjects

  return (
    <section
      id="portfolio-preview"
      className="bg-dark-base2 py-20 md:py-28 px-4 md:px-8"
      aria-labelledby="portfolio-preview-heading"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Header ── */}
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

        {/* ── Asymmetric Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {/* Large card — left, spans 2 rows on sm+ */}
          <div className="sm:row-span-2">
            <FeaturedCard project={large} isLarge />
          </div>

          {/* Two stacked smaller cards — right */}
          {small.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* ── CTA ── */}
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
            {PROJECTS.length} projects across {new Set(PROJECTS.map((p) => p.category)).size} categories
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default HomePortfolioPreview
