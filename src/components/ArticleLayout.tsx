import React, { useState } from 'react';
import { Link } from '../context/RouterContext.tsx';
import type { ArticleMeta, FaqItem, TableOfContentsItem } from '../types.ts';
import { FAQSection } from './FAQSection.tsx';
import { ArticleCard } from './ArticleCard.tsx';
import { ARTICLES } from '../data/articles.ts';
import { ChevronRight, Clock, Calendar, CheckCircle2, List, ArrowRight } from 'lucide-react';

interface ArticleLayoutProps {
  article: ArticleMeta;
  intro: React.ReactNode;
  toc: TableOfContentsItem[];
  keyTakeaways: string[];
  children: React.ReactNode;
  faqs: FaqItem[];
  nextArticleSlug: string;
}

export function ArticleLayout({
  article,
  intro,
  toc,
  keyTakeaways,
  children,
  faqs,
  nextArticleSlug
}: ArticleLayoutProps) {
  const [tocOpen, setTocOpen] = useState(false);

  // Other two articles for descriptive cross-linking
  const otherArticles = ARTICLES.filter((a) => a.slug !== article.slug);
  const nextArticle = ARTICLES.find((a) => a.slug === nextArticleSlug) || otherArticles[0];

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTocOpen(false);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 pb-20">
      
      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-stone-500">
          <li>
            <Link to="/" className="hover:text-stone-950 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          </li>
          <li>
            <span className="text-stone-500">Guides</span>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          </li>
          <li aria-current="page" className="font-medium text-stone-900 truncate max-w-[200px] sm:max-w-xs">
            {article.title}
          </li>
        </ol>
      </nav>

      {/* 2. Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        
        {/* Unboxed Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-stone-500 mb-4 font-medium">
          <span className="text-emerald-700 font-semibold uppercase tracking-wider text-xs">
            Beginner Fitness Guide
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span>{article.readTime}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-stone-400" />
            <span>Updated {article.publishDate}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>By FitStart Editorial</span>
        </div>

        {/* Descriptive H1 */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight leading-[1.15] mb-6">
          {article.h1}
        </h1>

        {/* Search Intent Direct Answer / Intro */}
        <div className="text-lg sm:text-xl text-stone-700 leading-relaxed font-normal border-b border-stone-200 pb-8">
          {intro}
        </div>
      </header>

      {/* 3. Hero Visual Asset */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <figure className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-sm">
          <img
            src={article.image}
            alt={article.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-[320px] sm:h-[440px] object-cover"
          />
          <figcaption className="px-4 py-2.5 text-xs text-stone-500 bg-white border-t border-stone-100">
            {article.imageAlt}
          </figcaption>
        </figure>
      </div>

      {/* 4. Main Body Grid: Sticky TOC Sidebar + Article Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* Table of Contents: Desktop Sticky Sidebar & Mobile Drawer */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 mb-10 lg:mb-0">
            <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs">
              <div className="flex items-center justify-between lg:mb-3">
                <div className="flex items-center gap-2">
                  <List className="w-4 h-4 text-emerald-700" />
                  <h2 className="text-sm font-bold uppercase tracking-wider text-stone-900">
                    Table of Contents
                  </h2>
                </div>
                {/* Mobile toggle button */}
                <button
                  type="button"
                  onClick={() => setTocOpen(!tocOpen)}
                  className="lg:hidden text-xs font-semibold text-emerald-700 underline focus-visible:outline-2 focus-visible:outline-emerald-500"
                >
                  {tocOpen ? 'Hide' : 'Show All'}
                </button>
              </div>

              <div className={`${tocOpen ? 'block' : 'hidden'} lg:block mt-3 lg:mt-0`}>
                <nav aria-label="Table of contents">
                  <ol className="space-y-2 text-sm">
                    {toc.map((item, idx) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => handleTocClick(e, item.id)}
                          className="text-stone-600 hover:text-emerald-700 transition-colors block py-0.5 leading-snug"
                        >
                          <span className="text-stone-400 font-mono text-xs mr-1.5 tabular-nums">
                            {idx + 1}.
                          </span>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </div>
          </aside>

          {/* Article Main Content Column */}
          <main className="lg:col-span-8 max-w-3xl">
            
            {/* Key Takeaways Box (Zero thick left borders, subtle hairline border) */}
            <div className="bg-emerald-50/60 rounded-xl border border-emerald-200/80 p-6 sm:p-7 mb-12">
              <div className="flex items-center gap-2.5 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                <h2 className="text-lg font-bold text-stone-950 tracking-tight">
                  Key Takeaways
                </h2>
              </div>
              <ul className="space-y-2.5 text-sm sm:text-base text-stone-800">
                {keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* In-depth Article Body */}
            <article className="prose-stone max-w-none text-stone-800 space-y-10">
              {children}
            </article>

            {/* FAQs */}
            <div className="mt-16 pt-10 border-t border-stone-200">
              <FAQSection
                title="Frequently Asked Questions"
                subtitle={`Common questions about ${article.title.toLowerCase()}.`}
                faqs={faqs}
                id="article-faqs"
              />
            </div>

            {/* CTA Box to Next Guide */}
            <div className="mt-14 bg-stone-900 text-white rounded-2xl p-8 sm:p-10 border border-stone-800 relative overflow-hidden">
              <div className="relative z-10 max-w-xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2 block">
                  Next Step In Your Journey
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                  {nextArticle.title}
                </h3>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
                  {nextArticle.summary}
                </p>
                <Link
                  to={nextArticle.url}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Continue to {nextArticle.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Related Guides Section with Descriptive Anchor Text */}
            <section className="mt-16 pt-10 border-t border-stone-200">
              <h2 className="text-2xl font-bold text-stone-950 tracking-tight mb-2">
                Explore More Beginner Guides
              </h2>
              <p className="text-stone-600 text-sm mb-8">
                Read our complete companion guides to balance your exercise, everyday nutrition, and healthy habits.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherArticles.map((rel) => (
                  <ArticleCard key={rel.slug} article={rel} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
