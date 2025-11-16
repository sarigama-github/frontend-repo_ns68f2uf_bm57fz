import { motion } from 'framer-motion'
import { Phone, Mail, Users, Utensils } from 'lucide-react'

function OfferCard({ icon: Icon, title, price, bullets, cta }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-xl bg-gray-900 text-white flex items-center justify-center">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-gray-600">{price}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="mt-6">
        <button className="w-full rounded-lg bg-gray-900 text-white py-3 font-medium hover:bg-black transition">{cta}</button>
      </div>
    </motion.div>
  )
}

export default function Offers() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Black Friday Deals You Won’t See Again
          </h2>
          <p className="mt-3 text-gray-600">
            Unlock the assistants that eliminate your most repetitive workload.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <OfferCard
            icon={Phone}
            title="AI Phone Assistant"
            price="$2/month"
            bullets={[
              '24/7 call handling',
              'Smart, natural responses',
              'Lead capture & follow-up',
            ]}
            cta="Activate AI Phone Assistant"
          />
          <OfferCard
            icon={Mail}
            title="AI Email Assistant"
            price="$4.99/month"
            bullets={[
              'Automated responses',
              'Categorization & triage',
              'Brand-consistent tone',
            ]}
            cta="Activate AI Email Assistant"
          />
          <OfferCard
            icon={Users}
            title="AI Recruitment Assistant"
            price="50% off for 2 years"
            bullets={[
              'CV screening & ranking',
              'Missing + transferable skill detection',
              'AI-led candidate interactions',
            ]}
            cta="Claim Recruitment Assistant Offer"
          />
          <OfferCard
            icon={Utensils}
            title="AI Restaurant Assistant"
            price="50% off for 2 years"
            bullets={[
              'Voice & text order handling',
              'Instant FAQs',
              'Works round-the-clock',
            ]}
            cta="Claim Restaurant Assistant Offer"
          />
        </div>
        <p className="mt-6 text-xs text-gray-500">Note: Conditions apply.</p>
      </div>
    </section>
  )
}
