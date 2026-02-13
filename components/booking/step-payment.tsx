'use client';

import { Trek, Batch } from '@/lib/types';
import { useBooking } from '@/lib/context/booking-context';
import { CreditCard, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface StepPaymentProps {
  trek: Trek;
  batch: Batch;
}

export function StepPayment({ trek, batch }: StepPaymentProps) {
  const { step1, resetBooking, setStep } = useBooking();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = batch.pricePerPerson * (step1.numberOfPeople || 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="space-y-8 text-center">
        <div className="flex justify-center">
          <CheckCircle size={64} className="text-green-500" />
        </div>

        <div className="space-y-4">
          <h2 className="font-playfair text-4xl font-bold text-trek-forest">Booking Confirmed!</h2>
          <p className="text-slate-600 text-lg">
            Your booking for {trek.name} is confirmed. Check your email for confirmation details.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-trek-dust/20 border border-trek-dust text-left space-y-3">
          <div>
            <p className="text-xs text-slate-500">CONFIRMATION NUMBER</p>
            <p className="text-2xl font-bold text-trek-forest">TM-2026-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-trek-dust">
            <div>
              <p className="text-xs text-slate-500">Trek</p>
              <p className="font-bold text-trek-forest">{trek.name}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Participants</p>
              <p className="font-bold text-trek-forest">{step1.numberOfPeople} person(s)</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Date</p>
              <p className="font-bold text-trek-forest">{new Date(batch.startDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Total Paid</p>
              <p className="font-bold text-green-600">₹{total.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            resetBooking();
            window.location.href = '/treks';
          }}
          className="w-full px-6 py-3 rounded-lg bg-trek-forest text-white font-bold hover:bg-trek-forest/90 transition-colors"
        >
          Back to Treks
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-trek-forest">Payment</h2>
        <p className="text-slate-600">Complete your booking by making the payment.</p>
      </div>

      {/* Order Summary */}
      <div className="p-6 rounded-lg bg-trek-dust/20 border border-trek-dust space-y-4">
        <h3 className="font-bold text-trek-forest">Order Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-600">Trek</span>
            <span className="font-bold">{trek.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Participants</span>
            <span className="font-bold">{step1.numberOfPeople} × ₹{batch.pricePerPerson.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Subtotal</span>
            <span className="font-bold">₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Tax (18% GST)</span>
            <span className="font-bold">₹{tax.toLocaleString()}</span>
          </div>
          <div className="border-t border-trek-dust pt-2 flex justify-between text-lg font-bold text-trek-forest">
            <span>Total Amount</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="space-y-4">
        <h3 className="font-bold text-trek-forest">Payment Method</h3>
        <button className="w-full p-4 rounded-lg border-2 border-trek-forest bg-trek-forest/10 flex items-center gap-3 hover:bg-trek-forest/20 transition-colors">
          <CreditCard size={24} className="text-trek-forest" />
          <div className="text-left">
            <p className="font-bold text-trek-forest">Credit/Debit Card or UPI</p>
            <p className="text-sm text-slate-600">Secure payment via Razorpay</p>
          </div>
        </button>
      </div>

      {/* Cancellation Policy */}
      <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 space-y-2">
        <p className="text-sm font-bold text-amber-900">Cancellation Policy</p>
        <ul className="text-xs text-amber-900 space-y-1 list-disc list-inside">
          <li>Free cancellation up to 7 days before the trek</li>
          <li>50% refund if cancelled 3-7 days before</li>
          <li>No refund within 3 days of the trek</li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        <button
          onClick={() => setStep(4)}
          className="flex-1 px-6 py-3 rounded-lg border-2 border-trek-forest text-trek-forest font-bold hover:bg-trek-dust transition-colors"
        >
          Back
        </button>
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`flex-1 px-6 py-3 rounded-lg font-bold text-white transition-colors ${
            isProcessing
              ? 'bg-slate-400 cursor-not-allowed'
              : 'bg-trek-forest hover:bg-trek-forest/90'
          }`}
        >
          {isProcessing ? 'Processing...' : `Pay ₹${total.toLocaleString()}`}
        </button>
      </div>
    </div>
  );
}
