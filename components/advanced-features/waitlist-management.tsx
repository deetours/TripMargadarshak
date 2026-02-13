'use client';

import { Bell, Heart, Gift, Trophy } from 'lucide-react';
import { useState } from 'react';

interface WaitlistProps {
  trekId: string;
  trekName: string;
  nextBatchDate: string;
}

export function WaitlistManagement({
  trekId,
  trekName,
  nextBatchDate,
}: WaitlistProps) {
  const [isOnWaitlist, setIsOnWaitlist] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const waitlistBenefits = [
    {
      icon: Bell,
      title: 'Instant Notification',
      description: 'Get notified the moment a seat opens up',
    },
    {
      icon: Gift,
      title: 'Early Bird Pricing',
      description: '₹2,000 discount when your slot opens',
    },
    {
      icon: Heart,
      title: 'Priority Confirmation',
      description: 'Seat reserved for 24 hours when notified',
    },
    {
      icon: Trophy,
      title: 'VIP Perks',
      description: 'Free upgrade to premium accommodation',
    },
  ];

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist signup
    setIsOnWaitlist(true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F3F8F4] to-white">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-red-50 rounded-full">
            <p className="text-sm font-bold text-red-600">This batch is full</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-[#1F4D3A]">
            Don't miss {trekName}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join the waitlist and get priority access when seats open up.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {waitlistBenefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white border border-[#E8F0EB] rounded-lg hover:shadow-md transition-all"
              >
                <Icon size={28} className="text-[#E6A756] mb-3" />
                <h3 className="font-bold text-[#1F4D3A] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Waitlist Form or Success State */}
        {!isOnWaitlist ? (
          <form
            onSubmit={handleJoinWaitlist}
            className="bg-white border-2 border-[#E6A756] rounded-lg p-8 space-y-6"
          >
            <h3 className="text-xl font-bold text-[#1F4D3A]">
              Join the Waitlist
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#1F4D3A] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6A756]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1F4D3A] mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile"
                  required
                  className="w-full px-4 py-3 border border-[#E8F0EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6A756]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8F0EB]">
              <label className="flex items-center gap-3">
                <input type="checkbox" required className="w-4 h-4" />
                <span className="text-sm text-slate-700">
                  Yes, notify me when a seat opens up and send updates
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#1F4D3A] text-white rounded-lg font-bold hover:bg-[#16382B] transition-colors"
            >
              Join Waitlist
            </button>

            <p className="text-xs text-slate-600 text-center">
              No spam. We only email when something matters.
            </p>
          </form>
        ) : (
          <div className="bg-green-50 border-2 border-green-600 rounded-lg p-8 text-center space-y-4">
            <div className="text-5xl">✓</div>
            <h3 className="text-2xl font-bold text-green-900">
              You're on the waitlist!
            </h3>
            <p className="text-green-800">
              We'll notify you immediately when a seat opens up. Next batch opening soon!
            </p>
            <p className="text-sm text-green-700">
              Confirmation email sent to {email}
            </p>
            <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Explore Other Treks
            </button>
          </div>
        )}

        {/* Next batch info */}
        <div className="mt-12 p-6 bg-[#F3F8F4] rounded-lg border border-[#E8F0EB] text-center">
          <p className="text-sm text-slate-600 mb-2">Last available batch</p>
          <p className="text-2xl font-bold text-[#1F4D3A]">
            {new Date(nextBatchDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
          <p className="text-sm text-slate-600 mt-2">Check back soon</p>
        </div>
      </div>
    </section>
  );
}
