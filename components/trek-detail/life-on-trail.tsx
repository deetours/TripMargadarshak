'use client';

import { Trek } from '@/lib/types';
import { Tent, UtensilsCrossed, Cloud, Wifi } from 'lucide-react';

interface LifeOnTrailProps {
  trek: Trek;
}

export function LifeOnTrail({ trek }: LifeOnTrailProps) {
  const details = [
    {
      icon: Tent,
      title: 'Accommodation',
      value: trek.lifeOnTrail.stay,
    },
    {
      icon: UtensilsCrossed,
      title: 'Food',
      value: trek.lifeOnTrail.food,
    },
    {
      icon: Cloud,
      title: 'Weather',
      value: trek.lifeOnTrail.weather,
    },
    {
      icon: Wifi,
      title: 'Communication',
      value: trek.lifeOnTrail.communication,
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-8 border-b border-trek-dust bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="font-playfair text-3xl font-bold text-trek-forest">
            Life on the Trail
          </h2>
          <p className="text-slate-600">
            Here&apos;s what to expect day-to-day. We believe in transparency about camp life.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {details.map((detail) => {
            const Icon = detail.icon;
            return (
              <div key={detail.title} className="space-y-4 p-6 rounded-lg border border-trek-dust bg-trek-dust/10">
                <div className="flex items-center gap-3">
                  <Icon size={24} className="text-trek-forest" />
                  <h3 className="font-playfair text-xl font-bold text-trek-forest">
                    {detail.title}
                  </h3>
                </div>
                <p className="text-slate-700 leading-relaxed">{detail.value}</p>
              </div>
            );
          })}
        </div>

        {/* Altitude Adjustment */}
        <div className="p-6 rounded-lg border-2 border-trek-mist/30 bg-trek-mist/5 space-y-3">
          <h3 className="font-bold text-trek-forest text-lg">⬆️ Altitude Adjustment</h3>
          <p className="text-slate-700">{trek.lifeOnTrail.altitude_adjustment}</p>
        </div>

        {/* Hygiene */}
        <div className="p-6 rounded-lg border border-trek-dust space-y-3">
          <h3 className="font-bold text-trek-forest text-lg">🚿 Hygiene</h3>
          <p className="text-slate-700">{trek.lifeOnTrail.hygiene}</p>
        </div>
      </div>
    </section>
  );
}
