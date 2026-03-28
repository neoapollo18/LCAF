import { FadeIn } from '../components/FadeIn'
import { SectionHeader } from '../components/SectionHeader'

function ContactCard({ title, children }) {
  return (
    <div className="lcaf-card rounded-sm !p-7 h-full">
      <h2 className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand mb-3">{title}</h2>
      <div className="text-slate-700 text-[16px]">{children}</div>
    </div>
  )
}

export function Contact() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Contact Us"
          subtitle="For general questions, partnership opportunities, or press inquiries."
        />

        <div className="grid md:grid-cols-3 gap-6">
          <FadeIn>
            <ContactCard title="General Questions & Partnership Opportunities">
              <a
                href="mailto:info@lungcancerawarenessfoundation.org"
                className="text-brand font-semibold hover:underline break-all"
              >
                info@lungcancerawarenessfoundation.org
              </a>
            </ContactCard>
          </FadeIn>
          <FadeIn delay={70}>
            <ContactCard title="Media">
              <a
                href="mailto:press@lungcancerawarenessfoundation.org"
                className="text-brand font-semibold hover:underline break-all"
              >
                press@lungcancerawarenessfoundation.org
              </a>
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
