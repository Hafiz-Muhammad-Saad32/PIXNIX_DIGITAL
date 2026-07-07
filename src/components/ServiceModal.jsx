import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { motion } from "framer-motion"

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const panelVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: 16,
    scale: 0.97,
    transition: { duration: 0.2, ease: "easeIn" },
  },
}

const ServiceModal = ({ service, onClose }) => {
  const panelRef = useRef(null)

  // ESC to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  // Lock background scroll while open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [])

  // Focus the panel on open for keyboard accessibility
  useEffect(() => {
    panelRef.current?.focus()
  }, [])

  if (!service) return null

  return createPortal(
    <motion.div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        p-4 md:p-8
        bg-black/70
        backdrop-blur-sm
      "
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        tabIndex={-1}
        variants={panelVariants}
        onMouseDown={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-4xl
          max-h-[88vh]
          overflow-y-auto
          rounded-3xl
          border border-white/10
          bg-dark-base/90
          backdrop-blur-2xl
          shadow-2xl shadow-black/50
          outline-none
        "
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="
            absolute top-5 right-5 md:top-6 md:right-6
            w-10 h-10
            rounded-full
            bg-white/5
            border border-white/10
            flex items-center justify-center
            text-lg
            transition-colors duration-200
            hover:bg-primary-pink/20 hover:border-primary-pink/40
            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink/60
            z-10
          "
        >
          ✕
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="flex items-start gap-5 mb-6 pr-10">
            <div
              className="
                w-14 h-14 md:w-16 md:h-16
                rounded-2xl
                bg-primary-pink/10
                flex items-center justify-center
                text-3xl
                flex-none
              "
            >
              {service.icon}
            </div>

            <div>
              <span className="text-primary-pink text-xs font-bold uppercase tracking-widest block mb-2">
                Service
              </span>
              <h2
                id="service-modal-title"
                className="text-2xl md:text-4xl font-black leading-tight"
              >
                {service.title}
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-text-light leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Flagship / extra highlight box */}
          {service.extra && (
            <div
              className="
                rounded-2xl
                border border-primary-pink/30
                bg-gradient-to-r from-primary-pink/10 to-transparent
                p-6 md:p-7
                mb-10
              "
            >
              <h4 className="font-bold text-primary-pink mb-2">
                {service.extraTitle}
              </h4>
              <p className="text-text-light text-sm leading-relaxed">
                {service.extra}
              </p>
            </div>
          )}

          {/* Includes + Why us */}
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div>
              <h4 className="font-bold text-lg mb-5">What's Included</h4>
              <ul className="space-y-4">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-text-light text-sm">
                    <span className="text-primary-pink flex-none mt-0.5">✓</span>
                    <span>
                      <strong className="text-white font-semibold">{item.title}</strong>
                      {" — "}
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-5">Why Pixnix Digital</h4>
              <div className="space-y-4">
                {service.whyUs.map((item, i) => (
                  <div
                    key={i}
                    className="
                      rounded-xl
                      border border-white/10
                      bg-white/[0.03]
                      p-4
                      transition-colors duration-200
                      hover:border-primary-pink/30
                    "
                  >
                    <h5 className="font-semibold text-sm mb-1">{item.title}</h5>
                    <p className="text-text-light text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-10">
            <h4 className="font-bold text-lg mb-5">Our Process</h4>
            <div className="flex flex-wrap gap-3">
              {service.process.map((step, i) => (
                <div
                  key={i}
                  className="
                    flex items-center gap-3
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    pl-2 pr-4 py-2
                  "
                >
                  <span
                    className="
                      w-6 h-6
                      rounded-full
                      bg-primary-pink
                      text-xs font-bold
                      flex items-center justify-center
                      flex-none
                    "
                  >
                    {i + 1}
                  </span>
                  <span className="text-text-light text-xs md:text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div
            className="
              flex flex-col md:flex-row md:items-center md:justify-between
              gap-5
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-6
            "
          >
            <p className="text-text-light text-sm">
              <strong className="text-white">Ready to get started?</strong>{" "}
              {service.ctaLine}
            </p>

            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-3 flex-none">
              <button
                type="button"
                onClick={onClose}
                className="
                  px-5 py-2.5
                  rounded-full
                  border border-white/20
                  text-sm font-semibold
                  transition-colors duration-200
                  hover:bg-white/5
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                "
              >
                Cancel
              </button>

              <a
                href="/contact"
                className="
                  px-5 py-2.5
                  rounded-full
                  bg-primary-pink
                  text-sm font-semibold
                  whitespace-nowrap
                  transition-transform duration-200
                  hover:scale-105
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink/60
                "
              >
                {service.ctaText} →
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}

export default ServiceModal
