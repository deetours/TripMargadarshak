'use client';

import { Trek, Batch } from '@/lib/types';
import { AlertCircle, Lock } from 'lucide-react';

interface PaymentSummaryCardProps {
  trek: Trek;
  batch: Batch;
  numberOfPeople: number;
  addOnTotal: number;
}

export function PaymentSummaryCard({
  trek,
  batch,
  numberOfPeople,
  addOnTotal,
}: PaymentSummaryCardProps) {
  const baseCost = batch.pricePerPerson * numberOfPeople;
  const totalCost = baseCost + addOnTotal;

  const trustElements = [
    { icon: '✓', text: 'Secure Razorpay Gateway' },
    { icon: '⚡', text: 'Instant Confirmation' },
    { icon: '👥', text: 'Real Human Support' },
  ];

  return (
    <div className="bg-white border border-[#E8F0EB] rounded-lg p-8 sticky top-24 space-y-6">
      {/* Trek Name */}
      <div>
        <p className="text-sm text-slate-600 font-semibold">Trek</p>
        <p className="text-xl font-bold text-[#1F4D3A]">{trek.name}</p>
      </div>

      {/* Breakdown */}
      <div className="space-y-3 py-6 border-t border-b border-[#E8F0EB]">
        {/* Trek cost */}
        <div className="flex justify-between">
          <p className="text-slate-700">
            Trek Cost × {numberOfPeople} person{numberOfPeople > 1 ? 's' : ''}
          </p>
          <p className="font-semibold text-[#1F4D3A]">
            ₹{baseCost.toLocaleString()}
          </p>
        </div>

        {/* Add-ons */}
        {addOnTotal > 0 && (
          <div className="flex justify-between">
            <p className="text-slate-700">Add-ons</p>
            <p className="font-semibold text-[#1F4D3A]">
              ₹{addOnTotal.toLocaleString()}
            </p>
          </div>
        )}

        {/* Insurance */}
        <div className="flex justify-between">
          <p className="text-slate-700">Trek Insurance (Included)</p>
          <p className="font-semibold text-[#3F7A5C]">✓</p>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center bg-[#F3F8F4] p-4 rounded-lg">
        <p className="text-lg font-bold text-[#1F4D3A]">Total Amount</p>
        <p className="text-3xl font-bold text-[#E6A756]">
          ₹{totalCost.toLocaleString()}
        </p>
      </div>

      {/* Trust elements */}
      <div className="space-y-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm font-semibold text-blue-900 mb-3">
          ✓ SAFE & SECURE
        </p>
        <div className="space-y-2">
          {trustElements.map((el, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-blue-900">
              <span className="font-bold">{el.icon}</span>
              <span>{el.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Payment gateway info */}
      <div className="flex items-start gap-3 text-xs text-slate-600">
        <Lock size={16} />
        <p>
          Payments processed through Razorpay. Your card details are secure and never stored.
        </p>
      </div>

      {/* Key policies */}
      <div className="space-y-2 text-xs text-slate-600 p-4 bg-[#F3F8F4] rounded-lg border border-[#E8F0EB]">
        <p className="font-semibold text-[#1F4D3A] mb-2">Key Policies</p>
        <p>✓ Free cancellation up to 7 days</p>
        <p>✓ 50% refund if cancelled 3-7 days</p>
        <p>✓ Free date change if needed</p>
        <p>✓ Instant confirmation email</p>
      </div>

      {/* CTA */}
      <button className="w-full py-3 bg-[#1F4D3A] text-white rounded-lg font-bold text-lg hover:bg-[#16382B] transition-colors flex items-center justify-center gap-2">
        <Lock size={18} />
        Proceed to Payment
      </button>

      {/* Final messaging */}
      <div className="text-center text-sm text-slate-700 italic">
        "You are one step away from the mountains."
      </div>
    </div>
  );
}
