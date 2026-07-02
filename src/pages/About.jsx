import { motion } from 'framer-motion'
import ScrollReveal from '../components/animations/ScrollReveal'
import SectionChip from '../components/common/SectionChip'
import PinkGlobeBackground from '../components/animations/PinkGlobeBackground'

const ValueCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02
      }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 18
      }}
      className="card-base p-6 h-full group  relative overflow-hidden"
    > <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />


      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-primary-pink/10 border border-primary-pink/20 flex items-center justify-center text-2xl mb-5">
          {icon}
        </div>

        <h3 className="font-bold text-lg mb-3">
          {title}
        </h3>

        <p className="text-sm text-text-light leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

const TeamCard = ({ member }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{
        type: 'spring',
        stiffness: 250
      }}
      className="card-base overflow-hidden group"
    > <div className="overflow-hidden"> <img
      src={member.image}
      alt={member.name}
      className="
         w-full
         aspect-square
         object-cover
         transition-transform
         duration-500
         group-hover:scale-110
       "
    /> </div>
      < div className="p-5" >
        <h4 className="font-bold text-lg">
          {member.name}
        </h4>

        <p className="text-primary-pink text-sm mt-1">
          {member.role}
        </p>
      </div >
    </motion.div >
  )
}

const About = () => {
  const stats = [
    {
      num: '150+',
      label: 'Projects Delivered'
    },
    {
      num: '80+',
      label: 'Brands Scaled'
    },
    {
      num: '3 Yrs',
      label: 'In The Industry'
    },
    {
      num: '98%',
      label: 'Client Satisfaction'
    }
  ]

  const values = [
    {
      icon: '🎨',
      title: 'Design Led Thinking',
      description:
        'We start every project with deep creative thinking not templates. Your brand gets a strategy and visual identity built from scratch.'
    },
    {
      icon: '🤖',
      title: 'AI Powered Advantage',
      description:
        'We use the latest AI tools from automation to intelligent agents to give your brand a real competitive edge.'
    },
    {
      icon: '📈',
      title: 'Results Over Aesthetics',
      description:
        "Good design is useless if it doesn't convert. We tie every creative decision to your growth goals and business outcomes."
    },
    {
      icon: '🤝',
      title: 'Long Term Partnerships',
      description:
        "We don't just deliver a project and disappear. We build relationships and grow with our clients."
    }
  ]

  const team = [
    {
      name: 'Muhammad Ali',
      role: 'Creative Director',
      image: '/team/member1.jpg'
    },
    {
      name: 'Ayesha Khan',
      role: 'Brand Strategist',
      image: '/team/member2.jpg'
    },
    {
      name: 'Hamza Ahmed',
      role: 'Lead Developer',
      image: '/team/member3.jpg'
    },
    {
      name: 'Sara Noor',
      role: 'AI Automation Specialist',
      image: '/team/member4.jpg'
    }
  ]

  return (
    <section
      id="about"
      className="
     section-base
     py-20
     md:py-28
     px-4
     md:px-8
     relative
     overflow-hidden
   "
    >
      {/* Globe sits fixed behind the whole section, visible while this section is on screen */}
      <PinkGlobeBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero */}

        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">

            <SectionChip className="bg-black justify-center">
              Who We Are
            </SectionChip>

            <h2
              className="
            font-black
            text-2xl
            md:text-6xl
            leading-tight
            mt-5
            mb-6
          "
            >
              We're Not Just an Agency.
              <br />
              We're Your
              <span className="gradient-text-pink">
                {' '}Creative Partner
              </span>
            </h2>

            <p
              className="
            text-base
            md:text-lg
            text-text-light
            leading-relaxed
            max-w-3xl
            mx-auto
          "
            >
              Pixnix Digital is a Karachi based creative agency founded on one belief:
              great brands don't happen by accident.

              <br />
              <br />

              We're a tight knit team of designers,
              strategists, developers, and AI specialists
              who obsess over every pixel, every word,
              and every result.

              <br />
              <br />

              We work with startups, small businesses,
              and ambitious brands that want to look
              premium, grow fast, and stand out in a
              crowded market.

              Our edge? We combine human creativity
              with AI powered tools to deliver work
              that's not just beautiful it's effective.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}

        <div
          className="
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-5
        mt-16
      "
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="
            card-base
            py-6
            text-center
          "
            >
              <div
                className="
              font-black
              text-3xl
              md:text-4xl
              gradient-text-pink
            "
              >
                {stat.num}
              </div>

              <div
                className="
              text-sm
              text-text-light
              mt-2
            "
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}

        <div className="mt-24">

          <div className="text-center mb-14">
            <SectionChip className="bg-black justify-center">
              Why Choose Pixnix
            </SectionChip>

            <h3
              className="
            text-3xl
            md:text-5xl
            font-black
            mt-4
          "
            >
              Built For Brands That Want
              <span className="gradient-text-pink">
                {' '}Real Growth
              </span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <ValueCard
                key={i}
                {...value}
              />
            ))}
          </div>
        </div>

        {/* Team */}

        <div className="mt-28">

          <div className="text-center mb-14">

            <SectionChip className="bg-black justify-center">
              The People Behind Pixnix
            </SectionChip>

            <h3
              className="
            text-3xl
            md:text-5xl
            font-black
            mt-4
          "
            >
              Small Team,
              <span className="gradient-text-pink">
                {' '}Big Impact
              </span>
            </h3>

            <p
              className="
            text-text-light
            max-w-2xl
            mx-auto
            mt-4
          "
            >
              We're a lean, focused team of creative
              professionals who care deeply about the
              work we put out. No bloated agency overhead 
              just talented people fully invested in
              your brand's success.
            </p>

          </div>

          <div
            className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
        "
          >
            {team.map((member) => (
              <TeamCard
                key={member.name}
                member={member}
              />
            ))}
          </div>

        </div>

        {/* CTA */}

        <div className="mt-28">

          <motion.div
            whileHover={{
              scale: 1.01
            }}
            className="
          rounded-3xl
          border
          border-primary-pink/20
          bg-gradient-to-r
          from-primary-pink/10
          to-transparent
          p-8
          md:p-14
          text-center
        "
          >
            <h3
              className="
            text-3xl
            md:text-5xl
            font-black
            mb-4
          "
            >
              Want to Know Us Better?
            </h3>

            <p
              className="
            text-text-light
            max-w-xl
            mx-auto
            mb-8
          "
            >
              Let's jump on a quick call
              no pressure, just vibes and good ideas.
            </p>

            <a
              href="/contact"
              className="
            inline-flex
            items-center
            px-8
            py-4
            rounded-full
            bg-primary-pink
            font-semibold
            transition-all
            hover:scale-105
          "
            >
              Book a Free Call →
            </a>
          </motion.div>

        </div>

      </div >
    </section >
  )
}

export default About
