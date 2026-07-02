import { motion } from "framer-motion"

const ServiceCard = ({ service, index, onSelect }) => {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(service)}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
      }}
      whileHover={{
        y: -6,
      }}
      whileTap={{
        scale: 0.98,
      }}
      aria-haspopup="dialog"
      className="
        card-base
        group
        w-full
        text-left
        p-6
        md:p-7
        rounded-2xl
        transition-colors
        duration-300
        hover:border-primary-pink/60
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary-pink/60
      "
    >
      <div
        className="
          w-12
          h-12
          rounded-xl
          bg-primary-pink/10
          flex
          items-center
          justify-center
          text-2xl
          mb-5
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:-rotate-3
          group-hover:bg-primary-pink/20
        "
      >
        {service.icon}
      </div>

      <h3 className="text-lg font-bold mb-2">
        {service.title}
      </h3>

      <p className="text-text-light text-sm leading-relaxed">
        {service.subtitle}
      </p>

      <span
        className="
          inline-flex
          items-center
          gap-2
          text-primary-pink
          text-sm
          font-semibold
          mt-5
          opacity-80
          group-hover:opacity-100
          transition-opacity
        "
      >
        Learn more
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </motion.button>
  )
}

export default ServiceCard
