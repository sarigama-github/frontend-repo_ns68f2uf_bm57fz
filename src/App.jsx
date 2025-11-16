import { useMemo, useRef } from 'react'
import Hero from './components/Hero'
import Offers from './components/Offers'
import WhoFor from './components/WhoFor'
import WhyExists from './components/WhyExists'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Countdown from './components/Countdown'

export default function App() {
  const offersRef = useRef(null)

  const scrollToOffers = () => {
    offersRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const openBooking = () => {
    const url = 'https://cal.com' // placeholder booking link
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Compute end of Black Friday weekend (Sunday 23:59:59 UTC)
  const countdownTarget = useMemo(() => {
    const now = new Date()
    const year = now.getUTCFullYear()
    const d = new Date(Date.UTC(year, 10, 1))
    while (d.getUTCDay() !== 5) d.setUTCDate(d.getUTCDate() + 1) // first Friday
    for (let i = 0; i < 3; i++) d.setUTCDate(d.getUTCDate() + 7) // reach 4th Friday
    const sunday = new Date(d)
    sunday.setUTCDate(d.getUTCDate() + 2)
    sunday.setUTCHours(23, 59, 59, 999)
    return sunday
  }, [])

  return (
    <div className="bg-white text-gray-900">
      {/* Floating announcement bar */}
      <div className="fixed top-0 inset-x-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mt-3 sm:mt-4 flex items-center justify-center rounded-xl border border-gray-200 bg-white/90 backdrop-blur px-3 py-2 shadow-sm">
            <div className="hidden sm:block text-xs sm:text-sm font-medium text-gray-900">Black Friday ends in</div>
            <div className="mx-3 sm:mx-4"><Countdown to={countdownTarget} /></div>
            <button onClick={scrollToOffers} className="text-xs sm:text-sm font-medium text-white bg-gray-900 hover:bg-black transition rounded-lg px-3 py-1.5">Shop deals</button>
          </div>
        </div>
      </div>

      {/* add top padding to account for bar */}
      <div className="pt-20">
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
    </div>
  )
}
