import { useState, useEffect } from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

interface NavItem {
  label: string
  href: string
}

const navLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Personal', href: '/personal' },
  { label: 'Business', href: '/business' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Reset scroll state on page change
  useEffect(() => {
    setScrolled(window.scrollY > 20)
  }, [location.pathname])

  const linkClass = ({ isActive }: { isActive: boolean }): string =>
    clsx(
      'text-sm font-medium transition-colors duration-200',
      isActive
        ? scrolled
          ? 'text-primary-600 font-semibold border-b-2 border-primary-600 pb-0.5'
          : 'text-yellow-400 font-semibold'
        : scrolled
          ? 'text-gray-600 hover:text-primary-600'
          : 'text-white hover:text-yellow-400'
    )

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : isHome
            ? 'bg-transparent py-5'
            : 'bg-primary-800 py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2.5">
          <img
            src="/images/logo.png"
            alt="SmartPay Logo"
            className="h-9 w-auto"
          />
          <span className={clsx(
            'font-display font-bold text-xl tracking-tight transition-colors duration-300',
            scrolled ? 'text-dark-900' : 'text-white'
          )}>
            SmartPay
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end={link.href === '/'}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/coming-soon"
          className={clsx(
            'hidden lg:inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5',
            scrolled ? 'bg-primary-600 hover:bg-primary-700' : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30'
          )}
        >
          Get Started
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={clsx(
            'lg:hidden p-2 rounded-lg transition-colors',
            scrolled ? 'text-dark-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          )}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={clsx(
        'lg:hidden overflow-hidden transition-all duration-300',
        open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className={clsx(
          'border-t px-6 py-4 flex flex-col gap-1',
          scrolled ? 'bg-white border-gray-100' : 'bg-primary-800 border-white/10'
        )}>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end={link.href === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                clsx(
                  'font-medium py-2.5 px-3 rounded-lg transition-colors text-sm',
                  isActive
                    ? scrolled
                      ? 'bg-primary-50 text-primary-700 font-semibold'
                      : 'bg-white/10 text-yellow-400 font-semibold'
                    : scrolled
                      ? 'text-dark-800 hover:text-primary-600 hover:bg-gray-50'
                      : 'text-white hover:text-yellow-400 hover:bg-white/10'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/coming-soon"
            className="mt-2 inline-flex justify-center bg-primary-600 text-white text-sm font-semibold px-5 py-3 rounded-full"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}
