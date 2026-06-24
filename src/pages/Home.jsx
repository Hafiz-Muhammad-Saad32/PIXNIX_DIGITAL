import { motion } from 'framer-motion'
import ScrollReveal from '../components/animations/ScrollReveal.jsx'
import Hero from '../components/homeSections/Hero.jsx'
import About from '../components/homeSections/about.jsx'
import Service from '../components/homeSections/service.jsx'
import Portfolio from '../components/homeSections/Work.jsx'
import CTA from '../components/homeSections/CTA.jsx'

const Home = () => {
    return (
        <div>          
            <Hero />
            <ScrollReveal>
                <div className="divider-line w-full" />
            </ScrollReveal>
            <About />
            <ScrollReveal>
                <div className="divider-line w-full" />
            </ScrollReveal>
            <Service />
            <ScrollReveal>
                <div className="divider-line w-full" />
            </ScrollReveal>
            <Portfolio />
            <ScrollReveal>
                <div className="divider-line w-full" />
            </ScrollReveal>
            <ScrollReveal>
                <div className="divider-line w-full" />
            </ScrollReveal>
            <CTA />
            <ScrollReveal>
                <div className="divider-line w-full" />
            </ScrollReveal>
        </div>
    )
}
export default Home;