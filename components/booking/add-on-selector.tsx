'use client';

import { useBooking } from '@/lib/context/booking-context';
import { Plus, Minus } from 'lucide-react';

interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  popular?: boolean;
}

export function AddOnSelector() {
  const { step3, setStep3 } = useBooking();

  const addOns: AddOn[] = [
    {
      id: 'gear_rental',
      name: 'Complete Gear Rental',
      description: 'Tent, sleeping bag, backpack, poles, gaiters. Everything you need.',
      price: 3500,
      icon: '🎒',
    },
    {
      id: 'travel_pickup',
      name: 'Airport/Station Pickup',
      description: 'We pick you up and drop you off. No navigation stress.',
      price: 1500,
      icon: '🚗',
      popular: true,
    },
    {
      id: 'porter_addon',
      name: 'Porter Service',
      description: 'Someone carries your heavy bags. You walk light.',
      price: 2500,
      icon: '🔄',
      popular: true,
    },
    {
      id: 'vegetarian',
      name: 'Vegetarian/Vegan Meals',
      description: 'Special meal plan throughout the trek.',
      price: 1000,
      icon: '🥗',
    },
    {
      id: 'expert_coaching',
      name: 'Pre-Trek Coaching',
      description: '4-week personalized training plan via video calls.',
      price: 2000,
      icon: '📱',
    },
    {
      id: 'photography',
      name: 'Professional Photography',
      description: 'Guide takes photos. Get 200+ edited photos post-trek.',
      price: 3000,
      icon: '📸',
    },
  ];

  const getQuantity = (id: string) => {
    const quantity = (step3 as any)?.[`${id}_qty`] || 0;
    return quantity;
  };

  const toggleAddOn = (id: string) => {
    const currentQty = getQuantity(id);
    setStep3({
      ...step3,
      [`${id}_qty`]: currentQty === 0 ? 1 : 0,
    });
  };

  const updateQuantity = (id: string, change: number) => {
    const currentQty = getQuantity(id);
    const newQty = Math.max(0, currentQty + change);
    setStep3({
      ...step3,
      [`${id}_qty`]: newQty,
    });
  };

  const totalAddOnPrice = addOns.reduce((sum, addon) => {
    return sum + addon.price * getQuantity(addon.id);
  }, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[#1F4D3A]">
          Make your trek more comfortable.
        </h2>
        <p className="text-slate-600">
          Optional add-ons to enhance your experience. All are optional.
        </p>
      </div>

      {/* Add-ons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addOns.map((addon) => {
          const quantity = getQuantity(addon.id);
          const isSelected = quantity > 0;

          return (
            <div
              key={addon.id}
              className={`relative border-2 rounded-lg p-6 transition-all ${
                isSelected
                  ? 'border-[#E6A756] bg-[#F3F8F4]'
                  : 'border-[#E8F0EB] hover:border-[#E6A756]'
              }`}
            >
              {addon.popular && (
                <div className="absolute top-3 right-3 px-2 py-1 bg-[#E6A756] text-[#1F4D3A] text-xs font-bold rounded-full">
                  POPULAR
                </div>
              )}

              {/* Content */}
              <div className="flex gap-4 mb-4">
                <div className="text-3xl">{addon.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#1F4D3A] text-lg">
                    {addon.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {addon.description}
                  </p>
                  <p className="text-lg font-bold text-[#E6A756] mt-2">
                    ₹{addon.price.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Toggle/Counter */}
              {isSelected ? (
                <div className="flex items-center gap-2 bg-white rounded-lg overflow-hidden border border-[#E8F0EB]">
                  <button
                    onClick={() => updateQuantity(addon.id, -1)}
                    className="p-2 hover:bg-[#F3F8F4] transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="flex-1 text-center font-semibold text-[#1F4D3A]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(addon.id, 1)}
                    className="p-2 hover:bg-[#F3F8F4] transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => toggleAddOn(addon.id)}
                  className="w-full py-2 px-4 border-2 border-[#E6A756] text-[#E6A756] rounded-lg font-semibold hover:bg-[#E6A756]/10 transition-colors"
                >
                  Add
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Price Summary */}
      {totalAddOnPrice > 0 && (
        <div className="p-6 bg-[#F3F8F4] rounded-lg border border-[#E8F0EB]">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-[#1F4D3A]">Add-ons Subtotal</p>
            <p className="text-2xl font-bold text-[#E6A756]">
              ₹{totalAddOnPrice.toLocaleString()}
            </p>
          </div>
        </div>
      )}

      {/* Note */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          ℹ️ All add-ons are optional and can be modified until 3 days before trek.
        </p>
      </div>
    </div>
  );
}
