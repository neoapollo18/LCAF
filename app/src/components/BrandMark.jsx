import { Link } from 'react-router-dom'

/** Light header: navy wordmark. Dark footer: pass theme="dark" */
export function BrandMark({ className = '', compact = false, theme = 'light' }) {
  const line1 = theme === 'dark' ? 'text-brand-light' : 'text-brand'
  const line2 = theme === 'dark' ? 'text-white' : 'text-navy'

  return (
    <Link
      to="/"
      className={`group flex items-center gap-3 shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
    >
      <img
        src="/logo-mark.png"
        alt=""
        width={44}
        height={44}
        className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
        aria-hidden
      />
      {!compact && (
        <div className="hidden sm:flex flex-col gap-0.5">
          <span className={`font-display text-[0.625rem] sm:text-[0.6875rem] font-bold tracking-[0.2em] ${line1} leading-none`}>
            LUNG CANCER
          </span>
          <span className={`font-display text-[0.625rem] sm:text-[0.6875rem] font-bold tracking-[0.16em] ${line2} leading-none`}>
            AWARENESS FOUNDATION
          </span>
        </div>
      )}
      <span className="sr-only">Lung Cancer Awareness Foundation — Home</span>
    </Link>
  )
}
