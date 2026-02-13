'use client';

import Link from 'next/link';
import { Batch } from '@/lib/data/batches';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface PricingCardUrgencyProps {
  trekId: string;
  basePrice: number;
  batches: Batch[];
}

export function PricingCardUrgency({
  trekId,
  basePrice,
  batches
}: PricingCardUrgencyProps) {
  const nextBatch = batches[0];
  const seatsWarning = nextBatch && nextBatch.seatsAvailable <= 5;
  const discountedPrice = basePrice * (nextBatch?.discountPercentage ? (100 - nextBatch.discountPercentage) / 100 : 1);

  return (
    <div className="bg-gradient-to-br from-white to-[#F3F8F4] border-2 border-[#E6A756] rounded-lg p-8 sticky top-24">
      {/* Price */}
      <div className="mb-6">
        <p className="text-sm text-slate-600 mb-1">Starting from</p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-[#1F4D3A]">₹{discountedPrice.toLocaleString()}</span>
          {nextBatch?.discountPercentage && (
            <span className="text-sm text-slate-500 line-through">₹{basePrice.toLocaleString()}</span>
          )}
        </div>
        {nextBatch?.discountPercentage && (
          <span className="inline-block mt-2 px-3 py-1 bg-[#E6A756] text-white text-xs font-bold rounded-full">
            {nextBatch.discountPercentage}% OFF
          </span>
        )}
      </div>

      {/* Per person details */}
      <p className="text-xs text-slate-600 mb-6">
        Per person • Includes all meals, accommodation & guides
      </p>

      {/* Urgency warning */}
      {seatsWarning && (
        <div className="mb-6 p-4 bg-[#FEF3C7] border border-[#FCD34D] rounded-lg flex gap-3">
          <AlertCircle size={20} className="text-[#D97706] flex-shrink-0" />
          <div>
            <p className="font-semibold text-[#92400E] text-sm">Limited Seats Available</p>
            <p className="text-xs text-[#92400E]">Only {nextBatch?.seatsAvailable} spots left for {nextBatch?.departDate}</p>
          </div>
        </div>
      )}

      {/* What's included summary */}
      <div className="mb-8 space-y-3">
        <div className="flex gap-3 items-start">
          <CheckCircle2 size={18} className="text-[#3F7A5C] flex-shrink-0 mt-0.5" />
          <span className="text-sm text-slate-700">All meals on trail</span>
        </div>
        <div className="flex gap-3 items-start">
          <CheckCircle2 size={18} className="text-[#3F7A5C] flex-shrink-0 mt-0.5" />
          <span className="text-sm text-slate-700">Professional guides</span>
        </div>
        <div className="flex gap-3 items-start">
          <CheckCircle2 size={18} className="text-[#3F7A5C] flex-shrink-0 mt-0.5" />
          <span className="text-sm text-slate-700">Accommodation & camping gear</span>
        </div>
        <div className="flex gap-3 items-start">
          <CheckCircle2 size={18} className="text-[#3F7A5C] flex-shrink-0 mt-0.5" />
          <span className="text-sm text-slate-700">Safety equipment</span>
        </div>
      </div>

      {/* CTA Button */}
      <Link
        href={`/booking/${trekId}`}
        className="block w-full py-4 bg-[#1F4D3A] text-white text-center font-bold rounded-lg hover:bg-[#16382B] transition-colors mb-3"
      >
        Book Your Spot
      </Link>

      <button className="w-full py-3 border-2 border-[#1F4D3A] text-[#1F4D3A] font-semibold rounded-lg hover:bg-[#F3F8F4] transition-colors">
        Download Trek Guide
      </button>

      {/* Trust message */}
      <div className="mt-6 pt-6 border-t border-[#E8F0EB] text-center">
        <p className="text-xs text-slate-600">
          247 trekkers completed this trek last season
        </p>
      </div>
    </div>
  );
}
