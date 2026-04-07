import { useState } from 'react'
import { FadeIn } from '../components/FadeIn'

const COMMITMENTS = [
  'Expanding public education around lung health and risk awareness',
  'Promoting early detection and proactive screening initiatives',
  'Funding and supporting innovative lung cancer research',
  'Reducing stigma through informed public dialogue',
  'Partnering with medical and research institutions to advance equitable care',
]

export function Donate() {
  const [amount, setAmount] = useState(100)
  const [frequency, setFrequency] = useState('once')

  const labelSuffix = frequency === 'monthly' ? '/month' : ''

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          <FadeIn>
            <h1 className="lcaf-page-title !mb-8">Support Our Work</h1>

            <div className="lcaf-prose-dark max-w-none">
              <p>
                Lung cancer remains one of the most urgent public health challenges worldwide. Despite advances in
                medicine, late detection, stigma, and unequal access to care continue to affect outcomes.
              </p>
              <p>
                The Lung Cancer Awareness Foundation was established to address these challenges through a comprehensive
                approach that includes education, early detection advocacy, patient support, and research investment.
              </p>
              <p className="text-white font-semibold !mb-3">With donor support, we are committed to:</p>
              <ul className="space-y-2 list-none pl-0 !mt-0 !mb-6">
                {COMMITMENTS.map((t) => (
                  <li key={t} className="flex gap-2 items-start text-slate-300">
                    <span className="shrink-0 font-sans" aria-hidden>
                      •
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p>Every contribution fuels measurable progress.</p>
              <p>Together, we are not only raising awareness. We are advancing solutions.</p>
              <p className="text-white font-semibold !mb-0">We are saving lives — one breath at a time.</p>
            </div>

            <div className="mt-8 rounded-sm border border-slate-200/90 bg-slate-100 p-5 shadow-sm">
              <p className="text-sm text-slate-600 leading-relaxed">
                The Lung Cancer Awareness Foundation is a qualified 501(c)(3) tax-exempt organization. Tax ID Number:
                33-4280122.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="rounded-sm border border-slate-200/90 bg-slate-100 p-8 lg:p-10 lg:sticky lg:top-28 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
                <div>
                  <h2 className="font-serif text-2xl text-navy">Make a Gift</h2>
                  <p className="text-sm text-slate-500 mt-1">One-time or monthly</p>
                </div>
                <div className="flex rounded-sm border border-slate-200 p-1 bg-white/80" role="group" aria-label="Donation frequency">
                  <button
                    type="button"
                    onClick={() => setFrequency('once')}
                    className={`px-4 py-2 text-[11px] font-display font-bold uppercase tracking-wide rounded-sm transition-colors ${
                      frequency === 'once' ? 'bg-white text-navy shadow-sm border border-slate-200' : 'text-slate-600'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`px-4 py-2 text-[11px] font-display font-bold uppercase tracking-wide rounded-sm transition-colors ${
                      frequency === 'monthly' ? 'bg-white text-navy shadow-sm border border-slate-200' : 'text-slate-600'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {frequency === 'monthly' && (
                <p className="text-sm text-slate-600 mb-6 -mt-2">Become a monthly donor and make a continuous impact.</p>
              )}

              <p className="text-[11px] font-display font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Suggested amounts
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[50, 100, 250, 500].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setAmount(value)}
                    className={`py-3.5 font-display font-bold text-sm rounded-sm border transition-colors ${
                      amount === value
                        ? 'bg-brand text-white border-brand'
                        : 'bg-white text-navy border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    ${value}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label htmlFor="other-amt" className="block text-[11px] font-display font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Other amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input
                    id="other-amt"
                    type="number"
                    min={1}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full pl-8 pr-3 py-3 border border-slate-200 rounded-sm focus:border-brand focus:ring-0 outline-none text-lg text-navy bg-white"
                  />
                </div>
              </div>

              <button
                type="button"
                className="w-full rounded-sm bg-brand hover:bg-brand-dark text-white font-display font-bold uppercase tracking-[0.12em] py-3.5 text-sm transition-colors"
              >
                {frequency === 'monthly' ? `Give $${amount}${labelSuffix}` : `Donate $${amount}`}
              </button>

              <p className="text-center text-xs text-slate-500 mt-4">Tax-deductible to the extent allowed by law.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
