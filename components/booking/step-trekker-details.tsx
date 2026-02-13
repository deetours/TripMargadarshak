'use client';

import { useState } from 'react';
import { AlertCircle } from 'lucide-react';

export interface TrekkerDetailsFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  hasAltitudeExperience: boolean;
  medicalConditions: string;
}

interface StepTrekkerDetailsProps {
  data: Partial<TrekkerDetailsFormData>;
  onUpdate: (data: Partial<TrekkerDetailsFormData>) => void;
}

export function StepTrekkerDetails({ data, onUpdate }: StepTrekkerDetailsProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof TrekkerDetailsFormData, value: any) => {
    onUpdate({ ...data, [field]: value });
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-600">
        Just the essentials. We'll need these to prepare your trek properly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#1F4D3A] mb-2">
            First Name *
          </label>
          <input
            type="text"
            value={data.firstName || ''}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F7A5C]"
            placeholder="Prateek"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1F4D3A] mb-2">
            Last Name *
          </label>
          <input
            type="text"
            value={data.lastName || ''}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F7A5C]"
            placeholder="Sharma"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#1F4D3A] mb-2">
            Email *
          </label>
          <input
            type="email"
            value={data.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F7A5C]"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1F4D3A] mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={data.phone || ''}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F7A5C]"
            placeholder="+91 9876543210"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#1F4D3A] mb-2">
            Age *
          </label>
          <input
            type="number"
            value={data.age || ''}
            onChange={(e) => handleChange('age', e.target.value)}
            className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F7A5C]"
            placeholder="28"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1F4D3A] mb-2">
            Trekking Experience *
          </label>
          <select
            value={data.experienceLevel || 'beginner'}
            onChange={(e) => handleChange('experienceLevel', e.target.value as any)}
            className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F7A5C]"
          >
            <option value="beginner">First time trekker</option>
            <option value="intermediate">Done 2-3 treks</option>
            <option value="advanced">Experienced trekker</option>
          </select>
        </div>
      </div>

      <div>
        <label className="flex items-center gap-3 p-4 bg-[#F3F8F4] rounded-lg cursor-pointer">
          <input
            type="checkbox"
            checked={data.hasAltitudeExperience || false}
            onChange={(e) => handleChange('hasAltitudeExperience', e.target.checked)}
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-[#1F4D3A]">
            I've trekked above 3,500m before
          </span>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1F4D3A] mb-2">
          Medical Conditions or Concerns (Optional)
        </label>
        <textarea
          value={data.medicalConditions || ''}
          onChange={(e) => handleChange('medicalConditions', e.target.value)}
          className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F7A5C]"
          placeholder="Any allergies, injuries, or medical conditions we should know about?"
          rows={3}
        />
        <p className="text-xs text-slate-600 mt-2">
          We need this to prepare properly and keep you safe
        </p>
      </div>
    </div>
  );
}
