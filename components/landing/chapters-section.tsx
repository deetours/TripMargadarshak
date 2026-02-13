'use client';

import Link from 'next/link';
import { Mountain, Leaf, Compass } from 'lucide-react';

export function ChaptersSection() {
  const chapters = [
    {
      icon: Mountain,
      title: 'Expedition Treks',
      description: 'For the adventurer within. High altitude peaks, technical climbs, and the ultimate mountain experience.',
      color: 'bg-trek-forest/10 text-trek-forest',
      href: '/treks?difficulty=Extreme',
    },
    {
      icon: Leaf,
      title: 'Cultural Journeys',
      description: 'Immerse in local communities. Sacred sites, traditional villages, and stories woven into the landscape.',
      color: 'bg-trek-mist/10 text-trek-mist',
      href: '/treks?difficulty=Easy,Moderate',
    },
    {
      icon: Compass,
      title: 'Hidden Trails',
      description: 'Off the beaten path. Discover lesser-known routes where solitude meets stunning natural beauty.',
      color: 'bg-trek-dust/20 text-trek-forest',
      href: '/treks?difficulty=Moderate',
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-trek-forest text-balance">
            Three Ways to Trek
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            From cultural immersion to extreme altitude, we have curated experiences for every kind of adventurer.
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chapters.map((chapter, idx) => {
            const Icon = chapter.icon;
            return (
              <Link
                key={idx}
                href={chapter.href}
                className="group flex flex-col h-full p-8 rounded-lg border border-trek-dust hover:border-trek-forest/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className={`inline-flex w-16 h-16 rounded-lg ${chapter.color} items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} />
                </div>

                {/* Content */}
                <h3 className="font-playfair text-2xl font-bold text-trek-forest mb-3 group-hover:text-trek-forest/80 transition-colors">
                  {chapter.title}
                </h3>
                <p className="text-slate-600 leading-relaxed flex-grow mb-6">
                  {chapter.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-trek-forest font-medium group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
