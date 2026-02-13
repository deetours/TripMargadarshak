'use client';

import { Batch } from '@/lib/data/batches';
import { AlertCircle, Calendar, Users } from 'lucide-react';

interface StepSelectDepartureProps {
  batches: Batch[];
  selectedBatch: Batch | null;
  onSelect: (batch: Batch) => void;
}

export function StepSelectDeparture({
  batches,
  selectedBatch,
  onSelect
}: StepSelectDepartureProps) {
  if (!batches.length) {
    return (
      <div className="p-8 bg-[#FEF3C7] border border-[#FCD34D] rounded-lg text-center">
        <AlertCircle className="mx-auto mb-4 text-[#D97706]" size={32} />
        <h3 className="font-bold text-[#92400E] mb-2">No batches available</h3>
        <p className="text-sm text-[#92400E]">Check back soon for more departure dates</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 mb-4">
        Pick the window where your life allows adventure. Early birds get better weather windows.
      </p>

      <div className="space-y-3">
        {batches.map((batch) => (
          <div
            key={batch.id}
            onClick={() => onSelect(batch)}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
              selectedBatch?.id === batch.id
                ? 'border-[#1F4D3A] bg-[#F3F8F4]'
                : 'border-[#E8F0EB] bg-white hover:border-[#3F7A5C]'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-[#1F4D3A]" />
                <div>
                  <p className="font-bold text-[#1F4D3A]">
                    {new Date(batch.departDate).toLocaleDateString('en-IN', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                  <p className="text-xs text-slate-600">
                    {batch.departDate} to {batch.returnDate}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#1F4D3A]">₹{batch.pricePerPerson.toLocaleString()}</p>
                {batch.discountPercentage && (
                  <p className="text-xs text-[#E6A756] font-bold">{batch.discountPercentage}% OFF</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <Users size={16} />
                <span>{batch.seatsAvailable} spots left</span>
              </div>
              {batch.weatherCondition && (
                <p className="text-xs text-[#3F7A5C] font-medium">{batch.weatherCondition}</p>
              )}
            </div>

            {batch.seatsAvailable <= 3 && (
              <div className="mt-3 text-xs text-[#D97706] font-bold flex items-center gap-1">
                <AlertCircle size={14} />
                Last {batch.seatsAvailable} spots available
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
