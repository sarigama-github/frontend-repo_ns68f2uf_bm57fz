import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onPrimary, onSecondary }) {
  // Set countdown target to Black Friday weekend end (Sunday 11:59 PM UTC)
  const target = new Date()
  const year = target.getUTCFullYear()
  // Assume Black Friday is the fourth Friday of November
  const fourthFriday = (function () {
    const d = new Date(Date.UTC(year, 10, 1)) // November 1st UTC
    let count = 0
    while (d.getUTCDay() !== 5) d.setUTCDate(d.getUTCDate() + 1)
    while (count < 3) {
      d.setUTCDate(d.getUTCDate() + 7)
      count++
    }
    return d
  })()
  const sundayEnd = new Date(fourthFriday)
  sundayEnd.setUTCDate(fourthFriday.getUTCDate() + 2)
  sundayEnd.setUTCHours(23, 59, 59, 999)

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white" />
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white/70 backdrop-blur text-xs text-gray-700">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              Black Friday — Limited Time Only
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-gray-900">
              50% Off AI Assistants for 2 Years — Black Friday Only
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Plus: AI Phone Assistant at $2/month and AI Email Assistant at $4.99/month. Bring practical AI into your business at the lowest prices of the year.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={onPrimary} className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm md:text-base font-medium shadow-sm hover:bg-black transition">
                Claim Black Friday Deal
              </button>
              <button onClick={onSecondary} className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm md:text-base font-medium hover:bg-gray-50 transition">
                Book a Quick Call
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-500">Limited-time Black Friday pricing. Conditions apply.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
