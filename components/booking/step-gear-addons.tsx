'use client';

import { useBooking } from '@/lib/context/booking-context';
import { Package } from 'lucide-react';

export function StepGearAddons() {
  const { step3, setStep3, setStep } = useBooking();

  const gearOptions = [
    { key: 'tent', label: 'Tent Rental', price: '₹500/night' },
    { key: 'sleepingBag', label: 'Sleeping Bag', price: '₹300/night' },
    { key: 'trekPole', label: 'Trek Poles', price: '₹200/trek' },
    { key: 'gaiters', label: 'Gaiters', price: '₹100/trek' },
    { key: 'dayBackpack', label: '40L Day Backpack', price: '₹400/trek' },
    { key: 'rainJacket', label: 'Waterproof Rain Jacket', price: '₹600/trek' },
    { key: 'insectRepellent', label: 'Insect Repellent Kit', price: '₹150/trek' },
  ];

  const toggleGear = (key: keyof any) => {
    setStep3({
      ...step3,
      [key]: !step3[key as any],
    });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-trek-forest">Gear & Addons</h2>
        <p className="text-slate-600">
          Rent essential gear if you don&apos;t have your own. We provide quality equipment.
        </p>
      </div>

      {/* Gear Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gearOptions.map((gear) => (
          <button
            key={gear.key}
            onClick={() => toggleGear(gear.key)}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              step3[gear.key as any]
                ? 'border-trek-forest bg-trek-forest/10'
                : 'border-trek-dust hover:border-trek-forest/30'
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  step3[gear.key as any]
                    ? 'bg-trek-forest border-trek-forest'
                    : 'border-trek-dust'
                }`}
              >
                {step3[gear.key as any] && <span className="text-white text-sm font-bold">✓</span>}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-trek-forest">{gear.label}</h3>
                <p className="text-sm text-slate-600">{gear.price}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Info Box */}
      <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 space-y-2">
        <div className="flex items-start gap-3">
          <Package size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-900">
            All gear is checked and sanitized before each trek. Our rental prices are the best in the industry.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        <button
          onClick={() => setStep(2)}
          className="flex-1 px-6 py-3 rounded-lg border-2 border-trek-forest text-trek-forest font-bold hover:bg-trek-dust transition-colors"
        >
          Back
        </button>
        <button
          onClick={() => setStep(4)}
          className="flex-1 px-6 py-3 rounded-lg bg-trek-forest text-white font-bold hover:bg-trek-forest/90 transition-colors"
        >
          Continue to Contact Info
        </button>
      </div>
    </div>
  );
}
