'use client';

import Link from 'next/link';

export function ShareStoryCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-[#1F4D3A] mb-8">
          One day, your story will inspire someone else to walk.
        </h2>

        <p className="text-lg text-slate-600 mb-12">
          If you've trekked with us and have a moment that changed you, we'd love to hear it.
          Your story could be the nudge someone needs to start their own journey.
        </p>

        <button className="inline-block px-8 py-4 bg-[#1F4D3A] text-white rounded-lg font-medium hover:bg-[#16382B] transition-colors">
          Share Your Trail Story
        </button>
      </div>
    </section>
  );
}
