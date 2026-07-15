import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { services } from "../hooks/servicesData"
import SectionChip from "../components/common/SectionChip"
import ServiceCard from "../components/ServiceCard"
import ServiceModal from "../components/ServiceModal"
import SEO from "../components/common/SEO"

const Services = () => {
  const navigate = useNavigate()
  const { slug } = useParams()

  // Modal state is derived from the URL, not local state
  const selectedService = slug
    ? services.find((service) => service.id === slug) ?? null
    : null

  // If someone hits an invalid slug directly, fall back to the plain list
  useEffect(() => {
    if (slug && !selectedService) {
      navigate("/services", { replace: true })
    }
  }, [slug, selectedService, navigate])

  const openService = (service) => {
    navigate(`/services/${service.id}`)
  }

  const closeService = () => {
    navigate("/services")
  }

  const HeadingTag = selectedService ? "h2" : "h1"

  return (
    <section className="bg-dark-base min-h-screen py-24 md:py-32 px-4">

      <SEO
        title={selectedService ? selectedService.metaTitle : "Digital Agency Services | Web, App, AI & Marketing"}
        description={
          selectedService
            ? selectedService.metaDescription
            : "Explore Pixnix Digital's full-stack agency services: website development, mobile apps, AI chatbots, AI automation, SEO, branding, graphic design, video editing and social media management."
        }
        keywords={
          selectedService
            ? selectedService.keywords
            : "digital agency services, website development services, mobile app development, AI chatbot development, AI automation services, SEO services, branding and marketing agency, graphic design services, video editing services, social media management"
        }
        path={selectedService ? `/services/${selectedService.id}` : "/services"}
        jsonLd={
          selectedService
            ? {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: selectedService.title,
                name: selectedService.h1,
                description: selectedService.metaDescription,
                provider: {
                  "@type": "Organization",
                  name: "Pixnix Digital",
                  url: "https://pixnixdigital.com",
                },
                areaServed: "Worldwide",
              }
            : null
        }
      />

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center max-w-4xl mx-auto mb-16">

          <SectionChip className="bg-black justify-center">
            What We Do
          </SectionChip>

          <HeadingTag className="text-4xl md:text-6xl font-black mt-5 mb-6">
            Services That
            <span className="gradient-text-pink">
              {" "}Actually Move
            </span>
            {" "}the Needle
          </HeadingTag>

          <p className="text-text-light text-lg leading-relaxed">
            We cover the full creative and digital stack.
            One agency, every solution — no need to shop around.
          </p>

        </div>

        {/* Services overview grid */}

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onSelect={openService}
            />
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
              Tell us about your brand and goals —
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
                target="_blank"
                rel="noopener noreferrer"
                className="
              px-4
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

      {/* Service detail modal */}

      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={closeService}
          />
        )}
      </AnimatePresence>

    </section>
  )
}

export default Services
