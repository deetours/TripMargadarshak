'use client';

import { useState } from 'react';
import { useFilters } from '@/lib/context/filter-context';
import { TREK_REGIONS, TREK_DIFFICULTIES, TREK_TERRAINS, TREK_SEASONS } from '@/lib/constants';
import { ChevronDown, X } from 'lucide-react';

export function FilterBar() {
  const { filters, setRegions, setDifficulties, setTerrains, clearFilters } = useFilters();
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const hasActiveFilters =
    filters.regions.length > 0 ||
    filters.difficulties.length > 0 ||
    filters.terrains.length > 0;

  const toggleRegion = (region: string) => {
    setRegions(
      filters.regions.includes(region as any)
        ? filters.regions.filter((r) => r !== region)
        : [...filters.regions, region as any]
    );
  };

  const toggleDifficulty = (difficulty: string) => {
    setDifficulties(
      filters.difficulties.includes(difficulty as any)
        ? filters.difficulties.filter((d) => d !== difficulty)
        : [...filters.difficulties, difficulty as any]
    );
  };

  const toggleTerrain = (terrain: string) => {
    setTerrains(
      filters.terrains.includes(terrain as any)
        ? filters.terrains.filter((t) => t !== terrain)
        : [...filters.terrains, terrain as any]
    );
  };

  return (
    <div className="space-y-4">
      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 items-center">
          {filters.regions.map((region) => (
            <div
              key={region}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-trek-dust text-trek-forest text-sm font-medium"
            >
              {region}
              <button onClick={() => toggleRegion(region)} className="hover:opacity-60">
                <X size={14} />
              </button>
            </div>
          ))}
          {filters.difficulties.map((difficulty) => (
            <div
              key={difficulty}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-trek-dust text-trek-forest text-sm font-medium"
            >
              {difficulty}
              <button onClick={() => toggleDifficulty(difficulty)} className="hover:opacity-60">
                <X size={14} />
              </button>
            </div>
          ))}
          {filters.terrains.map((terrain) => (
            <div
              key={terrain}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-trek-dust text-trek-forest text-sm font-medium"
            >
              {terrain}
              <button onClick={() => toggleTerrain(terrain)} className="hover:opacity-60">
                <X size={14} />
              </button>
            </div>
          ))}
          <button
            onClick={clearFilters}
            className="text-sm text-slate-600 hover:text-trek-forest transition-colors underline"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-3">
        {/* Region Filter */}
        <div className="relative">
          <button
            onClick={() => setOpenFilter(openFilter === 'region' ? null : 'region')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-trek-dust hover:border-trek-forest bg-white transition-colors"
          >
            Region
            <ChevronDown size={16} />
          </button>
          {openFilter === 'region' && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg border border-trek-dust shadow-lg z-10 p-2">
              {TREK_REGIONS.map((region) => (
                <label
                  key={region}
                  className="flex items-center gap-3 p-2 hover:bg-trek-dust/30 rounded cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.regions.includes(region as any)}
                    onChange={() => toggleRegion(region)}
                    className="w-4 h-4 rounded border-trek-forest"
                  />
                  <span className="text-sm">{region}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Difficulty Filter */}
        <div className="relative">
          <button
            onClick={() => setOpenFilter(openFilter === 'difficulty' ? null : 'difficulty')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-trek-dust hover:border-trek-forest bg-white transition-colors"
          >
            Difficulty
            <ChevronDown size={16} />
          </button>
          {openFilter === 'difficulty' && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg border border-trek-dust shadow-lg z-10 p-2">
              {TREK_DIFFICULTIES.map((difficulty) => (
                <label
                  key={difficulty}
                  className="flex items-center gap-3 p-2 hover:bg-trek-dust/30 rounded cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.difficulties.includes(difficulty as any)}
                    onChange={() => toggleDifficulty(difficulty)}
                    className="w-4 h-4 rounded border-trek-forest"
                  />
                  <span className="text-sm">{difficulty}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Terrain Filter */}
        <div className="relative">
          <button
            onClick={() => setOpenFilter(openFilter === 'terrain' ? null : 'terrain')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-trek-dust hover:border-trek-forest bg-white transition-colors"
          >
            Terrain
            <ChevronDown size={16} />
          </button>
          {openFilter === 'terrain' && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg border border-trek-dust shadow-lg z-10 p-2">
              {TREK_TERRAINS.map((terrain) => (
                <label
                  key={terrain}
                  className="flex items-center gap-3 p-2 hover:bg-trek-dust/30 rounded cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.terrains.includes(terrain as any)}
                    onChange={() => toggleTerrain(terrain)}
                    className="w-4 h-4 rounded border-trek-forest"
                  />
                  <span className="text-sm">{terrain}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
