import { useState } from 'react'
import { FadeIn } from '../components/FadeIn'

const fieldClass =
  'w-full rounded-sm border border-slate-500/70 bg-transparent px-4 py-3 text-[15px] sm:text-[16px] text-slate-100 placeholder:text-slate-500 shadow-none outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand'

export function ComingSoon() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()
    const newsletter = fd.get('newsletter') === 'on'
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nEmail list signup: ${newsletter ? 'Yes' : 'No'}\n\nMessage:\n${message}`
    )
    const subject = encodeURIComponent('LCAF — Website contact')
    window.location.href = `mailto:info@lungcancerawarenessfoundation.org?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand-light text-center mb-5">
            Coming soon
          </p>
          <p className="font-serif text-lg sm:text-xl text-white/90 text-center max-w-2xl mx-auto leading-snug mb-12 lg:mb-14">
            We&apos;re finishing the full Lung Cancer Awareness Foundation website. Until then, send us a message—we&apos;d
            love to hear from you.
          </p>
        </FadeIn>

        <FadeIn delay={60}>
          <div className="max-w-xl mx-auto">
            <h1 className="lcaf-page-title text-center mb-5">Contact Us</h1>
            <div className="flex justify-center mb-8">
              <div className="lcaf-rule" aria-hidden />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="cs-name" className="sr-only">
                  Name
                </label>
                <input
                  id="cs-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="cs-email" className="sr-only">
                  Email
                </label>
                <input
                  id="cs-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email*"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="cs-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="cs-message"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  className={`${fieldClass} min-h-[140px] resize-y`}
                />
              </div>

              <div className="flex items-start gap-3 pt-1">
                <input
                  id="cs-newsletter"
                  name="newsletter"
                  type="checkbox"
                  className="mt-1 size-4 shrink-0 rounded-sm border border-slate-500/80 bg-transparent accent-brand"
                />
                <label htmlFor="cs-newsletter" className="text-sm text-slate-400 leading-snug cursor-pointer">
                  Sign up for our email list for updates, promotions, and more.
                </label>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center min-w-[9rem] bg-white text-navy text-sm font-display font-bold uppercase tracking-[0.14em] px-10 py-3.5 rounded-sm transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  SEND
                </button>
              </div>
            </form>

            {submitted && (
              <p className="mt-6 text-center text-sm text-slate-500" role="status">
                If your email app didn&apos;t open, you can write us at{' '}
                <a
                  href="mailto:info@lungcancerawarenessfoundation.org"
                  className="text-brand-light hover:text-brand underline underline-offset-2"
                >
                  info@lungcancerawarenessfoundation.org
                </a>
                .
              </p>
            )}

            <p className="mt-10 text-center text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
              For press inquiries, contact{' '}
              <a
                href="mailto:press@lungcancerawarenessfoundation.org"
                className="text-slate-400 hover:text-brand-light underline underline-offset-2"
              >
                press@lungcancerawarenessfoundation.org
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
