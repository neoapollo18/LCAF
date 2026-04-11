import { FadeIn } from '../components/FadeIn'

export function Founder() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="mb-12 lg:mb-16 max-w-4xl font-serif text-white leading-tight">
          <span className="block text-2xl sm:text-3xl font-normal mb-3">Our Founder</span>
          <span className="block text-4xl sm:text-5xl md:text-[3rem] tracking-tight">Dionne Harmon</span>
        </h1>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <FadeIn className="lg:col-span-5">
            <div className="lcaf-panel p-3 sm:p-4 bg-slate-100 border-slate-200/90">
              <img
                src="/dionne-harmon.jpg"
                alt="Portrait of Dionne Harmon, founder of the Lung Cancer Awareness Foundation"
                className="w-full object-contain bg-slate-50"
              />
            </div>
          </FadeIn>

          <FadeIn delay={100} className="lg:col-span-7">
            <div className="lcaf-prose-dark max-w-none">
              <p>
                Dionne Harmon has spent her career helping to bring impactful stories to life. As an Emmy-winning
                television producer and president of Jesse Collins Entertainment, she has worked behind the scenes on
                major cultural moments, broken glass ceilings, and led teams with vision, focus, and integrity. Her
                professional journey has always been guided by the belief that meaningful work requires both artistry and
                responsibility.
              </p>
              <p>
                That sense of responsibility took on new meaning when Dionne was diagnosed with stage 3 lung cancer.
              </p>
              <p>
                Facing a serious health challenge brought clarity to what matters most: access to reliable information,
                strong medical advocacy, and a supportive community. Throughout her journey, she became increasingly aware
                of how much misinformation, stigma, and silence still surround lung cancer. She saw the need for earlier
                conversations, greater access to resources, and increased investment in research to improve detection,
                treatment, and outcomes.
              </p>
              <p>
                The <span className="lcaf-foundation-name">Lung Cancer Awareness Foundation</span> was born from that
                life-changing experience.
              </p>
              <p>
                What began as a deeply personal challenge evolved into a commitment to help others navigate theirs. For
                Dionne, this work is not about recognition. It is about responsibility. It is about using her voice and
                platform to open doors, support progress in research, share knowledge, and build a community committed to
                fighting this disease.
              </p>
              <p className="!mb-0">
                Through the Lung Cancer Awareness Foundation, Dionne continues her life&apos;s work in a new way —
                helping turn awareness into action, research into progress, and survival into support for others.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
