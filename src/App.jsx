import { useRef } from 'react'
import Hero from './components/Hero'
import Offers from './components/Offers'
import WhoFor from './components/WhoFor'
import WhyExists from './components/WhyExists'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

export default function App() {
  const offersRef = useRef(null)

  const scrollToOffers = () => {
    offersRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const openBooking = () => {
    const url = 'https://cal.com' // placeholder booking link
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-white text-gray-900">
      <Hero onPrimary={scrollToOffers} onSecondary={openBooking} />

      <div ref={offersRef}>
        <Offers />
      </div>

      <WhyExists onCTA={scrollToOffers} />
      <WhoFor />
      <FAQ />
      <FinalCTA />

      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Alphainterface. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
