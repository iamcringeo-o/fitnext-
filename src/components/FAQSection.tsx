import { useState } from 'react';
import type { FaqItem } from '../types.ts';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
  id?: string;
}

export function FAQSection({
  title = 'Frequently Asked Questions',
  subtitle = 'Clear, practical answers to common questions beginners ask.',
  faqs,
  id = 'faq'
}: FAQSectionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id={id} className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-stone-600 text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="divide-y divide-stone-200 border-y border-stone-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            const questionId = `${id}-q-${index}`;
            const answerId = `${id}-a-${index}`;

            return (
              <div key={index} className="py-5">
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between text-left gap-4 group focus-visible:outline-2 focus-visible:outline-emerald-500 rounded py-1"
                >
                  <span className="text-base sm:text-lg font-semibold text-stone-900 group-hover:text-emerald-700 transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-stone-100 group-hover:bg-stone-200 text-stone-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-700 bg-emerald-50' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed pr-8"
                  >
                    <div>{faq.answer}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
