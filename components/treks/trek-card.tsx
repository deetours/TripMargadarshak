'use client';

import Link from 'next/link';
import { Trek } from '@/lib/types';
import { Mountain, Users, Calendar, TrendingUp } from 'lucide-react';

interface TrekCardProps {
  trek: Trek;
}

export function TrekCard({ trek }: TrekCardProps) {
  const openBatch = trek.batches.find((b) => b.status === 'open' || b.status === 'closing-soon');
  const nextPrice = openBatch?.pricePerPerson || trek.basePrice;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Moderate':
        return 'bg-blue-100 text-blue-800';
      case 'Challenging':
        return 'bg-orange-100 text-orange-800';
      case 'Extreme':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-trek-dust text-trek-forest';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-green-100 text-green-800';
      case 'closing-soon':
        return 'bg-orange-100 text-orange-800';
      case 'full':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-trek-dust text-trek-forest';
    }
  };

  return (
    <Link href={`/treks/${trek.id}`}>
      <div className="group flex flex-col h-full rounded-lg border border-trek-dust overflow-hidden hover:border-trek-forest/30 hover:shadow-lg transition-all duration-300 bg-white">
        {/* Image */}
        <div className="relative w-full h-48 bg-trek-dust overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-trek-forest/20 to-trek-mist/20 flex items-center justify-center">
            <Mountain size={48} className="text-trek-forest/30" />
          </div>
          {openBatch && (
            <div className="absolute top-4 right-4">
              <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getStatusColor(openBatch.status)}`}>
                {openBatch.status === 'closing-soon' ? 'Last Spots' : 'Open'}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6 space-y-4">
          {/* Region & Difficulty */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-trek-mist font-bold">{trek.region}</span>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(trek.difficulty)}`}>
              {trek.difficulty}
            </div>
          </div>

          {/* Title & Mood */}
          <div className="space-y-2">
            <h3 className="font-playfair text-xl font-bold text-trek-forest group-hover:text-trek-forest/80 transition-colors">
              {trek.name}
            </h3>
            <p className="text-sm italic text-slate-500">"{trek.moodWord}"</p>
          </div>

          {/* Narrative snippet */}
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
            {trek.narrative}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 py-4 border-t border-b border-trek-dust/50">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-trek-mist" />
              <div>
                <div className="text-xs text-slate-500">Altitude</div>
                <div className="text-sm font-bold text-trek-forest">{trek.maxAltitude.toLocaleString()}m</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-trek-mist" />
              <div>
                <div className="text-xs text-slate-500">Duration</div>
                <div className="text-sm font-bold text-trek-forest">{trek.duration} days</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-trek-mist" />
              <div>
                <div className="text-xs text-slate-500">Group</div>
                <div className="text-sm font-bold text-trek-forest">{trek.groupSize} max</div>
              </div>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-2">
            <div>
              <div className="text-xs text-slate-500">From</div>
              <div className="text-2xl font-playfair font-bold text-trek-forest">₹{nextPrice.toLocaleString()}</div>
            </div>
            <div className="px-4 py-2 rounded-lg bg-trek-forest text-white text-sm font-medium group-hover:bg-trek-forest/90 transition-colors">
              Explore →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
