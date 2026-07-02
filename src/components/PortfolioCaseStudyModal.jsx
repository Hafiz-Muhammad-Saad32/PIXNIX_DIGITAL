import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const IconClose = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="pointer-events-none"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

const IconArrow = ({ size = 16 }) => (
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
    <path d="M3 8h10" />
    <path d="m9 4 4 4-4 4" />
  </svg>
)

const IconExternalLink = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 2H2v12h12V9" />
    <path d="m10 2 4 0v4" />
    <path d="m14 2-6 6" />
  </svg>
)

const PortfolioCaseStudyModal = ({ project, isOpen, onClose }) => {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const lastFocusedElementRef = useRef(null)

  useEffect(() => {
    if (!isOpen || !project) return undefined

    lastFocusedElementRef.current = document.activeElement

    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    const focusableSelector = [
      'button:not([disabled])',
      '[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ')

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = dialogRef.current?.querySelectorAll(focusableSelector) || []
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (focusableElements.length === 0) {
        event.preventDefault()
        dialogRef.current?.focus()
        return
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    window.setTimeout(() => closeButtonRef.current?.focus(), 0)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight

      if (lastFocusedElementRef.current instanceof HTMLElement) {
        lastFocusedElementRef.current.focus()
      }
    }
  }, [isOpen, onClose, project])

  if (!project) return null

  const caseStudy = project.caseStudy || {}
  const stats = caseStudy.stats || []
  const deliverables = caseStudy.deliverables || []
  const results = caseStudy.results || []

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-6 sm:px-6 md:py-12 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${project.id}-title`}
            aria-describedby={`${project.id}-summary`}
            className="relative my-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 text-white shadow-2xl backdrop-blur-md sm:rounded-[24px]"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
            tabIndex={-1}
          >
            {/* Main Scrollable Wrapper for Content, Header, and Footer */}
            <div className="max-h-[calc(100vh-3rem)] md:max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
              
              {/* Header - Not Fixed */}
              <div className="flex items-start justify-between gap-4 border-b border-white/5 px-5 py-5 sm:px-8 sm:py-6">
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-primary-pink3 bg-primary-pink/10 px-2.5 py-1 rounded-md mb-2">
                    {project.category}
                  </span>
                  <h2 id={`${project.id}-title`} className="text-xl font-extrabold tracking-tight sm:text-3xl text-white">
                    {project.title}
                  </h2>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink active:scale-95"
                  aria-label="Close case study"
                >
                  <IconClose />
                </button>
              </div>

              {/* Body Content */}
              <div className="px-5 py-6 sm:px-8 sm:py-8 space-y-6">
                
                {/* Summary Card */}
                <div className="overflow-hidden rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-5 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="max-w-3xl">
                      <p id={`${project.id}-summary`} className="text-sm leading-relaxed text-slate-300">
                        {caseStudy.summary || project.description}
                      </p>
                    </div>
                    <div className="self-start sm:self-center shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-300">
                      {project.year}
                    </div>
                  </div>

                  {/* Challenge & Deliverables Grid */}
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Challenge
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-200">
                        {caseStudy.challenge || 'The brief called for a distinctive experience that could stand out in a crowded market while remaining highly usable.'}
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        What we delivered
                      </p>
                      <ul className="mt-3 space-y-2.5 text-sm text-slate-200">
                        {deliverables.length > 0 ? (
                          deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-pink" />
                              <span>{item}</span>
                            </li>
                          ))
                        ) : (
                          <li className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-pink" />
                            <span>Strategy, design systems, and polished execution tailored to the brand.</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Approach & Snapshot Grid */}
                <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-5 sm:p-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary-pink3">
                      Approach
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {caseStudy.approach || 'We combined strategic positioning, thoughtful visuals, and user-focused interaction design to create a premium digital experience that felt both polished and effective.'}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-5 sm:p-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary-pink3">
                      Project snapshot
                    </p>
                    <div className="mt-4 grid gap-3 grid-cols-1 sm:grid-cols-2">
                      {stats.length > 0 ? (
                        stats.map((item) => (
                          <div key={item.label} className="rounded-lg border border-white/5 bg-black/30 p-3.5">
                            <p className="text-[10px] uppercase tracking-wider text-slate-400">{item.label}</p>
                            <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                          </div>
                        ))
                      ) : (
                        <>
                          <div className="rounded-lg border border-white/5 bg-black/30 p-3.5">
                            <p className="text-[10px] uppercase tracking-wider text-slate-400">Timeline</p>
                            <p className="mt-1 text-sm font-semibold text-white">Flexible sprint</p>
                          </div>
                          <div className="rounded-lg border border-white/5 bg-black/30 p-3.5">
                            <p className="text-[10px] uppercase tracking-wider text-slate-400">Impact</p>
                            <p className="mt-1 text-sm font-semibold text-white">High-conversion outcome</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-5 sm:p-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-primary-pink3">
                    Results
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                    {results.length > 0 ? (
                      results.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-pink" />
                          <span>{item}</span>
                        </li>
                      ))
                    ) : (
                      <li className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-pink" />
                        <span>A polished launch experience that reinforced the brand and created a stronger first impression.</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Quote Section */}
                {caseStudy.quote && (
                  <div className="rounded-xl border-l-2 border-primary-pink bg-primary-pink/5 p-5">
                    <p className="text-sm italic leading-relaxed text-slate-200">“{caseStudy.quote}”</p>
                  </div>
                )}
              </div>

              {/* Footer - Not Sticky/Fixed anymore */}
              <div className="border-t border-white/5 bg-white/[0.01] px-5 py-5 sm:px-8 sm:py-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                  <a
                    href={project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : '/contact'}
                    target={project.liveUrl && project.liveUrl !== '#' ? '_blank' : undefined}
                    rel={project.liveUrl && project.liveUrl !== '#' ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-pink px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-pink/90 hover:shadow-[0_0_20px_rgba(219,39,119,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink active:scale-[0.98]"
                  >
                    <IconExternalLink size={14} />
                    Live Demo
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink active:scale-[0.98]"
                  >
                    Build Something Similar
                    <IconArrow size={14} />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PortfolioCaseStudyModal

// import { AnimatePresence, motion } from 'framer-motion'
// import { useEffect, useRef } from 'react'

// const IconClose = ({ size = 18 }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth={2}
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="pointer-events-none"
//   >
//     <path d="M18 6 6 18" />
//     <path d="m6 6 12 12" />
//   </svg>
// )

// const IconArrow = ({ size = 16 }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 16 16"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth={2}
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M3 8h10" />
//     <path d="m9 4 4 4-4 4" />
//   </svg>
// )

// const IconExternalLink = ({ size = 16 }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 16 16"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth={1.8}
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M5 2H2v12h12V9" />
//     <path d="m10 2 4 0v4" />
//     <path d="m14 2-6 6" />
//   </svg>
// )

// const PortfolioCaseStudyModal = ({ project, isOpen, onClose }) => {
//   const dialogRef = useRef(null)
//   const closeButtonRef = useRef(null)
//   const lastFocusedElementRef = useRef(null)

//   useEffect(() => {
//     if (!isOpen || !project) return undefined

//     lastFocusedElementRef.current = document.activeElement

//     const previousOverflow = document.body.style.overflow
//     const previousPaddingRight = document.body.style.paddingRight
//     const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

//     document.body.style.overflow = 'hidden'
//     if (scrollbarWidth > 0) {
//       document.body.style.paddingRight = `${scrollbarWidth}px`
//     }

//     const focusableSelector = [
//       'button:not([disabled])',
//       '[href]',
//       'input:not([disabled])',
//       'select:not([disabled])',
//       'textarea:not([disabled])',
//       '[tabindex]:not([tabindex="-1"])',
//     ].join(', ')

//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         event.preventDefault()
//         onClose()
//         return
//       }

//       if (event.key !== 'Tab') return

//       const focusableElements = dialogRef.current?.querySelectorAll(focusableSelector) || []
//       const firstElement = focusableElements[0]
//       const lastElement = focusableElements[focusableElements.length - 1]

//       if (focusableElements.length === 0) {
//         event.preventDefault()
//         dialogRef.current?.focus()
//         return
//       }

//       if (event.shiftKey && document.activeElement === firstElement) {
//         event.preventDefault()
//         lastElement?.focus()
//       } else if (!event.shiftKey && document.activeElement === lastElement) {
//         event.preventDefault()
//         firstElement?.focus()
//       }
//     }

//     document.addEventListener('keydown', handleKeyDown)
//     window.setTimeout(() => closeButtonRef.current?.focus(), 0)

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown)
//       document.body.style.overflow = previousOverflow
//       document.body.style.paddingRight = previousPaddingRight

//       if (lastFocusedElementRef.current instanceof HTMLElement) {
//         lastFocusedElementRef.current.focus()
//       }
//     }
//   }, [isOpen, onClose, project])

//   if (!project) return null

//   const caseStudy = project.caseStudy || {}
//   const stats = caseStudy.stats || []
//   const deliverables = caseStudy.deliverables || []
//   const results = caseStudy.results || []

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/70 px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 backdrop-blur-md"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
//           onClick={onClose}
//           role="presentation"
//         >
//           <motion.div
//             ref={dialogRef}
//             role="dialog"
//             aria-modal="true"
//             aria-labelledby={`${project.id}-title`}
//             aria-describedby={`${project.id}-summary`}
//             className="relative my-auto w-full max-w-5xl max-h-[calc(100dvh-1rem)] overflow-hidden rounded-[20px] border border-white/15 bg-[rgba(8,11,19,0.9)] shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:rounded-[28px]"
//             initial={{ opacity: 0, y: 24, scale: 0.97 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 18, scale: 0.97 }}
//             transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//             onClick={(event) => event.stopPropagation()}
//             tabIndex={-1}
//           >
//             <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7 sm:py-5">
//               <div>
//                 <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-pink3">
//                   {project.category}
//                 </p>
//                 <h2 id={`${project.id}-title`} className="mt-1 text-xl font-black text-white sm:text-2xl">
//                   {project.title}
//                 </h2>
//               </div>

//               <button
//                 ref={closeButtonRef}
//                 type="button"
//                 onClick={onClose}
//                 className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink"
//                 aria-label="Close case study"
//               >
//                 <IconClose />
//               </button>
//             </div>

//             <div className="max-h-[calc(100dvh-8rem)] overflow-y-auto px-4 py-4 sm:px-7 sm:py-7">
//               <div className="overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-5 sm:p-7">
//                 <div className="flex flex-wrap items-center justify-between gap-3">
//                   <div className="max-w-2xl">
//                     <p id={`${project.id}-summary`} className="text-sm leading-relaxed text-text-light">
//                       {caseStudy.summary || project.description}
//                     </p>
//                   </div>
//                   <div className="rounded-full border border-primary-pink/20 bg-primary-pink/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary-pink3">
//                     {project.year}
//                   </div>
//                 </div>

//                 <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
//                   <div className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
//                     <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-light/60">
//                       Challenge
//                     </p>
//                     <p className="mt-3 text-sm leading-relaxed text-white/90">
//                       {caseStudy.challenge || 'The brief called for a distinctive experience that could stand out in a crowded market while remaining highly usable.'}
//                     </p>
//                   </div>

//                   <div className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
//                     <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-light/60">
//                       What we delivered
//                     </p>
//                     <ul className="mt-3 space-y-2 text-sm text-white/90">
//                       {deliverables.length > 0 ? (
//                         deliverables.map((item) => <li key={item} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-pink" />{item}</li>)
//                       ) : (
//                         <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-pink" />Strategy, design systems, and polished execution tailored to the brand.</li>
//                       )}
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
//                 <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 sm:p-6">
//                   <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-pink3">
//                     Approach
//                   </p>
//                   <p className="mt-3 text-sm leading-relaxed text-text-light">
//                     {caseStudy.approach || 'We combined strategic positioning, thoughtful visuals, and user-focused interaction design to create a premium digital experience that felt both polished and effective.'}
//                   </p>
//                 </div>

//                 <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 sm:p-6">
//                   <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-pink3">
//                     Project snapshot
//                   </p>
//                   <div className="mt-4 grid gap-3 sm:grid-cols-2">
//                     {stats.length > 0 ? (
//                       stats.map((item) => (
//                         <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-3">
//                           <p className="text-[11px] uppercase tracking-[0.25em] text-text-light/60">{item.label}</p>
//                           <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
//                         </div>
//                       ))
//                     ) : (
//                       <>
//                         <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
//                           <p className="text-[11px] uppercase tracking-[0.25em] text-text-light/60">Timeline</p>
//                           <p className="mt-1 text-sm font-semibold text-white">Flexible sprint</p>
//                         </div>
//                         <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
//                           <p className="text-[11px] uppercase tracking-[0.25em] text-text-light/60">Impact</p>
//                           <p className="mt-1 text-sm font-semibold text-white">High-conversion outcome</p>
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 rounded-[22px] border border-white/10 bg-white/5 p-5 sm:p-6">
//                 <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-pink3">
//                   Results
//                 </p>
//                 <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text-light">
//                   {results.length > 0 ? (
//                     results.map((item) => <li key={item} className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-primary-pink" />{item}</li>)
//                   ) : (
//                     <li className="flex gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-primary-pink" />A polished launch experience that reinforced the brand and created a stronger first impression.</li>
//                   )}
//                 </ul>
//               </div>

//               {caseStudy.quote && (
//                 <div className="mt-6 rounded-[22px] border border-primary-pink/20 bg-primary-pink/10 p-5 sm:p-6">
//                   <p className="text-sm italic leading-relaxed text-white/90">“{caseStudy.quote}”</p>
//                 </div>
//               )}
//             </div>

//             <div className="sticky bottom-0 z-10 border-t border-white/10 bg-[rgba(8,11,19,0.98)] px-4 py-4 sm:px-7">
//               <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
//                 <a
//                   href={project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : '/contact'}
//                   target={project.liveUrl && project.liveUrl !== '#' ? '_blank' : undefined}
//                   rel={project.liveUrl && project.liveUrl !== '#' ? 'noopener noreferrer' : undefined}
//                   className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-pink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-pink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink"
//                 >
//                   <IconExternalLink />
//                   Live Demo
//                 </a>

//                 <a
//                   href="/contact"
//                   className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink"
//                 >
//                   Build Something Similar
//                   <IconArrow />
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

// export default PortfolioCaseStudyModal
