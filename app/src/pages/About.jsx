import { FadeIn } from '../components/FadeIn'

export function About() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="lcaf-page-title">About Us</h1>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <FadeIn>
            <div className="lcaf-prose-dark max-w-none">
              <p>
                The Lung Cancer Awareness Foundation is dedicated to improving outcomes for individuals and families
                affected by lung cancer through education, early detection, research, advocacy, and support.
              </p>
              <p>
                Founded by Dionne Harmon following her own lung cancer diagnosis, the foundation was created to address
                the gaps that many patients encounter — including limited awareness, persistent stigma, and unequal
                access to reliable information and care. What began as a deeply personal journey has evolved into a
                broader commitment to ensuring that no one faces lung cancer without the resources and support they need.
              </p>
              <p>
                Our work focuses on increasing public understanding of lung health, promoting proactive screening and
                early detection, and supporting research that advances diagnosis, treatment, and long-term outcomes.
                Through partnerships with healthcare providers, researchers, and community organizations, the foundation
                works to expand access to knowledge, strengthen support systems, and contribute to more equitable care.
              </p>
              <p>
                At its core, the Lung Cancer Awareness Foundation is grounded in the belief that awareness leads to
                action — and action into tangible results.
              </p>
              <p className="text-white font-semibold !mb-0">Saving lives. One breath at a time.</p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <figure className="rounded-sm border border-slate-200/90 bg-slate-100 p-8 lg:p-10 shadow-sm border-l-4 border-l-brand">
              <span className="font-serif text-6xl text-brand/30 leading-none block mb-2" aria-hidden>
                &ldquo;
              </span>
              <blockquote>
                <p className="text-xl lg:text-2xl text-navy leading-relaxed font-serif">
                  We are committed to changing how lung cancer is understood, detected, and experienced — by expanding
                  awareness, advancing research, and strengthening support at every stage of the journey.
                </p>
              </blockquote>
              <div className="mt-8 pt-6 border-t border-slate-300/80" aria-hidden />
            </figure>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
