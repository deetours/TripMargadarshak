'use client';

import { Trek } from '@/lib/types';
import { Mountain, Calendar, Users, Gauge, Compass } from 'lucide-react';

interface TrekSpecsGridProps {
  trek: Trek;
}

export function TrekSpecsGrid({ trek }: TrekSpecsGridProps) {
  const specs = [
    {
      icon: Mountain,
      label: 'Maximum Altitude',
      value: `${trek.maxAltitude}m`,
      detail: 'Above sea level'
    },
    {
      icon: Calendar,
      label: 'Duration',
      value: `${trek.duration} Days`,
      detail: `2-3 nights on trail`
    },
    {
      icon: Gauge,
      label: 'Difficulty',
      value: trek.difficulty,
      detail: `Grade ${trek.difficulty === 'Easy' ? '1' : trek.difficulty === 'Moderate' ? '2' : trek.difficulty === 'Challenging' ? '3' : '4'} of 4`
    },
    {
      icon: Users,
      label: 'Group Size',
      value: `${trek.groupSizeMin}-${trek.groupSize}`,
      detail: 'People per guide'
    },
    {
      icon: Compass,
      label: 'Region',
      value: trek.region,
      detail: 'India'
    },
    {
      icon: Calendar,
      label: 'Best Season',
      value: trek.season[0] || 'Year-round',
      detail: `${trek.season.join(', ')}`
    }
  ];

  return (
    <section id="details" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-playfair font-bold text-[#1F4D3A] mb-4">
            The Trek at a Glance
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Key information to help you understand what to expect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div
                key={i}
                className="p-8 border border-[#E8F0EB] rounded-lg hover:shadow-lg hover:border-[#3F7A5C] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F3F8F4] rounded-lg group-hover:bg-[#3F7A5C] transition-colors">
                    <Icon size={24} className="text-[#1F4D3A] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-600 mb-1">{spec.label}</p>
                    <p className="text-2xl font-bold text-[#1F4D3A] mb-2">{spec.value}</p>
                    <p className="text-xs text-slate-500">{spec.detail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
