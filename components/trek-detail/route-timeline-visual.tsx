'use client';

import { Trek, RouteDay } from '@/lib/types';

interface RouteTimelineVisualProps {
  trek: Trek;
}

export function RouteTimelineVisual({ trek }: RouteTimelineVisualProps) {
  const routeStory = trek.routeStory || [];

  return (
    <section className="py-20 bg-[#F3F8F4]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-playfair font-bold text-[#1F4D3A] mb-4">
            Your Journey Day by Day
          </h2>
          <p className="text-slate-600 max-w-2xl">
            Experience the unfolding story of your trek through each day
          </p>
        </div>

        <div className="space-y-8">
          {routeStory.map((day: RouteDay, index: number) => (
            <div key={day.day} className="relative">
              {/* Timeline connector */}
              {index < routeStory.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-24 bg-gradient-to-b from-[#3F7A5C] to-transparent" />
              )}

              <div className="flex gap-8">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#1F4D3A] text-white flex items-center justify-center font-bold text-lg ring-4 ring-white relative z-10">
                    Day {day.day}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-2xl font-bold text-[#1F4D3A] mb-2">{day.title}</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">{day.narrative}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-3 border border-[#E8F0EB]">
                      <p className="text-xs text-slate-600 mb-1">Altitude</p>
                      <p className="font-semibold text-[#1F4D3A]">{day.altitude}m</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-[#E8F0EB]">
                      <p className="text-xs text-slate-600 mb-1">Distance</p>
                      <p className="font-semibold text-[#1F4D3A]">{day.distance}</p>
                    </div>
                    {day.camp && (
                      <div className="bg-white rounded-lg p-3 border border-[#E8F0EB]">
                        <p className="text-xs text-slate-600 mb-1">Camp</p>
                        <p className="font-semibold text-[#1F4D3A]">{day.camp}</p>
                      </div>
                    )}
                    <div className="bg-white rounded-lg p-3 border border-[#E8F0EB]">
                      <p className="text-xs text-slate-600 mb-1">Duration</p>
                      <p className="font-semibold text-[#1F4D3A]">5-7 hrs</p>
                    </div>
                  </div>

                  {day.highlights.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-[#1F4D3A] mb-3">Highlights:</p>
                      <ul className="flex flex-wrap gap-2">
                        {day.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-xs bg-white px-3 py-2 rounded-full border border-[#3F7A5C] text-[#1F4D3A]"
                          >
                            ✓ {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Preparation message */}
        <div className="mt-16 p-8 bg-white rounded-lg border-l-4 border-[#E6A756]">
          <h3 className="text-lg font-bold text-[#1F4D3A] mb-2">
            Preparation Makes Mountains Manageable
          </h3>
          <p className="text-slate-700">
            Each day is designed to build your confidence progressively. We acclimatize properly, move at group pace, and celebrate every step. By the final day, you'll surprise yourself with what you've achieved.
          </p>
        </div>
      </div>
    </section>
  );
}
