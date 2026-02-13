'use client';

import { useState } from 'react';
import { SAMPLE_TREKS } from '@/lib/constants';
import { BATCHES } from '@/lib/data/batches';
import { StepSelectDeparture } from '@/components/booking/step-select-departure';
import { StepTrekkerDetails, TrekkerDetailsFormData } from '@/components/booking/step-trekker-details';
import { StepSafetyConfirmation, SafetyConfirmationData } from '@/components/booking/step-safety-confirmation';
import { StepAddOns, AVAILABLE_ADDONS } from '@/components/booking/step-addons';
import { StepPaymentConfirmation } from '@/components/booking/step-payment-confirmation';
import { CheckCircle2 } from 'lucide-react';

const STEPS = [
  { id: 1, label: 'Select Date', title: 'When will you climb?' },
  { id: 2, label: 'Your Details', title: 'Who are you?' },
  { id: 3, label: 'Safety', title: 'Mountains reward preparation' },
  { id: 4, label: 'Add-ons', title: 'Customize your trek' },
  { id: 5, label: 'Payment', title: 'Complete your booking' }
];

interface BookingPageProps {
  params: {
    trekId: string;
  };
}

export default function BookingPage({ params }: BookingPageProps) {
  const trek = SAMPLE_TREKS.find((t) => t.id === params.trekId);
  const trekBatches = BATCHES.filter((b) => b.trekId === params.trekId);

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBatch, setSelectedBatch] = useState<any>(trekBatches[0] || null);
  const [trekkerDetails, setTrekkerDetails] = useState<Partial<TrekkerDetailsFormData>>({});
  const [safetyData, setSafetyData] = useState<Partial<SafetyConfirmationData>>({});
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  if (!trek) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-[#1F4D3A]">Trek not found</h1>
      </div>
    );
  }

  const addOnTotal = AVAILABLE_ADDONS.filter((a) =>
    selectedAddOns.includes(a.id)
  ).reduce((sum, a) => sum + a.price, 0);

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1:
        return !!selectedBatch;
      case 2:
        return !!(trekkerDetails.firstName && trekkerDetails.lastName && trekkerDetails.email && trekkerDetails.phone);
      case 3:
        return !!(safetyData.fitnessConfirmed && safetyData.medicalConfirmed && safetyData.briefingAccepted);
      case 4:
        return true; // Add-ons are optional
      case 5:
        return false; // Handled by complete booking button
      default:
        return false;
    }
  };

  const handleCompleteBooking = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setBookingComplete(true);
  };

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F3F8F4] to-white flex items-center justify-center p-6">
        <div className="max-w-md text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-[#3F7A5C] flex items-center justify-center">
              <CheckCircle2 size={48} className="text-white" />
            </div>
          </div>

          <h1 className="text-4xl font-playfair font-bold text-[#1F4D3A] mb-4">
            You're Booked!
          </h1>

          <p className="text-slate-700 mb-8">
            Your spot on {trek.name} is reserved. Check your email for the trek briefing guide and next steps.
          </p>

          <div className="bg-[#F3F8F4] p-6 rounded-lg mb-8">
            <p className="text-sm text-slate-600 mb-2">Confirmation #</p>
            <p className="text-2xl font-bold text-[#1F4D3A] font-mono">{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
          </div>

          <div className="space-y-3 text-sm mb-8">
            <p className="text-slate-700">
              Your guide will contact you within 24 hours to introduce themselves and answer any questions.
            </p>
            <p className="text-slate-700">
              You'll be added to our community WhatsApp group to connect with other trekkers.
            </p>
          </div>

          <a
            href="/community"
            className="inline-block px-6 py-3 bg-[#1F4D3A] text-white rounded-lg font-bold hover:bg-[#16382B] transition-colors"
          >
            Join Our Community
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div className="sticky top-0 z-40 bg-white border-b border-[#E8F0EB]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
          <div className="flex items-center justify-between">
            {STEPS.map((step) => (
              <div key={step.id} className="flex-1">
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      currentStep >= step.id
                        ? 'bg-[#1F4D3A] text-white'
                        : 'bg-[#E8F0EB] text-slate-600'
                    }`}
                  >
                    {step.id}
                  </div>
                  <p className="text-xs font-medium text-slate-600 ml-2 hidden sm:block">
                    {step.label}
                  </p>
                </div>
                {step.id < STEPS.length && (
                  <div
                    className={`h-1 mt-3 transition-colors ${
                      currentStep > step.id ? 'bg-[#1F4D3A]' : 'bg-[#E8F0EB]'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-4xl font-playfair font-bold text-[#1F4D3A] mb-2">
                {STEPS[currentStep - 1].title}
              </h1>
              <p className="text-slate-600">Step {currentStep} of {STEPS.length}</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#E8F0EB]">
              {currentStep === 1 && (
                <StepSelectDeparture
                  batches={trekBatches}
                  selectedBatch={selectedBatch}
                  onSelect={setSelectedBatch}
                />
              )}

              {currentStep === 2 && (
                <StepTrekkerDetails
                  data={trekkerDetails}
                  onUpdate={setTrekkerDetails}
                />
              )}

              {currentStep === 3 && (
                <StepSafetyConfirmation
                  data={safetyData}
                  onUpdate={setSafetyData}
                />
              )}

              {currentStep === 4 && (
                <StepAddOns
                  selectedAddOns={selectedAddOns}
                  onToggleAddOn={(id) => {
                    setSelectedAddOns((prev) =>
                      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
                    );
                  }}
                />
              )}

              {currentStep === 5 && selectedBatch && (
                <StepPaymentConfirmation
                  trek={trek}
                  batch={selectedBatch}
                  trekkerDetails={trekkerDetails}
                  safetyData={safetyData}
                  selectedAddOns={selectedAddOns}
                  addOnTotal={addOnTotal}
                  onCompleteBooking={handleCompleteBooking}
                  isProcessing={isProcessing}
                />
              )}
            </div>

            {/* Navigation */}
            <div className="flex gap-4 mt-8">
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-3 border-2 border-[#1F4D3A] text-[#1F4D3A] rounded-lg font-bold hover:bg-[#F3F8F4] transition-colors"
                >
                  Back
                </button>
              )}

              {currentStep < 5 && (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={!canProceedToNextStep()}
                  className="flex-1 px-6 py-3 bg-[#1F4D3A] text-white rounded-lg font-bold hover:bg-[#16382B] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Continue
                </button>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-[#F3F8F4] p-6 rounded-lg border border-[#E8F0EB]">
              <h3 className="font-bold text-[#1F4D3A] mb-4">Order Summary</h3>

              <div className="space-y-3 pb-4 border-b border-[#E8F0EB]">
                <div>
                  <p className="text-sm text-slate-600">{trek.name}</p>
                  <p className="font-bold text-[#1F4D3A]">₹{selectedBatch?.pricePerPerson.toLocaleString()}</p>
                </div>

                {selectedBatch && (
                  <div className="text-xs text-slate-600">
                    <p>{new Date(selectedBatch.departDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                )}

                {addOnTotal > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Add-ons</span>
                    <span className="font-bold text-[#1F4D3A]">₹{addOnTotal.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-[#1F4D3A]">Total</span>
                <span className="text-2xl font-bold text-[#E6A756]">
                  ₹{((selectedBatch?.pricePerPerson || 0) + addOnTotal).toLocaleString()}
                </span>
              </div>

              <p className="text-xs text-slate-600 mt-4 pt-4 border-t border-[#E8F0EB]">
                Secure payment with Razorpay. Encrypted SSL connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
