'use client';

import { Trek } from '@/lib/types';
import { TrendingUp, Users, Calendar } from 'lucide-react';

interface StorySectionProps {
  trek: Trek;
}

export function StorySection({ trek }: StorySectionProps) {
  return (
    <section className="py-16 px-6 sm:px-8 border-b border-trek-dust bg-white">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Main Narrative */}
        <div className="space-y-6">
          <p className="text-xl text-slate-700 leading-relaxed">
            {trek.narrative}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 border-y border-trek-dust">
          <div className="flex flex-col space-y-2">
            <span className="text-xs uppercase tracking-widest text-trek-mist font-bold">Region</span>
            <span className="text-lg font-bold text-trek-forest">{trek.region}</span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="flex items-center gap-2">
              <TrendingUp size={16} className="text-trek-mist" />
              <span className="text-xs uppercase tracking-widest text-trek-mist font-bold">Max Altitude</span>
            </span>
            <span className="text-lg font-bold text-trek-forest">{trek.maxAltitude.toLocaleString()}m</span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-trek-mist" />
              <span className="text-xs uppercase tracking-widest text-trek-mist font-bold">Duration</span>
            </span>
            <span className="text-lg font-bold text-trek-forest">{trek.duration} days</span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="flex items-center gap-2">
              <Users size={16} className="text-trek-mist" />
              <span className="text-xs uppercase tracking-widest text-trek-mist font-bold">Group Size</span>
            </span>
            <span className="text-lg font-bold text-trek-forest">{trek.groupSize}</span>
          </div>
        </div>

        {/* Seasons & Terrain */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-trek-mist font-bold mb-3">Best Seasons</h3>
            <div className="flex flex-wrap gap-2">
              {trek.season.map((s) => (
                <span key={s} className="px-4 py-2 rounded-full bg-trek-dust text-trek-forest text-sm font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest text-trek-mist font-bold mb-3">Terrain Type</h3>
            <div className="flex flex-wrap gap-2">
              {trek.terrain.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-trek-dust text-trek-forest text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
