import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import caseStudies from '../hooks/caseStudies'
import CaseStudyModal from '../components/CaseStudyModal'

// ─── Derive categories from data (single source of truth) ────
const CATEGORIES = ['All', ...Array.from(new Set(caseStudies.map((p) => p.cat)))]

// ─── Page-level enter transition ─────────────────────────────
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

// ─── Filter Pill ──────────────────────────────────────────────
const FilterPill = ({ label, active, onClick, count }) => (
  <motion.button
    onClick={onClick}
    className={`relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold
      border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec1a8d]
      ${
        active
          ? 'bg-[#ec1a8d] border-[#ec1a8d] text-white'
          : 'bg-transparent border-white/10 text-[#a6adb3] hover:border-white/25 hover:text-white'
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
          ${active ? 'bg-white/20 text-white' : 'bg-white/8 text-[#a6adb3]'}`}
      >
        {count}
      </span>
    )}
  </motion.button>
)

// ─── Case Study Card ──────────────────────────────────────────
function CaseStudyCard({ caseStudy, index, onOpen }) {
  const cardRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const visibleTech = caseStudy.tech.slice(0, 4)
  const extraTechCount = caseStudy.tech.length - visibleTech.length

  return (
    <div
      ref={cardRef}
      onClick={() => onOpen(caseStudy)}
      style={{ transitionDelay: `${(index % 3) * 0.09}s` }}
      className={`group cursor-pointer overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.07)] bg-[#0e1418]
        transition-[border-color,transform,box-shadow] duration-200
        hover:-translate-y-[5px] hover:border-[#ec1a8d] hover:shadow-[0_16px_36px_rgba(236,26,141,0.2)]
        ${
          inView
            ? 'opacity-100 translate-y-0 transition-[opacity,transform,border-color,box-shadow] duration-[600ms]'
            : 'opacity-0 translate-y-[24px]'
        }`}
    >
      {/* Thumbnail */}
      <div 
        oading="lazy"
        decoding="async"
        className="relative flex h-[185px] items-end justify-start overflow-hidden bg-cover bg-top text-5xl"
        style={{
          background: caseStudy.thumb,
          backgroundImage: caseStudy.img ? `url(${caseStudy.img})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {!caseStudy.img && (
          <span className="relative z-10 p-4">{caseStudy.icon}</span>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/[0.08] to-black/[0.55]" />
      </div>

      {/* Body */}
      <div className="px-6 pb-6 pt-[22px]">
        <span className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-[#ec1a8d]/25 bg-[#ec1a8d]/10 px-3 py-1.5 text-[11.5px] font-bold tracking-wide text-[#ff3aa0]">
          {caseStudy.cat}
        </span>

        <h3 className="mb-2.5 text-[18px] leading-[1.25] text-[#f5f6f7]">{caseStudy.name}</h3>

        <p className="mb-[18px] text-[13.5px] text-[#a6adb3]">{caseStudy.tagline}</p>

        <div className="mb-[18px] flex flex-wrap gap-1.5">
          {visibleTech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-[rgba(255,255,255,0.07)] bg-white/5 px-2.5 py-1 text-[11.5px] text-[#a6adb3]"
            >
              {t}
            </span>
          ))}
          {extraTechCount > 0 && (
            <span className="rounded-md border border-[rgba(255,255,255,0.07)] bg-white/5 px-2.5 py-1 text-[11.5px] text-[#a6adb3]">
              +{extraTechCount}
            </span>
          )}
        </div>

        <span className="inline-flex items-center gap-[7px] text-[13.5px] font-semibold text-[#ff3aa0] transition-[gap] duration-200 group-hover:gap-[11px]">
          View Case Study{' '}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
            →
          </span>
        </span>
      </div>
    </div>
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
        className="w-7 h-7 text-[#a6adb3]/40"
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
    <p className="font-bold text-[#f5f6f7] mb-1">No projects in "{filter}"</p>
    <p className="text-sm text-[#a6adb3] mb-6">
      Try a different category or browse everything.
    </p>
    <button
      onClick={onReset}
      className="px-5 py-2.5 rounded-full text-xs font-bold border border-white/15 text-[#f5f6f7] hover:border-[#ec1a8d]/50 hover:text-[#ec1a8d] transition-colors duration-200"
    >
      Show all projects
    </button>
  </motion.div>
)

// ─── Main Component ───────────────────────────────────────────
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  // Compute category counts from live data
  const categoryCounts = caseStudies.reduce((acc, p) => {
    acc[p.cat] = (acc[p.cat] || 0) + 1
    return acc
  }, {})

  // Filter projects — match on `cat` (not `category`)
  const filtered =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((p) => p.cat === activeFilter)

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen bg-[#06090b] pt-24 pb-20 px-4 md:px-8 overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* GLOW ANIMATIONS (Imported from 3rd HTML file) */}
      <motion.div
        className="pointer-events-none fixed left-[5%] top-[-150px] z-0 h-[500px] w-[500px] rounded-full bg-[#ec1a8d] opacity-25 blur-[120px]"
        animate={{ x: [0, 50, 0], y: [0, 35, 0] }}
        transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none fixed bottom-[10%] right-[3%] z-0 h-[380px] w-[380px] rounded-full bg-[#6a0f40] opacity-25 blur-[120px]"
        animate={{ x: [0, -40, 0], y: [0, 25, 0] }}
        transition={{ duration: 22, ease: 'easeInOut', repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-14 md:mb-18">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#ec1a8d] mb-3"
          >
            Portfolio
          </motion.p>

          <motion.h1
            id="portfolio-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-black text-4xl md:text-6xl leading-[1.02] tracking-tight text-[#f5f6f7] mb-5"
          >
            <span className="gradient-text-teal">Projects </span>
            That Speak for Themselves
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-[#a6adb3] max-w-2xl leading-relaxed"
          >
            Every project here is a story of a brand that wanted to grow and did. Here's a look at
            what we've built.
          </motion.p>
        </div>

        {/* Filter bar */}
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
              count={cat === 'All' ? caseStudies.length : categoryCounts[cat]}
              onClick={() => setActiveFilter(cat)}
            />
          ))}
        </motion.div>

        {/* Project count */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-xs text-[#a6adb3]/50 mb-6"
            aria-live="polite"
          >
            {filtered.length === 0
              ? 'No projects found'
              : `${filtered.length} project${filtered.length !== 1 ? 's' : ''} shown`}
          </motion.p>
        </AnimatePresence>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {filtered.length > 0 ? (
              filtered.map((caseStudy, index) => (
                <CaseStudyCard
                  key={caseStudy.id}
                  caseStudy={caseStudy}
                  index={index}
                  onOpen={setSelectedCaseStudy}
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

        {/* Footer CTA */}
        {filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 md:mt-24 border-t border-white/8 pt-12 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ec1a8d] mb-3">
              Like What You See?
            </p>
            <h2 className="font-black text-3xl md:text-4xl text-[#f5f6f7] mb-6">
              Let's create something just as{' '}
              <br />
              <span className="gradient-text-teal">powerful or better for your brand.</span>
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-[#ec1a8d] border border-[#ec1a8d] hover:bg-[#ec1a8d]/90 transition-colors duration-200"
            >
              Start a Conversation
            </a>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </motion.main>
  )
}

export default Portfolio