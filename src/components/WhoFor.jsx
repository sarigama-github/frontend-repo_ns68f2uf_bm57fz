import { motion } from 'framer-motion'

export default function WhoFor() {
  const items = [
    {
      title: 'Recruiters & Hiring Teams',
      desc: 'Shortlist faster. Reduce manual CV filtering.'
    },
    {
      title: 'Customer Support & Business Owners',
      desc: 'Automate repeated questions and stop missing inquiries.'
    },
    {
      title: 'Restaurant Owners',
      desc: 'Offload orders, reservations, and FAQs to a 24/7 AI assistant.'
    },
    {
      title: 'Founders & Operators',
      desc: 'Adopt AI quickly, affordably, and without the complexity.'
    }
  ]

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Is This Black Friday Offer Right For You?</h2>
          <p className="mt-3 text-gray-600">If you deal with repetitive communication, missed calls, or heavy screening workloads, these assistants fit perfectly.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
