import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { PROJECTS, CATEGORIES } from '.././hooks/portfolioData'
import PortfolioCaseStudyModal from '../components/PortfolioCaseStudyModal'

// ─── Page-level enter transition ──────────────────────────────

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
}

// ─── Stagger container ────────────────────────────────────────

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -8,
    transition: { duration: 0.25 },
  },
}

// ─── External Link Icon ───────────────────────────────────────

const IconExternalLink = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 2H2a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9M8 2h4m0 0v4m0-4L6 8" />
  </svg>
)

const IconGithub = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const IconArrowLeft = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 8H3M7 4L3 8l4 4" />
  </svg>
)

// ─── Filter Pill ──────────────────────────────────────────────

const FilterPill = ({ label, active, onClick, count }) => (
  <motion.button
    onClick={onClick}
    className={`relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold
      border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink
      ${
        active
          ? 'bg-primary-pink border-primary-pink text-white'
          : 'bg-transparent border-white/10 text-text-light hover:border-white/25 hover:text-white'
      }`}
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.96 }}
    transition={{ duration: 0.15 }}
    aria-pressed={active}
  >
    {label}
    {count !== undefined && (
      <span
        className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full
          ${active ? 'bg-white/20 text-white' : 'bg-white/8 text-text-light'}`}
      >
        {count}
      </span>
    )}
  </motion.button>
)

// ─── Project Card ─────────────────────────────────────────────

const ProjectCard = ({ project, onSelect }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-40px' })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      ref={cardRef}
      variants={itemVariants}
      layout
      className="group relative flex flex-col rounded-2xl border border-white/8 overflow-hidden bg-dark-base"
      aria-label={project.title}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* ── Thumbnail ── */}
      <div className="relative aspect-video overflow-hidden shrink-0">
        {/* Gradient bg */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Accent glow */}
        <div
          className="absolute -top-1/2 -right-1/4 w-3/4 h-3/4 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: project.accentColor }}
        />

        {/* Concentric circles deco */}
        <svg
          className="absolute right-4 top-4 opacity-10 pointer-events-none"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <circle cx="32" cy="32" r="31" stroke="white" strokeWidth="1" />
          <circle cx="32" cy="32" r="22" stroke="white" strokeWidth="0.5" />
          <circle cx="32" cy="32" r="12" stroke="white" strokeWidth="0.5" />
        </svg>

        {/* Top scan-line */}
        <motion.div
          className="absolute inset-x-0 top-0 h-[2px] origin-left"
          style={{ background: project.accentColor }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />

        <motion.button
          type="button"
          onClick={() => onSelect(project)}
          className="absolute inset-0 z-10 flex items-center justify-center"
          aria-label={`View case study for ${project.title}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.22 }}
        >
          <motion.div
            initial={false}
            animate={isHovered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="shrink-0">
              <path d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0Z" />
              <path d="M12 8v8" />
              <path d="M8 12h8" />
            </svg>
            View Case Study
          </motion.div>
        </motion.button>

        <motion.div
          initial={false}
          animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
        />

        {/* Year badge */}
        <div className="absolute top-3 right-3">
          <span className="text-[10px] font-bold text-white/40 tracking-widest">
            {project.year}
          </span>
        </div>

        {/* Category chip */}
        <div className="absolute bottom-3 left-3">
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
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-black text-base md:text-lg text-white leading-snug mb-2 group-hover:text-primary-pink3 transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-xs text-text-light leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag, i) => (
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

        {/* Divider */}
        <div className="h-px bg-white/6 mb-4" />

        {/* Action links */}
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-primary-pink3 transition-colors duration-200"
              aria-label={`View live demo of ${project.title}`}
            >
              <IconExternalLink />
              Live Demo
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-light hover:text-white transition-colors duration-200"
              aria-label={`View source code for ${project.title}`}
            >
              <IconGithub />
              Source
            </a>
          )}
          {!project.liveUrl && !project.sourceUrl && (
            <span className="text-xs text-text-light/40 italic">Private project</span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

// ─── Empty State ──────────────────────────────────────────────

const EmptyState = ({ filter, onReset }) => (
  <motion.div
    key="empty"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="col-span-full flex flex-col items-center justify-center py-24 px-4 text-center"
    role="status"
    aria-live="polite"
  >
    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
      <svg
        className="w-7 h-7 text-text-light/40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <p className="font-bold text-white mb-1">No projects in "{filter}"</p>
    <p className="text-sm text-text-light mb-6">
      Try a different category or browse everything.
    </p>
    <button
      onClick={onReset}
      className="px-5 py-2.5 rounded-full text-xs font-bold border border-white/15 text-white hover:border-primary-pink/50 hover:text-primary-pink3 transition-colors duration-200"
    >
      Show all projects
    </button>
  </motion.div>
)

// ─── Main Component ────────────────────────────────────────────

const Portfolio = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  // Compute category counts
  const categoryCounts = PROJECTS.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1
    return acc
  }, {})

  // Filter projects
  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-dark-base pt-24 pb-20 px-4 md:px-8"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-14 md:mb-18">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-primary-pink3 mb-3"
          >
            Portfolio
          </motion.p>

          <motion.h1
            id="portfolio-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-black text-4xl md:text-6xl leading-[1.02] tracking-tight text-white mb-5"
          >
            <span className="gradient-text-teal">Projects </span>
            That Speak for Themselves{' '}
            
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-text-light max-w-2xl leading-relaxed"
          >
            Every project here is a story of a brand that wanted to grow and did. Here's a look at what we've built.
          </motion.p>
        </div>

        {/* ── Filter bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-10 md:mb-12"
          role="group"
          aria-label="Filter projects by category"
        >
          {CATEGORIES.map((cat) => (
            <FilterPill
              key={cat}
              label={cat}
              active={activeFilter === cat}
              count={cat === 'All' ? PROJECTS.length : categoryCounts[cat]}
              onClick={() => setActiveFilter(cat)}
            />
          ))}
        </motion.div>

        {/* ── Project count line ── */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-xs text-text-light/50 mb-6"
            aria-live="polite"
          >
            {filtered.length === 0
              ? 'No projects found'
              : `${filtered.length} project${filtered.length !== 1 ? 's' : ''} shown`}
          </motion.p>
        </AnimatePresence>

        {/* ── Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {filtered.length > 0 ? (
              filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))
            ) : (
              <EmptyState
                filter={activeFilter}
                onReset={() => setActiveFilter('All')}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Footer CTA ── */}
        {filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 md:mt-24 border-t border-white/8 pt-12 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-pink3 mb-3">
              Like What You See?
            </p>
            <h2 className="font-black text-3xl md:text-4xl text-white mb-6">
              Let's create something just as <br /><span className="gradient-text-teal">powerful or better for your brand.</span>
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-primary-pink border border-primary-pink hover:bg-primary-pink/90 transition-colors duration-200"
            >
              Start a Conversation
            </a>
          </motion.div>
        )}
      </div>

      <PortfolioCaseStudyModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </motion.main>
  )
}

export default Portfolio