import Hero from '../components/homeSections/Hero.jsx'
import About from '../components/homeSections/about.jsx'
import Service from '../components/homeSections/service.jsx'
import Portfolio from '../components/homeSections/Work.jsx'
import CTA from '../components/homeSections/CTA.jsx'

const Home = () => {
    return (
        <div loading="lazy" decoding="async" className="min-h-screen bg-[url('/img/bg1.webp')] md:bg-[url('/img/bg.webp')] overflow-hidden object-fill bg-cover bg-center bg-fixed">
            <Hero />
            <About />
            <Service />
            <Portfolio />
            <CTA />
        </div>
    )
}
export default Home;