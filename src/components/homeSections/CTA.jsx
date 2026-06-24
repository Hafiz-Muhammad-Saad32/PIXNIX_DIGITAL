import { motion } from 'framer-motion'
import ScrollReveal from '../animations/ScrollReveal'
import SectionChip from '../common/SectionChip'
import { ButtonLink } from '../common/Button'

const CTA = () => {
  return (
    <section id="cta" className="section-base bg-dark-base py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(232, 0, 125, 0.22) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <ScrollReveal>
          <SectionChip className="bg-black justify-center">Ready When You Are</SectionChip>
        </ScrollReveal>

        <motion.h2
          className=" font-black text-4xl sm:text-5xl md:text-6xl leading-tight letter-spacing-tighter mb-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let's Build Something
          <br />
          <span className="gradient-text-pink">Creative Together</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-text-light max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your next breakthrough brand is one conversation away. Let's make it happen starting today.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ButtonLink
            href="https://wa.me/923093210056"
            variant="whatsapp"
            external
            icon="💬"
          >
            WhatsApp Us
          </ButtonLink>

          <ButtonLink
            href="/contact"
            variant="secondary"
          >
            Fill a Form →
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
