import { Link } from '../context/RouterContext.tsx';
import type { ArticleMeta } from '../types.ts';
import { ArrowRight, Clock } from 'lucide-react';

interface ArticleCardProps {
  article: ArticleMeta;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <article
      className={`group flex flex-col bg-white rounded-xl border border-stone-200/90 overflow-hidden hover:border-stone-300 hover:shadow-md transition-all duration-200 ${
        featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''
      }`}
    >
      {/* Thumbnail */}
      <div className={`overflow-hidden bg-stone-100 ${featured ? 'md:h-full' : 'aspect-16/10'}`}>
        <img
          src={article.image}
          alt={article.imageAlt}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-6 sm:p-7 flex-1">
        <div>
          {/* Metadata: Clean unboxed text with typographic separators */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-3 font-medium">
            <span className="text-emerald-700 font-semibold uppercase tracking-wider text-[11px]">
              Guide
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3 text-stone-400" />
              <span>{article.readTime}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>{article.publishDate}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors leading-snug tracking-tight mb-3">
            <Link to={article.url} className="focus-visible:outline-2 focus-visible:outline-emerald-500 rounded">
              {article.title}
            </Link>
          </h3>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
            {article.summary}
          </p>
        </div>

        <div className="pt-2 border-t border-stone-100">
          <Link
            to={article.url}
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 group-hover:text-emerald-600 transition-colors"
          >
            <span>Read {article.title}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
