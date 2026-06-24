import { motion } from 'framer-motion'
import ScrollReveal from '../animations/ScrollReveal'
import { ButtonLink } from '../common/Button'

const MiniCTAStrip = () => {
  return (
    <section className="section-base py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <motion.div className="card-base p-6 rounded-xl border border-border-secondary flex flex-col md:flex-row items-center justify-between gap-4" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div>
              <h4 className="bg-black text-lg">Ready to stand out?</h4>
              <p className="text-text-light text-sm">Let's build something the internet hasn't seen yet.</p>
            </div>

            <div className="flex gap-3">
              <ButtonLink href="https://wa.me/923093210056" variant="primary" external>Start Your Project →</ButtonLink>
              <ButtonLink href="https://wa.me/923093210056" variant="secondary" external>WhatsApp Us</ButtonLink>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default MiniCTAStrip
