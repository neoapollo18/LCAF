import { FadeIn } from '../components/FadeIn'
import { SectionHeader } from '../components/SectionHeader'

const PEOPLE_URL =
  'https://people.com/emmy-producer-stage-3-cancer-kim-kardashian-prenuvo-exclusive-11811600'

const items = [
  {
    outlet: 'KTLA',
    title: 'Cancer Mystery in Non-Smoking Women',
    url: 'https://ktla.com/video/cancer-mystery-in-non-smoking-women/11445904/',
  },
  {
    outlet: 'People',
    title:
      'Emmy-Winning Producer Dionne Harmon Reveals Stage 3 Lung Cancer Diagnosis After Kim Kardashian-Inspired Prenuvo Scan',
    url: PEOPLE_URL,
  },
  {
    outlet: 'Forbes',
    title: 'From Harvard to Hollywood: Dionne Harmon Talks Impactful Career',
    url: 'https://www.forbes.com/sites/stephanietharpe/2024/09/03/from-harvard-to-hollywood-dionne-harmon-talks-impactful-career/',
  },
]

export function Press() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Press"
          title="In the News"
          subtitle="Recent coverage featuring Dionne Harmon and the Lung Cancer Awareness Foundation."
        />

        <FadeIn className="mb-14">
          <figure className="lcaf-panel overflow-hidden bg-white">
            <img
              src="/editorial-story.png"
              alt="Press coverage: advocacy around screening, medical imaging highlighting lung findings, and founder Dionne Harmon."
              className="w-full h-auto object-cover"
            />
            <figcaption className="px-5 py-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200 bg-slate-50">
              Coverage on early detection and Dionne Harmon&apos;s journey —{' '}
              <a href={PEOPLE_URL} target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline">
                People
              </a>
              .
            </figcaption>
          </figure>
        </FadeIn>

        <ul className="space-y-4 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <FadeIn key={item.url} delay={i * 60}>
              <li>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lcaf-card flex flex-col sm:flex-row sm:items-start gap-4 !p-6 sm:!p-6 group rounded-sm"
                >
                  <span className="shrink-0 inline-flex items-center justify-center rounded-sm bg-slate-100 text-navy font-display text-[10px] font-bold uppercase tracking-wider px-3 py-2 border border-slate-200">
                    {item.outlet}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="text-base text-navy font-semibold leading-snug group-hover:text-brand transition-colors block">
                      {item.title}
                    </span>
                    <span className="text-xs text-slate-500 mt-2 block">Read article (opens in new tab) ↗</span>
                  </span>
                </a>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
