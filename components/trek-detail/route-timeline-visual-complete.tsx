'use client';

import { Trek } from '@/lib/types';
import { MapPin, Zap } from 'lucide-react';

interface RouteTimelineVisualProps {
  trek: Trek;
}

export function RouteTimelineVisual({ trek }: RouteTimelineVisualProps) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#E6A756] font-medium tracking-widest text-sm">
            DAY BY DAY JOURNEY
          </p>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-[#1F4D3A]">
            Not an itinerary. A story with elevation.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Each day is a chapter. Each step is a conversation with the mountain.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E6A756] via-[#3F7A5C] to-[#1F4D3A] -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {trek.routeStory.map((day, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white border border-[#E8F0EB] rounded-lg p-8 hover:shadow-lg transition-all duration-300 group">
                    {/* Day tag */}
                    <div className="inline-block mb-4 px-4 py-2 bg-[#F3F8F4] rounded-full">
                      <p className="text-sm font-semibold text-[#1F4D3A]">Day {day.day}</p>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-playfair font-bold text-[#1F4D3A] mb-3">
                      {day.title}
                    </h3>

                    {/* Narrative */}
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      {day.narrative}
                    </p>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-[#E8F0EB]">
                      <div>
                        <p className="text-xs text-slate-600 font-semibold">Distance</p>
                        <p className="text-lg font-bold text-[#1F4D3A]">{day.distance}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 font-semibold">Altitude</p>
                        <p className="text-lg font-bold text-[#1F4D3A]">{day.altitude}m</p>
                      </div>
                      {day.camp && (
                        <div>
                          <p className="text-xs text-slate-600 font-semibold">Stay</p>
                          <p className="text-lg font-bold text-[#1F4D3A]">{day.camp}</p>
                        </div>
                      )}
                    </div>

                    {/* Highlights */}
                    {day.highlights && day.highlights.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-[#E8F0EB]">
                        <p className="text-sm font-semibold text-[#1F4D3A] mb-3">
                          What to experience:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {day.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="flex items-center gap-1 text-xs bg-[#F3F8F4] text-[#1F4D3A] px-3 py-2 rounded-full"
                            >
                              <Zap size={12} />
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Meals if available */}
                    {day.mealDetails && (
                      <div className="mt-6 pt-6 border-t border-[#E8F0EB] text-sm text-slate-600">
                        {day.mealDetails.breakfast && (
                          <p>🍞 <span className="font-semibold">{day.mealDetails.breakfast}</span></p>
                        )}
                        {day.mealDetails.lunch && (
                          <p>🍲 <span className="font-semibold">{day.mealDetails.lunch}</span></p>
                        )}
                        {day.mealDetails.dinner && (
                          <p>🍳 <span className="font-semibold">{day.mealDetails.dinner}</span></p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Dot and spacing */}
                <div className="hidden md:flex items-center justify-center flex-shrink-0">
                  <div className="relative z-10 w-6 h-6 bg-[#E6A756] border-4 border-white rounded-full shadow-lg" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <div className="mt-20 pt-12 border-t border-[#E8F0EB]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#E6A756]">{trek.duration}</p>
              <p className="text-slate-600 mt-2">Days of adventure</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#E6A756]">{trek.routeStory.length}</p>
              <p className="text-slate-600 mt-2">Unique camp sites</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#E6A756]">{trek.maxAltitude}m</p>
              <p className="text-slate-600 mt-2">Peak elevation</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#E6A756]">
                {Math.round(
                  trek.routeStory.reduce((acc, day) => {
                    const km = parseFloat(day.distance);
                    return acc + (isNaN(km) ? 0 : km);
                  }, 0)
                )}
              </p>
              <p className="text-slate-600 mt-2">Total distance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
