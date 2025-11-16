import { motion } from 'framer-motion'

export default function WhyExists({ onCTA }) {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-gray-900">Why This Black Friday Offer Exists</motion.h2>
        <p className="mt-4 text-gray-600">
          AI often feels expensive or complicated. These deals make it simple and low-risk to try real AI assistants inside your business without long commitments. If it works for you, keep it. If not, walk away with clarity.
        </p>
        <div className="mt-8">
          <button onClick={onCTA} className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-6 py-3 font-medium hover:bg-black transition">Choose Your Black Friday Offer</button>
        </div>
      </div>
    </section>
  )
}
