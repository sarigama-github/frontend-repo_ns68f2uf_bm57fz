import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'How long are these offers available?',
    a: 'Only during the Black Friday period. Prices return to normal afterward.'
  },
  {
    q: 'Do I need a long-term contract?',
    a: 'No. You continue only if it delivers value.'
  },
  {
    q: 'Can I activate multiple offers?',
    a: 'Yes — all offers can be combined.'
  },
  {
    q: 'Is onboarding difficult?',
    a: 'No. Setup is guided and fast.'
  },
  {
    q: 'Does Alphainterface integrate with my tools?',
    a: 'Yes — email systems, ATS, CRMs, calendars, and more.'
  }
]

export default function FAQ() {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Black Friday FAQ</h2>
        </div>
        <div className="mt-10 divide-y divide-gray-200 border border-gray-200 rounded-2xl bg-white">
          {faqs.map((f, i) => (
            <motion.details key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="p-6" open={i===0}>
              <summary className="cursor-pointer font-medium text-gray-900 list-none flex items-center justify-between">
                {f.q}
                <span className="text-gray-400 text-sm">(toggle)</span>
              </summary>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}
