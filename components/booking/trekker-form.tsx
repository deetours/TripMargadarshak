'use client';

import { useBooking } from '@/lib/context/booking-context';

export function TrekkerForm() {
  const { step2, setStep2 } = useBooking();

  const inputs = [
    { key: 'firstName', placeholder: 'First Name', required: true },
    { key: 'lastName', placeholder: 'Last Name', required: true },
    { key: 'age', placeholder: 'Age', type: 'number', required: true },
    { key: 'phone', placeholder: 'Phone Number', required: true },
  ];

  const handleChange = (key: string, value: string) => {
    setStep2({ ...step2, [key]: value });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[#1F4D3A]">
          Tell us about yourself.
        </h2>
        <p className="text-slate-600">
          We only need essentials. Max 2 minutes.
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#1F4D3A] mb-2">
                First Name *
              </label>
              <input
                type="text"
                placeholder="Your first name"
                value={(step2 as any).firstName || ''}
                onChange={(e) => handleChange('firstName', e.target.value)}
                className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6A756]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F4D3A] mb-2">
                Last Name *
              </label>
              <input
                type="text"
                placeholder="Your last name"
                value={(step2 as any).lastName || ''}
                onChange={(e) => handleChange('lastName', e.target.value)}
                className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6A756]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F4D3A] mb-2">
                Age *
              </label>
              <input
                type="number"
                placeholder="18-80"
                value={(step2 as any).age || ''}
                onChange={(e) => handleChange('age', e.target.value)}
                className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6A756]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F4D3A] mb-2">
                Phone *
              </label>
              <input
                type="tel"
                placeholder="10-digit mobile"
                value={(step2 as any).phone || ''}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6A756]"
              />
            </div>
          </div>
        </div>

        {/* Fitness Level */}
        <div className="md:col-span-2 space-y-4">
          <label className="block text-sm font-semibold text-[#1F4D3A]">
            How would you describe your fitness level?
          </label>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: 'beginner', label: 'Beginner', emoji: '🚶' },
              { value: 'intermediate', label: 'Regular Exercise', emoji: '🏃' },
              { value: 'advanced', label: 'Very Fit', emoji: '💪' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => handleChange('fitnessLevel', option.value)}
                className={`p-4 border-2 rounded-lg transition-all ${
                  (step2 as any).fitnessLevel === option.value
                    ? 'border-[#E6A756] bg-[#F3F8F4]'
                    : 'border-[#E8F0EB] hover:border-[#E6A756]'
                }`}
              >
                <p className="text-3xl mb-2">{option.emoji}</p>
                <p className="font-semibold text-[#1F4D3A]">{option.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Trek Experience */}
        <div className="md:col-span-2 space-y-4">
          <label className="block text-sm font-semibold text-[#1F4D3A]">
            How many treks have you done before?
          </label>
          <textarea
            placeholder="E.g., Done 5 treks, mostly easy to moderate. Last trek was 3 years ago."
            value={(step2 as any).trekExperience || ''}
            onChange={(e) => handleChange('trekExperience', e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6A756]"
          />
        </div>

        {/* Medical Conditions */}
        <div className="md:col-span-2 space-y-4">
          <label className="block text-sm font-semibold text-[#1F4D3A]">
            Any medical conditions we should know?
          </label>
          <p className="text-xs text-slate-600 mb-2">
            This helps us prepare proper support. Won't disqualify you.
          </p>
          <textarea
            placeholder="E.g., Occasional knee pain, allergic to shellfish, takes asthma medication..."
            value={(step2 as any).medicalConditions || ''}
            onChange={(e) => handleChange('medicalConditions', e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6A756]"
          />
        </div>

        {/* Allergies */}
        <div className="md:col-span-2 space-y-4">
          <label className="block text-sm font-semibold text-[#1F4D3A]">
            Food allergies?
          </label>
          <input
            type="text"
            placeholder="Dairy, nuts, gluten, eggs, etc."
            value={(step2 as any).allergies || ''}
            onChange={(e) => handleChange('allergies', e.target.value)}
            className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6A756]"
          />
        </div>
      </div>

      {/* Trust message */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          ℹ️ All information is confidential and used only to ensure your safety and comfort.
        </p>
      </div>
    </div>
  );
}
