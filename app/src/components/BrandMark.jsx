import { Link } from 'react-router-dom'

/** Full wordmark image (typography baked into asset). */
export function BrandMark({ className = '', compact = false }) {
  return (
    <Link
      to="/"
      className={`group flex items-center shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
    >
      <img
        src="/fulllogo_transparent.png"
        alt=""
        className={`w-auto object-contain object-left ${compact ? 'h-16 sm:h-[4.25rem] max-w-[min(100%,320px)] sm:max-w-[380px]' : 'h-16 sm:h-[4.25rem] max-w-[min(100%,380px)] sm:max-w-[460px] md:max-w-[520px]'}`}
        width={520}
        height={90}
        decoding="async"
      />
      <span className="sr-only">Lung Cancer Awareness Foundation — Home</span>
    </Link>
  )
}
