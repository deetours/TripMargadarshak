'use client';

import { useState } from 'react';
import { Calendar, MapPin, Heart, Share2 } from 'lucide-react';

interface TrailEntry {
  day: number;
  date: string;
  title: string;
  excerpt: string;
  mood: string;
  altitude?: number;
  weather?: string;
  image?: string;
}

interface TrailJournalsProps {
  trekName: string;
  entries: TrailEntry[];
}

export function TrailJournals({ trekName, entries }: TrailJournalsProps) {
  const [selectedDay, setSelectedDay] = useState(entries[0]?.day || 1);

  const currentEntry = entries.find((e) => e.day === selectedDay);

  const moodEmoji: Record<string, string> = {
    excited: '🤩',
    peaceful: '😌',
    challenging: '💪',
    spiritual: '🙏',
    grateful: '🙌',
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#F3F8F4] to-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#E6A756] font-medium tracking-widest text-sm">
            TRAIL JOURNALS
          </p>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-[#1F4D3A]">
            {trekName}: Day by Day Reflections
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real moments. Real emotions. Real transformations from the trail.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Day selector */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-2">
              <p className="text-sm font-bold text-[#1F4D3A] uppercase tracking-widest mb-4">
                Journey Timeline
              </p>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {entries.map((entry) => (
                  <button
                    key={entry.day}
                    onClick={() => setSelectedDay(entry.day)}
                    className={`w-full text-left p-4 rounded-lg transition-all border-2 ${
                      selectedDay === entry.day
                        ? 'border-[#E6A756] bg-[#F3F8F4]'
                        : 'border-[#E8F0EB] hover:border-[#E6A756]'
                    }`}
                  >
                    <p className="text-sm font-bold text-[#1F4D3A]">
                      Day {entry.day}
                    </p>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {entry.title}
                    </p>
                    <p className="text-lg mt-2">
                      {moodEmoji[entry.mood] || '✨'}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Entry detail */}
          {currentEntry && (
            <div className="lg:col-span-2 space-y-6">
              {/* Image */}
              {currentEntry.image && (
                <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={currentEntry.image}
                    alt={currentEntry.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Meta */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-4 text-sm opacity-90">
                      {currentEntry.altitude && (
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{currentEntry.altitude}m</span>
                        </div>
                      )}
                      {currentEntry.weather && (
                        <span>{currentEntry.weather}</span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="bg-white border border-[#E8F0EB] rounded-lg p-8 space-y-6">
                {/* Title */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">
                      {moodEmoji[currentEntry.mood] || '✨'}
                    </span>
                    <span className="text-xs font-semibold text-[#E6A756] uppercase tracking-widest">
                      {currentEntry.mood}
                    </span>
                  </div>
                  <h3 className="text-3xl font-playfair font-bold text-[#1F4D3A]">
                    Day {currentEntry.day}: {currentEntry.title}
                  </h3>
                  <p className="flex items-center gap-2 text-sm text-slate-600">
                    <Calendar size={16} />
                    {new Date(currentEntry.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>

                {/* Journal text */}
                <p className="text-lg text-slate-700 leading-relaxed font-light">
                  {currentEntry.excerpt}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-6 pt-6 border-t border-[#E8F0EB]">
                  <button className="flex items-center gap-2 text-slate-600 hover:text-red-500 transition-colors">
                    <Heart size={20} />
                    <span className="text-sm font-semibold">Like</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-600 hover:text-[#E6A756] transition-colors">
                    <Share2 size={20} />
                    <span className="text-sm font-semibold">Share</span>
                  </button>
                  <p className="ml-auto text-xs text-slate-600">
                    Day {currentEntry.day} of {entries.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
