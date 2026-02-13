'use client';

import { Trek } from '@/lib/types';
import Link from 'next/link';

interface FinalCTABlockProps {
  trek: Trek;
}

export function FinalCTABlock({ trek }: FinalCTABlockProps) {
  return (
    <section className="py-32 bg-gradient-to-r from-[#1F4D3A] via-[#16382B] to-[#1F4D3A] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E6A756] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3F7A5C] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 text-center space-y-12">
        {/* Emotional headline */}
        <div className="space-y-6">
          <h2 className="text-5xl sm:text-7xl font-playfair font-bold leading-tight">
            Some mountains wait.
            <br />
            <span className="text-[#E6A756]">Some call only once.</span>
          </h2>

          <p className="text-2xl text-white/90 font-light leading-relaxed">
            If this trail is calling you, don't ignore it.
          </p>

          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            The mountains don't care about your busy schedule or excuses. They only know whether you showed up or didn't. This is your invite. The group is ready. The guides are ready. The path is waiting.
          </p>
        </div>

        {/* Statistics row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-12 border-y border-white/20">
          <div>
            <p className="text-4xl font-bold text-[#E6A756]">2,400+</p>
            <p className="text-sm text-white/70 mt-2">Trekkers Transformed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#E6A756]">100%</p>
            <p className="text-sm text-white/70 mt-2">Safety Record</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#E6A756]">4.8/5</p>
            <p className="text-sm text-white/70 mt-2">Avg Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#E6A756]">63%</p>
            <p className="text-sm text-white/70 mt-2">Return Customers</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/booking/${trek.id}`}
            className="px-10 py-4 bg-[#E6A756] text-[#1F4D3A] rounded-lg font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            Check Available Dates
          </Link>
          <button className="px-10 py-4 border-2 border-[#E6A756] text-[#E6A756] rounded-lg font-bold text-lg hover:bg-[#E6A756]/10 transition-all duration-300">
            Talk To Trek Expert
          </button>
        </div>

        {/* Next actions */}
        <div className="pt-12 space-y-4 text-sm text-white/80">
          <p className="font-semibold mb-4">After you book, you'll get:</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[#E6A756] text-xl">📋</span>
              <span>Prep Guide</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E6A756] text-xl">👥</span>
              <span>WhatsApp Group</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E6A756] text-xl">🎯</span>
              <span>Guide Introduction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E6A756] text-xl">📱</span>
              <span>Calendar Invite</span>
            </div>
          </div>
        </div>

        {/* Final reflection */}
        <div className="pt-12 italic text-white/70 max-w-2xl mx-auto text-lg">
          "The mountains don't remember those who didn't come. They remember those who did."
        </div>
      </div>
    </section>
  );
}
