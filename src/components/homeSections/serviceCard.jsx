import { motion } from "framer-motion"

const ServiceCard = ({ service }) => {
  return (
    <motion.article
      whileHover={{
        y: -10,
        scale: 1.02
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]
        backdrop-blur-sm
        p-6
        md:p-7
        h-full
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-10
          group-hover:opacity-100
          transition-all
          duration-500
          bg-gradient-to-br
          from-primary-pink/15
          via-primary-pink/5
          to-transparent
        "
      />

      <div className="relative z-10">
        <div
          className="
            w-14
            h-14
            rounded-2xl
            bg-primary-pink/10
            border
            border-primary-pink/20
            flex
            items-center
            justify-center
            text-2xl
            mb-5
            transition-all
            duration-300
            group-hover:scale-110
          "
        >
          {service.icon}
        </div>

        <h3 className="text-lg font-bold mb-3">
          {service.title}
        </h3>

        <p className="text-sm text-text-light leading-relaxed">
          {service.subtitle}
        </p>

        
      </div>
    </motion.article>
  )
}

export default ServiceCard