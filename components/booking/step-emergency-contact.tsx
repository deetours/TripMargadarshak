'use client';

import { useBooking } from '@/lib/context/booking-context';

export function StepEmergencyContact() {
  const { step4, setStep4, setStep } = useBooking();

  const canProceed =
    step4.firstName &&
    step4.lastName &&
    step4.email &&
    step4.phone &&
    step4.emergencyContactName &&
    step4.emergencyContactPhone &&
    step4.address &&
    step4.city &&
    step4.state &&
    step4.zipCode;

  const handleChange = (field: keyof any, value: string) => {
    setStep4({
      ...step4,
      [field]: value,
    });
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-trek-dust focus:border-trek-forest outline-none focus:ring-2 focus:ring-trek-forest/10';

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-trek-forest">Contact Information</h2>
        <p className="text-slate-600">We need your details and an emergency contact.</p>
      </div>

      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="font-bold text-trek-forest">Your Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            value={step4.firstName || ''}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={step4.lastName || ''}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className={inputClass}
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          value={step4.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          className={inputClass}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={step4.phone || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Address */}
      <div className="space-y-4">
        <h3 className="font-bold text-trek-forest">Address</h3>
        <textarea
          placeholder="Street Address"
          value={step4.address || ''}
          onChange={(e) => handleChange('address', e.target.value)}
          className={inputClass}
          rows={2}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="City"
            value={step4.city || ''}
            onChange={(e) => handleChange('city', e.target.value)}
            className={inputClass}
          />
          <input
            type="text"
            placeholder="State"
            value={step4.state || ''}
            onChange={(e) => handleChange('state', e.target.value)}
            className={inputClass}
          />
          <input
            type="text"
            placeholder="ZIP Code"
            value={step4.zipCode || ''}
            onChange={(e) => handleChange('zipCode', e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="space-y-4 p-4 rounded-lg bg-red-50 border border-red-200">
        <h3 className="font-bold text-red-900">Emergency Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Contact Name"
            value={step4.emergencyContactName || ''}
            onChange={(e) => handleChange('emergencyContactName', e.target.value)}
            className={inputClass}
          />
          <input
            type="tel"
            placeholder="Contact Phone"
            value={step4.emergencyContactPhone || ''}
            onChange={(e) => handleChange('emergencyContactPhone', e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        <button
          onClick={() => setStep(3)}
          className="flex-1 px-6 py-3 rounded-lg border-2 border-trek-forest text-trek-forest font-bold hover:bg-trek-dust transition-colors"
        >
          Back
        </button>
        <button
          onClick={() => setStep(5)}
          disabled={!canProceed}
          className={`flex-1 px-6 py-3 rounded-lg font-bold text-white transition-colors ${
            canProceed
              ? 'bg-trek-forest hover:bg-trek-forest/90'
              : 'bg-slate-300 cursor-not-allowed'
          }`}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
