'use client';

import { Shield, Leaf, Users } from 'lucide-react';

export function PreparationSection() {
  const pillars = [
    {
      icon: Shield,
      title: 'Safety & Preparation',
      description: 'Weather tracking runs 24/7 during expeditions. Satellite communication stays active on remote routes. Every route is certified and walked before season opens.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We protect fragile ecosystems and support local economies. Zero-trace camping, local employment, and authentic cultural respect guide every trek.',
    },
    {
      icon: Users,
      title: 'Community Leadership',
      description: 'Every expedition is led, not managed. Our guides bring decades of combined mountain experience and genuine care for your transformation.',
    }
  ];

  return (
    <section className="py-24 bg-[#F3F8F4]">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-[#1F4D3A] mb-4">
            Preparation Is Respect
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We believe how you prepare for a mountain says everything about how you'll experience it.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="space-y-4">
                <div className="w-16 h-16 bg-[#1F4D3A] rounded-lg flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-[#1F4D3A]">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
