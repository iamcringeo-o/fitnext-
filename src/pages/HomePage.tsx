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
      question: 'How should a beginner start exercising?',
      answer:
        'Start with simple bodyweight movements, light walking, and gentle mobility work 2 to 3 days per week. Focus on learning proper form first rather than lifting heavy weights or working to exhaustion. Begin with 20 to 30 minutes per session, choose comfortable athletic footwear, stay hydrated, and give your body at least one full day of rest between strength workouts.'
    },
    {
      question: 'How many days a week should beginners work out?',
      answer:
        'For most complete beginners, 3 non-consecutive days per week (such as Monday, Wednesday, and Friday) of full-body exercise is the sweet spot. This allows your muscles, tendons, and central nervous system 48 hours to recover and adapt, while leaving 2 to 3 days for light daily movement like brisk walking.'
    },
    {
      question: 'Do beginners need supplements?',
      answer:
        'No. Beginners do not need protein powders, pre-workouts, fat burners, or complex supplement regimens. You can obtain all the protein, energy, vitamins, and minerals you need from wholesome, balanced grocery foods like poultry, eggs, fish, beans, tofu, whole grains, fruits, vegetables, and plenty of water.'
    },
    {
      question: 'Can beginners exercise at home?',
      answer:
        'Yes, absolutely. You do not need a commercial gym membership or expensive machines to build a strong foundation. Basic exercises like chair squats, wall push-ups, floor glute bridges, step-ups, and brisk neighborhood walks build substantial strength and cardiovascular endurance right from your living room.'
    }
  ];

  useSEO({
    title: 'FitStart – Beginner Fitness Guide',
    description:
      "Your beginner's guide to fitness. Discover practical workout plans, nutrition essentials, and habits for a healthy, sustainable fitness journey.",
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
              
              {/* Quiet Text Kicker - Anti-Slop (No Pill) */}
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 tracking-wider uppercase">
                <span>FitStart Educational Platform</span>
                <span aria-hidden="true">·</span>
                <span>Simple &amp; Safe Foundations</span>
              </div>

              {/* Exact H1 requested */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 font-['Oswald'] leading-[1.08] text-balance">
                Your Beginner’s Guide to Fitness
              </h1>

              {/* Supporting text */}
              <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl font-normal">
                Beginners can learn workouts, nutrition, and healthy habits through simple, practical guides. No extreme diets, no confusing fitness jargon—just clear steps to build lifelong physical health safely.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#featured-guides"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-stone-900 rounded-lg hover:bg-emerald-600 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-emerald-500 whitespace-nowrap"
                >
                  <span>Explore Fitness Guides</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
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
                At FitStart, we believe that fitness is a long-term skill, not a 30-day punishment. You don’t need two hours in the gym each day, nor do you need unproven supplements or starvation diets. All you need is a manageable weekly structure, safe movement patterns, and balanced nutrition that fuels your daily life.
              </p>
              <p>
                Whether you haven’t exercised in years or you’re picking up your very first pair of light dumbbells, our four-part curriculum is built to give you confidence from day one.
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
                  Dedicate three days a week to full-body movement. Learn basic mechanics like squats, push-ups, and hinges with bodyweight first, allowing muscle memory and joint stability to develop naturally.
                </p>
              </div>
              <Link
                to="/beginner-workout-guide"
                className="text-sm font-semibold text-stone-950 hover:text-emerald-700 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Read the workout guide</span>
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
                  Build plates with lean protein, complex carbohydrates, and colorful vegetables. Fuel your workouts and support recovery with wholesome food and plenty of water instead of harsh caloric cuts.
                </p>
              </div>
              <Link
                to="/beginner-nutrition-guide"
                className="text-sm font-semibold text-stone-950 hover:text-emerald-700 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Read the nutrition guide</span>
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
                  Fitness is sustained by systems, not temporary bursts of willpower. Prioritize 7 to 9 hours of quality sleep, track small wins, and avoid common traps like comparing your Day 1 to someone else’s Year 5.
                </p>
              </div>
              <Link
                to="/fitness-mistakes-beginners"
                className="text-sm font-semibold text-stone-950 hover:text-emerald-700 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Read mistakes to avoid</span>
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
              Here is what an optimal, sustainable starter week looks like. Notice the balance between active movement days and dedicated recovery periods.
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
