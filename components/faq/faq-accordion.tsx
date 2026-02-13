'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA, FAQ_CATEGORIES } from '@/lib/data/faq';

export function FAQAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0]);

  const categoryFAQs = FAQ_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-playfair font-bold text-[#1F4D3A] mb-4">
            Answers to Your Questions
          </h2>
          <p className="text-slate-600">
            We've heard them all. Here are answers to what trekkers ask most.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {FAQ_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setExpandedId(null);
              }}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-[#1F4D3A] text-white'
                  : 'bg-[#F3F8F4] text-[#1F4D3A] hover:bg-[#E8F0EB]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {categoryFAQs.map((faq, index) => {
            const id = `${activeCategory}-${index}`;
            const isExpanded = expandedId === id;

            return (
              <div
                key={id}
                className="border border-[#E8F0EB] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : id)}
                  className="w-full p-6 flex items-center justify-between bg-white hover:bg-[#F3F8F4] transition-colors text-left"
                >
                  <h3 className="font-semibold text-[#1F4D3A] pr-4">{faq.question}</h3>
                  <ChevronDown
                    size={24}
                    className={`text-[#1F4D3A] flex-shrink-0 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 bg-[#F3F8F4] border-t border-[#E8F0EB]">
                    <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 p-8 bg-[#F3F8F4] rounded-lg text-center">
          <h3 className="text-lg font-bold text-[#1F4D3A] mb-2">
            Didn't find your answer?
          </h3>
          <p className="text-slate-600 mb-4">
            Email us anytime. We respond within 2 hours.
          </p>
          <a
            href="mailto:hello@tripmargadarshak.com"
            className="inline-block px-6 py-3 bg-[#1F4D3A] text-white rounded-lg font-bold hover:bg-[#16382B] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
