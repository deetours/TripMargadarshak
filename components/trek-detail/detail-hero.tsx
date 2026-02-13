'use client';

import { Trek } from '@/lib/types';
import { Mountain } from 'lucide-react';

interface DetailHeroProps {
  trek: Trek;
}

export function DetailHero({ trek }: DetailHeroProps) {
  return (
    <div className="relative w-full h-96 bg-trek-dust overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-trek-forest/30 to-trek-mist/20 flex flex-col items-center justify-center text-center px-6">
        <Mountain size={48} className="text-white mb-4" />
        <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white text-balance mb-4">
          {trek.name}
        </h1>
        <p className="text-xl text-white/90 italic">"{trek.moodWord}"</p>
      </div>
    </div>
  );
}
