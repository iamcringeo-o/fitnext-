import { useState } from 'react';
import { useSEO } from '../hooks/useSEO.ts';
import { ArticleLayout } from '../components/ArticleLayout.tsx';
import { ARTICLES } from '../data/articles.ts';
import { Link } from '../context/RouterContext.tsx';
import type { FaqItem, TableOfContentsItem } from '../types.ts';
import { Droplets, Utensils, CheckCircle2, AlertCircle, HelpCircle, Sparkles } from 'lucide-react';

export function NutritionGuidePage() {
  const article = ARTICLES[1]; // beginner-nutrition-guide

  // Interactive Hydration Helper
  const [weightLbs, setWeightLbs] = useState<number>(150);
  const estimatedWaterOz = Math.round(weightLbs * 0.5 + 12); // baseline 0.5 oz per lb + 12 oz exercise bonus
  const estimatedLiters = (estimatedWaterOz * 0.02957).toFixed(1);

  // Interactive Plate Section State
  const [activePlateSection, setActivePlateSection] = useState<'veggies' | 'protein' | 'carbs' | 'fats'>('protein');

  const toc: TableOfContentsItem[] = [
    { id: 'what-balanced-nutrition-means', title: 'What Balanced Nutrition Really Means' },
    { id: 'macronutrients-and-micronutrients', title: 'Understanding Protein, Carbs, Fats & Vitamins' },
    { id: 'protein-sources-table', title: 'Practical Protein Sources (Veg & Non-Veg)' },
    { id: 'building-a-balanced-plate', title: 'How to Build a Balanced Plate' },
    { id: 'hydration-and-habits', title: 'Hydration and Everyday Food Choices' },
    { id: 'sample-day-of-eating', title: 'Sample Balanced Day of Eating (Example)' },
    { id: 'exercise-recovery-habits', title: 'Nutrition Habits for Workout Recovery' },
    { id: 'common-nutrition-myths', title: 'Debunking Common Nutrition Myths' }
  ];

  const keyTakeaways = [
    'Balanced nutrition is about nourishing your body with nutrient-dense foods, not extreme restriction or starvation.',
    'Protein supports muscle repair; carbohydrates supply direct workout energy; healthy fats regulate hormones and cellular health.',
    'Both vegetarian and omnivorous diets can easily supply sufficient protein using everyday grocery foods without relying on supplements.',
    'The "Balanced Plate Rule" (1/2 vegetables, 1/4 lean protein, 1/4 whole grains/tubers, plus a thumb of healthy fats) is more sustainable than obsessive calorie counting.',
    'Water intake and regular sleep are just as critical for fitness results as what you put on your plate.'
  ];

  const faqs: FaqItem[] = [
    {
      question: 'Do beginners need to count every single calorie?',
      answer:
        'No. For the majority of beginners, obsessively counting calories or weighing food can create unnecessary stress and burnout. Instead, start by practicing the balanced plate method (1/2 veggies, 1/4 protein, 1/4 complex carbohydrates) and paying attention to your natural hunger and fullness cues.'
    },
    {
      question: 'Do I have to drink a protein shake right after my workout?',
      answer:
        'No. The concept of an urgent 30-minute "anabolic window" where you must slam a protein shake is largely a marketing myth. As long as you consume a balanced meal containing 20 to 30 grams of protein within 1 to 2 hours before or after your session, your body has all the amino acids it needs for recovery.'
    },
    {
      question: 'Are carbohydrates bad for you when trying to get fit?',
      answer:
        'Carbohydrates are your body and brain’s preferred source of energy for strength training and cardiovascular exercise. Complex carbohydrates like oats, sweet potatoes, brown rice, and berries provide lasting stamina, fiber, and B vitamins.'
    },
    {
      question: 'How do I know if I am drinking enough water?',
      answer:
        'The simplest indicator is the color of your urine. It should ideally be a pale straw or lemonade color. If it is dark yellow or amber, increase your water intake. If it is completely clear all day, you may be drinking more than necessary and flushing out electrolytes.'
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
      { name: 'Beginner Nutrition Guide', path: article.url }
    ],
    faqs,
    publishedTime: '2026-10-01'
  });

  return (
    <ArticleLayout
      article={article}
      intro={
        <p>
          Proper nutrition does not require complicated meal plans, expensive supplements, or eliminating entire food groups. In this comprehensive <strong>beginner nutrition guide</strong>, you will learn the fundamentals of <strong>nutrition for beginners</strong>: how protein, carbs, and healthy fats fuel your workouts, how to build balanced plates effortlessly, and how to create sustainable eating habits that support your fitness for life.
        </p>
      }
      toc={toc}
      keyTakeaways={keyTakeaways}
      faqs={faqs}
      nextArticleSlug="fitness-mistakes-beginners"
    >
      {/* SECTION 1 */}
      <section id="what-balanced-nutrition-means" className="scroll-mt-28 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
          What Balanced Nutrition Really Means
        </h2>
        <p>
          Diet culture often teaches beginners that eating for fitness is about deprivation: cutting carbs to zero, skipping meals, or eating bland chicken breasts out of plastic containers. This approach fails almost 100% of the time because it is physically exhausting and mentally unsustainable.
        </p>
        <p>
          At FitStart, <strong>balanced nutrition</strong> means eating in a way that fuels your physical activity, supports deep restorative sleep, provides steady daily energy, and allows for cultural and social enjoyment of food. Individual nutritional requirements vary significantly based on your age, body composition, current activity levels, biological sex, and personal health background.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="macronutrients-and-micronutrients" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
          Understanding Protein, Carbohydrates, Fats &amp; Micronutrients
        </h2>
        <p>
          Your body requires macronutrients in large quantities and micronutrients in small quantities to function, recover, and adapt to exercise:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <h3 className="font-bold text-stone-900 mb-1">Protein (The Builder)</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Supplies amino acids, the primary building blocks for muscle repair, bone density, enzymes, and hormones. Protein also promotes satiety, helping you feel satisfied after meals.
            </p>
          </div>
          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <h3 className="font-bold text-stone-900 mb-1">Carbohydrates (The Primary Fuel)</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Stored in muscles and liver as glycogen. During resistance training and brisk walking, carbohydrates provide rapid, efficient cellular energy so you don’t feel sluggish.
            </p>
          </div>
          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <h3 className="font-bold text-stone-900 mb-1">Healthy Fats (The Regulator)</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Essential for endocrine hormone production (including testosterone and estrogen), brain function, cell membrane integrity, and the absorption of fat-soluble vitamins (A, D, E, K).
            </p>
          </div>
          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <h3 className="font-bold text-stone-900 mb-1">Vitamins &amp; Minerals (Micros)</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Iron for oxygen transport in blood, calcium and vitamin D for bone integrity, potassium and sodium (electrolytes) for nerve conduction and muscle contractions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROTEIN SOURCES TABLE */}
      <section id="protein-sources-table" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
          Practical Protein Sources (Vegetarian and Non-Vegetarian)
        </h2>
        <p>
          For fitness beginners, getting approximately 20 to 30 grams of protein per main meal provides an optimal stimulus for muscle protein synthesis and recovery. Here are everyday, accessible options:
        </p>

        <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white my-6 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-stone-100 border-b border-stone-200 text-stone-900 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4">Food Source</th>
                <th className="py-3 px-4">Diet Category</th>
                <th className="py-3 px-4">Typical Serving Size</th>
                <th className="py-3 px-4">Estimated Protein</th>
                <th className="py-3 px-4">Added Benefits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-stone-950">Chicken or Turkey Breast</td>
                <td className="py-3.5 px-4 text-stone-600">Non-Vegetarian</td>
                <td className="py-3.5 px-4 tabular-nums">100g (cooked, ~palm size)</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-800 tabular-nums">~28–31g</td>
                <td className="py-3.5 px-4">Lean, rich in B6, B12, and phosphorus</td>
              </tr>
              <tr className="bg-stone-50/50">
                <td className="py-3.5 px-4 font-semibold text-stone-950">Whole Eggs</td>
                <td className="py-3.5 px-4 text-stone-600">Vegetarian (Lacto-Ovo)</td>
                <td className="py-3.5 px-4 tabular-nums">2 large whole eggs</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-800 tabular-nums">~12–14g</td>
                <td className="py-3.5 px-4">High in choline, lutein, and healthy fats</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-stone-950">Greek Yogurt (Plain 0–2%)</td>
                <td className="py-3.5 px-4 text-stone-600">Vegetarian</td>
                <td className="py-3.5 px-4 tabular-nums">3/4 cup (170g)</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-800 tabular-nums">~15–18g</td>
                <td className="py-3.5 px-4">Gut-healthy probiotics &amp; bioavailable calcium</td>
              </tr>
              <tr className="bg-stone-50/50">
                <td className="py-3.5 px-4 font-semibold text-stone-950">Firm Tofu or Tempeh</td>
                <td className="py-3.5 px-4 text-stone-600">Plant-Based / Vegan</td>
                <td className="py-3.5 px-4 tabular-nums">100g (~1/3 block)</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-800 tabular-nums">~15–19g</td>
                <td className="py-3.5 px-4">Complete plant protein, isoflavones, iron</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-stone-950">Lentils &amp; Chickpeas</td>
                <td className="py-3.5 px-4 text-stone-600">Plant-Based / Vegan</td>
                <td className="py-3.5 px-4 tabular-nums">1 cup cooked</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-800 tabular-nums">~15–18g</td>
                <td className="py-3.5 px-4">High prebiotic fiber (15g) and slow carbs</td>
              </tr>
              <tr className="bg-stone-50/50">
                <td className="py-3.5 px-4 font-semibold text-stone-950">Salmon / White Fish</td>
                <td className="py-3.5 px-4 text-stone-600">Pescatarian / Non-Veg</td>
                <td className="py-3.5 px-4 tabular-nums">100g (cooked)</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-800 tabular-nums">~22–26g</td>
                <td className="py-3.5 px-4">Heart-healthy Omega-3 fatty acids (EPA/DHA)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: HOW TO BUILD A BALANCED PLATE */}
      <section id="building-a-balanced-plate" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
          How to Build a Balanced Plate
        </h2>
        <p>
          Instead of weighing every gram on a digital kitchen scale, use the evidence-based <strong>Balanced Plate Rule</strong>. This simple visual framework works at home, at restaurants, or when travelling.
        </p>

        {/* Interactive Plate Explorer */}
        <div className="p-6 rounded-xl border border-stone-200 bg-white my-6">
          <div className="text-sm font-semibold text-stone-900 mb-3">
            Click a section to explore what goes on your plate:
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              type="button"
              onClick={() => setActivePlateSection('veggies')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                activePlateSection === 'veggies'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              1/2 Plate: Vegetables &amp; Fiber
            </button>
            <button
              type="button"
              onClick={() => setActivePlateSection('protein')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                activePlateSection === 'protein'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              1/4 Plate: Quality Protein
            </button>
            <button
              type="button"
              onClick={() => setActivePlateSection('carbs')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                activePlateSection === 'carbs'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              1/4 Plate: Smart Carbohydrates
            </button>
            <button
              type="button"
              onClick={() => setActivePlateSection('fats')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                activePlateSection === 'fats'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              1 Thumb: Healthy Fats
            </button>
          </div>

          <div className="p-5 rounded-lg bg-stone-50 border border-stone-200 text-sm">
            {activePlateSection === 'veggies' && (
              <div className="space-y-2">
                <h4 className="font-bold text-stone-950 text-base">Half Your Plate: Non-Starchy Vegetables</h4>
                <p className="text-stone-700">
                  Fill half your plate with colorful vegetables like spinach, broccoli, bell peppers, asparagus, carrots, and leafy salad greens. These are rich in fiber, vitamins, and minerals with minimal caloric density, keeping you full and regulating digestion.
                </p>
                <p className="text-xs text-stone-500 font-medium">
                  <strong>Practical Tip:</strong> Frozen vegetables steam in 4 minutes and retain equal nutritional value to fresh produce!
                </p>
              </div>
            )}
            {activePlateSection === 'protein' && (
              <div className="space-y-2">
                <h4 className="font-bold text-stone-950 text-base">One Quarter: Lean or Plant-Based Protein</h4>
                <p className="text-stone-700">
                  Roughly the size and thickness of your palm (approx. 20–30g). Examples include baked chicken breast, salmon, firm tofu, tempeh, 3 eggs, or Greek yogurt. This triggers muscle protein synthesis after your workout.
                </p>
                <p className="text-xs text-stone-500 font-medium">
                  <strong>Practical Tip:</strong> Include a modest palm-sized portion with each of your 3 daily meals.
                </p>
              </div>
            )}
            {activePlateSection === 'carbs' && (
              <div className="space-y-2">
                <h4 className="font-bold text-stone-950 text-base">One Quarter: Complex Carbohydrates</h4>
                <p className="text-stone-700">
                  Roughly a cupped hand portion. Great options include sweet potatoes, brown rice, quinoa, rolled oats, whole grain pasta, or fresh berries. These replenish muscle glycogen stores used during workouts.
                </p>
                <p className="text-xs text-stone-500 font-medium">
                  <strong>Practical Tip:</strong> Do not eliminate carbs—they keep your workouts energetic and prevent cravings later in the evening!
                </p>
              </div>
            )}
            {activePlateSection === 'fats' && (
              <div className="space-y-2">
                <h4 className="font-bold text-stone-950 text-base">One Thumb Portion: Healthy Fats</h4>
                <p className="text-stone-700">
                  A thumb-sized serving (approx. 1 tablespoon) of extra virgin olive oil, 1/4 avocado, a handful of walnuts or almonds, or chia seeds. Fats slow gastric emptying, providing sustained satiety between meals.
                </p>
                <p className="text-xs text-stone-500 font-medium">
                  <strong>Practical Tip:</strong> A light drizzle of olive oil on roasted vegetables aids the absorption of fat-soluble vitamins!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 5: HYDRATION */}
      <section id="hydration-and-habits" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
          Hydration and Everyday Food Choices
        </h2>
        <p>
          Even mild dehydration of 1–2% body weight can reduce exercise strength, cause premature fatigue, and trigger headaches. Water is also essential for nutrient transportation and lubricating joints.
        </p>

        {/* Interactive Hydration Calculator */}
        <div className="p-6 rounded-xl border border-stone-200 bg-stone-50 my-6">
          <h3 className="text-base font-bold text-stone-950 mb-2 flex items-center gap-2">
            <Droplets className="w-4 h-4 text-emerald-700" />
            <span>Interactive Hydration Estimator</span>
          </h3>
          <p className="text-xs text-stone-600 mb-4">
            Adjust your approximate body weight to see a beginner baseline daily fluid estimate:
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="space-y-1">
              <label htmlFor="body-weight" className="text-xs font-semibold text-stone-700 block">
                Your Approximate Weight: {weightLbs} lbs ({Math.round(weightLbs / 2.2)} kg)
              </label>
              <input
                id="body-weight"
                type="range"
                min="100"
                max="260"
                step="5"
                value={weightLbs}
                onChange={(e) => setWeightLbs(Number(e.target.value))}
                className="w-48 sm:w-64 accent-emerald-600 cursor-pointer"
              />
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200">
              <div className="text-xs text-stone-500 font-medium">Suggested Daily Fluid:</div>
              <div className="text-xl font-bold text-stone-950 font-['Oswald'] tabular-nums">
                ~{estimatedWaterOz} fl oz / ~{estimatedLiters} Liters
              </div>
              <div className="text-[11px] text-stone-500">Includes plain water, herbal tea &amp; workout hydration</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SAMPLE DAY OF EATING */}
      <section id="sample-day-of-eating" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
          Sample Balanced Day of Eating
        </h2>
        
        {/* Clear Disclaimer as requested */}
        <div className="p-4 rounded-lg bg-stone-100 border border-stone-200 text-xs text-stone-600 leading-relaxed">
          <strong>Important Note:</strong> This meal outline is clearly labelled as an illustrative <em>example</em> rather than a prescribed diet. Your individual caloric and macronutrient needs depend upon your height, weight, activity, metabolism, and specific physician recommendations.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
              Breakfast (7:30 AM)
            </span>
            <h4 className="font-bold text-stone-950 text-base mb-2">Wholesome Protein Oatmeal Bowl</h4>
            <ul className="text-xs sm:text-sm text-stone-600 space-y-1">
              <li>• 1/2 cup rolled oats cooked in water or unsweetened almond milk</li>
              <li>• 1 scoop protein powder OR 3/4 cup Greek yogurt stirred in</li>
              <li>• 1/2 cup fresh berries (blueberries/strawberries)</li>
              <li>• 1 tablespoon chia seeds or chopped walnuts</li>
            </ul>
          </div>

          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
              Lunch (12:30 PM)
            </span>
            <h4 className="font-bold text-stone-950 text-base mb-2">Mediterranean Power Salad &amp; Quinoa</h4>
            <ul className="text-xs sm:text-sm text-stone-600 space-y-1">
              <li>• 100g grilled chicken breast, baked tofu, or canned tuna</li>
              <li>• 1/2 cup cooked quinoa or brown rice</li>
              <li>• Generous mixed greens, cucumber, diced bell pepper, cherry tomatoes</li>
              <li>• 1 tablespoon extra virgin olive oil and fresh lemon dressing</li>
            </ul>
          </div>

          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
              Afternoon Snack (3:45 PM)
            </span>
            <h4 className="font-bold text-stone-950 text-base mb-2">Simple Energy &amp; Hydration</h4>
            <ul className="text-xs sm:text-sm text-stone-600 space-y-1">
              <li>• 1 crisp apple or banana</li>
              <li>• 1 tablespoon natural peanut butter or a small handful of almonds</li>
              <li>• Tall glass of water (12 oz)</li>
            </ul>
          </div>

          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
              Dinner (7:00 PM)
            </span>
            <h4 className="font-bold text-stone-950 text-base mb-2">Roasted Salmon with Sweet Potato &amp; Broccoli</h4>
            <ul className="text-xs sm:text-sm text-stone-600 space-y-1">
              <li>• 100g baked wild salmon or lentil stew</li>
              <li>• 1 medium baked sweet potato with a dash of cinnamon</li>
              <li>• Large serving of roasted broccoli and zucchini with garlic</li>
              <li>• Water or herbal chamomile tea</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 7: EXERCISE RECOVERY HABITS */}
      <section id="exercise-recovery-habits" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
          Nutrition Habits That Support Exercise Recovery
        </h2>
        <p>
          Recovery begins the moment your workout ends. Consuming a source of quality protein paired with carbohydrates within 1 to 2 hours helps initiate muscle repair and restock glycogen stores.
        </p>
        <p>
          Avoid skipping dinner after an evening workout in the false belief that going to bed starving burns more fat. In reality, under-fueling impairs sleep quality, spikes the stress hormone cortisol, and can leave you sluggish the next morning.
        </p>
      </section>

      {/* SECTION 8: COMMON MYTHS */}
      <section id="common-nutrition-myths" className="scroll-mt-28 space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
          Common Nutrition Myths Beginners Should Know
        </h2>
        <div className="space-y-4 my-6">
          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <h3 className="font-bold text-stone-950 mb-1 text-base">Myth 1: Supplements are compulsory to make fitness progress</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              <strong>The Reality:</strong> Supplements are merely intended to supplement what might be missing in a diet. If you eat wholesome real foods, you do not need expensive BCAAs, fat burners, or stimulant pre-workouts. Save your money for quality grocery staples.
            </p>
          </div>
          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <h3 className="font-bold text-stone-950 mb-1 text-base">Myth 2: Eating fat makes you fat</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              <strong>The Reality:</strong> Dietary fats from avocados, nuts, seeds, and fish are crucial for cell health, hormone balance, and brain function. Fat does not directly translate into adipose tissue; weight change is driven by total energy balance over weeks and months.
            </p>
          </div>
          <div className="p-5 rounded-lg border border-stone-200 bg-white">
            <h3 className="font-bold text-stone-950 mb-1 text-base">Myth 3: You must eat every 2 hours to keep your metabolism high</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              <strong>The Reality:</strong> Meal frequency has virtually no meaningful impact on total daily metabolic rate. Whether you prefer 3 hearty meals or 3 meals plus 2 snacks, choose a schedule that fits your daily work routine and personal appetite.
            </p>
          </div>
        </div>

        <p className="text-sm text-stone-600 pt-2">
          Want to ensure you aren't making common training or recovery mistakes? Check out our guide on <Link to="/fitness-mistakes-beginners" className="underline font-semibold text-emerald-800 hover:text-emerald-950">10 Fitness Mistakes Beginners Should Avoid</Link>.
        </p>
      </section>
    </ArticleLayout>
  );
}
