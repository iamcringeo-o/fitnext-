import { Link } from '../context/RouterContext.tsx';
import { useSEO } from '../hooks/useSEO.ts';
import { ARTICLES } from '../data/articles.ts';
import { ArticleCard } from '../components/ArticleCard.tsx';
import { FAQSection } from '../components/FAQSection.tsx';
import type { FaqItem } from '../types.ts';
import heroImage from '../assets/images/hero_beginner_gym_1792512011935.jpg';
import { ArrowRight, CheckCircle2, Dumbbell, Apple, Heart, Calendar, Sparkles } from 'lucide-react';

export function HomePage() {
  const homeFaqs: FaqItem[] = [
    {
      question: 'How should a beginner start their fitness journey?',
      answer: (
        <>
          Start with manageable physical activity, balanced meals, sufficient sleep, and a routine you can maintain consistently. Explore our{' '}
          <Link to="/beginner-workout-guide" className="font-semibold text-emerald-800 underline hover:text-emerald-950">
            beginner workout guide
          </Link>{' '}
          for an introductory 3-day split, and pair it with practical{' '}
          <Link to="/beginner-nutrition-guide" className="font-semibold text-emerald-800 underline hover:text-emerald-950">
            nutrition for beginners
          </Link>{' '}
          to build healthy momentum.
        </>
      ) as any
    },
    {
      question: 'What are the most essential fitness tips for beginners?',
      answer: (
        <>
          Prioritize consistency over intensity, learn proper movement mechanics before adding resistance, prioritize 7 to 9 hours of sleep, and stay alert to common{' '}
          <Link to="/fitness-mistakes-beginners" className="font-semibold text-emerald-800 underline hover:text-emerald-950">
            fitness mistakes beginners should avoid
          </Link>{' '}
          such as doing too much too soon.
        </>
      ) as any
    },
    {
      question: 'How many days a week should beginners work out?',
      answer: (
        <>
          For most complete beginners, 3 non-consecutive days per week (such as Monday, Wednesday, and Friday) of full-body exercise is the sweet spot. Follow the sample schedule in our{' '}
          <Link to="/beginner-workout-guide" className="font-semibold text-emerald-800 underline hover:text-emerald-950">
            beginner workout guide
          </Link>{' '}
          to allow your muscles, tendons, and central nervous system 48 hours to recover between sessions.
        </>
      ) as any
    },
    {
      question: 'Can beginners exercise and build strength at home?',
      answer: (
        <>
          Yes, absolutely. You do not need a commercial gym membership or expensive machines to build a strong foundation. Basic movements like chair squats, wall push-ups, floor glute bridges, and brisk neighborhood walks—all demonstrated with beginner form cues in our{' '}
          <Link to="/beginner-workout-guide" className="font-semibold text-emerald-800 underline hover:text-emerald-950 transition-colors">
            beginner workout guide
          </Link>
          —build substantial strength and cardiovascular endurance right at home.
        </>
      ) as any
    },
    {
      question: 'Do beginners need supplements to make progress?',
      answer: (
        <>
          No. Beginners do not need protein powders, pre-workouts, or fat burners. Learn how to build a nourishing plate with everyday grocery foods in our guide to{' '}
          <Link to="/beginner-nutrition-guide" className="font-semibold text-emerald-800 underline hover:text-emerald-950">
            nutrition for beginners
          </Link>.
        </>
      ) as any
    }
  ];

  useSEO({
    title: 'FitStart – Beginner Fitness Guide & Fitness Tips for Beginners',
    description:
      'Discover our complete beginner fitness guide with practical fitness tips for beginners. Learn safe starting workouts, balanced nutrition, and healthy habits.',
    path: '/',
    image: heroImage,
    type: 'website',
    faqs: homeFaqs
  });

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Quiet Text Kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 tracking-wider uppercase">
                <span>FitStart Educational Platform</span>
                <span aria-hidden="true">·</span>
                <span>Simple &amp; Safe Foundations</span>
              </div>

              {/* Exact H1 requested */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 font-['Oswald'] leading-[1.08] text-balance">
                Your Beginner’s Guide to Fitness
              </h1>

              {/* Supporting text with natural keyword integration and internal links */}
              <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl font-normal">
                Discover our comprehensive{' '}
                <Link to="/beginner-workout-guide" className="font-semibold text-emerald-800 underline hover:text-emerald-950 transition-colors">
                  beginner workout guide
                </Link>
                , core principles of{' '}
                <Link to="/beginner-nutrition-guide" className="font-semibold text-emerald-800 underline hover:text-emerald-950 transition-colors">
                  nutrition for beginners
                </Link>
                , and actionable fitness tips for beginners. Learn safe starting workouts, balanced meal habits, and how to sidestep common{' '}
                <Link to="/fitness-mistakes-beginners" className="font-semibold text-emerald-800 underline hover:text-emerald-950 transition-colors">
                  fitness mistakes beginners should avoid
                </Link>{' '}
                through simple, practical guides.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/#featured-guides"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-stone-900 rounded-lg hover:bg-emerald-600 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-emerald-500 whitespace-nowrap"
                >
                  <span>Explore Fitness Guides</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/beginner-workout-guide"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-stone-900 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 hover:border-stone-400 transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-emerald-500 whitespace-nowrap"
                >
                  <span>Start Your First Workout</span>
                </Link>
              </div>

              {/* Trust & Evidence Metrics Adjacent to Claims */}
              <div className="pt-6 border-t border-stone-200/90 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="text-2xl font-bold text-stone-950 font-['Oswald'] tabular-nums">3 Days</div>
                  <div className="text-xs text-stone-500 font-medium">Weekly Beginner Routine</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-stone-950 font-['Oswald'] tabular-nums">0 Gimmicks</div>
                  <div className="text-xs text-stone-500 font-medium">Real Food &amp; Form</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-stone-950 font-['Oswald'] tabular-nums">100% Free</div>
                  <div className="text-xs text-stone-500 font-medium">Educational Access</div>
                </div>
              </div>
            </div>

            {/* Right Column: High-quality fitness hero image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-stone-200/90 bg-stone-100 shadow-md">
                <img
                  src={heroImage}
                  alt="A beginner athlete learning safe exercise form with guidance in a bright gym studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white text-xs sm:text-sm font-medium">
                    <p className="font-bold text-white mb-0.5">Safe, Encouraging Environment</p>
                    <p className="text-stone-300 text-xs">Learn movements step-by-step with zero pressure</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WELCOME SECTION: HOW TO GET STARTED */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-emerald-700 tracking-wider uppercase block mb-2">
              Welcome to FitStart
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 mb-6">
              How to Get Started with Fitness Without Getting Overwhelmed
            </h2>
            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                Walking into the world of fitness today can feel intimidating. Between aggressive social media influencers, complicated gym machines, and confusing nutrition dogma, most beginners quit before they even start.
              </p>
              <p>
                At FitStart, we believe that fitness is a long-term skill, not a 30-day punishment. You don’t need two hours in the gym each day, nor do you need unproven supplements or starvation diets—two common traps analyzed in our guide to{' '}
                <Link to="/beginner-nutrition-guide" className="font-semibold text-emerald-800 underline hover:text-emerald-950 transition-colors">
                  nutrition for beginners
                </Link>
                . All you need is a manageable weekly structure, safe movement patterns, and balanced nutrition that fuels your daily life.
              </p>
              <p>
                Whether you haven’t exercised in years or you’re picking up your very first pair of light dumbbells, our four-part curriculum is built to give you confidence from day one. Follow our structured{' '}
                <Link to="/beginner-workout-guide" className="font-semibold text-emerald-800 underline hover:text-emerald-950 transition-colors">
                  beginner workout guide
                </Link>
                , discover sustainable{' '}
                <Link to="/beginner-nutrition-guide" className="font-semibold text-emerald-800 underline hover:text-emerald-950 transition-colors">
                  nutrition for beginners
                </Link>
                , and review critical{' '}
                <Link to="/fitness-mistakes-beginners" className="font-semibold text-emerald-800 underline hover:text-emerald-950 transition-colors">
                  fitness mistakes beginners should avoid
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES SECTION */}
      <section id="featured-guides" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold text-emerald-700 tracking-wider uppercase block mb-2">
                Core Curriculum
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
                Explore The Beginner Fitness Guides
              </h2>
            </div>
            <p className="text-stone-600 text-sm sm:text-base max-w-md">
              Three comprehensive, step-by-step guides written specifically to answer your most important starting questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* START HERE: 3 STEPS */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold text-emerald-700 tracking-wider uppercase block mb-2">
              The FitStart Method
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 mb-4">
              Start Here: Three Pillars for Long-Term Success
            </h2>
            <p className="text-stone-600 text-base sm:text-lg">
              Avoid complex programs. Master these three foundational pillars before worrying about advanced techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="p-8 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 mb-6">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
                  Pillar 01
                </div>
                <h3 className="text-xl font-bold text-stone-950 mb-3">
                  Move Consistently
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  Dedicate three days a week to full-body movement. Learn basic mechanics like squats, push-ups, and hinges with bodyweight first, following the step-by-step progressions in our{' '}
                  <Link to="/beginner-workout-guide" className="font-semibold text-emerald-800 underline hover:text-emerald-950 transition-colors">
                    beginner workout guide
                  </Link>
                  {' '}to develop muscle memory and joint stability safely.
                </p>
              </div>
              <Link
                to="/beginner-workout-guide"
                className="text-sm font-semibold text-stone-950 hover:text-emerald-700 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Read the beginner workout guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 mb-6">
                  <Apple className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
                  Pillar 02
                </div>
                <h3 className="text-xl font-bold text-stone-950 mb-3">
                  Eat Balanced Meals
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  Build plates with lean protein, complex carbohydrates, and colorful vegetables. Fuel your workouts and support recovery with wholesome food and plenty of water instead of harsh caloric cuts, following the principles of{' '}
                  <Link to="/beginner-nutrition-guide" className="font-semibold text-emerald-800 underline hover:text-emerald-950 transition-colors">
                    nutrition for beginners
                  </Link>
                  .
                </p>
              </div>
              <Link
                to="/beginner-nutrition-guide"
                className="text-sm font-semibold text-stone-950 hover:text-emerald-700 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Explore nutrition for beginners</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
                  Pillar 03
                </div>
                <h3 className="text-xl font-bold text-stone-950 mb-3">
                  Build Healthy Habits
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  Fitness is sustained by systems, not temporary bursts of willpower. Prioritize 7 to 9 hours of quality sleep, track small wins, and avoid common traps like doing too much too soon—one of the classic{' '}
                  <Link to="/fitness-mistakes-beginners" className="font-semibold text-emerald-800 underline hover:text-emerald-950 transition-colors">
                    fitness mistakes beginners should avoid
                  </Link>
                  .
                </p>
              </div>
              <Link
                to="/fitness-mistakes-beginners"
                className="text-sm font-semibold text-stone-950 hover:text-emerald-700 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Avoid fitness mistakes beginners make</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* BEGINNER-FRIENDLY WEEKLY FITNESS OVERVIEW */}
      <section className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold text-emerald-700 tracking-wider uppercase block mb-2">
              Weekly Routine
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 mb-4">
              Beginner-Friendly Weekly Fitness Overview
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Here is what an optimal, sustainable starter week looks like. Notice the balance between active movement days and dedicated recovery periods. Learn each exercise in our{' '}
              <Link to="/beginner-workout-guide" className="font-semibold text-emerald-800 underline hover:text-emerald-950 transition-colors">
                beginner workout guide
              </Link>
              , support recovery with our guide to{' '}
              <Link to="/beginner-nutrition-guide" className="font-semibold text-emerald-800 underline hover:text-emerald-950 transition-colors">
                nutrition for beginners
              </Link>
              , and safeguard against burnout by learning the{' '}
              <Link to="/fitness-mistakes-beginners" className="font-semibold text-emerald-800 underline hover:text-emerald-950 transition-colors">
                fitness mistakes beginners should avoid
              </Link>
              .
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-xs">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-stone-100/80 border-b border-stone-200 text-stone-900 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  <th className="py-4 px-6">Day</th>
                  <th className="py-4 px-6">Focus Area</th>
                  <th className="py-4 px-6">Primary Activity</th>
                  <th className="py-4 px-6">Suggested Duration</th>
                  <th className="py-4 px-6">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr className="hover:bg-stone-50/60 transition-colors">
                  <td className="py-4 px-6 font-semibold text-stone-950 whitespace-nowrap">Monday</td>
                  <td className="py-4 px-6 font-medium text-emerald-800">Full-Body Strength A</td>
                  <td className="py-4 px-6">Squats, push-ups, glute bridges, core bracing</td>
                  <td className="py-4 px-6 whitespace-nowrap tabular-nums">25–35 min</td>
                  <td className="py-4 px-6">Learn movement technique</td>
                </tr>
                <tr className="hover:bg-stone-50/60 transition-colors bg-stone-50/30">
                  <td className="py-4 px-6 font-semibold text-stone-950 whitespace-nowrap">Tuesday</td>
                  <td className="py-4 px-6 text-stone-600 font-medium">Active Recovery</td>
                  <td className="py-4 px-6">Brisk outdoor walk, light mobility, hydration</td>
                  <td className="py-4 px-6 whitespace-nowrap tabular-nums">20–30 min</td>
                  <td className="py-4 px-6">Promote circulation &amp; joint mobility</td>
                </tr>
                <tr className="hover:bg-stone-50/60 transition-colors">
                  <td className="py-4 px-6 font-semibold text-stone-950 whitespace-nowrap">Wednesday</td>
                  <td className="py-4 px-6 font-medium text-emerald-800">Full-Body Strength B</td>
                  <td className="py-4 px-6">Chair squats/hinges, resistance band rows, plank</td>
                  <td className="py-4 px-6 whitespace-nowrap tabular-nums">25–35 min</td>
                  <td className="py-4 px-6">Build upper &amp; lower balance</td>
                </tr>
                <tr className="hover:bg-stone-50/60 transition-colors bg-stone-50/30">
                  <td className="py-4 px-6 font-semibold text-stone-950 whitespace-nowrap">Thursday</td>
                  <td className="py-4 px-6 text-stone-600 font-medium">Active Recovery</td>
                  <td className="py-4 px-6">Gentle stretching, leisurely walk, restful sleep</td>
                  <td className="py-4 px-6 whitespace-nowrap tabular-nums">20–30 min</td>
                  <td className="py-4 px-6">Allow muscle tissue repair</td>
                </tr>
                <tr className="hover:bg-stone-50/60 transition-colors">
                  <td className="py-4 px-6 font-semibold text-stone-950 whitespace-nowrap">Friday</td>
                  <td className="py-4 px-6 font-medium text-emerald-800">Full-Body Strength C</td>
                  <td className="py-4 px-6">Bodyweight circuit, light resistance, core stability</td>
                  <td className="py-4 px-6 whitespace-nowrap tabular-nums">25–35 min</td>
                  <td className="py-4 px-6">Reinforce good habits before weekend</td>
                </tr>
                <tr className="hover:bg-stone-50/60 transition-colors bg-stone-50/30">
                  <td className="py-4 px-6 font-semibold text-stone-950 whitespace-nowrap">Sat &amp; Sun</td>
                  <td className="py-4 px-6 text-stone-500 font-medium">Rest &amp; Recreation</td>
                  <td className="py-4 px-6">Fun recreational movement, hobbies, family time, meal prep</td>
                  <td className="py-4 px-6 whitespace-nowrap">Flexible</td>
                  <td className="py-4 px-6">Mental refresh &amp; recovery</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <div className="bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <FAQSection
            title="Beginner Fitness FAQs"
            subtitle="Clear, honest answers to the four most common beginner questions."
            faqs={homeFaqs}
            id="home-faqs"
          />
        </div>
      </div>

      {/* FINAL CTA DIRECTING TO WORKOUT GUIDE */}
      <section className="py-16 sm:py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block">
            Ready to Begin?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-['Oswald']">
            Start Your First Workout With Confidence
          </h2>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Read our step-by-step workout guide to learn essential exercise technique, warm-ups, sets and reps, and how to stay injury-free.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/beginner-workout-guide"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-emerald-500 whitespace-nowrap"
            >
              <span>Explore The Beginner Workout Guide</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
