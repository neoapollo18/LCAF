import { FadeIn } from '../components/FadeIn'
import { SectionHeader } from '../components/SectionHeader'

export function Founder() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader eyebrow="Our Founder" title="Dionne Harmon" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <FadeIn className="lg:col-span-5">
            <div className="lcaf-panel p-3 sm:p-4">
              <img
                src="/dionne-harmon.jpg"
                alt="Portrait of Dionne Harmon, founder of the Lung Cancer Awareness Foundation"
                className="w-full object-contain bg-slate-50"
              />
            </div>
          </FadeIn>

          <FadeIn delay={100} className="lg:col-span-7">
            <div className="lcaf-prose max-w-none">
              <p>
                Dionne Harmon has spent her career helping to bring impactful stories to life. As an Emmy-winning
                television producer and president of Jesse Collins Entertainment, she has worked behind the scenes on
                major cultural moments, leading teams with vision, focus, and integrity.
              </p>
              <p>
                That sense of responsibility took on new meaning when Dionne was diagnosed with stage 3 lung cancer.
              </p>
              <p>
                Facing a serious health challenge brought clarity to what matters most: access to reliable information,
                strong medical advocacy, and a supportive community. Throughout her journey, she became increasingly
                aware of how much misinformation, stigma, and silence still surround lung cancer.
              </p>
              <p className="font-semibold text-navy">The Lung Cancer Awareness Foundation was born from that life-changing experience.</p>
              <p>
                What began as a deeply personal challenge evolved into a commitment to help others navigate theirs. For
                Dionne, this work is not about recognition — it is about responsibility.
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
