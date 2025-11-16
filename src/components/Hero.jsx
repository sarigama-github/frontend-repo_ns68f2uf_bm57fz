import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Countdown from './Countdown'

export default function Hero({ onPrimary, onSecondary }) {
  // Compute end of Black Friday weekend (Sunday 23:59:59 UTC)
  const now = new Date()
  const year = now.getUTCFullYear()
  const novFirst = new Date(Date.UTC(year, 10, 1))
  while (novFirst.getUTCDay() !== 5) novFirst.setUTCDate(novFirst.getUTCDate() + 1) // first Friday in Nov
  for (let i = 0; i < 3; i++) novFirst.setUTCDate(novFirst.getUTCDate() + 7) // 4th Friday
  const sundayEnd = new Date(novFirst)
  sundayEnd.setUTCDate(novFirst.getUTCDate() + 2)
  sundayEnd.setUTCHours(23, 59, 59, 999)

  return (
    <div className="relative overflow-hidden bg-white">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient wash for readability */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-white" />

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white/70 backdrop-blur text-xs text-gray-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Black Friday — Ends Soon
            </div>

            {/* Headline */}
            <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent">50% Off AI Assistants for 2 Years</span>
              <span className="block text-gray-900">Black Friday Only</span>
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Plus: AI Phone Assistant at $2/month and AI Email Assistant at $4.99/month. Bring practical AI into your business at the lowest prices of the year.
            </p>

            {/* Countdown row */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur px-4 py-3 inline-flex items-center gap-4 shadow-sm">
              <div className="text-xs font-medium text-gray-900">Sale ends in</div>
              <Countdown to={sundayEnd} />
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={onPrimary} className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm md:text-base font-medium shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:bg-black transition transform">
                Claim Black Friday Deal
              </button>
              <button onClick={onSecondary} className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm md:text-base font-medium hover:bg-gray-50 transition">
                Book a Quick Call
              </button>
            </div>

            {/* Trust cues */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> No long-term commitment
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Guided setup included
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Combine offers freely
              </div>
            </div>

            <p className="mt-3 text-xs text-gray-500">Limited-time Black Friday pricing. Conditions apply.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
