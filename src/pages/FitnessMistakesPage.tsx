import { useState } from 'react';
import { useSEO } from '../hooks/useSEO.ts';
import { ArticleLayout } from '../components/ArticleLayout.tsx';
import { ARTICLES } from '../data/articles.ts';
import { Link } from '../context/RouterContext.tsx';
import type { FaqItem, TableOfContentsItem } from '../types.ts';
import { AlertTriangle, ShieldAlert, CheckCircle2, HeartPulse, Sparkles, BookOpen } from 'lucide-react';

export function FitnessMistakesPage() {
  const article = ARTICLES[2]; // fitness-mistakes-beginners

  const toc: TableOfContentsItem[] = [
    { id: 'mistake-1-too-much-too-soon', title: '1. Doing Too Much Too Soon' },
    { id: 'mistake-2-skipping-warmups', title: '2. Skipping Warm-Ups' },
    { id: 'mistake-3-poor-technique', title: '3. Using Poor Exercise Technique' },
    { id: 'mistake-4-comparing-progress', title: '4. Comparing Progress With Others' },
    { id: 'mistake-5-ignoring-recovery', title: '5. Ignoring Rest and Recovery' },
    { id: 'mistake-6-expecting-immediate-results', title: '6. Expecting Immediate Results' },
    { id: 'mistake-7-following-extreme-diets', title: '7. Following Extreme Diets' },
    { id: 'mistake-8-neglecting-hydration-sleep', title: '8. Neglecting Hydration and Sleep' },
    { id: 'mistake-9-changing-routines-constantly', title: '9. Changing Routines Constantly' },
    { id: 'mistake-10-ignoring-pain-warning-signs', title: '10. Ignoring Pain or Warning Signs' },
    { id: 'building-sustainable-habits', title: 'How to Build Sustainable Habits' },
    { id: 'medical-safety-advisory', title: 'Medical Safety and Warning Signs' }
  ];

  const keyTakeaways = [
    'Most beginner setbacks stem from enthusiasm outpacing physical adaptation: pace yourself with 3 moderate days per week.',
    'Flawless exercise form protects joints and produces better muscular results than lifting heavier with sloppy mechanics.',
    'Comparison is the enemy of consistency: celebrate small personal milestones like deeper squat depth or walking extra steps.',
    'Extreme diets backfire: fuel your physical activity with balanced, nutrient-dense grocery foods.',
    'Never train through sharp joint pain, dizziness, or chest tightness—listen to your body and seek qualified medical attention.'
  ];

  const faqs: FaqItem[] = [
    {
      question: 'What are common fitness mistakes beginners make?',
      answer:
        'Common mistakes include doing too much too soon, ignoring recovery, using poor technique, and expecting immediate results. Addressing these early prevents burnout and injury.'
    },
    {
      question: 'How do I know if I am doing too much too soon?',
      answer:
        'Signs of doing too much include extreme muscle soreness lasting more than 72 hours, trouble sleeping, persistent daytime fatigue, irritability, a drop in enthusiasm, or nagging joint aches in your knees or shoulders. If you notice these symptoms, reduce your weekly training volume by 30–50%.'
    },
    {
      question: 'How long should I stick with a beginner workout plan before changing exercises?',
      answer:
        'Stick with the same core beginner workout plan for at least 8 to 12 weeks. Changing exercises every single workout prevents your nervous system from mastering movement patterns and makes it impossible to measure steady strength progression.'
    },
    {
      question: 'What should I do if an exercise causes discomfort in my joints?',
      answer:
        'Stop that specific exercise immediately. Check your setup: feet width, knee tracking, and posture. If discomfort persists, substitute an easier regression (such as chair squats instead of free bodyweight squats) or omit that movement entirely and consult a certified physical therapist.'
    },
    {
      question: 'Is it dangerous for beginners to work out while exhausted or sleep-deprived?',
      answer:
        'Yes. Acute sleep deprivation significantly impairs neuromuscular coordination and reaction time, drastically increasing your risk of dropped weights, joint sprains, or poor posture during squats and push-ups. When truly exhausted, prioritize 7–9 hours of sleep over a workout.'
    }
  ];

  useSEO({
    title: article.seoTitle,
    description: article.metaDescription,
    path: article.url,
    image: article.image,
    type: 'article',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Fitness Mistakes Beginners Should Avoid', path: article.url }
    ],
    faqs,
    publishedTime: '2026-10-01'
  });

  return (
    <ArticleLayout
      article={article}
      intro={
        <p>
          Starting a new fitness journey is exciting, but high enthusiasm without proper guidance often leads to burnout, frustrating plateaus, or unnecessary injury. In this guide on <strong>fitness mistakes beginners</strong> should avoid, we analyze the 10 most common pitfalls and give you practical, actionable <strong>beginner fitness tips</strong> to build lifelong healthy habits.
        </p>
      }
      toc={toc}
      keyTakeaways={keyTakeaways}
      faqs={faqs}
      nextArticleSlug="beginner-workout-guide"
    >
      {/* MISTAKE 1 */}
      <section id="mistake-1-too-much-too-soon" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-stone-200 text-stone-900 font-bold flex items-center justify-center text-sm font-mono shrink-0">
            01
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
            Doing Too Much Too Soon
          </h2>
        </div>
        <p>
          <strong>Why it’s a problem:</strong> In January or on a motivated Monday, beginners often decide to work out 6 or 7 days a week for 90 minutes per session. Because muscle tendons, ligaments, and joints adapt much slower than enthusiasm, this rapid spike in volume results in severe muscle soreness, joint inflammation, and eventual abandonment within three weeks.
        </p>
        <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 text-sm">
          <strong className="text-emerald-950">Practical Solution:</strong> Commit to <strong>just 3 days per week</strong> of 25–35 minute sessions. It is far better to finish a workout feeling energized and wanting a little more than to be so crippled with soreness that you cannot walk down stairs the next day.
        </div>
      </section>

      {/* MISTAKE 2 */}
      <section id="mistake-2-skipping-warmups" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-stone-200 text-stone-900 font-bold flex items-center justify-center text-sm font-mono shrink-0">
            02
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
            Skipping Warm-Ups
          </h2>
        </div>
        <p>
          <strong>Why it’s a problem:</strong> Going directly from sitting at a computer desk into heavy squats or brisk sprints catches cold muscle tissue unprepared. Cold tendons are less elastic, leading to preventable strains in the lower back, hamstrings, and shoulders.
        </p>
        <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 text-sm">
          <strong className="text-emerald-950">Practical Solution:</strong> Dedicate 5 full minutes to dynamic mobility (arm swings, cat-cow spine flexion, hip circles, and marching). Refer to the warm-up protocol in our <Link to="/beginner-workout-guide#why-warmups-matter" className="underline font-semibold hover:text-emerald-900">beginner workout guide</Link>.
        </div>
      </section>

      {/* MISTAKE 3 */}
      <section id="mistake-3-poor-technique" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-stone-200 text-stone-900 font-bold flex items-center justify-center text-sm font-mono shrink-0">
            03
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
            Using Poor Exercise Technique
          </h2>
        </div>
        <p>
          <strong>Why it’s a problem:</strong> Performing exercises with rounded lower backs, collapsing knees, or jerky momentum shifts stress away from target muscles and concentrates shear forces directly onto spinal discs and knee ligaments.
        </p>
        <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 text-sm">
          <strong className="text-emerald-950">Practical Solution:</strong> Leave your ego at the door. Practice movements slowly with bodyweight in front of a mirror or record a video of yourself on your phone to check alignment. Only add resistance once movement mechanics are pristine.
        </div>
      </section>

      {/* MISTAKE 4 */}
      <section id="mistake-4-comparing-progress" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-stone-200 text-stone-900 font-bold flex items-center justify-center text-sm font-mono shrink-0">
            04
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
            Comparing Progress With Other People
          </h2>
        </div>
        <p>
          <strong>Why it’s a problem:</strong> Scrolling through fitness influencers on social media creates unrealistic expectations. Many online figures have trained for 10+ years, use flattering studio lighting, or take performance-enhancing substances. Comparing your day 1 to someone else's highlight reel leads to demoralization and self-doubt.
        </p>
        <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 text-sm">
          <strong className="text-emerald-950">Practical Solution:</strong> The only person you are competing against is yesterday’s version of you. Track personal milestones: did you walk 20 minutes today? Did you drink your water? That is genuine progress.
        </div>
      </section>

      {/* MISTAKE 5 */}
      <section id="mistake-5-ignoring-recovery" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-stone-200 text-stone-900 font-bold flex items-center justify-center text-sm font-mono shrink-0">
            05
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
            Ignoring Rest and Recovery
          </h2>
        </div>
        <p>
          <strong>Why it’s a problem:</strong> Training the same muscles every single day prevents the rebuilding of damaged fibers. Without recovery, performance drops, chronic fatigue sets in, and immune function weakens.
        </p>
        <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 text-sm">
          <strong className="text-emerald-950">Practical Solution:</strong> Treat your rest days as an active part of your fitness program. Take a relaxing walk, practice light stretching, and allow 48 hours before working the same muscle groups again.
        </div>
      </section>

      {/* MISTAKE 6 */}
      <section id="mistake-6-expecting-immediate-results" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-stone-200 text-stone-900 font-bold flex items-center justify-center text-sm font-mono shrink-0">
            06
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
            Expecting Immediate Results
          </h2>
        </div>
        <p>
          <strong>Why it’s a problem:</strong> Expecting visible six-pack abs or dramatic body changes after 7 days sets you up for disappointment. Biological remodeling of muscle, connective tissue, and cardiovascular capacity takes weeks and months.
        </p>
        <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 text-sm">
          <strong className="text-emerald-950">Practical Solution:</strong> Shift your metric of success from appearance to internal benefits. Notice how much better you sleep, the boost in your afternoon mood, and how easily you carry groceries up the stairs.
        </div>
      </section>

      {/* MISTAKE 7 */}
      <section id="mistake-7-following-extreme-diets" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-stone-200 text-stone-900 font-bold flex items-center justify-center text-sm font-mono shrink-0">
            07
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
            Following Extreme Diets
          </h2>
        </div>
        <p>
          <strong>Why it’s a problem:</strong> Slashing calories to 1,000 per day or completely eliminating entire macronutrient groups leaves you exhausted, irritable, and prone to rebound binge-eating.
        </p>
        <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 text-sm">
          <strong className="text-emerald-950">Practical Solution:</strong> Instead of crash dieting, explore our guide on <Link to="/beginner-nutrition-guide" className="underline font-semibold hover:text-emerald-900">nutrition for beginners</Link> and adopt a sustainable balanced plate. Eat wholesome carbs, lean proteins, and healthy fats that fuel your activity.
        </div>
      </section>

      {/* MISTAKE 8 */}
      <section id="mistake-8-neglecting-hydration-sleep" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-stone-200 text-stone-900 font-bold flex items-center justify-center text-sm font-mono shrink-0">
            08
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
            Neglecting Hydration and Sleep
          </h2>
        </div>
        <p>
          <strong>Why it’s a problem:</strong> Getting 5 hours of sleep while trying to exercise places severe stress on your nervous system. Sleep is when human growth hormone and cellular repair peak. Dehydration reduces muscular power output and causes dizziness.
        </p>
        <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 text-sm">
          <strong className="text-emerald-950">Practical Solution:</strong> Aim for 7 to 9 hours of quality sleep each night. Keep a water bottle at your workspace and aim for pale lemonade-colored urine throughout the day.
        </div>
      </section>

      {/* MISTAKE 9 */}
      <section id="mistake-9-changing-routines-constantly" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-stone-200 text-stone-900 font-bold flex items-center justify-center text-sm font-mono shrink-0">
            09
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
            Changing Routines Constantly ("Muscle Confusion")
          </h2>
        </div>
        <p>
          <strong>Why it’s a problem:</strong> Switching your workout routine every week prevents neuromuscular adaptation. You never become skilled at squats, push-ups, or hinges, making it impossible to apply progressive overload.
        </p>
        <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 text-sm">
          <strong className="text-emerald-950">Practical Solution:</strong> Pick one simple full-body routine (like the 3-day split in our <Link to="/beginner-workout-guide" className="underline font-semibold hover:text-emerald-900">beginner workout guide</Link>) and stick to it for at least 8 to 12 weeks before introducing new variations.
        </div>
      </section>

      {/* MISTAKE 10 */}
      <section id="mistake-10-ignoring-pain-warning-signs" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-stone-200 text-stone-900 font-bold flex items-center justify-center text-sm font-mono shrink-0">
            10
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
            Ignoring Persistent Pain or Warning Signs
          </h2>
        </div>
        <p>
          <strong>Why it’s a problem:</strong> The old gym mantra "no pain, no gain" is dangerous advice for beginners. Muscle burn is normal; joint pain, tendon pinching, and acute pain are warning sirens from your body that damage is occurring.
        </p>
        <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 text-sm">
          <strong className="text-emerald-950">Practical Solution:</strong> If an exercise hurts your joint, stop immediately. Never "push through" stabbing or clicking joint pain. Switch to an easier variation or rest.
        </div>
      </section>

      {/* BUILDING SUSTAINABLE HABITS SECTION */}
      <section id="building-sustainable-habits" className="scroll-mt-28 space-y-4 pt-8 border-t border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-emerald-700" />
          <span>How to Build Sustainable Fitness Habits</span>
        </h2>
        <p>
          Willpower is like a phone battery—it drains throughout the day as you make decisions and navigate stress. To ensure your fitness persists for months and years, replace willpower with behavioral systems:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <h3 className="font-bold text-stone-900 text-base mb-1">1. Habit Stacking</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Anchor your new workout to an existing daily routine: "Immediately after pouring my morning coffee, I will do my 5-minute warm-up mobility routine."
            </p>
          </div>
          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <h3 className="font-bold text-stone-900 text-base mb-1">2. The 2-Minute Rule</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              On days when you feel unmotivated, tell yourself you will only do the 5-minute warm-up. Ninety percent of the time, once you start moving, you will complete the workout.
            </p>
          </div>
          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <h3 className="font-bold text-stone-900 text-base mb-1">3. Never Miss Twice</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Missing one workout happens to everyone. Do not let one missed day become a missed week. Pick right back up on your next scheduled day without guilt.
            </p>
          </div>
        </div>
      </section>

      {/* PROMINENT MEDICAL SAFETY CALLOUT AS REQUESTED */}
      <section id="medical-safety-advisory" className="scroll-mt-28 space-y-4 pt-8 border-t border-stone-200">
        <div className="p-6 sm:p-8 rounded-2xl border-2 border-red-300 bg-red-50 text-stone-900">
          <div className="flex items-start gap-4">
            <HeartPulse className="w-7 h-7 text-red-600 shrink-0 mt-0.5" />
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-red-950">
                Medical Warning: When to Seek Immediate Attention
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-red-900">
                While mild muscle fatigue and elevated heart rate are completely expected during physical exercise, <strong>sharp pain, chest pain or pressure, dizziness, fainting, or unusual severe breathlessness must never be ignored</strong>.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-red-900">
                If you experience chest tightness radiating to your arm or jaw, sudden irregular heartbeats, lightheadedness leading to fainting, or acute tearing pain in a joint, stop physical activity immediately and <strong>seek prompt medical attention from emergency services or a qualified physician</strong>.
              </p>
              <p className="text-xs text-red-800 font-medium pt-1">
                Your health and safety always come first. Exercise should strengthen your vitality, not jeopardize it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
