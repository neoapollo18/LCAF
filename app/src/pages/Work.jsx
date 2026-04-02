import { FadeIn } from '../components/FadeIn'
import { SectionHeader } from '../components/SectionHeader'

export function Work() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="sr-only">Our Work</h1>
        <SectionHeader variant="dark" eyebrow="Our Work" />

        <FadeIn>
          <div className="lcaf-prose-dark">
            <p>
              This page will highlight the foundation&apos;s partnerships and programs — including collaboration with the
              American Cancer Society and support for research at Keck USC. 
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
