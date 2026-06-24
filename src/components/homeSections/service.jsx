import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { services } from "../../hooks/servicesData"
import ServiceCard from "./serviceCard"
import SectionChip from "../common/SectionChip"



const Services = () => {
  return (
    <section className="py-20 lg:py-28 px-5">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <SectionChip className= "bg-black justify-center">
            Services
          </SectionChip>

          <h2 className="mt-5 text-4xl md:text-5xl font-black">
            What We Can
            <span className="gradient-text-pink">
              {" "}Build For You
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-text-light">
            A focused selection of our highest impact services.
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-6
          "
        >
          {services.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <Link to="/services">
            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.97
              }}
              className="
                px-8
                py-4
                rounded-full
                bg-gradient-pink
                font-semibold
                shadow-lg
              "
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services