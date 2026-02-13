'use client';

import { useBooking } from '@/lib/context/booking-context';

interface BookingStepperProps {
  totalSteps: number;
}

export function BookingStepper({ totalSteps = 6 }: BookingStepperProps) {
  const { step } = useBooking();

  const steps = [
    { number: 1, title: 'Select Departure', icon: '📅' },
    { number: 2, title: 'Your Details', icon: '👤' },
    { number: 3, title: 'Safety Check', icon: '🛡️' },
    { number: 4, title: 'Add-ons', icon: '🎒' },
    { number: 5, title: 'Payment', icon: '💳' },
    { number: 6, title: 'Confirmation', icon: '🎉' },
  ];

  return (
    <div className="sticky top-0 z-30 bg-white border-b border-[#E8F0EB] shadow-sm">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-8">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex h-1 bg-[#E8F0EB] rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#1F4D3A] to-[#E6A756] transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step indicators */}
        <div className="flex justify-between">
          {steps.map((s, idx) => (
            <div key={s.number} className="flex flex-col items-center gap-2 flex-1">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div
                  className={`absolute left-1/2 w-full h-0.5 top-6 transition-colors ${
                    step > s.number ? 'bg-[#E6A756]' : 'bg-[#E8F0EB]'
                  }`}
                  style={{ marginLeft: `${((idx + 0.5) * 100) / steps.length}%`, width: `${100 / steps.length}%` }}
                />
              )}

              {/* Circle */}
              <div
                className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                  step === s.number
                    ? 'bg-[#E6A756] text-[#1F4D3A] ring-4 ring-[#E6A756]/20 scale-110'
                    : step > s.number
                    ? 'bg-[#1F4D3A] text-white'
                    : 'bg-[#E8F0EB] text-slate-400'
                }`}
              >
                {step > s.number ? '✓' : s.icon}
              </div>

              {/* Label */}
              <p
                className={`text-xs sm:text-sm font-semibold text-center transition-colors ${
                  step >= s.number ? 'text-[#1F4D3A]' : 'text-slate-400'
                }`}
              >
                {s.title}
              </p>
            </div>
          ))}
        </div>

        {/* Step info */}
        <div className="mt-6 p-4 bg-[#F3F8F4] rounded-lg text-center">
          <p className="text-sm font-semibold text-[#1F4D3A]">
            Step {step} of {totalSteps}:&nbsp;
            <span className="text-[#E6A756]">
              {steps.find(s => s.number === step)?.title}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
