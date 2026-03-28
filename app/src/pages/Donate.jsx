import { useState } from 'react'
import { FadeIn } from '../components/FadeIn'
import { SectionHeader } from '../components/SectionHeader'

export function Donate() {
  const [amount, setAmount] = useState(100)
  const [frequency, setFrequency] = useState('once')

  const labelSuffix = frequency === 'monthly' ? '/month' : ''

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          <FadeIn>
            <SectionHeader
              eyebrow="Donate"
              title="Support Our Work"
              subtitle="Your gift fuels education, screening awareness, research, and support for patients and families."
            />
            <div className="lcaf-prose max-w-none">
              <p>
                Lung cancer remains one of the most urgent public health challenges worldwide. Late detection, stigma,
                and unequal access to care continue to affect outcomes.
              </p>
              <p className="text-navy font-semibold">With donor support, we are committed to:</p>
              <ul className="space-y-2 list-none pl-0 !mt-3">
                {[
                  'Expanding public education around lung health and risk awareness',
                  'Promoting early detection and proactive screening initiatives',
                  'Funding and supporting innovative lung cancer research',
                  'Reducing stigma through informed public dialogue',
                  'Partnering with medical and research institutions to advance equitable care',
                ].map((t) => (
                  <li key={t} className="flex gap-3 items-start">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" aria-hidden />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p>Every contribution helps turn awareness into action.</p>
              <p className="text-navy font-semibold !mb-0">We are saving lives — one breath at a time.</p>
            </div>
            <div className="mt-8 lcaf-panel p-5">
              <p className="text-sm text-slate-600 leading-relaxed">
                The Lung Cancer Awareness Foundation is a qualified 501(c)(3) tax-exempt organization. Tax ID Number:
                33-4280122.
              </p>
            </div>
            <p className="text-sm text-slate-500 mt-6 border-l-4 border-slate-200 pl-4 leading-relaxed">
              <span className="font-semibold text-slate-700">How giving works:</span> This form previews your donation
              experience. Connecting a payment processor (e.g. Stripe or PayPal) to your bank account enables secure
              online gifts. Until then, this button signals intent — we&apos;ll follow up with next steps.
            </p>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="lcaf-panel p-8 lg:p-10 lg:sticky lg:top-28 rounded-sm">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
                <div>
                  <h2 className="font-serif text-2xl text-navy">Make a Gift</h2>
                  <p className="text-sm text-slate-500 mt-1">One-time or monthly</p>
                </div>
                <div className="flex rounded-sm border border-slate-200 p-1 bg-slate-50" role="group" aria-label="Donation frequency">
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
                <p className="text-sm text-slate-600 mb-6 -mt-2">Sustaining gifts help us plan programs year-round.</p>
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

              <p className="text-center text-xs text-slate-500 mt-4">Secure payment · Tax-deductible</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
