import { FadeIn } from '../components/FadeIn'

export function Work() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="lcaf-page-title">Our Work</h1>

        <FadeIn>
          <div className="lcaf-prose-dark">
            <p>
              This page will highlight the foundation&apos;s partnerships and programs — including collaboration with the
              American Cancer Society and support for research at Keck USC. Copy is in progress and will be added here
              soon.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
