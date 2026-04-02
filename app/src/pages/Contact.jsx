import { FadeIn } from '../components/FadeIn'
import { SectionHeader } from '../components/SectionHeader'

function ContactCard({ title, children }) {
  return (
    <div className="lcaf-card rounded-sm !p-7 h-full min-w-0">
      <h2 className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand mb-3">{title}</h2>
      <div className="text-slate-700 text-[15px] sm:text-[16px] min-w-0">{children}</div>
    </div>
  )
}

/** Keeps the full address on one line; scrolls horizontally on narrow cards. */
function MailtoLine({ email }) {
  return (
    <div className="min-w-0 overflow-x-auto overflow-y-hidden [scrollbar-width:thin]">
      <a
        href={`mailto:${email}`}
        className="text-brand font-semibold hover:underline whitespace-nowrap inline-block max-w-none"
      >
        {email}
      </a>
    </div>
  )
}

export function Contact() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader variant="dark" eyebrow="Contact Us" />

        <div className="grid md:grid-cols-3 gap-6 md:[&>*]:min-w-0">
          <FadeIn>
            <ContactCard title="General Questions & Partnership Opportunities">
              <MailtoLine email="info@lungcancerawarenessfoundation.org" />
            </ContactCard>
          </FadeIn>
          <FadeIn delay={70}>
            <ContactCard title="Media">
              <MailtoLine email="press@lungcancerawarenessfoundation.org" />
            </ContactCard>
          </FadeIn>
          <FadeIn delay={140}>
            <ContactCard title="Location">
              <p className="text-navy font-semibold">Los Angeles, CA</p>
            </ContactCard>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
