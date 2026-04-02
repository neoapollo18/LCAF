/**
 * Estimated U.S. cancer deaths comparison — markup/CSS bars.
 * Source line matches site copy (ACS Facts & Figures 2026).
 */
const MAX = 124_730

const ROWS = [
  { label: 'Lung Cancer', value: 124_730, highlight: true },
  { label: 'Colorectal Cancer', value: 55_230, highlight: false },
  { label: 'Pancreatic Cancer', value: 52_740, highlight: false },
  { label: 'Breast Cancer', value: 43_250, highlight: false },
  { label: 'Prostate Cancer', value: 36_290, highlight: false },
]

export function TheNumbersChart({ className = '' }) {
  return (
    <div className={`lcaf-panel p-6 sm:p-8 bg-slate-100 ${className}`}>
      <h2 id="the-numbers-heading" className="font-serif text-2xl sm:text-3xl text-navy tracking-tight">
        Lung Cancer by the Numbers
      </h2>
      <p className="mt-2 text-sm text-slate-600 font-medium">Estimated U.S. cancer deaths in 2026</p>

      <ul className="space-y-7 list-none p-0 m-0 mt-8" aria-labelledby="the-numbers-heading">
        {ROWS.map((row) => {
          const pct = Math.min(100, (row.value / MAX) * 100)
          return (
            <li key={row.label} className="block">
              <div className="flex justify-between items-baseline gap-4 mb-2">
                <span className="text-slate-700 font-medium text-sm sm:text-[15px]">{row.label}</span>
                <span className="text-navy font-bold tabular-nums text-sm sm:text-[15px] shrink-0">
                  {row.value.toLocaleString('en-US')}
                </span>
              </div>
              <div
                className="h-3 w-full rounded-full bg-slate-200 overflow-hidden"
                role="presentation"
                aria-hidden
              >
                <div
                  className={`h-full rounded-full transition-[width] duration-500 ease-out ${
                    row.highlight ? 'bg-slate-500' : 'bg-slate-400'
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </li>
          )
        })}
      </ul>

      <p className="mt-8 pt-5 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
        Source: American Cancer Society, Cancer Facts &amp; Figures 2026
      </p>
    </div>
  )
}
