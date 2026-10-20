import { useState } from 'react';
import { useRouter, Link } from '../context/RouterContext.tsx';
import { Menu, X, ArrowRight } from 'lucide-react';

export function Navbar() {
  const { path } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Workout Guide', href: '/beginner-workout-guide' },
    { name: 'Nutrition Guide', href: '/beginner-nutrition-guide' },
    { name: 'Mistakes to Avoid', href: '/fitness-mistakes-beginners' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single element brand wordmark */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-stone-950 font-['Oswald'] whitespace-nowrap shrink-0 hover:text-emerald-700 transition-colors"
          >
            FITSTART
          </Link>

          {/* Zone 2: 4 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            {navLinks.map((link) => {
              const isActive = path === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'text-stone-950 font-semibold'
                      : 'hover:text-stone-950'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              to="/beginner-workout-guide"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-stone-900 rounded-lg hover:bg-emerald-600 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-500 shadow-sm"
            >
              <span>Start Workout Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-200/50 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-emerald-500"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-stone-50 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = path === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-stone-200/70 text-stone-950 font-semibold'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-950'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <Link
              to="/beginner-workout-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-stone-900 rounded-lg hover:bg-emerald-600 transition-colors shadow-sm"
            >
              <span>Start Workout Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
