'use client';

import Link from 'next/link';

export function CommunityCloseCTA() {
  return (
    <section className="py-32 bg-[#1F4D3A] text-white">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl font-playfair font-bold mb-8">
          The mountains remember who walks with respect.
          <br />
          We remember who walks with us.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            href="/treks"
            className="px-8 py-4 bg-white text-[#1F4D3A] rounded-lg font-medium hover:bg-[#DCE9E2] transition-colors"
          >
            Explore Upcoming Treks
          </Link>
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
            Join Community Circle
          </button>
        </div>
      </div>
    </section>
  );
}
