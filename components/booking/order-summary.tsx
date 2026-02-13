'use client';

import { Trek, Batch } from '@/lib/types';
import { useBooking } from '@/lib/context/booking-context';

interface OrderSummaryProps {
  trek: Trek;
  batch: Batch;
}

export function OrderSummary({ trek, batch }: OrderSummaryProps) {
  const { step1 } = useBooking();

  const subtotal = batch.pricePerPerson * (step1.numberOfPeople || 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  return (
    <div className="p-6 rounded-lg border border-trek-dust bg-trek-dust/20 sticky top-24 h-fit space-y-6">
      <h3 className="font-playfair text-xl font-bold text-trek-forest">Order Summary</h3>

      {/* Trek Info */}
      <div className="space-y-2 pb-4 border-b border-trek-dust">
        <h4 className="font-bold text-trek-forest">{trek.name}</h4>
        <div className="text-sm text-slate-600">
          <p>{new Date(batch.startDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })} - {new Date(batch.endDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</p>
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Price per person</span>
          <span className="font-bold text-trek-forest">₹{batch.pricePerPerson.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Number of people</span>
          <span className="font-bold text-trek-forest">{step1.numberOfPeople || 0}</span>
        </div>
        <div className="flex justify-between text-sm pt-3 border-t border-trek-dust">
          <span className="text-slate-600">Subtotal</span>
          <span className="font-bold text-trek-forest">₹{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Tax (18% GST)</span>
          <span className="font-bold text-trek-forest">₹{tax.toLocaleString()}</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between text-lg font-bold pt-4 border-t border-trek-dust">
        <span className="text-trek-forest">Total</span>
        <span className="text-trek-forest">₹{total.toLocaleString()}</span>
      </div>

      {/* Info */}
      <p className="text-xs text-slate-500 text-center">
        You can cancel up to 7 days before the trek for a full refund.
      </p>
    </div>
  );
}
