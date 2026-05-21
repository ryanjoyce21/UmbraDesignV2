import SEO from '../components/shared/SEO'
import Hero from '../components/home/Hero'
import Intro from '../components/home/Intro'
import Services from '../components/home/Services'
import FeaturedWork from '../components/home/FeaturedWork'
import Process from '../components/home/Process'
import TrustSignals from '../components/home/TrustSignals'
import CTA from '../components/home/CTA'

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Umbra Design',
  url: 'https://www.umbradesign.ie',
  image: 'https://www.umbradesign.ie/og-image.jpg',
  description:
    'Premium web design and development for Irish businesses. Fast turnaround, proven results.',
  email: 'ryan@umbradesign.ie',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dublin',
    addressCountry: 'IE',
  },
  areaServed: { '@type': 'Country', name: 'Ireland' },
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Development' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Booking Systems' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brochure Websites' } },
  ],
}

const Home = () => {
  return (
    <>
      <SEO
        title="Umbra Design - Premium Websites for Irish Businesses"
        description="Premium web design and development for Irish businesses. Fast turnaround, proven results."
        path="/"
        jsonLd={homeJsonLd}
      />
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

