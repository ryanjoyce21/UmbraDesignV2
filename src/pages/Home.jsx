import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import Intro from '../components/home/Intro'
import Services from '../components/home/Services'
import FeaturedWork from '../components/home/FeaturedWork'
import Process from '../components/home/Process'
import TrustSignals from '../components/home/TrustSignals'
import CTA from '../components/home/CTA'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Umbra Design - Premium Websites for Irish Businesses</title>
        <meta
          name="description"
          content="Premium web design and development for Irish businesses. Fast turnaround, proven results."
        />
      </Helmet>
      <Hero />
      <Intro />
      <Services />
      <FeaturedWork />
      <Process />
      <TrustSignals />
      <CTA />
    </>
  )
}

export default Home

