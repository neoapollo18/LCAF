import { BrandMark } from './BrandMark'
import { PageBackdrop } from './PageBackdrop'
import { ComingSoon } from '../pages/ComingSoon'

/** Minimal chrome for launch: same backdrop and logo as the full site, no nav or donate until the full site ships. */
export function ComingSoonShell() {
  return (
    <div className="font-body antialiased min-h-screen flex flex-col text-slate-300">
      <PageBackdrop />

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-navy/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center h-[4.25rem] sm:h-20">
            <BrandMark />
          </div>
        </div>
      </header>

      <main className="flex-1 pt-[4.25rem] sm:pt-20 relative z-0">
        <ComingSoon />
      </main>

      <footer className="relative z-0 bg-navy text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <BrandMark compact className="mb-5" />
          <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-8">
            The Lung Cancer Awareness Foundation is a qualified 501(c)(3) tax-exempt organization. Tax ID Number:
            33-4280122.
          </p>
          <div className="pt-6 border-t border-slate-800">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Lung Cancer Awareness Foundation Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
