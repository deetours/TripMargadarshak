'use client';

import Link from 'next/link';

export function BelongingSection() {
  return (
    <section className="py-24 bg-[#F3F8F4]">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        {/* Main stat */}
        <div className="text-center mb-12">
          <p className="text-6xl sm:text-7xl font-playfair font-bold text-[#1F4D3A] mb-4">
            63%
          </p>
          <h2 className="text-2xl font-playfair font-bold text-[#1F4D3A] mb-4">
            of our trekkers return with someone new the next year
          </h2>
          <p className="text-lg text-slate-600">
            Most arrive solo. Few leave that way.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/treks"
            className="inline-block px-8 py-4 bg-[#1F4D3A] text-white rounded-lg font-medium hover:bg-[#16382B] transition-colors"
          >
            See Upcoming Treks →
          </Link>
        </div>
      </div>
    </section>
  );
}
