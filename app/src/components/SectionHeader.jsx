export function SectionHeader({ eyebrow, title, subtitle, align = 'left', variant = 'light', className = '' }) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : align === 'right' ? 'text-right ml-auto' : ''

  const isDark = variant === 'dark'
  const titleCls = isDark ? 'text-white' : 'text-navy'
  const subCls = isDark ? 'text-slate-400' : 'text-slate-600'
  const eyebrowCls = isDark ? 'text-brand-light' : 'text-brand'

  return (
    <header className={`max-w-3xl mb-10 md:mb-12 ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`inline-flex items-center gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.18em] ${eyebrowCls} mb-4`}
        >
          <span className="lcaf-rule" aria-hidden />
          {eyebrow}
        </p>
      )}
      <h1 className={`font-serif text-3xl sm:text-4xl md:text-[2.65rem] ${titleCls} leading-[1.15] tracking-tight`}>
        {title}
      </h1>
      {subtitle && <p className={`mt-4 text-lg ${subCls} leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </header>
  )
}
