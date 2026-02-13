'use client';

import { useState } from 'react';
import { Trek, Batch } from '@/lib/types';
import { ChevronLeft, ChevronRight, AlertCircle, Check } from 'lucide-react';
import { useBooking } from '@/lib/context/booking-context';

interface DateSelectorCalendarProps {
  trek: Trek;
  onBatchSelect: (batchId: string) => void;
}

export function DateSelectorCalendar({
  trek,
  onBatchSelect,
}: DateSelectorCalendarProps) {
  const [selectedBatchId, setSelectedBatchId] = useState<string>('');
  const { step1, setStep1 } = useBooking();

  const handleBatchSelect = (batchId: string) => {
    setSelectedBatchId(batchId);
    setStep1({ ...step1, batchId });
    onBatchSelect(batchId);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[#1F4D3A]">
          Pick the window where your life allows adventure.
        </h2>
        <p className="text-slate-600">
          Choose from upcoming departures. You can change your date later (policy dependent).
        </p>
      </div>

      {/* Batches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trek.batches && trek.batches.length > 0 ? (
          trek.batches.map((batch: Batch) => {
            const startDate = new Date(batch.startDate);
            const endDate = new Date(batch.endDate);
            const daysUntil = Math.ceil(
              (startDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
            );
            const isFull = batch.availableSlots === 0;
            const isClosingSoon = batch.availableSlots <= 2;
            const isSelected = selectedBatchId === batch.id;

            const statusColor =
              isFull
                ? 'bg-red-50 border-red-200'
                : isClosingSoon
                ? 'bg-amber-50 border-amber-200'
                : 'bg-white border-[#E8F0EB]';

            return (
              <button
                key={batch.id}
                onClick={() => handleBatchSelect(batch.id)}
                disabled={isFull}
                className={`relative p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                  isSelected
                    ? 'border-[#E6A756] bg-[#F3F8F4] shadow-lg scale-105'
                    : statusColor
                } ${isFull ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:shadow-md'}`}
              >
                {/* Selection indicator */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-[#E6A756] rounded-full flex items-center justify-center">
                    <Check size={16} className="text-white fill-white" />
                  </div>
                )}

                {/* Status badge */}
                {(isFull || isClosingSoon) && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                    {isFull ? 'FULL' : 'CLOSING'}
                  </div>
                )}

                {/* Date range */}
                <div className="mb-4">
                  <p className="text-sm text-slate-600 mb-1">Departure</p>
                  <p className="text-xl font-bold text-[#1F4D3A]">
                    {startDate.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                    {' → '}
                    {endDate.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-3 gap-3 py-4 border-t border-current border-opacity-20">
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">Duration</p>
                    <p className="text-lg font-bold text-[#1F4D3A]">{trek.duration}d</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">Seats</p>
                    <p className="text-lg font-bold text-[#1F4D3A] flex items-center gap-1">
                      {batch.availableSlots}/{batch.totalSlots}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">Days Away</p>
                    <p className="text-lg font-bold text-[#1F4D3A]">{daysUntil}d</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-4 pt-4 border-t border-current border-opacity-20">
                  <p className="text-sm text-slate-600 mb-1">Cost per person</p>
                  <p className="text-2xl font-bold text-[#E6A756]">
                    ₹{batch.pricePerPerson.toLocaleString()}
                  </p>
                </div>

                {/* Warnings */}
                {isFull && (
                  <div className="mt-4 pt-4 border-t border-red-200 flex items-start gap-2">
                    <AlertCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-red-600">
                      This batch is full. Join waitlist for next opening.
                    </p>
                  </div>
                )}

                {isClosingSoon && (
                  <div className="mt-4 flex items-start gap-2">
                    <span className="text-lg">⚡</span>
                    <p className="text-xs text-amber-700 font-semibold">
                      Only {batch.availableSlots} seats left. Book now!
                    </p>
                  </div>
                )}
              </button>
            );
          })
        ) : (
          <div className="col-span-2 p-8 bg-[#F3F8F4] rounded-lg text-center">
            <p className="text-slate-600">No upcoming batches available.</p>
          </div>
        )}
      </div>

      {/* Trust line */}
      <div className="p-4 bg-[#F3F8F4] rounded-lg border border-[#E8F0EB]">
        <p className="text-sm text-slate-700 text-center">
          ✓ <strong>Free date change</strong> if you need to reschedule within 7 days
        </p>
      </div>
    </div>
  );
}
