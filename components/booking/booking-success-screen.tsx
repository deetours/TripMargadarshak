'use client';

import { Trek } from '@/lib/types';
import Link from 'next/link';
import { CheckCircle, Download, MessageCircle, Users, Calendar } from 'lucide-react';

interface BookingSuccessScreenProps {
  trek: Trek;
  bookingId: string;
  trekkerName: string;
  departureDate: string;
}

export function BookingSuccessScreen({
  trek,
  bookingId,
  trekkerName,
  departureDate,
}: BookingSuccessScreenProps) {
  const daysUntilDeparture = Math.ceil(
    (new Date(departureDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  const nextSteps = [
    {
      icon: Download,
      title: 'Download Prep Guide',
      description: 'Complete guide with training plan, packing list, and fitness tips',
      action: 'Download PDF',
      link: '#',
    },
    {
      icon: MessageCircle,
      title: 'Join WhatsApp Group',
      description: 'Connect with fellow trekkers, ask questions, meet your guide',
      action: 'Get Group Link',
      link: '#',
    },
    {
      icon: Users,
      title: 'Meet Your Guide',
      description: 'Personal introduction call with your lead guide',
      action: 'Schedule Call',
      link: '#',
    },
    {
      icon: Calendar,
      title: 'Add to Calendar',
      description: 'Save trek dates and pre-trek milestones',
      action: 'Add ICS',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F8F4] to-white py-12">
      <div className="mx-auto max-w-2xl px-6 sm:px-8 space-y-12">
        {/* Success Message */}
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#E6A756] rounded-full blur-2xl opacity-30 animate-pulse" />
              <CheckCircle size={80} className="text-[#1F4D3A] relative" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-[#1F4D3A]">
              You're officially going to  <br /> the mountains.
            </h1>
            <p className="text-xl text-slate-700">
              {trekkerName}, your booking is confirmed!
            </p>
          </div>

          {/* Booking Details */}
          <div className="bg-white border-2 border-[#E6A756] rounded-lg p-8 space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-600 font-semibold">TREK</p>
                <p className="text-lg font-bold text-[#1F4D3A]">{trek.name}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 font-semibold">CONFIRMATION</p>
                <p className="text-lg font-bold text-[#E6A756]">{bookingId}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 font-semibold">DEPARTURE</p>
                <p className="text-lg font-bold text-[#1F4D3A]">
                  {new Date(departureDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-600 font-semibold">TIME TO TREK</p>
                <p className="text-lg font-bold text-[#E6A756]">{daysUntilDeparture} days</p>
              </div>
            </div>
          </div>

          {/* Confirmation Email */}
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-900">
              ✓ Confirmation email sent to your inbox. Check spam if not visible.
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-playfair font-bold text-[#1F4D3A]">
              Here's what happens next
            </h2>
            <p className="text-slate-600">
              Complete these steps to prepare for your adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nextSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E8F0EB] rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-[#E6A756]"
                >
                  <div className="flex gap-4 mb-4">
                    <div className="p-3 bg-[#F3F8F4] rounded-lg">
                      <Icon size={24} className="text-[#1F4D3A]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#1F4D3A]">{step.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <button className="w-full py-2 text-[#E6A756] font-semibold hover:text-[#D4942F] transition-colors text-sm">
                    {step.action} →
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-[#F3F8F4] rounded-lg p-8 space-y-6">
          <h3 className="text-xl font-bold text-[#1F4D3A] text-center">
            Your Trek Timeline
          </h3>
          <div className="space-y-4">
            {[
              { days: `${Math.max(daysUntilDeparture - 29, 0)}-${daysUntilDeparture - 21} days away`, label: 'Start Training', desc: 'Follow prep guide exercises' },
              { days: `${Math.max(daysUntilDeparture - 13, 0)}-${daysUntilDeparture - 7} days away`, label: 'Group Meetup', desc: 'Join WhatsApp group chat' },
              { days: `${Math.max(daysUntilDeparture - 6, 0)}-${daysUntilDeparture} days away`, label: 'Final Prep', desc: 'Pack gear, confirm details' },
              { days: 'Day 1', label: 'Trek Begins', desc: 'Meet your guide, start adventure' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-32 py-2">
                  <p className="text-xs text-slate-600 font-semibold uppercase">{item.days}</p>
                </div>
                <div className="flex-1 border-l-2 border-[#E6A756] pl-4">
                  <p className="font-semibold text-[#1F4D3A]">{item.label}</p>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="bg-white border-2 border-[#E6A756] rounded-lg p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-[#1F4D3A]">Need Help?</h3>
          <p className="text-slate-700">Questions before the trek? Our team is here.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-[#1F4D3A] text-white rounded-lg font-semibold hover:bg-[#16382B] transition-colors">
              Contact Support
            </button>
            <button className="px-6 py-3 border-2 border-[#1F4D3A] text-[#1F4D3A] rounded-lg font-semibold hover:bg-[#F3F8F4] transition-colors">
              FAQ & Help
            </button>
          </div>
        </div>

        {/* Final message */}
        <div className="text-center space-y-4 py-8">
          <p className="text-2xl font-playfair text-[#1F4D3A]">
            See you on the mountains.
          </p>
          <Link
            href="/community"
            className="inline-block text-[#E6A756] font-semibold hover:text-[#D4942F] transition-colors"
          >
            See stories from other trekkers →
          </Link>
        </div>
      </div>
    </div>
  );
}
