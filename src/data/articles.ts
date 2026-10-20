import type { ArticleMeta } from '../types.ts';
import workoutImage from '../assets/images/guide_beginner_workout_1792512011436.jpg';
import nutritionImage from '../assets/images/guide_beginner_nutrition_1792512014263.jpg';
import mistakesImage from '../assets/images/guide_fitness_mistakes_1792512014242.jpg';

export const ARTICLES: ArticleMeta[] = [
  {
    slug: 'beginner-workout-guide',
    url: '/beginner-workout-guide',
    title: 'Beginner Workout Guide',
    seoTitle: 'Beginner Workout Guide: How to Start Exercising | FitStart',
    metaDescription: 'Learn how to start working out as a beginner, choose simple exercises, plan your first week, and build a consistent fitness routine.',
    h1: 'Beginner Workout Guide: How to Start Exercising',
    primaryKeyword: 'beginner workout guide',
    secondaryKeyword: 'beginner workout plan',
    readTime: '9 min read',
    publishDate: 'October 2026',
    image: workoutImage,
    imageAlt: 'Beginner practicing safe bodyweight squat technique in a bright exercise studio',
    summary: 'Master the fundamental movements, set up a realistic 3-day weekly routine, understand warm-ups and sets, and learn to progress safely without injury.'
  },
  {
    slug: 'beginner-nutrition-guide',
    url: '/beginner-nutrition-guide',
    title: 'Beginner Nutrition Guide',
    seoTitle: 'Beginner Nutrition Guide: Eat Well for Fitness | FitStart',
    metaDescription: 'Understand beginner fitness nutrition, protein, carbohydrates, healthy fats, hydration, balanced meals, and practical eating habits.',
    h1: 'Beginner Nutrition Guide: How to Eat for Fitness',
    primaryKeyword: 'beginner nutrition guide',
    secondaryKeyword: 'nutrition for beginners',
    readTime: '8 min read',
    publishDate: 'October 2026',
    image: nutritionImage,
    imageAlt: 'Wholesome balanced plate with grilled protein, roasted vegetables, quinoa, and sliced avocado',
    summary: 'Demystify macronutrients, build satisfying balanced meals, calculate healthy hydration, and develop sustainable eating habits without extreme dieting.'
  },
  {
    slug: 'fitness-mistakes-beginners',
    url: '/fitness-mistakes-beginners',
    title: '10 Fitness Mistakes Beginners Should Avoid',
    seoTitle: '10 Fitness Mistakes Beginners Should Avoid | FitStart',
    metaDescription: 'Discover common beginner fitness mistakes, from doing too much too soon to neglecting recovery, and learn how to train more consistently.',
    h1: '10 Fitness Mistakes Beginners Should Avoid',
    primaryKeyword: 'fitness mistakes beginners',
    secondaryKeyword: 'beginner fitness tips',
    readTime: '10 min read',
    publishDate: 'October 2026',
    image: mistakesImage,
    imageAlt: 'Fitness enthusiast taking a hydration and rest break between exercise sets in a modern gym',
    summary: 'Avoid the 10 most common beginner pitfalls—from overtraining and poor form to extreme dieting—and replace them with habits that last a lifetime.'
  }
];
