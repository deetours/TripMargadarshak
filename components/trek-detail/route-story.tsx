'use client';

import { Trek } from '@/lib/types';

interface RouteStoryProps {
  trek: Trek;
}

export function RouteStory({ trek }: RouteStoryProps) {
  return (
    <section className="py-16 px-6 sm:px-8 border-b border-trek-dust bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="font-playfair text-3xl font-bold text-trek-forest">The Journey</h2>
          <p className="text-slate-600">
            Here&apos;s how the trek unfolds, day by day. Each day tells its own story.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {trek.routeStory.map((day, idx) => (
            <div key={idx} className="flex gap-6 py-8 border-b border-trek-dust/30 last:border-b-0">
              {/* Day indicator */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-trek-forest text-white flex items-center justify-center font-playfair font-bold text-lg">
                  {day.day}
                </div>
                {idx < trek.routeStory.length - 1 && (
                  <div className="w-1 h-12 bg-trek-dust mt-2" />
                )}
              </div>

              {/* Day content */}
              <div className="flex-1 space-y-4 pt-2">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-trek-forest">
                    {day.title}
                  </h3>
                  <p className="text-slate-600 mt-2">
                    {day.narrative}
                  </p>
                </div>

                {/* Day details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-trek-mist font-bold">Distance</span>
                    <p className="text-lg font-bold text-trek-forest">{day.distance}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-trek-mist font-bold">Altitude</span>
                    <p className="text-lg font-bold text-trek-forest">{day.altitude.toLocaleString()}m</p>
                  </div>
                  {day.camp && (
                    <div>
                      <span className="text-xs uppercase tracking-widest text-trek-mist font-bold">Camp</span>
                      <p className="text-lg font-bold text-trek-forest">{day.camp}</p>
                    </div>
                  )}
                </div>

                {/* Highlights */}
                {day.highlights.length > 0 && (
                  <div className="pt-2">
                    <span className="text-xs uppercase tracking-widest text-trek-mist font-bold block mb-2">Highlights</span>
                    <ul className="flex flex-wrap gap-2">
                      {day.highlights.map((highlight) => (
                        <li key={highlight} className="px-3 py-1 rounded-full bg-trek-dust text-trek-forest text-sm">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
