'use client';

import { Trek, Batch } from '@/lib/types';
import { useBooking } from '@/lib/context/booking-context';
import { Users } from 'lucide-react';

interface StepBatchSelectProps {
  trek: Trek;
}

export function StepBatchSelect({ trek }: StepBatchSelectProps) {
  const { step1, setStep1, setStep } = useBooking();

  const handlePeopleChange = (value: number) => {
    setStep1({
      ...step1,
      numberOfPeople: value,
      totalPrice: value * (step1.batchId ? (trek.batches.find((b) => b.id === step1.batchId)?.pricePerPerson || 0) : 0),
    });
  };

  const handleBatchSelect = (batch: Batch) => {
    setStep1({
      ...step1,
      batchId: batch.id,
      totalPrice: (step1.numberOfPeople || 1) * batch.pricePerPerson,
    });
  };

  const canProceed = step1.batchId && step1.numberOfPeople && step1.numberOfPeople > 0;

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-trek-forest">Select Your Batch</h2>
        <p className="text-slate-600">Choose your preferred dates for the trek.</p>
      </div>

      {/* Batch Selection */}
      <div className="space-y-3">
        {trek.batches.map((batch) => (
          <div
            key={batch.id}
            onClick={() => handleBatchSelect(batch)}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              step1.batchId === batch.id ? 'border-trek-forest bg-trek-dust/20' : 'border-trek-dust hover:border-trek-forest/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-trek-forest">
                  {new Date(batch.startDate).toLocaleDateString('en-IN', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                  {' - '}
                  {new Date(batch.endDate).toLocaleDateString('en-IN', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </h3>
                <p className="text-sm text-slate-600">
                  {batch.availableSlots} of {batch.totalSlots} spots available
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-trek-forest">₹{batch.pricePerPerson.toLocaleString()}</p>
                <p className="text-xs text-slate-500">per person</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Number of People */}
      <div className="space-y-4">
        <h3 className="font-bold text-trek-forest">How Many People?</h3>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => handlePeopleChange(num)}
              className={`w-full p-4 rounded-lg border-2 font-bold transition-all ${
                step1.numberOfPeople === num
                  ? 'border-trek-forest bg-trek-forest text-white'
                  : 'border-trek-dust hover:border-trek-forest text-trek-forest'
              }`}
            >
              <Users size={18} className="inline mr-2" />
              {num} {num === 1 ? 'Person' : 'People'}
            </button>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={() => setStep(2)}
        disabled={!canProceed}
        className={`w-full px-6 py-4 rounded-lg font-bold text-white transition-colors ${
          canProceed
            ? 'bg-trek-forest hover:bg-trek-forest/90'
            : 'bg-slate-300 cursor-not-allowed'
        }`}
      >
        Continue to Fitness Assessment
      </button>
    </div>
  );
}
