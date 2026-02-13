'use client';

import { Trek } from '@/lib/types';

interface TrekHeroCinematicProps {
  trek: Trek;
}

export function TrekHeroCinematic({ trek }: TrekHeroCinematicProps) {
  return (
    <div className="relative w-full h-screen md:h-[80vh] flex items-center justify-center overflow-hidden bg-[#1F4D3A]">
      {/* Background gradient - simulating video */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3F7A5C] via-[#1F4D3A] to-black opacity-60" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#E6A756] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#3F7A5C] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center text-white">
        {/* Mood tag */}
        <div className="inline-block mb-6 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
          <p className="text-sm font-medium text-white/90">{trek.moodWord}</p>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-7xl font-playfair font-bold mb-6 leading-tight">
          {trek.name}
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
          {trek.narrative}
        </p>

        {/* Quick stats */}
        <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#E6A756]">{trek.maxAltitude}m</p>
            <p className="text-sm text-white/70 mt-2">Peak Altitude</p>
          </div>
          <div className="h-12 w-px bg-white/20 hidden sm:block" />
          <div className="text-center">
            <p className="text-4xl font-bold text-[#E6A756]">{trek.duration}</p>
            <p className="text-sm text-white/70 mt-2">Days</p>
          </div>
          <div className="h-12 w-px bg-white/20 hidden sm:block" />
          <div className="text-center">
            <p className="text-4xl font-bold text-[#E6A756]">{trek.difficulty}</p>
            <p className="text-sm text-white/70 mt-2">Difficulty</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#details"
            className="px-8 py-4 bg-[#E6A756] text-[#1F4D3A] rounded-lg font-semibold hover:bg-white transition-colors"
          >
            Start Your Journey
          </a>
          <a
            href="#reviews"
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Read Stories
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <p className="text-white/60 text-sm mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
