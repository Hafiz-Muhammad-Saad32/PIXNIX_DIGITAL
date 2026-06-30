import { motion } from "framer-motion"
import { services } from "../hooks/servicesData"
import SectionChip from "../components/common/SectionChip"

const Services = () => {
  return (
    <section className="bg-dark-base min-h-screen py-24 md:py-32 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <SectionChip className="bg-black justify-center">
            What We Do
          </SectionChip>

          <h1 className="text-4xl md:text-6xl font-black mt-5 mb-6">
            Services That
            <span className="gradient-text-pink">
              {" "}Actually Move
            </span>
            {" "}the Needle
          </h1>

          <p className="text-text-light text-lg leading-relaxed">
            We cover the full creative and digital stack.
            One agency, every solution no need to shop around.
          </p>

        </div>

        {/* Services */}

        <div className="space-y-8">

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5
              }}
              className="
            card-base
            p-8
            md:p-10
            overflow-hidden
            group
          "
            >

              <div className="grid lg:grid-cols-2 gap-10">

                <div>

                  <div className="text-5xl mb-5">
                    {service.icon}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black mb-3">
                    {service.title}
                  </h2>

                  <h3 className="text-primary-pink text-xl font-semibold mb-5">
                    {service.subtitle}
                  </h3>

                  <p className="text-text-light leading-relaxed">
                    {service.description}
                  </p>

                </div>

                <div>

                  <h4 className="font-bold text-lg mb-5">
                    What's Included
                  </h4>

                  <ul className="space-y-4">

                    {service.includes.map((item, i) => (
                      <li
                        key={i}
                        className="
                      flex
                      gap-3
                      items-start
                      text-text-light
                    "
                      >
                        <span className="text-primary-pink">
                          ✓
                        </span>

                        {item}
                      </li>
                    ))}

                  </ul>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}

        <div className="mt-24">

          <div
            className="
          rounded-3xl
          border
          border-primary-pink/20
          bg-gradient-to-r
          from-primary-pink/10
          to-transparent
          p-10
          md:p-16
          text-center
        "
          >
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Not Sure Which Service You Need?
            </h2>

            <p className="text-text-light max-w-2xl mx-auto mb-8">
              Tell us about your brand and goals 
              we'll map out exactly what will move
              the needle for you.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">

              <a
                href="/contact"
                className="
              px-4
              py-2
              md:px-8
              md:py-4
              rounded-full
              bg-primary-pink
              font-semibold
            "
              >
                Book a Free Strategy Call
              </a>

              <a
                href="https://wa.me/923093210056"
                variant="primary"
                target="_blank" rel="noopener noreferrer"
                external
                className="
              px-1
              py-2
              md:px-8
              md:py-4
              rounded-full
              border
              border-white/20
              font-semibold
            "
              >
                WhatsApp Us Now
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Services
