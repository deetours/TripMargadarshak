'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TrekDifficulty, TrekRegion, TrekSeason, TrekTerrain } from '../types';

interface FilterState {
  regions: TrekRegion[];
  seasons: TrekSeason[];
  difficulties: TrekDifficulty[];
  terrains: TrekTerrain[];
  altitudeRange: [number, number];
  durationRange: [number, number];
}

interface FilterContextType {
  filters: FilterState;
  setRegions: (regions: TrekRegion[]) => void;
  setSeasons: (seasons: TrekSeason[]) => void;
  setDifficulties: (difficulties: TrekDifficulty[]) => void;
  setTerrains: (terrains: TrekTerrain[]) => void;
  setAltitudeRange: (range: [number, number]) => void;
  setDurationRange: (range: [number, number]) => void;
  clearFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>({
    regions: [],
    seasons: [],
    difficulties: [],
    terrains: [],
    altitudeRange: [0, 20000],
    durationRange: [1, 14],
  });

  const setRegions = (regions: TrekRegion[]) => {
    setFilters((prev) => ({ ...prev, regions }));
  };

  const setSeasons = (seasons: TrekSeason[]) => {
    setFilters((prev) => ({ ...prev, seasons }));
  };

  const setDifficulties = (difficulties: TrekDifficulty[]) => {
    setFilters((prev) => ({ ...prev, difficulties }));
  };

  const setTerrains = (terrains: TrekTerrain[]) => {
    setFilters((prev) => ({ ...prev, terrains }));
  };

  const setAltitudeRange = (range: [number, number]) => {
    setFilters((prev) => ({ ...prev, altitudeRange: range }));
  };

  const setDurationRange = (range: [number, number]) => {
    setFilters((prev) => ({ ...prev, durationRange: range }));
  };

  const clearFilters = () => {
    setFilters({
      regions: [],
      seasons: [],
      difficulties: [],
      terrains: [],
      altitudeRange: [0, 20000],
      durationRange: [1, 14],
    });
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        setRegions,
        setSeasons,
        setDifficulties,
        setTerrains,
        setAltitudeRange,
        setDurationRange,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within FilterProvider');
  }
  return context;
}
