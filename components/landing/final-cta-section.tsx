'use client';

import Link from 'next/link';

export function FinalCTASection() {
  return (
    <section className="py-32 bg-[#1F4D3A] text-white">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
        {/* Main message */}
        <h2 className="text-5xl sm:text-6xl font-playfair font-bold mb-8 leading-tight">
          The mountain is waiting.
          <br />
          <span className="text-[#DCE9E2]">Not for your strength.</span>
          <br />
          For your presence.
        </h2>

        {/* Sub message */}
        <p className="text-xl text-[#DCE9E2] mb-12 max-w-2xl mx-auto leading-relaxed">
          When you're ready to walk where India still breathes untouched, 
          we'll be here to guide you home with stories that stay forever.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/treks"
            className="px-8 py-4 bg-white text-[#1F4D3A] rounded-lg font-medium text-lg hover:bg-[#DCE9E2] transition-all duration-300"
          >
            See Upcoming Departures
          </Link>
          <Link
            href="/community"
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium text-lg hover:bg-white/10 transition-all duration-300"
          >
            Read Explorer Stories
          </Link>
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 pt-16 border-t border-[#3F7A5C]">
          <p className="text-[#DCE9E2] mb-4 text-sm">
            Get trek openings before they go public.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
            />
            <button className="px-6 py-3 bg-[#E6A756] text-[#1F4D3A] rounded-lg font-medium hover:bg-[#f0b469] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
