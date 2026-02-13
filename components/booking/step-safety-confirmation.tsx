'use client';

import { AlertCircle, CheckCircle2 } from 'lucide-react';

export interface SafetyConfirmationData {
  fitnessConfirmed: boolean;
  medicalConfirmed: boolean;
  briefingAccepted: boolean;
}

interface StepSafetyConfirmationProps {
  data: Partial<SafetyConfirmationData>;
  onUpdate: (data: Partial<SafetyConfirmationData>) => void;
}

export function StepSafetyConfirmation({
  data,
  onUpdate
}: StepSafetyConfirmationProps) {
  const handleToggle = (field: keyof SafetyConfirmationData) => {
    onUpdate({ ...data, [field]: !data[field] });
  };

  const allConfirmed = data.fitnessConfirmed && data.medicalConfirmed && data.briefingAccepted;

  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-600">
        Mountains reward preparation. These confirmations ensure you're ready.
      </p>

      {/* Fitness Section */}
      <div className="p-6 border-2 border-[#E8F0EB] rounded-lg">
        <div className="flex gap-4">
          <div className="mt-1">
            {data.fitnessConfirmed ? (
              <CheckCircle2 size={24} className="text-[#3F7A5C]" />
            ) : (
              <div className="w-6 h-6 border-2 border-[#E8F0EB] rounded-full" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-[#1F4D3A] mb-2">Fitness & Health</h3>
            <p className="text-sm text-slate-700 mb-4">
              I confirm I'm in reasonable physical health and can walk 5-7 hours daily at altitude. I have no serious untreated medical conditions that could endanger me on trek.
            </p>
            <button
              onClick={() => handleToggle('fitnessConfirmed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                data.fitnessConfirmed
                  ? 'bg-[#3F7A5C] text-white'
                  : 'bg-[#F3F8F4] text-[#1F4D3A] hover:bg-[#E8F0EB]'
              }`}
            >
              {data.fitnessConfirmed ? '✓ Confirmed' : 'Confirm'}
            </button>
          </div>
        </div>
      </div>

      {/* Medical Disclosure */}
      <div className="p-6 border-2 border-[#E8F0EB] rounded-lg">
        <div className="flex gap-4">
          <div className="mt-1">
            {data.medicalConfirmed ? (
              <CheckCircle2 size={24} className="text-[#3F7A5C]" />
            ) : (
              <div className="w-6 h-6 border-2 border-[#E8F0EB] rounded-full" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-[#1F4D3A] mb-2">Medical Declaration</h3>
            <p className="text-sm text-slate-700 mb-4">
              I have disclosed all relevant medical information. I understand the risks of high altitude and have consulted a doctor if needed. I'm medically fit for this trek.
            </p>
            <button
              onClick={() => handleToggle('medicalConfirmed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                data.medicalConfirmed
                  ? 'bg-[#3F7A5C] text-white'
                  : 'bg-[#F3F8F4] text-[#1F4D3A] hover:bg-[#E8F0EB]'
              }`}
            >
              {data.medicalConfirmed ? '✓ Confirmed' : 'Confirm'}
            </button>
          </div>
        </div>
      </div>

      {/* Briefing */}
      <div className="p-6 border-2 border-[#E8F0EB] rounded-lg">
        <div className="flex gap-4">
          <div className="mt-1">
            {data.briefingAccepted ? (
              <CheckCircle2 size={24} className="text-[#3F7A5C]" />
            ) : (
              <div className="w-6 h-6 border-2 border-[#E8F0EB] rounded-full" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-[#1F4D3A] mb-2">Trek Briefing & Safety Protocol</h3>
            <p className="text-sm text-slate-700 mb-4">
              I will read and follow all safety protocols. I will listen to guide instructions and report any concerns immediately. I understand that non-compliance could result in trek termination.
            </p>
            <button
              onClick={() => handleToggle('briefingAccepted')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                data.briefingAccepted
                  ? 'bg-[#3F7A5C] text-white'
                  : 'bg-[#F3F8F4] text-[#1F4D3A] hover:bg-[#E8F0EB]'
              }`}
            >
              {data.briefingAccepted ? '✓ Accepted' : 'Accept'}
            </button>
          </div>
        </div>
      </div>

      {/* Summary */}
      {allConfirmed && (
        <div className="p-4 bg-[#F3F8F4] border border-[#3F7A5C] rounded-lg flex gap-3">
          <CheckCircle2 size={20} className="text-[#3F7A5C] flex-shrink-0" />
          <div>
            <p className="font-semibold text-[#1F4D3A] text-sm">You're all set!</p>
            <p className="text-xs text-slate-600">All safety confirmations complete. Let's proceed.</p>
          </div>
        </div>
      )}
    </div>
  );
}
