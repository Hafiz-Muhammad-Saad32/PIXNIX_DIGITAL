import { motion } from 'framer-motion'
import ScrollReveal from '../components/animations/ScrollReveal'
import SectionChip from '../components/common/SectionChip'
import PinkGlobeBackground from '../components/animations/PinkGlobeBackground'
import SEO from '../components/common/SEO'

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

// ─── Team Card Updated to match image_06d5ad.png ───────────────────
const TeamCard = ({ member }) => {
  // Name se initials (e.g., "Muhammad Ali" -> "MA") nikalne ke liye helper
  const initials = member.name
    ? member.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : '';

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{
        type: 'spring',
        stiffness: 250
      }}
      className="card-base p-8 rounded-[24px] border border-white/10 bg-black/30 flex flex-col items-center justify-center text-center relative overflow-hidden group min-h-[220px]"
    >
      {/* Blue/Purple Gradient Circle with Initials from image_06d5ad.png */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d43bf6] to-[#f65cf6] flex items-center justify-center text-neutral-950 font-black text-sm mb-5 shadow-md">
        {initials}
      </div>

      {/* Member Name */}
      <h4 className="font-bold text-base text-white mb-1">
        {member.name}
      </h4>

      {/* Member Role */}
      <p className="text-text-light/60 text-xs">
        {member.role}
      </p>
    </motion.div>
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
//Design Lead: Arham Zameer
// Designer:Hammad 
// Developer: M.Saad 
// UGC Lead:Junaid Kamran
// CGI Lead:Alisha Sagheer
// Ai Automation Lead: Krrish Kishor
  const team = [
    {
      name: 'Shayan Afridi',
      role: 'Founder & Creative Director',
      founder : true
    },
    {
      name: 'Hammad Aziz',
      role: 'Design Lead',
    },
    {
      name: 'Muhammad Saad',
      role: 'Development Lead',
    },
    {
      name: 'Ali Khan',
      role: 'Marketing Lead',
    },
    {
      name: 'Junaid Kamran',
      role: 'UGC Lead',
    },
    {
      name: 'Alisha Sagheer',
      role: 'CGI Lead',
    },
    {
      name: 'Krrish Kishor',
      role: 'AI Automation Lead',
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
      <SEO
        title="About Pixnix Digital | Creative Digital Agency Team & Story"
        description="Meet Pixnix Digital — a full-stack creative digital agency specializing in web development, branding, AI automation and marketing. Learn our story, values, and the senior specialists behind 150+ delivered projects."
        keywords="about Pixnix Digital, creative digital agency team, digital agency Pakistan, web development agency story, branding and marketing specialists, AI automation agency team"
        path="/about"
      />
      {/* Globe sits fixed behind the whole section, visible while this section is on screen */}
      <PinkGlobeBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero */}

        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">

            <SectionChip className="bg-black justify-center">
              Who We Are
            </SectionChip>

            <h1
              className="
            font-black
            text-2xl
            md:text-6xl
            leading-tight
            mt-5
            mb-6
          "
            >
              We're Not Just a Digital Agency.
              <br />
              We're Your
              <span className="gradient-text-pink">
                {' '}Creative Growth Partner
              </span>
            </h1>

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

            <h2
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
            </h2>
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
              Leadership
            </SectionChip>

            <h2
              className="
            text-3xl
            md:text-5xl
            font-black
            mt-4
          "
            >
              <span className="gradient-text-pink">
                The Founder
              </span>
              {' '}Diving The Vision.
            </h2>

          </div>

          <div
            className="
          flex
          flex-col
          md:flex-row
          gap-6
          justify-center
          align-center
        "
          >
            {team.map((member) => (
              member.founder === true && (
              <TeamCard
                key={member.name}
                member={member}
              />
            )))}
          </div>

        </div>
        <div className="mt-28">

          <div className="text-center mb-14">

            <SectionChip className="bg-black justify-center">
              Core Team
            </SectionChip>

            <h2
              className="
            text-3xl
            md:text-5xl
            font-black
            mt-4
          "
            >
              <span className="gradient-text-pink">
                {' '}Senior Specialists
              </span>
              , Built To Deliver.
            </h2>

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
          flex
          flex-col
          md:flex-row
          gap-6
          justify-center
          align-center
          flex-wrap
        "
          >
            {team.map((member) => (
              member.founder ===  undefined &&(<TeamCard
                key={member.name}
                member={member}
              />)
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
          border-primary-pink/50
          bg-gradient-to-r
          from-primary-pink/30
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