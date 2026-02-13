'use client';

import { useState } from 'react';
import { Lock, CreditCard, Zap } from 'lucide-react';
import { Trek } from '@/lib/types';
import { Batch } from '@/lib/data/batches';
import { TrekkerDetailsFormData } from './step-trekker-details';
import { SafetyConfirmationData } from './step-safety-confirmation';

interface StepPaymentConfirmationProps {
  trek: Trek;
  batch: Batch;
  trekkerDetails: Partial<TrekkerDetailsFormData>;
  safetyData: Partial<SafetyConfirmationData>;
  selectedAddOns: string[];
  addOnTotal: number;
  onCompleteBooking: () => void;
  isProcessing?: boolean;
}

export function StepPaymentConfirmation({
  trek,
  batch,
  trekkerDetails,
  safetyData,
  selectedAddOns,
  addOnTotal,
  onCompleteBooking,
  isProcessing = false
}: StepPaymentConfirmationProps) {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking'>('upi');

  const trekPrice = batch.pricePerPerson;
  const totalPrice = trekPrice + addOnTotal;

  return (
    <div className="space-y-8">
      {/* Order Summary */}
      <div className="bg-[#F3F8F4] p-8 rounded-lg border border-[#E8F0EB]">
        <h3 className="text-xl font-bold text-[#1F4D3A] mb-6">Order Summary</h3>

        <div className="space-y-4 mb-6 pb-6 border-b border-[#E8F0EB]">
          <div className="flex justify-between items-center">
            <span className="text-slate-700">{trek.name}</span>
            <span className="font-bold text-[#1F4D3A]">₹{trekPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-slate-600">
            <span>{new Date(batch.departDate).toLocaleDateString('en-IN')}</span>
            <span>1 person</span>
          </div>

          {selectedAddOns.length > 0 && (
            <div className="flex justify-between items-center mt-4">
              <span className="text-slate-700">Add-ons ({selectedAddOns.length})</span>
              <span className="font-bold text-[#1F4D3A]">₹{addOnTotal.toLocaleString()}</span>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center text-lg">
          <span className="font-bold text-[#1F4D3A]">Total Amount</span>
          <span className="text-3xl font-bold text-[#E6A756]">₹{totalPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* Booking Details */}
      <div className="bg-white border border-[#E8F0EB] rounded-lg p-6">
        <h3 className="font-bold text-[#1F4D3A] mb-4">Booking Details</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-600">Name</span>
            <span className="font-medium text-[#1F4D3A]">{trekkerDetails.firstName} {trekkerDetails.lastName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Email</span>
            <span className="font-medium text-[#1F4D3A]">{trekkerDetails.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Departure</span>
            <span className="font-medium text-[#1F4D3A]">{new Date(batch.departDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div>
        <h3 className="font-bold text-[#1F4D3A] mb-4">Payment Method</h3>
        <div className="space-y-3">
          {[
            { id: 'upi', label: 'UPI/Google Pay', icon: Zap },
            { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
            { id: 'netbanking', label: 'Net Banking', icon: CreditCard }
          ].map(({ id, label, icon: Icon }) => (
            <label
              key={id}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all flex items-center gap-3 ${
                paymentMethod === id
                  ? 'border-[#1F4D3A] bg-[#F3F8F4]'
                  : 'border-[#E8F0EB] bg-white hover:border-[#3F7A5C]'
              }`}
            >
              <input
                type="radio"
                name="payment"
                value={id}
                checked={paymentMethod === id as any}
                onChange={(e) => setPaymentMethod(e.target.value as any)}
                className="w-4 h-4"
              />
              <Icon size={20} className="text-[#1F4D3A]" />
              <span className="font-medium text-[#1F4D3A]">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Trust & Security */}
      <div className="p-4 bg-[#F3F8F4] rounded-lg flex gap-3">
        <Lock size={20} className="text-[#3F7A5C] flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <p className="font-semibold text-[#1F4D3A] mb-1">Your payment is secure</p>
          <p className="text-slate-600">All payments are encrypted with SSL. We use Razorpay for secure processing.</p>
        </div>
      </div>

      {/* Terms Agreement */}
      <label className="flex gap-3 p-4 bg-white border border-[#E8F0EB] rounded-lg cursor-pointer hover:bg-[#F3F8F4] transition-colors">
        <input
          type="checkbox"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          className="w-5 h-5 mt-0.5 flex-shrink-0"
        />
        <div className="text-sm">
          <p className="text-slate-700">
            I agree to the <a href="#" className="text-[#1F4D3A] font-bold hover:underline">terms and conditions</a> and <a href="#" className="text-[#1F4D3A] font-bold hover:underline">cancellation policy</a>
          </p>
          <p className="text-xs text-slate-600 mt-1">
            You can change your dates up to 7 days before departure
          </p>
        </div>
      </label>

      {/* Final CTA */}
      <button
        onClick={onCompleteBooking}
        disabled={!agreedToTerms || isProcessing}
        className="w-full py-4 bg-[#1F4D3A] text-white rounded-lg font-bold text-lg hover:bg-[#16382B] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isProcessing ? 'Processing...' : `Complete Booking • ₹${totalPrice.toLocaleString()}`}
      </button>

      {/* Reassurance */}
      <p className="text-center text-sm text-slate-600">
        You'll receive a confirmation email with your trek briefing guide and next steps within 24 hours.
      </p>
    </div>
  );
}
