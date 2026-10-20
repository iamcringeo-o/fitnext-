import { Link } from '../context/RouterContext.tsx';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & mission */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-2xl font-bold tracking-tight text-white font-['Oswald']">
              FITSTART
            </span>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              A modern, evidence-informed educational resource designed specifically for complete fitness beginners. Simple workouts, realistic nutrition, and sustainable habits without intimidation or extreme routines.
            </p>
            <div className="flex items-center gap-3 text-xs text-stone-400 pt-2">
              <span>Evidence-Informed</span>
              <span aria-hidden="true">·</span>
              <span>Beginner Focused</span>
              <span aria-hidden="true">·</span>
              <span>Updated October 2026</span>
            </div>
          </div>

          {/* Core Guides */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Core Guides
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/beginner-workout-guide"
                  className="text-stone-400 hover:text-emerald-400 transition-colors"
                >
                  Beginner Workout Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/beginner-nutrition-guide"
                  className="text-stone-400 hover:text-emerald-400 transition-colors"
                >
                  Nutrition for Beginners
                </Link>
              </li>
              <li>
                <Link
                  to="/fitness-mistakes-beginners"
                  className="text-stone-400 hover:text-emerald-400 transition-colors"
                >
                  Fitness Mistakes Beginners Should Avoid
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-stone-400 hover:text-emerald-400 transition-colors"
                >
                  Fitness Starting Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Safety & Standards */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Our Principles
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>Form Before Heavy Load</li>
              <li>Consistency Over Perfection</li>
              <li>Real Food &amp; Hydration First</li>
              <li>Progressive Overload at Safe Pace</li>
              <li>Active Rest &amp; 7–9h Sleep</li>
            </ul>
          </div>
        </div>

        {/* Health Disclaimer */}
        <div className="p-4 rounded-lg bg-stone-950/60 border border-stone-800 text-xs text-stone-400 leading-relaxed mb-10">
          <p className="font-semibold text-stone-300 mb-1">
            Educational Disclaimer
          </p>
          <p>
            The educational information provided on FitStart is intended strictly for general educational and informational purposes. It is not intended as medical advice, diagnosis, or treatment. Always consult a qualified physician or healthcare provider before initiating any new physical exercise program, especially if you have chronic health conditions, pre-existing injuries, or cardiovascular symptoms.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} FitStart – Beginner Fitness Guide. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
