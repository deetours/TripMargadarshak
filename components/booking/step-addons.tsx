'use client';

import { CheckCircle2 } from 'lucide-react';

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export const AVAILABLE_ADDONS: AddOn[] = [
  {
    id: 'gear-sleeping-bag',
    name: 'Sleeping Bag Rental',
    description: '4-season sleeping bag (perfect for high altitude)',
    price: 500,
    category: 'Gear'
  },
  {
    id: 'gear-trekking-poles',
    name: 'Trekking Poles',
    description: 'Reduces knee strain on descent (highly recommended)',
    price: 300,
    category: 'Gear'
  },
  {
    id: 'gear-rain-jacket',
    name: 'Rain Jacket Rental',
    description: 'Waterproof jacket for monsoon/unpredictable weather',
    price: 400,
    category: 'Gear'
  },
  {
    id: 'service-porter',
    name: 'Personal Porter',
    description: 'Someone carries your main bag (enjoy hands-free trekking)',
    price: 3000,
    category: 'Services'
  },
  {
    id: 'service-pickup',
    name: 'Hotel Pickup',
    description: 'We pick you up from your hotel and drop you back',
    price: 1500,
    category: 'Services'
  },
  {
    id: 'service-meditation',
    name: 'Meditation & Mindfulness',
    description: 'Expert-led sessions at camp (for deeper transformation)',
    price: 2000,
    category: 'Experiences'
  },
  {
    id: 'insurance-adventure',
    name: 'Adventure Insurance',
    description: 'Covers accidents, evacuation, and medical emergencies',
    price: 1200,
    category: 'Protection'
  },
];

interface StepAddOnsProps {
  selectedAddOns: string[];
  onToggleAddOn: (addOnId: string) => void;
}

export function StepAddOns({ selectedAddOns, onToggleAddOn }: StepAddOnsProps) {
  const categories = Array.from(new Set(AVAILABLE_ADDONS.map((a) => a.category)));
  const totalAddOnPrice = AVAILABLE_ADDONS.filter((a) =>
    selectedAddOns.includes(a.id)
  ).reduce((sum, a) => sum + a.price, 0);

  return (
    <div className="space-y-8">
      <p className="text-sm text-slate-600">
        Customize your experience. Make your trek even more comfortable and memorable.
      </p>

      {categories.map((category) => (
        <div key={category}>
          <h3 className="text-lg font-bold text-[#1F4D3A] mb-4">{category}</h3>
          <div className="space-y-3">
            {AVAILABLE_ADDONS.filter((a) => a.category === category).map((addon) => (
              <div
                key={addon.id}
                onClick={() => onToggleAddOn(addon.id)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedAddOns.includes(addon.id)
                    ? 'border-[#1F4D3A] bg-[#F3F8F4]'
                    : 'border-[#E8F0EB] bg-white hover:border-[#3F7A5C]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {selectedAddOns.includes(addon.id) && (
                        <CheckCircle2 size={20} className="text-[#3F7A5C] flex-shrink-0" />
                      )}
                      <h4 className="font-semibold text-[#1F4D3A]">{addon.name}</h4>
                    </div>
                    <p className="text-sm text-slate-600">{addon.description}</p>
                  </div>
                  <div className="text-right ml-4 flex-shrink-0">
                    <p className="font-bold text-[#1F4D3A]">₹{addon.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Summary */}
      {totalAddOnPrice > 0 && (
        <div className="p-4 bg-[#F3F8F4] rounded-lg border border-[#3F7A5C]">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-[#1F4D3A]">Add-ons Total:</p>
            <p className="text-xl font-bold text-[#1F4D3A]">₹{totalAddOnPrice.toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}
