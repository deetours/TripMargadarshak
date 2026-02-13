'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 sm:px-8 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-trek-dust/40 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-trek-dust/30 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Tagline */}
        <div className="inline-block">
          <div className="px-4 py-2 rounded-full bg-trek-dust text-trek-forest text-sm font-medium">
            Cinematic Storytelling Meets Adventure
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-trek-forest leading-tight text-balance">
          Walk Through Stories. Trek With Purpose.
        </h1>

        {/* Subheadline */}
        <p className="font-inter text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
          Experience India&apos;s most curated trekking expeditions. Where professional guides, immersive narratives, and premium experiences converge.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/treks"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-trek-forest text-white font-medium hover:bg-trek-forest/90 transition-colors"
          >
            Explore Upcoming Treks
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/community"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-trek-forest text-trek-forest font-medium hover:bg-trek-dust transition-colors"
          >
            See Community Stories
          </Link>
        </div>

        {/* Social Proof / Stats */}
        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-trek-dust">
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl font-playfair font-bold text-trek-forest">2,400+</div>
            <p className="text-sm text-slate-600">Happy Trekkers</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl font-playfair font-bold text-trek-forest">25+</div>
            <p className="text-sm text-slate-600">Curated Treks</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl font-playfair font-bold text-trek-forest">15+</div>
            <p className="text-sm text-slate-600">Expert Guides</p>
          </div>
        </div>
      </div>
    </section>
  );
}
