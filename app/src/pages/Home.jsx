import { Link } from 'react-router-dom'
import { FadeIn } from '../components/FadeIn'
import { TheNumbersChart } from '../components/TheNumbersChart'

const PEOPLE_URL =
  'https://people.com/emmy-producer-stage-3-cancer-kim-kardashian-prenuvo-exclusive-11811600'

function StatsBar() {
  const items = [
    { stat: '229K', text: 'new lung cancer cases will be diagnosed in the U.S. in 2026' },
    { stat: '~15%', text: 'Approximately 15% of all lung cancer cases occur in never smokers' },
    { stat: '1 in 5', text: 'Only 1 in 5 eligible adults in the U.S. received lung cancer screening in 2024' },
    { stat: '~9%', text: 'Lung cancer receives approximately 9% of federal cancer research funding' },
  ]

  return (
    <section className="bg-navy py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {items.map((item, i) => (
            <div
              key={item.stat}
              className={`text-center lg:text-left ${i > 0 ? 'lg:border-l lg:border-slate-700/80 lg:pl-8' : ''}`}
            >
              <p className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-3 tabular-nums">{item.stat}</p>
              <p className="text-sm text-slate-300 leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Home() {
  return (
    <>
      <section className="pt-10 pb-14 lg:pt-14 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-start">
            <FadeIn>
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                Lung Cancer Awareness Foundation
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.1rem] text-navy leading-[1.12] mb-8">
                Saving Lives.
                <br />
                One Breath at a Time.
              </h1>
              <div className="lcaf-prose max-w-xl">
                <p>
                  Lung cancer remains the leading cause of cancer death in the United States. Raising awareness,
                  promoting early detection, and supporting research are critical to improving outcomes and saving
                  lives. The Lung Cancer Awareness Foundation was created to help drive that work forward.
                </p>
                <p>
                  With every effort, partnership, and contribution, we move closer to a future where more lives are saved,
                  more diagnoses are caught earlier, and more people have the care and resources they need.
                </p>
                <p className="!mt-6 text-navy font-semibold border-l-4 border-brand pl-4 !py-0 !mb-0">
                  Saving Lives. One Breath at a Time.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  to="/donate"
                  className="inline-flex justify-center bg-brand hover:bg-brand-dark text-white text-sm font-display font-bold uppercase tracking-[0.12em] px-8 py-3.5 rounded-sm transition-colors"
                >
                  Donate
                </Link>
                <a
                  href={PEOPLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center text-sm font-semibold text-navy underline decoration-slate-300 underline-offset-4 hover:decoration-brand"
                >
                  Read the story in People →
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={100} className="lg:mt-14 xl:mt-16">
              <TheNumbersChart />
            </FadeIn>
          </div>
        </div>
      </section>

      <StatsBar />
    </>
  )
}
