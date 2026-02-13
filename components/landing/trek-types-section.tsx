'use client';

import Link from 'next/link';

export function TrekTypesSection() {
  const types = [
    {
      title: 'Expedition Treks',
      description: 'High altitude. Thin air. Clear thinking. These treks test preparation, patience, and mental stillness.',
      highlights: ['3000m+ Altitude', 'Alpine Terrain', 'Mental Resilience']
    },
    {
      title: 'Cultural Journeys',
      description: 'Walk through living heritage. Villages where trails are older than roads. Where locals still know the mountain spirits.',
      highlights: ['Local Communities', 'Indigenous Routes', 'Cultural Immersion']
    },
    {
      title: 'Hidden Trails',
      description: 'Routes known mostly to shepherds, monks, and migrating wildlife. Landscapes that tourists never reach.',
      highlights: ['Off the Beaten Path', 'Rare Beauty', 'Wildlife Encounters']
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section intro */}
        <div className="text-center mb-16">
          <p className="text-slate-600 text-lg mb-4">
            Not all trekkers seek the same conversation with nature.
          </p>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-[#1F4D3A]">
            Choose Your Trek Story
          </h2>
        </div>

        {/* Trek type cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map((type, index) => (
            <div
              key={index}
              className="group p-8 bg-[#F3F8F4] rounded-lg hover:shadow-lg transition-all duration-300 border border-[#E3EFE8] hover:border-[#3F7A5C]"
            >
              <h3 className="text-2xl font-playfair font-bold text-[#1F4D3A] mb-4 group-hover:text-[#3F7A5C] transition-colors">
                {type.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {type.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                {type.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#3F7A5C] rounded-full" />
                    <span className="text-sm text-[#3F7A5C] font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/treks"
                className="inline-block text-[#1F4D3A] font-medium hover:text-[#3F7A5C] transition-colors"
              >
                Explore {type.title} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
