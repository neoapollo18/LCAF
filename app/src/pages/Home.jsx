import { Link } from 'react-router-dom'
import { FadeIn } from '../components/FadeIn'
import { TheNumbersChart } from '../components/TheNumbersChart'

function StatsBar() {
  const items = [
    { stat: '229K', text: 'new lung cancer cases will be diagnosed in the U.S. in 2026' },
    { stat: '~15%', text: 'of all lung cancer cases occur in never smokers' },
    { stat: '1 in 5', text: 'eligible adults received lung cancer screening in 2024' },
    { stat: '~9%', text: 'of federal cancer research funding goes toward lung cancer' },
  ]

  return (
    <section className="bg-navy py-14 lg:py-16 border-y border-slate-500/55">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {items.map((item, i) => (
            <div
              key={item.stat}
              className={`text-center lg:text-left ${i > 0 ? 'lg:border-l lg:border-slate-500/50 lg:pl-8' : ''}`}
            >
              <p className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-5 tabular-nums">{item.stat}</p>
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
            <FadeIn className="lg:pt-8 xl:pt-10">
              <div className="lcaf-prose-dark max-w-xl">
                <p>
                  Lung cancer remains the leading cause of cancer death in the United States. Raising awareness,
                  promoting early detection, and supporting research are critical to improving outcomes and saving
                  lives. The Lung Cancer Awareness Foundation was created to help drive that work forward.
                </p>
                <p>
                  With every effort, partnership, and contribution, we move closer to a future where more lives are saved,
                  more diagnoses are caught earlier, and more people have the care and resources they need.
                </p>
                <p className="!mt-6 text-white font-semibold border-l-4 border-brand pl-4 !py-0 !mb-0">
                  Saving Lives. One Breath at a Time.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  to="/donate"
                  className="inline-flex justify-center bg-brand hover:bg-brand-dark text-white text-sm font-display font-bold uppercase tracking-[0.12em] px-8 py-3.5 rounded-sm transition-colors"
                >
                  Donate
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <TheNumbersChart />
            </FadeIn>
          </div>
        </div>
      </section>

      <StatsBar />
    </>
  )
}
