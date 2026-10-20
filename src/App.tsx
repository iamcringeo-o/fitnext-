import { RouterProvider, useRouter } from './context/RouterContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { WorkoutGuidePage } from './pages/WorkoutGuidePage.tsx';
import { NutritionGuidePage } from './pages/NutritionGuidePage.tsx';
import { FitnessMistakesPage } from './pages/FitnessMistakesPage.tsx';
import { ArrowLeft } from 'lucide-react';

function AppContent() {
  const { path, navigate } = useRouter();

  // Normalize path without trailing slashes and lowercase
  const cleanPath = path === '/' ? '/' : path.toLowerCase().replace(/\/$/, '');

  const renderCurrentPage = () => {
    switch (cleanPath) {
      case '/':
        return <HomePage />;
      case '/beginner-workout-guide':
        return <WorkoutGuidePage />;
      case '/beginner-nutrition-guide':
        return <NutritionGuidePage />;
      case '/fitness-mistakes-beginners':
        return <FitnessMistakesPage />;
      default:
        return (
          <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
              Page Not Found
            </span>
            <h1 className="text-4xl font-bold text-stone-950 mb-4 font-['Oswald']">
              404 – Guide Not Found
            </h1>
            <p className="text-stone-600 max-w-md mb-8 text-base">
              The page you requested could not be found. Let’s get you back on track to the beginner fitness guides.
            </p>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-emerald-600 transition-colors shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-stone-900 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div id="main-content" className="flex-1">
        {renderCurrentPage()}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
