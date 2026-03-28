import { FadeIn } from '../components/FadeIn'
import { SectionHeader } from '../components/SectionHeader'

export function About() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="About Us"
          title="The Lung Cancer Awareness Foundation"
          subtitle="Education, early detection, research, advocacy, and support for everyone touched by lung cancer."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <FadeIn>
            <div className="lcaf-prose max-w-none">
              <p>
                The Lung Cancer Awareness Foundation is dedicated to improving outcomes for individuals and families
                affected by lung cancer through education, early detection, research, advocacy, and support.
              </p>
              <p>
                Founded by Dionne Harmon following her own lung cancer diagnosis, the foundation was created to address
                the gaps that many patients encounter — including limited awareness, persistent stigma, and unequal
                access to reliable information and care.
              </p>
              <p>
                Our work focuses on increasing public understanding of lung health, promoting proactive screening and
                early detection, and supporting research that advances diagnosis, treatment, and long-term outcomes.
              </p>
              <p>At its core, we believe that awareness leads to action — and action into tangible results.</p>
              <p className="text-navy font-semibold !mb-0">Saving lives. One breath at a time.</p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <figure className="lcaf-panel p-8 lg:p-10 border-l-4 border-l-brand">
              <span className="font-serif text-6xl text-brand/25 leading-none block mb-2" aria-hidden>
                &ldquo;
              </span>
              <blockquote>
                <p className="text-xl lg:text-2xl text-navy leading-relaxed font-serif">
                  We are committed to changing how lung cancer is understood, detected, and experienced — by expanding
                  awareness, advancing research, and strengthening support at every stage of the journey.
                </p>
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-slate-200">
                <span className="text-[11px] font-display font-semibold uppercase tracking-[0.18em] text-brand">
                  Our commitment
                </span>
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
