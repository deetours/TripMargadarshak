'use client';

import { useBooking } from '@/lib/context/booking-context';
import { Check } from 'lucide-react';

export function BookingProgress() {
  const { step } = useBooking();

  const steps = [
    { number: 1, title: 'Batch Selection' },
    { number: 2, title: 'Fitness Level' },
    { number: 3, title: 'Gear Addons' },
    { number: 4, title: 'Contact Info' },
    { number: 5, title: 'Payment' },
  ];

  return (
    <div className="py-8 px-6 sm:px-8 border-b border-trek-dust bg-trek-dust/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {steps.map((s, idx) => (
            <div key={s.number} className="flex items-center flex-1">
              {/* Step Circle */}
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-sm transition-all ${
                  step > s.number
                    ? 'bg-green-500 text-white'
                    : step === s.number
                      ? 'bg-trek-forest text-white'
                      : 'bg-trek-dust text-slate-500'
                }`}
              >
                {step > s.number ? <Check size={20} /> : s.number}
              </div>

              {/* Label (hidden on small screens) */}
              <div className={`ml-3 hidden sm:block text-sm font-medium ${step >= s.number ? 'text-trek-forest' : 'text-slate-500'}`}>
                {s.title}
              </div>

              {/* Line */}
              {idx < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 sm:mx-4 transition-all ${
                    step > s.number ? 'bg-green-500' : 'bg-trek-dust'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
