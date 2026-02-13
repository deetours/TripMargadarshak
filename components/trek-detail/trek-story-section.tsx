'use client';

import { Trek } from '@/lib/types';
import { CheckCircle } from 'lucide-react';

interface TrekStorySectionProps {
  trek: Trek;
}

export function TrekStorySection({ trek }: TrekStorySectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-4">
              <p className="text-[#E6A756] font-medium tracking-widest text-sm">
                WHO THIS TREK IS FOR
              </p>
              <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-[#1F4D3A]">
                For people who hear the mountains calling.
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-700 leading-relaxed font-light">
              This is not a trophy hike. This is a conversation with wilderness. If you value silence over speed, depth over distance, then this trail speaks your language.
            </p>

            {/* Criteria */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#1F4D3A]">You'll thrive on this trek if:</p>
              {[
                'You want to disconnect from noise, not people',
                'You respect mountains more than you fear them',
                'You prefer effort over escape',
                'You\'re looking for meaning, not just photos'
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle size={20} className="text-[#3F7A5C] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Warnings */}
            <div className="pt-4 space-y-3 border-t border-[#E8F0EB]">
              <p className="text-sm font-semibold text-[#1F4D3A]">You should skip this trek if:</p>
              <div className="flex flex-wrap gap-2">
                {trek.whyShouldNotDo.map((reason, idx) => (
                  <span key={idx} className="text-xs bg-red-50 text-red-700 px-3 py-2 rounded-full border border-red-200">
                    {reason}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image (placeholder) */}
          <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-[#E8F0EB] to-[#F3F8F4] flex items-center justify-center">
            <div className="text-center text-slate-400">
              <img 
                src={`https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80`}
                alt={trek.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mood/Story statement */}
        <div className="mt-20 pt-20 border-t border-[#E8F0EB]">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-3xl sm:text-4xl font-playfair font-bold text-[#1F4D3A]">
              What makes {trek.name} special
            </p>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              {trek.narrative}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
