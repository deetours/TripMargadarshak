'use client';

import { Trek } from '@/lib/types';
import { CheckCircle, Zap } from 'lucide-react';
import Link from 'next/link';

interface PricingCardUrgencyProps {
  trek: Trek;
}

export function PricingCardUrgency({ trek }: PricingCardUrgencyProps) {
  const basePrice = trek.basePrice;
  const nextBatch = trek.batches && trek.batches[0];

  // Calculate what this price includes (psychological value)
  const inclusions = [
    { item: 'Professional Guide', value: '₹5,000' },
    { item: 'Accommodation & Meals', value: '₹8,000' },
    { item: 'Logistics & Transport', value: '₹4,000' },
    { item: 'Safety Equipment', value: '₹2,000' },
    { item: 'Insurance Coverage', value: '₹1,500' },
  ];

  const totalValue = inclusions.reduce(
    (sum, inc) => sum + parseInt(inc.value.replace(/[₹,]/g, '')),
    0
  );

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#E6A756] font-medium tracking-widest text-sm">
            INVESTMENT + VALUE STACK
          </p>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-[#1F4D3A]">
            What you're actually getting
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every rupee replaces stress, uncertainty, and logistics burden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Value breakdown */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main price */}
            <div className="relative bg-gradient-to-br from-[#F3F8F4] to-[#E8F0EB] rounded-lg p-8 border border-[#E8F0EB]">
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#1F4D3A]">
                  Trek Investment
                </h3>
                <div className="text-right">
                  <p className="text-sm text-slate-600 mb-1">Per person</p>
                  <p className="text-5xl font-bold text-[#E6A756]">
                    ₹{nextBatch?.pricePerPerson.toLocaleString() || basePrice.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* What it replaces */}
              <div className="space-y-4 pt-6 border-t border-[#E8F0EB]">
                <h4 className="font-semibold text-[#1F4D3A] text-sm uppercase tracking-widest">
                  You Save From:
                </h4>
                <ul className="space-y-3">
                  {[
                    'Planning stress → Itinerary is done',
                    'Navigation risk → Expert guides included',
                    'Logistics chaos → Transport & accommodation sorted',
                    'Safety anxiety → Insurance + emergency protocols',
                    'Meal uncertainty → 3 meals prepared daily',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle size={18} className="text-[#3F7A5C] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Detailed value items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inclusions.map((inc, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-[#E8F0EB] rounded-lg hover:border-[#E6A756] transition-colors"
                >
                  <p className="text-sm text-slate-600 mb-1">{inc.item}</p>
                  <p className="text-2xl font-bold text-[#1F4D3A]">{inc.value}</p>
                </div>
              ))}
            </div>

            {/* Total value callout */}
            <div className="relative bg-[#1F4D3A] text-white rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-80 mb-1">ACTUAL VALUE</p>
                  <p className="text-3xl font-bold">₹{totalValue.toLocaleString()}</p>
                </div>
                <div className="text-right text-[#E6A756]">
                  <p className="text-sm opacity-80 mb-1">YOU SAVE</p>
                  <p className="text-3xl font-bold">
                    {Math.round(((totalValue - basePrice) / totalValue) * 100)}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="space-y-6">
            {/* Urgency card */}
            <div className="relative bg-gradient-to-b from-[#E6A756] to-[#D4942F] text-white rounded-lg p-8 shadow-xl">
              {/* Badge */}
              <div className="absolute -top-3 right-4 bg-[#1F4D3A] px-4 py-1 rounded-full text-xs font-bold tracking-widest">
                LIMITED TIME
              </div>

              <div className="space-y-6 mt-4">
                <div className="space-y-2">
                  <p className="text-sm opacity-90 font-semibold">AVAILABLE SEATS</p>
                  <p className="text-5xl font-bold">
                    {nextBatch?.availableSlots || 0}
                  </p>
                  <p className="text-sm opacity-75">
                    out of {nextBatch?.totalSlots || 0} for {trek.name}
                  </p>
                </div>

                {nextBatch && nextBatch.availableSlots <= 2 && (
                  <div className="bg-[#1F4D3A]/50 px-3 py-2 rounded text-xs">
                    ⚡ Closing soon. Book now to secure your spot.
                  </div>
                )}

                <div className="pt-6 border-t border-white/30 space-y-3">
                  <Link
                    href={`/booking/${trek.id}`}
                    className="block w-full bg-white text-[#E6A756] py-3 rounded-lg font-bold text-center hover:bg-slate-100 transition-colors"
                  >
                    Check Available Dates
                  </Link>
                  <button className="w-full border-2 border-white text-white py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
                    Talk To Trek Expert
                  </button>
                </div>
              </div>
            </div>

            {/* Trust elements */}
            <div className="space-y-3 p-6 bg-[#F3F8F4] rounded-lg border border-[#E8F0EB]">
              <h4 className="font-semibold text-[#1F4D3A] text-sm text-center">
                WHY BOOK WITH US
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2 items-start">
                  <span className="text-[#E6A756] font-bold">✓</span>
                  <span>Free date change within 7 days</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#E6A756] font-bold">✓</span>
                  <span>100% safety record (8+ years)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#E6A756] font-bold">✓</span>
                  <span>24/7 support during trek</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#E6A756] font-bold">✓</span>
                  <span>Expert guides (10+ years avg)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
