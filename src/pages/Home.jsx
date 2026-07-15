import Hero from '../components/homeSections/Hero.jsx'
import About from '../components/homeSections/about.jsx'
import Service from '../components/homeSections/service.jsx'
import Portfolio from '../components/homeSections/Work.jsx'
import CTA from '../components/homeSections/CTA.jsx'
import SEO from '../components/common/SEO.jsx'

const Home = () => {
    return (
        <div loading="lazy" decoding="async" className="min-h-screen bg-[url('/img/bg1.webp')] md:bg-[url('/img/bg.webp')] overflow-hidden object-fill bg-cover bg-center bg-fixed">
            <SEO
                title="Pixnix Digital - Premium Creative Digital Agency"
                description="Transform your brand with premium creative digital solutions. We specialize in Branding, Web Development, AI Agents, Social Media & Marketing. 150+ projects delivered. 98% client satisfaction."
                keywords="digital agency, web development company, branding agency, AI automation agency, social media marketing agency, creative design agency, digital agency Pakistan"
                path="/"
            />
            <Hero />
            <About />
            <Service />
            <Portfolio />
            <CTA />
        </div>
    )
}
export default Home;