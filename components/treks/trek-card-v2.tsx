'use client';

import Link from 'next/link';
import { Flame, Clock, Users, TrendingUp } from 'lucide-react';

interface TrekCardProps {
  id: string;
  name: string;
  moodTag: string;
  emotionalHook: string;
  story: string;
  altitude: string;
  duration: string;
  groupSize: string;
  startingPrice: string;
}

export function TrekCardV2({
  id,
  name,
  moodTag,
  emotionalHook,
  story,
  altitude,
  duration,
  groupSize,
  startingPrice
}: TrekCardProps) {
  return (
    <Link href={`/treks/${id}`}>
      <div className="group h-full rounded-lg overflow-hidden bg-white border border-[#E3EFE8] hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-[#3F7A5C]">
        {/* Mood Tag Background */}
        <div className="h-2 bg-gradient-to-r from-[#1F4D3A] to-[#3F7A5C]" />

        {/* Content */}
        <div className="p-8 flex flex-col h-full">
          {/* Mood Tag */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-[#F3F8F4] text-[#1F4D3A] text-xs font-bold tracking-wider rounded-full">
              {moodTag}
            </span>
          </div>

          {/* Trek Name */}
          <h3 className="text-2xl font-playfair font-bold text-[#1F4D3A] mb-3 group-hover:text-[#3F7A5C] transition-colors">
            {name}
          </h3>

          {/* Emotional Hook */}
          <p className="text-sm italic text-[#3F7A5C] mb-4 font-medium">
            "{emotionalHook}"
          </p>

          {/* Story Snippet */}
          <p className="text-slate-600 leading-relaxed mb-6 flex-grow text-sm">
            {story}
          </p>

          {/* Data Strip */}
          <div className="space-y-3 pt-6 border-t border-[#E3EFE8]">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-[#3F7A5C]" />
                <span className="text-slate-600">{altitude} m</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-[#3F7A5C]" />
                <span className="text-slate-600">{duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-[#3F7A5C]" />
                <span className="text-slate-600">{groupSize}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Flame className="w-4 h-4 text-[#E6A756]" />
                <span className="text-[#1F4D3A] font-bold">{startingPrice}</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 pt-6 border-t border-[#E3EFE8]">
            <span className="text-[#1F4D3A] font-medium group-hover:text-[#3F7A5C] transition-colors inline-flex items-center gap-2">
              See Trek Story
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
