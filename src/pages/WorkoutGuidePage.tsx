import { useState, useEffect } from 'react';
import { useSEO } from '../hooks/useSEO.ts';
import { ArticleLayout } from '../components/ArticleLayout.tsx';
import { ARTICLES } from '../data/articles.ts';
import { Link } from '../context/RouterContext.tsx';
import type { FaqItem, TableOfContentsItem } from '../types.ts';
import { Play, Pause, RotateCcw, AlertTriangle, ShieldCheck, Dumbbell, Activity, CheckCircle2 } from 'lucide-react';

export function WorkoutGuidePage() {
  const article = ARTICLES[0]; // beginner-workout-guide

  // Interactive Rest Timer for beginners
  const [timerDuration, setTimerDuration] = useState<number>(60);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const handleTimerReset = (duration: number) => {
    setIsTimerRunning(false);
    setTimerDuration(duration);
    setTimeLeft(duration);
  };

  const toc: TableOfContentsItem[] = [
    { id: 'preparing-to-exercise', title: 'Preparing Before You Start' },
    { id: 'why-warmups-matter', title: 'Warm-Ups and Why They Matter' },
    { id: 'basic-strength-exercises', title: '5 Essential Beginner Exercises' },
    { id: 'sample-weekly-routine', title: 'Sample 3-Day Beginner Routine' },
    { id: 'sets-reps-explained', title: 'Choosing Manageable Sets and Reps' },
    { id: 'rest-recovery-sleep', title: 'Rest, Recovery, Sleep, and Consistency' },
    { id: 'progressive-overload', title: 'How to Progress Gradually' },
    { id: 'safety-guidance', title: 'Essential Workout Safety Guidance' }
  ];

  const keyTakeaways = [
    'A beginner workout guide should emphasize movement quality and joint stability before adding resistance.',
    'Training 3 non-consecutive days per week (25–35 minutes each) is sufficient to build foundational strength.',
    'Always perform a 5-minute dynamic warm-up to increase core temperature and lubricate joints.',
    'Start with 2 sets of 8 to 10 repetitions at an RPE of 6–7 (leaving 2–3 repetitions in reserve).',
    'True progress happens during recovery: 48 hours between training the same muscle groups plus 7–9 hours of sleep are non-negotiable.'
  ];

  const faqs: FaqItem[] = [
    {
      question: 'How many days a week should a beginner work out?',
      answer:
        'Many beginners can start with two or three planned workout sessions per week and gradually adjust based on recovery and ability. A 3-day full-body schedule on non-consecutive days (like Monday, Wednesday, and Friday) gives your muscles and joints the essential 48 hours needed to adapt.'
    },
    {
      question: 'How long should a beginner workout session last?',
      answer:
        'A comprehensive beginner workout typically lasts between 25 and 40 minutes, including a 5-minute dynamic warm-up, 20 to 25 minutes of strength movements with rest breaks, and a brief cool-down. More is not better when you are first adapting.'
    },
    {
      question: 'What if I cannot do a full squat or push-up?',
      answer:
        'That is completely normal. Fitness is about finding the regression that meets your current strength. If bodyweight squats are difficult, use a sturdy dining chair to perform chair sit-to-stands. If floor push-ups strain your shoulders, perform wall push-ups or counter-top push-ups until strength develops.'
    },
    {
      question: 'Should beginners feel sore after every workout to build muscle?',
      answer:
        'No. Mild muscle soreness (DOMS) is common when starting unfamiliar exercises, but crippling soreness is a warning sign that you did too much too soon. Progressive consistency and joint comfort are much better indicators of success than soreness.'
    },
    {
      question: 'What basic equipment do I need for this beginner workout plan?',
      answer:
        'You can execute this entire beginner workout plan using bodyweight alone. To progress over time, a single light-to-medium resistance band or a small pair of 5 to 10 lb dumbbells is more than enough for upper body pulling and rowing.'
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
      { name: 'Beginner Workout Guide', path: article.url }
    ],
    faqs,
    publishedTime: '2026-10-01'
  });

  return (
    <ArticleLayout
      article={article}
      intro={
        <p>
          Starting an exercise routine is one of the highest-leverage investments you can make in your daily energy, joint health, and longevity. However, most beginners give up early because they follow overly aggressive plans designed for seasoned athletes. In this <strong>beginner workout guide</strong>, you will discover how to start exercising safely, master foundational movement patterns, plan your first week, and build a consistent <strong>beginner workout plan</strong> without burnout or injury.
        </p>
      }
      toc={toc}
      keyTakeaways={keyTakeaways}
      faqs={faqs}
      nextArticleSlug="beginner-nutrition-guide"
    >
      {/* SECTION 1 */}
      <section id="preparing-to-exercise" className="scroll-mt-28 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
          How to Prepare Before Starting Your Workout Routine
        </h2>
        <p>
          Before lifting a dumbbell or doing your first set of repetitions, setting up a supportive foundation removes unnecessary friction. You do not need expensive athletic gear or high-tech fitness wearables to start.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <h3 className="font-semibold text-stone-900 mb-2">1. Supportive Footwear</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Wear flat-soled sneakers or stable cross-trainers. Avoid ultra-cushioned running shoes with high heel drops when doing strength exercises like squats, as flat soles provide better ground connection.
            </p>
          </div>
          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <h3 className="font-semibold text-stone-900 mb-2">2. Clear, Safe Workout Area</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Clear a 6×6 foot space free of rugs, pets, and clutter. A yoga mat or carpeted surface provides adequate grip and cushioning for floor movements.
            </p>
          </div>
          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <h3 className="font-semibold text-stone-900 mb-2">3. Hydration Readiness</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Drink 12–16 ounces of water 30 to 45 minutes prior to moving. Keep a reusable water bottle nearby to take small sips between sets.
            </p>
          </div>
          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <h3 className="font-semibold text-stone-900 mb-2">4. Medical Readiness Check</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              If you have been sedentary for several years or manage chronic medical conditions (like hypertension or diabetes), consult with your physician prior to beginning.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="why-warmups-matter" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
          Warm-Ups and Why They Matter
        </h2>
        <p>
          One of the quickest ways for a beginner to develop joint discomfort or strain a muscle is to jump straight into intense exercise cold. A warm-up is not an optional chore—it is your biological ramp-up sequence.
        </p>
        <p>
          During a 5-minute dynamic warm-up, your heart rate gradually elevates, synovial fluid lubricates your joint capsules, and neural connections to your muscles awaken. <em>Static stretching</em> (holding a stretch in place for 30 seconds) is best reserved for after the workout; before your workout, stick strictly to <strong>dynamic mobility</strong>.
        </p>

        {/* Dynamic Warmup Routine Box */}
        <div className="p-6 rounded-xl border border-stone-200 bg-white my-6">
          <h3 className="text-lg font-bold text-stone-950 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-700" />
            <span>The 5-Minute Beginner Dynamic Warm-Up</span>
          </h3>
          <ol className="space-y-3 text-sm sm:text-base text-stone-700">
            <li className="flex items-start gap-3">
              <span className="font-mono font-bold text-emerald-700 shrink-0">1.</span>
              <span><strong>Arm Circles &amp; Chest Openers:</strong> 30 seconds forward, 30 seconds backward. Wakes up the shoulders and upper back.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono font-bold text-emerald-700 shrink-0">2.</span>
              <span><strong>Cat-Cow Stretches:</strong> 10 slow cycles on hands and knees, breathing in on extension and out on gentle flexion. Mobilizes the entire spine.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono font-bold text-emerald-700 shrink-0">3.</span>
              <span><strong>Standing Hip Openers / Leg Swings:</strong> 10 gentle swings per side holding a wall for balance. Prepares the hip capsule for squats.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono font-bold text-emerald-700 shrink-0">4.</span>
              <span><strong>Bodyweight Hip Hinges:</strong> 10 repetitions hands on hips, pushing glutes backward while keeping a flat back. Warms up the hamstrings.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-mono font-bold text-emerald-700 shrink-0">5.</span>
              <span><strong>Brisk Marching in Place:</strong> 60 seconds with pumping arms to gently bring your heart rate to working temperature.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* SECTION 3 */}
      <section id="basic-strength-exercises" className="scroll-mt-28 space-y-6 pt-6 border-t border-stone-200">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight mb-2">
            5 Essential Beginner Strength Exercises
          </h2>
          <p className="text-stone-700">
            You do not need to memorize dozens of complicated gym exercises. Master these five fundamental movement patterns: squatting, pushing, pulling, hip hinging, and core stabilization.
          </p>
        </div>

        {/* Exercise 1: Squat */}
        <div className="p-6 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold text-stone-950">1. Squat (or Chair Squat)</h3>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Lower Body Push</span>
          </div>
          <p className="text-sm text-stone-700 mb-4 leading-relaxed">
            The squat strengthens your quadriceps, glutes, hamstrings, and ankles. It simulates the natural movement of sitting down into a chair and standing back up.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
              <h4 className="font-semibold text-stone-900 mb-1">Standard Form Cues:</h4>
              <ul className="list-disc list-inside space-y-1 text-stone-600">
                <li>Feet shoulder-width apart, toes turned slightly out (5–15°).</li>
                <li>Initiate movement by sending hips backward as knees bend.</li>
                <li>Keep chest elevated and heels firmly planted on the floor.</li>
              </ul>
            </div>
            <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-950 mb-1">Easier Alternative (Regression):</h4>
              <p className="text-emerald-900">
                <strong>Chair Box Squat:</strong> Place a sturdy chair behind you. Sit down under control until your glutes touch the seat, pause for one second without rocking, and press through your heels to stand.
              </p>
            </div>
          </div>
        </div>

        {/* Exercise 2: Wall Push-Up */}
        <div className="p-6 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold text-stone-950">2. Wall Push-Up (or Incline Push-Up)</h3>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Upper Body Push</span>
          </div>
          <p className="text-sm text-stone-700 mb-4 leading-relaxed">
            Strengthens your chest (pectoralis), anterior shoulders, and triceps, while teaching full-body plank tension.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
              <h4 className="font-semibold text-stone-900 mb-1">Standard Form Cues:</h4>
              <ul className="list-disc list-inside space-y-1 text-stone-600">
                <li>Stand arm's length from a wall, hands flat at shoulder height.</li>
                <li>Keep your body in a straight line from heels to ears.</li>
                <li>Lower your chest toward the wall with elbows at a 45° angle, not flared 90°.</li>
              </ul>
            </div>
            <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-950 mb-1">Progression / Regression:</h4>
              <p className="text-emerald-900">
                As wall push-ups become easy (12+ reps), move to an elevated surface like a sturdy kitchen counter or table, eventually progressing to knees-on-floor push-ups.
              </p>
            </div>
          </div>
        </div>

        {/* Exercise 3: Glute Bridge */}
        <div className="p-6 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold text-stone-950">3. Glute Bridge</h3>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Hip Extension &amp; Hinge</span>
          </div>
          <p className="text-sm text-stone-700 mb-4 leading-relaxed">
            Crucial for countering long hours of sitting. Bridges wake up dormant gluteal muscles and protect your lower back.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
              <h4 className="font-semibold text-stone-900 mb-1">Standard Form Cues:</h4>
              <ul className="list-disc list-inside space-y-1 text-stone-600">
                <li>Lie on your back with knees bent and feet flat on the floor, hip-width apart.</li>
                <li>Drive down through your heels to raise your hips until knees, hips, and shoulders form a straight line.</li>
                <li>Squeeze your glutes at the top for 2 seconds without overarching your lower back.</li>
              </ul>
            </div>
            <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-950 mb-1">Easier Alternative:</h4>
              <p className="text-emerald-900">
                If cramping occurs, bring your heels closer to your glutes and only lift hips halfway up, concentrating purely on squeezing the glutes rather than maximal height.
              </p>
            </div>
          </div>
        </div>

        {/* Exercise 4: Rows */}
        <div className="p-6 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold text-stone-950">4. Rows with Appropriate Equipment</h3>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Upper Body Pull</span>
          </div>
          <p className="text-sm text-stone-700 mb-4 leading-relaxed">
            Strengthens the lats, rhomboids, and rear shoulders to improve everyday posture and shoulder health.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
              <h4 className="font-semibold text-stone-900 mb-1">Resistance Band / Light Dumbbell Row:</h4>
              <ul className="list-disc list-inside space-y-1 text-stone-600">
                <li>Loop a light resistance band securely around a sturdy anchor or both feet.</li>
                <li>Hinge forward slightly with a flat back and brace your abdomen.</li>
                <li>Pull elbows backward close to your ribcage, drawing your shoulder blades together.</li>
              </ul>
            </div>
            <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-950 mb-1">Easier Alternative (No Equipment):</h4>
              <p className="text-emerald-900">
                <strong>Doorway Isometric Row:</strong> Stand in a sturdy door frame with hands holding the frame at chest height. Lean back slightly and pull your chest toward the frame, squeezing your shoulder blades for 5 seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Exercise 5: Core Exercises */}
        <div className="p-6 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold text-stone-950">5. Beginner-Friendly Core: Dead Bug &amp; Bird-Dog</h3>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Core Stability</span>
          </div>
          <p className="text-sm text-stone-700 mb-4 leading-relaxed">
            Skip aggressive sit-ups and crunches, which place unnecessary pressure on the lumbar spine. Instead, train anti-extension and stability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
              <h4 className="font-semibold text-stone-900 mb-1">Dead Bug:</h4>
              <p className="text-stone-600">
                Lie on your back, knees at 90°, arms pointing toward the ceiling. Slowly extend the right arm overhead and left heel toward the floor while pressing your lower back flush against the ground. Return and alternate.
              </p>
            </div>
            <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-950 mb-1">Bird-Dog:</h4>
              <p className="text-emerald-900">
                On hands and knees, reach right arm forward and left leg backward until parallel to the floor. Hold for 2 seconds without rotating hips. Return and alternate smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SAMPLE 3-DAY ROUTINE */}
      <section id="sample-weekly-routine" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
          Sample Three-Day Beginner Routine with Rest Days
        </h2>
        <p>
          This balanced <strong>beginner workout plan</strong> distributes exercise across 3 non-consecutive days. Each workout hits the entire body so you never experience extreme localized fatigue.
        </p>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white my-6 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4">Day</th>
                <th className="py-3 px-4">Routine</th>
                <th className="py-3 px-4">Key Exercises</th>
                <th className="py-3 px-4">Sets &amp; Reps</th>
                <th className="py-3 px-4">Rest Between Sets</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-stone-950 whitespace-nowrap">Monday</td>
                <td className="py-3.5 px-4 font-medium text-emerald-800">Workout A</td>
                <td className="py-3.5 px-4">Chair Squat, Wall Push-Up, Glute Bridge, Dead Bug</td>
                <td className="py-3.5 px-4 whitespace-nowrap tabular-nums">2 sets of 8–10 reps</td>
                <td className="py-3.5 px-4 whitespace-nowrap tabular-nums">60–90 seconds</td>
              </tr>
              <tr className="bg-stone-50/50">
                <td className="py-3.5 px-4 font-semibold text-stone-950 whitespace-nowrap">Tuesday</td>
                <td className="py-3.5 px-4 text-stone-500 font-medium">Rest Day</td>
                <td className="py-3.5 px-4 text-stone-500">20–30 min light walking + stretching</td>
                <td className="py-3.5 px-4 text-stone-400">—</td>
                <td className="py-3.5 px-4 text-stone-400">—</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-stone-950 whitespace-nowrap">Wednesday</td>
                <td className="py-3.5 px-4 font-medium text-emerald-800">Workout B</td>
                <td className="py-3.5 px-4">Bodyweight Squat, Band Row, Incline Push-Up, Bird-Dog</td>
                <td className="py-3.5 px-4 whitespace-nowrap tabular-nums">2 sets of 8–10 reps</td>
                <td className="py-3.5 px-4 whitespace-nowrap tabular-nums">60–90 seconds</td>
              </tr>
              <tr className="bg-stone-50/50">
                <td className="py-3.5 px-4 font-semibold text-stone-950 whitespace-nowrap">Thursday</td>
                <td className="py-3.5 px-4 text-stone-500 font-medium">Rest Day</td>
                <td className="py-3.5 px-4 text-stone-500">Gentle yoga, outdoor stroll, hydration focus</td>
                <td className="py-3.5 px-4 text-stone-400">—</td>
                <td className="py-3.5 px-4 text-stone-400">—</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-stone-950 whitespace-nowrap">Friday</td>
                <td className="py-3.5 px-4 font-medium text-emerald-800">Workout C</td>
                <td className="py-3.5 px-4">Chair Squat, Band Row, Wall Push-Up, Knee Plank (15s holds)</td>
                <td className="py-3.5 px-4 whitespace-nowrap tabular-nums">2 sets of 8–10 reps</td>
                <td className="py-3.5 px-4 whitespace-nowrap tabular-nums">60–90 seconds</td>
              </tr>
              <tr className="bg-stone-50/50">
                <td className="py-3.5 px-4 font-semibold text-stone-950 whitespace-nowrap">Weekend</td>
                <td className="py-3.5 px-4 text-stone-500 font-medium">Active Living</td>
                <td className="py-3.5 px-4 text-stone-500">Gardening, cycling, family activities, restful sleep</td>
                <td className="py-3.5 px-4 text-stone-400">—</td>
                <td className="py-3.5 px-4 text-stone-400">—</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Interactive Rest Timer Tool for Readers */}
        <div className="p-6 rounded-xl border border-stone-200 bg-stone-50 my-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-base font-bold text-stone-950 flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-emerald-700" />
                <span>Interactive Practice: Set Rest Timer</span>
              </h3>
              <p className="text-xs text-stone-600">
                Beginners often rush their rest. Practice timing 60 or 90 seconds of breathing between exercise sets.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleTimerReset(60)}
                className={`px-3 py-1 text-xs font-semibold rounded-md border transition-colors ${
                  timerDuration === 60 ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-700 border-stone-300'
                }`}
              >
                60s Rest
              </button>
              <button
                type="button"
                onClick={() => handleTimerReset(90)}
                className={`px-3 py-1 text-xs font-semibold rounded-md border transition-colors ${
                  timerDuration === 90 ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-700 border-stone-300'
                }`}
              >
                90s Rest
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 py-4 bg-white rounded-lg border border-stone-200">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-stone-950 tabular-nums">
              00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="px-4 py-2 text-xs font-semibold rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isTimerRunning ? 'Pause' : 'Start Timer'}</span>
              </button>
              <button
                type="button"
                onClick={() => handleTimerReset(timerDuration)}
                className="p-2 text-xs font-semibold rounded-md bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
                title="Reset timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section id="sets-reps-explained" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
          How to Choose Manageable Sets and Repetitions
        </h2>
        <p>
          Fitness terminology can seem like a foreign language. Here is what you need to know in plain English:
        </p>
        <ul className="space-y-3 text-stone-700">
          <li>
            <strong>Repetition (Rep):</strong> Doing an exercise once from start to finish (e.g., lowering into a chair squat and standing back up = 1 rep).
          </li>
          <li>
            <strong>Set:</strong> A group of consecutive repetitions done without stopping (e.g., 8 chair squats in a row = 1 set).
          </li>
          <li>
            <strong>Rest Interval:</strong> The 60 to 90 seconds you sit or stand comfortably between sets to catch your breath.
          </li>
        </ul>
        <p>
          For your first 4 weeks, aim for <strong>2 sets of 8 to 10 reps</strong> per exercise. Do not train to muscular failure (the point where you collapse or cannot finish another rep). Instead, stop each set when you still feel like you could have performed 2 to 3 more clean repetitions with good form. In sports science, this is known as keeping 2–3 <em>Reps in Reserve (RIR)</em> or working at an <em>RPE of 6–7</em>.
        </p>
      </section>

      {/* SECTION 6 */}
      <section id="rest-recovery-sleep" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
          Rest, Recovery, Sleep, and Consistency
        </h2>
        <p>
          A common beginner misconception is that you grow stronger while working out. In reality, working out creates microscopic stress on muscle fibers; your body rebuilds and adapts <strong>only while you rest and sleep</strong>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="p-4 rounded-lg bg-stone-100/70 border border-stone-200">
            <h3 className="font-semibold text-stone-900 text-sm mb-1">48-Hour Muscle Rule</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Always leave at least 48 hours before exercising the same major muscle groups with resistance again.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-stone-100/70 border border-stone-200">
            <h3 className="font-semibold text-stone-900 text-sm mb-1">7–9 Hours of Sleep</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Growth hormone and cellular tissue repair peak during deep slow-wave sleep. Consistent sleep is your greatest recovery tool.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-stone-100/70 border border-stone-200">
            <h3 className="font-semibold text-stone-900 text-sm mb-1">Sustainable Consistency</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              A 30-minute workout completed 3 days a week for 6 months beats an intense 2-hour workout abandoned after two weeks.
            </p>
          </div>
        </div>
        <p className="text-sm text-stone-700">
          Remember that muscle recovery also depends on what you eat. Read our companion guide on <Link to="/beginner-nutrition-guide" className="font-semibold text-emerald-800 underline hover:text-emerald-950">nutrition for beginners</Link> to learn how balanced meals supply the necessary protein, complex carbs, and hydration.
        </p>
      </section>

      {/* SECTION 7 */}
      <section id="progressive-overload" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
          How to Progress Gradually Without Increasing Difficulty Too Quickly
        </h2>
        <p>
          Your body adapts to demands gradually. To continue getting stronger, you use <strong>progressive overload</strong>—making the workout slightly more challenging over time. However, beginners often make the mistake of adding heavy weight prematurely.
        </p>
        <p>
          Follow this 4-step hierarchy of progression:
        </p>
        <ol className="space-y-3 text-stone-700 my-4">
          <li className="flex items-start gap-3">
            <span className="font-mono font-bold text-emerald-700 shrink-0">Step 1:</span>
            <span><strong>Master Form:</strong> Achieve flawless control, steady breathing, and smooth tempo for 8 reps.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-mono font-bold text-emerald-700 shrink-0">Step 2:</span>
            <span><strong>Increase Reps:</strong> Build from 8 reps to 10 reps, and eventually 12 reps per set with bodyweight.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-mono font-bold text-emerald-700 shrink-0">Step 3:</span>
            <span><strong>Add a Third Set:</strong> Once 2 sets of 10 reps feel comfortable for two straight weeks, introduce a 3rd set.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-mono font-bold text-emerald-700 shrink-0">Step 4:</span>
            <span><strong>Introduce Light Resistance:</strong> Only after mastering 3 sets of 10–12 clean reps should you hold a light 5–10 lb dumbbell or firmer band.</span>
          </li>
        </ol>
      </section>

      {/* SECTION 8: SAFETY */}
      <section id="safety-guidance" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-emerald-700" />
          <span>Essential Workout Safety Guidance</span>
        </h2>
        <p>
          Fitness should enhance your daily life, not cause setbacks or hospital visits. Memorize the difference between productive muscular effort and genuine injury signals.
        </p>
        <div className="p-6 rounded-xl border border-amber-200 bg-amber-50/50 my-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-2 text-sm text-stone-800">
              <h3 className="font-bold text-amber-950">When to Stop Immediately:</h3>
              <p>
                <strong>Normal discomfort:</strong> Mild muscle burn toward the end of a set, elevated breathing, and warmth in the working muscles.
              </p>
              <p>
                <strong>Warning signs:</strong> Sharp joint pain, clicking accompanied by ache, dizziness, lightheadedness, chest tightness, or sudden shooting nerve sensations. If any of these occur, stop immediately.
              </p>
              <p className="text-xs text-amber-900 pt-1">
                Also review our companion guide on <Link to="/fitness-mistakes-beginners" className="underline font-semibold hover:text-amber-950">fitness mistakes beginners should avoid</Link> to stay protected from common training errors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
