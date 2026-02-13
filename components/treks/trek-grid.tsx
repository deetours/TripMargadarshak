'use client';

import { useMemo } from 'react';
import { Trek } from '@/lib/types';
import { TrekCard } from './trek-card';
import { useFilters } from '@/lib/context/filter-context';

interface TrekGridProps {
  treks: Trek[];
}

export function TrekGrid({ treks }: TrekGridProps) {
  const { filters } = useFilters();

  const filteredTreks = useMemo(() => {
    return treks.filter((trek) => {
      // Region filter
      if (filters.regions.length > 0 && !filters.regions.includes(trek.region)) {
        return false;
      }

      // Difficulty filter
      if (filters.difficulties.length > 0 && !filters.difficulties.includes(trek.difficulty)) {
        return false;
      }

      // Terrain filter
      if (filters.terrains.length > 0) {
        const hasMatchingTerrain = trek.terrain.some((t) => filters.terrains.includes(t));
        if (!hasMatchingTerrain) {
          return false;
        }
      }

      // Altitude range filter
      if (trek.maxAltitude < filters.altitudeRange[0] || trek.maxAltitude > filters.altitudeRange[1]) {
        return false;
      }

      // Duration range filter
      if (trek.duration < filters.durationRange[0] || trek.duration > filters.durationRange[1]) {
        return false;
      }

      return true;
    });
  }, [treks, filters]);

  if (filteredTreks.length === 0) {
    return (
      <div className="py-16 text-center space-y-4">
        <h3 className="text-2xl font-playfair font-bold text-trek-forest">No treks found</h3>
        <p className="text-slate-600">Try adjusting your filters to see more options.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredTreks.map((trek) => (
        <TrekCard key={trek.id} trek={trek} />
      ))}
    </div>
  );
}
