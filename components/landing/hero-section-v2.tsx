'use client';

import Link from 'next/link';

export function HeroSectionV2() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/30791852/pexels-photo-30791852.jpeg)',
        }}
      />

      {/* Gradient overlay - visible on top of image */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F4D3A]/70 via-[#3F7A5C]/60 to-[#1F4D3A]/70" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 h-screen flex flex-col justify-center items-center text-center">
        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight drop-shadow-lg">
            <span className="block">Some landscapes</span>
            <span className="block">don't welcome noise.</span>
            <span className="block text-[#E6A756]">Only footsteps.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-light drop-shadow">
            Small-group trekking expeditions designed for people who want depth, not distance.
            Walk where India still breathes untouched.
          </p>

          {/* Micro line */}
          <p className="text-sm text-[#E6A756] tracking-wider font-medium drop-shadow">
            EXPEDITION-GRADE • COMMUNITY-FOCUSED • RESPONSIBLY LED
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/treks"
            className="px-8 py-4 bg-[#E6A756] text-[#1F4D3A] rounded-lg font-medium text-lg hover:bg-[#D4922C] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Upcoming Treks
          </Link>
          <Link
            href="/community"
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium text-lg hover:bg-white/10 transition-all duration-300"
          >
            Watch Explorer Stories
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#E6A756]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
