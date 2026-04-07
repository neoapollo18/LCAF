import { Link } from 'react-router-dom'

/** Logo with wordmark — asset: /LCAF Logo.png */
export function BrandMark({ className = '', compact = false }) {
  return (
    <Link
      to="/"
      className={`group flex items-center shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
    >
      <img
        src="/LCAF%20Logo.png"
        alt=""
        className={`w-auto object-contain object-left ${compact ? 'h-[3.25rem] sm:h-16 max-w-[min(100%,340px)] sm:max-w-[400px]' : 'h-[3.5rem] sm:h-[4.5rem] max-w-[min(100%,420px)] sm:max-w-[min(100%,520px)] md:max-w-[580px]'}`}
        width={580}
        height={96}
        decoding="async"
      />
      <span className="sr-only">Lung Cancer Awareness Foundation — Home</span>
    </Link>
  )
}
