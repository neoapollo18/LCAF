/**
 * Rebuilt in markup/CSS (no raster) — matches ACS-style annual deaths comparison.
 * Data: American Cancer Society estimates referenced in foundation materials (2024).
 */
const MAX = 127_000

const ROWS = [
  { label: 'Lung Cancer Deaths', value: 127_000, highlight: true },
  { label: 'Breast Cancer Deaths', value: 43_000, highlight: false },
  { label: 'Prostate Cancer Deaths', value: 35_000, highlight: false },
]

export function TheNumbersChart({ className = '' }) {
  return (
    <div className={`lcaf-panel p-6 sm:p-8 bg-[#fafbfc] ${className}`}>
      <h2 id="the-numbers-heading" className="font-serif text-2xl sm:text-3xl text-navy tracking-tight mb-8">
        The Numbers
      </h2>

      <ul className="space-y-7 list-none p-0 m-0" aria-labelledby="the-numbers-heading">
        {ROWS.map((row) => {
          const pct = Math.min(100, (row.value / MAX) * 100)
          return (
            <li key={row.label} className="block">
              <div className="flex justify-between items-baseline gap-4 mb-2">
                <span className="text-slate-700 font-medium text-sm sm:text-[15px]">{row.label}</span>
                <span className="text-navy font-bold tabular-nums text-sm sm:text-[15px] shrink-0">
                  {row.value.toLocaleString('en-US')}/year
                </span>
              </div>
              <div
                className="h-3 w-full rounded-full bg-slate-200 overflow-hidden"
                role="presentation"
                aria-hidden
              >
                <div
                  className={`h-full rounded-full transition-[width] duration-500 ease-out ${
                    row.highlight ? 'bg-brand' : 'bg-slate-500'
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </li>
          )
        })}
      </ul>

      <p className="mt-8 pt-5 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
        Source: American Cancer Society, 2024 estimates
      </p>
    </div>
  )
}
