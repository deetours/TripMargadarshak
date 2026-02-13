'use client';

import Link from 'next/link';

export function HeroSectionV2() {
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Background gradient mist effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3F8F4] via-white to-white" />
      
      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#F3F8F4] rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#E3EFE8] rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 h-screen flex flex-col justify-center items-center text-center">
        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-[#1F4D3A] leading-tight">
            <span className="block">Some landscapes</span>
            <span className="block">don't welcome noise.</span>
            <span className="block text-[#3F7A5C]">Only footsteps.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Small-group trekking expeditions designed for people who want depth, not distance. 
            Walk where India still breathes untouched.
          </p>

          {/* Micro line */}
          <p className="text-sm text-[#7FAF9B] tracking-wider font-medium">
            EXPEDITION-GRADE • COMMUNITY-FOCUSED • RESPONSIBLY LED
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/treks"
            className="px-8 py-4 bg-[#1F4D3A] text-white rounded-lg font-medium text-lg hover:bg-[#16382B] transition-all duration-300 green-glow"
          >
            Explore Upcoming Treks
          </Link>
          <Link
            href="/community"
            className="px-8 py-4 border-2 border-[#1F4D3A] text-[#1F4D3A] rounded-lg font-medium text-lg hover:bg-[#F3F8F4] transition-all duration-300"
          >
            Watch Explorer Stories
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#3F7A5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
