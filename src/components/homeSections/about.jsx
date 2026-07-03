import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ScrollReveal from '../animations/ScrollReveal'
import SectionChip from '../common/SectionChip'

const ValueCard = ({ icon, title, description, delay }) => {
  return (
    <ScrollReveal delay={delay} direction="right">
      <motion.div
        className="card-base card-hover p-5 group"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex gap-4 items-start">
          <span className="text-2xl flex-shrink-0">{icon}</span>
          <div className="flex-1">
            <h4 className="font-bold text-sm mb-1">{title}</h4>
            <p className="text-xs md:text-sm text-text-light leading-relaxed">
              {description}
            </p>
          </div>
        </div>

      </motion.div>
    </ScrollReveal>
  )
}

const AboutSection = () => {
  const navigate = useNavigate()

  const values = [
    {
      icon: '🎨',
      title: 'Design Led Thinking',
      description: 'We start every project with deep creative thinking not templates. Your brand gets a strategy and visual identity built from scratch.'
    },
    {
      icon: '🤖',
      title: 'AI Powered Advantage',
      description: 'We use the latest AI tools from automation to intelligent agents to give your brand an unfair competitive edge.'
    },
    {
      icon: '📈',
      title: 'Results Over Aesthetics',
      description: 'Good design is useless if it doesn\'t convert. We tie every creative decision to your growth goals and business outcomes.'
    },
    {
      icon: '🤝',
      title: 'Long Term Partnerships',
      description: 'We don\'t just deliver a project and disappear. We build relationships your wins are our wins.'
    }
  ]

  return (
    <section id="about" className="section-base bg-dark-base2 z-20 my-0 py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Content */}
          <ScrollReveal direction="left">
            <div>
              <SectionChip className='bg-black'>Who We Are</SectionChip>

              <motion.h2
                className="font-black text-4xl md:text-5xl leading-tight letter-spacing-tighter mb-6 mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We're Not Just an Agency.
                <br />
                We're Your <span className="gradient-text-pink">Creative Partner</span>
              </motion.h2>

              <motion.p
                className="text-base md:text-lg text-text-light leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Pixnix Digital is a Karachi based creative agency founded on one belief: great brands don't happen by accident. We're a tight knit team of designers, strategists, developers, and AI specialists who obsess over every pixel, every word, and every result.

                <br /><br />
                We work with startups, small businesses, and ambitious brands that want to look premium, grow fast, and stand out in a crowded market. Our edge? We combine human creativity with AI powered tools to deliver work that's not just beautiful it's effective.
              </motion.p>

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
                <span className="relative z-10">View Details</span>
              </motion.button>
            </div>
          </ScrollReveal>

          {/* Right Content - Value Cards */}
          <div className="space-y-4">
            {values.map((value, i) => (
              <ValueCard
                key={i}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={0.1 + i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
