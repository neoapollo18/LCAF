import { useEffect, useState } from 'react'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import { BrandMark } from './BrandMark'
import { PageBackdrop } from './PageBackdrop'

const navLinkClass = ({ isActive }) =>
  `text-[10px] xl:text-[11px] font-display font-bold uppercase tracking-[0.16em] transition-colors py-2 border-b-2 ${
    isActive
      ? 'text-white border-brand'
      : 'text-slate-400 border-transparent hover:text-white hover:border-slate-600'
  }`

export function Layout() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="font-body antialiased min-h-screen flex flex-col text-slate-300">
      <PageBackdrop />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b border-slate-800 transition-shadow duration-200 ${
          scrolled ? 'bg-navy/95 shadow-lg shadow-black/20' : 'bg-navy/90'
        } backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 h-[4.25rem] sm:h-20">
            <BrandMark />

            <div className="hidden lg:flex items-end gap-5 xl:gap-7 flex-wrap justify-end flex-1 min-w-0 pb-0.5">
              <NavLink to="/about" className={navLinkClass}>
                ABOUT US
              </NavLink>
              <NavLink to="/founder" className={navLinkClass}>
                OUR FOUNDER
              </NavLink>
              <NavLink to="/mission" className={navLinkClass}>
                OUR MISSION
              </NavLink>
              <NavLink to="/work" className={navLinkClass}>
                OUR WORK
              </NavLink>
              <NavLink to="/press" className={navLinkClass}>
                PRESS
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                CONTACT US
              </NavLink>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link
                to="/donate"
                className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white text-xs sm:text-sm font-display font-bold uppercase tracking-[0.12em] px-5 py-2.5 rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Donate
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2.5 rounded-sm text-white hover:bg-white/10"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <span className="block space-y-1.5 w-6">
                  <span className="block h-0.5 w-full bg-white rounded-full" />
                  <span className="block h-0.5 w-full bg-white rounded-full" />
                  <span className="block h-0.5 w-full bg-white rounded-full" />
                </span>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="lg:hidden pb-5 border-t border-slate-800 bg-navy">
              <div className="pt-2 flex flex-col">
                {[
                  ['/about', 'ABOUT US'],
                  ['/founder', 'OUR FOUNDER'],
                  ['/mission', 'OUR MISSION'],
                  ['/work', 'OUR WORK'],
                  ['/press', 'PRESS'],
                  ['/contact', 'CONTACT US'],
                ].map(([path, label]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `py-3.5 text-sm font-display font-semibold uppercase tracking-[0.12em] border-b border-slate-800 ${
                        isActive ? 'text-brand-light' : 'text-slate-300'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-1 pt-[4.25rem] sm:pt-20 relative z-0">
        <Outlet />
      </main>

      <footer className="relative z-0 bg-navy text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 space-y-5">
              <BrandMark compact />
              <p className="text-slate-400 text-sm leading-relaxed max-w-md mt-4">
                The Lung Cancer Awareness Foundation is a qualified 501(c)(3) tax-exempt organization. Tax ID Number:
                33-4280122.
              </p>
            </div>

            <div>
              <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-brand-light mb-5">
                Foundation
              </h4>
              <ul className="space-y-3 text-sm text-slate-400">
                {[
                  ['About Us', '/about'],
                  ['Our Founder', '/founder'],
                  ['Our Mission', '/mission'],
                  ['Our Work', '/work'],
                  ['Press', '/press'],
                ].map(([label, path]) => (
                  <li key={path}>
                    <Link to={path} className="hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-brand-light mb-5">Connect</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/donate" className="hover:text-white transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lungcancerawarenessfoundation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <span className="text-slate-600">LinkedIn — coming soon</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Lung Cancer Awareness Foundation Inc. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-slate-400 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
