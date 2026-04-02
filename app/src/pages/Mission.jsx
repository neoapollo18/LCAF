import { FadeIn } from '../components/FadeIn'

export function Mission() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="sr-only">Our Mission</h1>
          <p className="inline-flex items-center justify-center gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-light mb-8">
            <span className="lcaf-rule" aria-hidden />
            Our Mission
            <span className="lcaf-rule" aria-hidden />
          </p>
          <div className="lcaf-prose-dark text-left md:text-center max-w-none md:max-w-3xl mx-auto !space-y-5">
            <p>
              The Lung Cancer Awareness Foundation is committed to expanding education, accelerating research, promoting
              early detection, and strengthening support systems for those impacted by lung cancer. We work to ensure that
              scientific advancement, public awareness, and patient advocacy move forward together.
            </p>
            <p>
              We envision a future where lung cancer is detected earlier, researched more deeply, discussed openly, and
              treated equitably — where every individual has access to the knowledge, screening, scientific advancements,
              and support needed to improve outcomes and quality of life.
            </p>
            <p className="text-white font-semibold !mb-0">Our goal is to save lives – one breath at a time.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <FadeIn delay={0}>
            <article className="lcaf-card h-full flex flex-col border-t-4 border-t-brand rounded-sm">
              <h2 className="font-display font-bold text-navy text-lg mb-4">Awareness</h2>
              <p className="text-slate-600 leading-relaxed flex-1 text-[16px]">
                Increasing awareness of lung cancer is essential to improving outcomes. Misconceptions and stigma often
                delay important conversations and prevent people from seeking timely care. By providing accurate
                information and encouraging open dialogue, we can help individuals better understand their risk, recognize
                potential signs, and make informed decisions about their health.
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={100}>
            <article className="lcaf-card h-full flex flex-col border-t-4 border-t-brand rounded-sm">
              <h2 className="font-display font-bold text-navy text-lg mb-4">Early Detection</h2>
              <p className="text-slate-600 leading-relaxed flex-1 text-[16px]">
                Early detection plays a critical role in saving lives. Lung cancer is often diagnosed at a later stage,
                when treatment options may be more limited. When identified earlier, there are more options, more time,
                and a greater chance of improved outcomes. Expanding awareness around screening and encouraging proactive
                health decisions can make a meaningful difference.
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={200}>
            <article className="lcaf-card h-full flex flex-col border-t-4 border-t-brand rounded-sm">
              <h2 className="font-display font-bold text-navy text-lg mb-4">Research</h2>
              <p className="text-slate-600 leading-relaxed flex-1 text-[16px]">
                Ongoing research is essential to advancing the prevention, detection, and treatment of lung cancer.
                Investment in research helps drive innovation, improve survival rates, and expand the options available
                to patients. By supporting scientific progress, we can contribute to more effective care today and better
                outcomes for future generations.
              </p>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
