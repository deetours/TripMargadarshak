'use client';

import { Trek, Batch } from '@/lib/types';
import { TrendingDown, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface SeatAvailabilityBarProps {
  batch: Batch;
  trek: Trek;
}

export function SeatAvailabilityBar({ batch, trek }: SeatAvailabilityBarProps) {
  const percentageFilled = ((batch.totalSlots - batch.availableSlots) / batch.totalSlots) * 100;
  const isClosingSoon = batch.status === 'closing-soon' || batch.availableSlots <= 2;
  const isFull = batch.status === 'full' || batch.availableSlots === 0;

  const departureDate = new Date(batch.startDate);
  const daysUntilDeparture = Math.ceil(
    (departureDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <section className="py-12 bg-gradient-to-r from-[#1F4D3A] to-[#16382B] text-white sticky bottom-0 z-40 shadow-2xl">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          {/* Seat Counter */}
          <div className="text-center md:text-left">
            <p className="text-sm opacity-80 mb-1">SEATS AVAILABLE</p>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-bold">{batch.availableSlots}</p>
              <p className="text-sm opacity-70">of {batch.totalSlots}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="md:col-span-2">
            <div className="space-y-2">
              <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    isFull
                      ? 'bg-red-400'
                      : isClosingSoon
                      ? 'bg-[#E6A756]'
                      : 'bg-[#62B678]'
                  }`}
                  style={{ width: `${percentageFilled}%` }}
                />
              </div>
              <div className="flex justify-between text-xs opacity-70">
                <span>Group Filling Up</span>
                <span>
                  {isFull
                    ? 'FULL - Next batch opening'
                    : isClosingSoon
                    ? 'CLOSING SOON'
                    : `${daysUntilDeparture} days until departure`}
                </span>
              </div>
            </div>
          </div>

          {/* Next Departure */}
          <div className="text-center md:text-right">
            <p className="text-sm opacity-80 mb-1">NEXT DEPARTURE</p>
            <p className="text-2xl font-bold">
              {departureDate.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </p>
            <p className="text-xs opacity-70 mt-1">
              ₹{batch.pricePerPerson.toLocaleString()} per person
            </p>
          </div>
        </div>

        {/* Urgency messaging */}
        {(isClosingSoon || isFull) && (
          <div className="mt-6 pt-6 border-t border-white/20 flex items-center gap-3">
            <AlertCircle size={20} className={isClosingSoon ? 'text-[#E6A756]' : 'text-red-400'} />
            <p className="text-sm font-semibold">
              {isFull
                ? '❌ This batch is full. New batch opening soon. Secure your spot on the waitlist.'
                : '⚡ Only ' +
                  batch.availableSlots +
                  ' seats left for this departure. Book now before group closes.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
