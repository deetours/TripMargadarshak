'use client';

import { useBooking } from '@/lib/context/booking-context';
import { CheckCircle2, Circle } from 'lucide-react';

export function SafetyChecklist() {
  const { step3, setStep3 } = useBooking();

  const checks = [
    {
      id: 'fitness',
      label: 'I confirm my fitness level matches this trek',
      description: 'Honestly assess if you can walk 6-8 hours daily.',
    },
    {
      id: 'medical',
      label: 'I have disclosed all medical conditions',
      description: 'Our guides need this for proper support.',
    },
    {
      id: 'altitude',
      label: 'I understand altitude may affect me',
      description: 'We have protocols for altitude sickness.',
    },
    {
      id: 'briefing',
      label: 'I accept the safety briefing and protocols',
      description: 'You\'ll receive full briefing before trek.',
    },
    {
      id: 'insurance',
      label: 'I accept the trek insurance terms',
      description: 'Covers altitude, evacuation, medical up to ₹5L.',
    },
  ];

  const toggleCheck = (id: string) => {
    setStep3({
      ...step3,
      [id]: !(step3 as any)?.[id],
    });
  };

  const allChecked = checks.every((check) => (step3 as any)?.[check.id]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[#1F4D3A]">
          Let's talk about safety.
        </h2>
        <p className="text-slate-600">
          Mountains reward preparation. We take safety seriously so you can enjoy freely.
        </p>
      </div>

      {/* Philosophy statement */}
      <div className="p-6 bg-[#F3F8F4] border border-[#E8F0EB] rounded-lg space-y-3">
        <p className="font-semibold text-[#1F4D3A]">Our Safety Philosophy</p>
        <p className="text-slate-700 leading-relaxed">
          We prevent problems, not fix them after. Professional guides with international certifications, 1:8 guide-to-trekker ratio, daily health checks, satellite communication—these aren't optional. They're non-negotiable.
        </p>
      </div>

      {/* Checklist */}
      <div className="space-y-4">
        {checks.map((check) => {
          const isChecked = (step3 as any)?.[check.id];
          return (
            <button
              key={check.id}
              onClick={() => toggleCheck(check.id)}
              className={`w-full p-4 border-2 rounded-lg transition-all text-left group ${
                isChecked
                  ? 'border-[#1F4D3A] bg-[#F3F8F4]'
                  : 'border-[#E8F0EB] hover:border-[#E6A756]'
              }`}
            >
              <div className="flex gap-4">
                {isChecked ? (
                  <CheckCircle2 size={24} className="text-[#1F4D3A] flex-shrink-0 mt-0.5" />
                ) : (
                  <Circle size={24} className="text-slate-300 flex-shrink-0 mt-0.5 group-hover:text-[#E6A756]" />
                )}
                <div>
                  <p className={`font-semibold ${isChecked ? 'text-[#1F4D3A]' : 'text-slate-700'}`}>
                    {check.label}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">{check.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Trust metrics */}
      <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#E8F0EB]">
        <div className="text-center">
          <p className="text-3xl font-bold text-[#E6A756]">8+ yrs</p>
          <p className="text-xs text-slate-600 mt-1">Operating</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-[#E6A756]">2,400+</p>
          <p className="text-xs text-slate-600 mt-1">Safe Treks</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-[#E6A756]">100%</p>
          <p className="text-xs text-slate-600 mt-1">Safety Record</p>
        </div>
      </div>

      {/* Required notice */}
      <div className={`p-4 rounded-lg border-2 transition-all ${
        allChecked
          ? 'bg-green-50 border-green-600 text-green-900'
          : 'bg-amber-50 border-amber-600 text-amber-900'
      }`}>
        {allChecked ? (
          <p className="font-semibold">✓ All safety confirmations received. Good to proceed!</p>
        ) : (
          <p className="font-semibold">All items must be confirmed before booking.</p>
        )}
      </div>
    </div>
  );
}
