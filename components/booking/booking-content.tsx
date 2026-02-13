'use client';

import { Trek, Batch } from '@/lib/types';
import { useBooking } from '@/lib/context/booking-context';
import { StepBatchSelect } from './step-batch-select';
import { StepFitness } from './step-fitness';
import { StepGearAddons } from './step-gear-addons';
import { StepEmergencyContact } from './step-emergency-contact';
import { StepPayment } from './step-payment';

interface BookingContentProps {
  trek: Trek;
  batch: Batch;
}

export function BookingContent({ trek, batch }: BookingContentProps) {
  const { step } = useBooking();

  return (
    <div className="bg-white p-8 rounded-lg border border-trek-dust">
      {step === 1 && <StepBatchSelect trek={trek} />}
      {step === 2 && <StepFitness />}
      {step === 3 && <StepGearAddons />}
      {step === 4 && <StepEmergencyContact />}
      {step === 5 && <StepPayment trek={trek} batch={batch} />}
    </div>
  );
}
