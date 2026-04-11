import { FadeIn } from '../components/FadeIn'

function PartnerMark({ src, alt, wide = false }) {
  return (
    <div className="shrink-0 w-fit max-w-full rounded-sm bg-white p-4 sm:p-5 shadow-sm ring-1 ring-black/5">
      <img
        src={src}
        alt={alt}
        className={
          wide
            ? 'block h-[3.5rem] sm:h-16 w-auto max-w-[min(100vw-4rem,22rem)] object-contain object-left'
            : 'block h-[3.25rem] sm:h-[3.75rem] w-auto max-w-[min(100vw-4rem,17rem)] object-contain object-left'
        }
      />
    </div>
  )
}

function PartnerSection({ title, logoSrc, logoAlt, logoWide, children, delay }) {
  return (
    <FadeIn delay={delay}>
      <article className="rounded-sm border border-slate-500/35 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] p-8 sm:p-10 lg:p-11">
        <header className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10 pb-8 mb-2 border-b border-slate-500/30">
          <h2 className="font-serif text-2xl sm:text-[1.7rem] text-white leading-snug tracking-tight !mb-0">{title}</h2>
          <PartnerMark src={logoSrc} alt={logoAlt} wide={logoWide} />
        </header>
        <div className="lcaf-prose-dark max-w-none !space-y-5 [&_ol]:!mt-6">{children}</div>
      </article>
    </FadeIn>
  )
}

export function Work() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="lcaf-page-title">Our Work</h1>

        <FadeIn>
          <div className="lcaf-prose-dark max-w-none text-[17px] sm:text-[17.5px] leading-[1.7]">
            <p>
              The <span className="lcaf-foundation-name">Lung Cancer Awareness Foundation</span> is building strategic
              partnerships with leading institutions to accelerate a new era in how lung cancer is understood, detected,
              and addressed. These partnerships reflect our commitment to bridge awareness, access, and innovation by
              bringing together national scale, clinical expertise, and community impact to change outcomes in lung
              cancer.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 sm:mt-14 space-y-12 sm:space-y-14">
          <PartnerSection
            title="American Cancer Society"
            logoSrc="/partner-acs.png"
            logoAlt="American Cancer Society"
            delay={100}
          >
            <p>
              The <span className="lcaf-foundation-name">Lung Cancer Awareness Foundation</span> has partnered with the
              American Cancer Society to launch the Accelerating Impact in Lung Cancer Fund — a dynamic, forward-looking
              initiative designed to expand access to screening, increase public awareness, and support groundbreaking
              research aimed at saving lives.
            </p>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 !mb-0">
              This partnership is focused on three critical priorities:
            </p>
            <ol className="list-decimal space-y-8 pl-6 marker:text-brand marker:font-semibold [&>li]:pl-2">
              <li>
                <p className="text-white font-semibold !mb-2 !mt-0">Expanding Awareness &amp; Screening</p>
                <p className="!mt-0">
                  Through national campaigns like I Love You, Get Screened and community-based activations in Los
                  Angeles, we are working to shift public perception, reduce stigma, and increase early detection—when
                  lung cancer is most treatable.
                </p>
              </li>
              <li>
                <p className="text-white font-semibold !mb-2 !mt-0">Advancing Research &amp; Discovery</p>
                <p className="!mt-0">
                  By supporting the American Cancer Society&apos;s leading research programs including large-scale
                  population studies and innovative scientific investigations conducted at the University of
                  Pennsylvania, City of Hope, Roswell Park Comprehensive Cancer Center, and the University of Colorado,
                  we are helping to unlock new insights into lung cancer risk, early detection, and outcomes, especially
                  among non-smokers.
                </p>
              </li>
              <li>
                <p className="text-white font-semibold !mb-2 !mt-0">Driving Equity in Access to Care</p>
                <p className="!mt-0">
                  This work prioritizes underserved communities where screening rates remain critically low and ensures
                  more people have access to lifesaving tools, information, and care.
                </p>
              </li>
            </ol>
          </PartnerSection>

          <PartnerSection
            title="USC Keck School of Medicine"
            logoSrc="/partner-keck.png"
            logoAlt="Keck School of Medicine of USC"
            logoWide
            delay={160}
          >
            <p>
              In partnership with the USC Keck School of Medicine&apos;s Division of Thoracic Surgery, the{' '}
              <span className="lcaf-foundation-name">Lung Cancer Awareness Foundation</span> is helping to advance a more
              precise and inclusive approach to lung cancer detection. Together, we are supporting the development of
              next-generation early detection strategies designed to better identify who should be screened — moving
              beyond traditional criteria to include environmental, genetic, and demographic factors.
            </p>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 !mb-0">
              This partnership is focused on three critical priorities:
            </p>
            <ol className="list-decimal space-y-8 pl-6 marker:text-brand marker:font-semibold [&>li]:pl-2">
              <li>
                <p className="text-white font-semibold !mb-2 !mt-0">Redefining Risk &amp; Early Detection</p>
                <p className="!mt-0">
                  Through innovative research and data modeling, we are expanding how lung cancer risk is understood —
                  shifting beyond smoking history to more accurately identify at-risk individuals across diverse
                  populations.
                </p>
              </li>
              <li>
                <p className="text-white font-semibold !mb-2 !mt-0">Advancing Clinical Research &amp; Innovation</p>
                <p className="!mt-0">
                  By supporting leading physicians and researchers at USC, this work contributes to next-generation
                  detection models and clinical insights with the potential to influence screening approaches nationwide.
                </p>
              </li>
              <li>
                <p className="text-white font-semibold !mb-2 !mt-0">Expanding Awareness &amp; Patient-Centered Care</p>
                <p className="!mt-0">
                  In parallel, this partnership supports efforts to increase awareness and strengthen patient support,
                  ensuring individuals are better informed, empowered, and supported at every stage of their cancer
                  journey.
                </p>
              </li>
            </ol>
          </PartnerSection>
        </div>
      </div>
    </section>
  )
}
