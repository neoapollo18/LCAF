import { useState } from 'react'
import { FadeIn } from '../components/FadeIn'

const fieldClass =
  'w-full rounded-sm border border-slate-500/70 bg-transparent px-4 py-3 text-[15px] sm:text-[16px] text-slate-100 placeholder:text-slate-500 shadow-none outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand'

export function ComingSoon() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  /** Sync handler only — async work in a void IIFE so the browser never performs a real form navigation (avoids blank tabs / reloads). */
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setError(null)

    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()
    const newsletter = fd.get('newsletter') === 'on'
    const company = String(fd.get('company') ?? '').trim()

    void (async () => {
      setSubmitting(true)
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message, newsletter, company }),
        })
        const data = await res.json().catch(() => ({}))
        if (!res.ok) {
          const base = data.error || 'Something went wrong. Please try again.'
          const extra = typeof data.detail === 'string' ? data.detail.trim().slice(0, 180) : ''
          throw new Error(extra ? `${base} ${extra}` : base)
        }
        setSubmitted(true)
        form.reset()
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong.')
      } finally {
        setSubmitting(false)
      }
    })()
  }

  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="flex justify-center mb-12 lg:mb-14">
            <img
              src="/fulllogo_transparent.png"
              alt="Lung Cancer Awareness Foundation"
              className="w-full max-w-96 sm:max-w-[28rem] md:max-w-[34rem] lg:max-w-[40rem] h-auto object-contain object-center"
              width={576}
              height={144}
              decoding="async"
            />
          </div>
        </FadeIn>

        <FadeIn delay={60}>
          <div className="max-w-xl mx-auto">
            <h1 className="lcaf-page-title text-center mb-5">Contact Us</h1>
            <div className="flex justify-center mb-8">
              <div className="lcaf-rule" aria-hidden />
            </div>

            <form method="post" onSubmit={handleSubmit} className="relative space-y-5" noValidate>
              {/* Honeypot — leave hidden; bots fill it and the API rejects */}
              <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
                <label htmlFor="cs-company">Company</label>
                <input id="cs-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>
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
                  Sign up for our email list for updates and more.
                </label>
              </div>

              {error && (
                <p className="text-sm text-red-400 text-center" role="alert">
                  {error}
                </p>
              )}

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center min-w-[9rem] bg-white text-navy text-sm font-display font-bold uppercase tracking-[0.14em] px-10 py-3.5 rounded-sm transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending…' : 'SEND'}
                </button>
              </div>
            </form>

            {submitted && (
              <p className="mt-6 text-center text-sm text-slate-400" role="status">
                Thank you — your message was received.
              </p>
            )}

            <p className="mt-10 text-center text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
              For more information, contact{' '}
              <a
                href="mailto:press@lungcancerawarenessfoundation.org"
                className="text-slate-400 hover:text-brand-light underline underline-offset-2"
              >
                info@lungcancerawarenessfoundation.org
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
