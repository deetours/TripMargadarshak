'use client';

import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { useState } from 'react';

interface StickyMobileCTAProps {
  trekName: string;
  ctaText?: string;
  showOnMobileOnly?: boolean;
}

export function StickyMobileCTA({
  trekName,
  ctaText = 'Questions? Chat with us',
  showOnMobileOnly = true,
}: StickyMobileCTAProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const quickActions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      action: 'whatsapp',
      color: 'bg-green-500',
    },
    {
      icon: Phone,
      label: 'Call',
      action: 'call',
      color: 'bg-blue-500',
    },
    {
      icon: Calendar,
      label: 'Check Dates',
      action: 'dates',
      color: 'bg-[#E6A756]',
    },
  ];

  const handleAction = (action: string) => {
    switch (action) {
      case 'whatsapp':
        window.open('https://wa.me/917722923232?text=Hi, I want to know more about ' + trekName);
        break;
      case 'call':
        window.location.href = 'tel:+917722923232';
        break;
      case 'dates':
        window.location.href = '#booking';
        break;
    }
  };

  if (showOnMobileOnly) {
    return (
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4">
        {/* Minimized CTA */}
        {isMinimized ? (
          <button
            onClick={() => setIsMinimized(false)}
            className="w-full py-3 bg-[#E6A756] text-[#1F4D3A] rounded-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-between px-4"
          >
            <span>{ctaText}</span>
            <span>↑</span>
          </button>
        ) : (
          <div className="space-y-3 bg-white rounded-xl shadow-2xl p-4 border border-[#E8F0EB]">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-[#1F4D3A] text-sm">
                Need Help with {trekName}?
              </h4>
              <button
                onClick={() => setIsMinimized(true)}
                className="text-slate-400 hover:text-slate-600"
              >
                ↓
              </button>
            </div>

            {/* Quick message */}
            <p className="text-xs text-slate-600">
              Chat with our trek expert. Response in &lt;1 hour.
            </p>

            {/* Action buttons */}
            <div className="flex gap-2">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.action}
                    onClick={() => handleAction(action.action)}
                    className={`flex-1 py-3 ${action.color} text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all`}
                  >
                    <Icon size={18} />
                    <span className="text-xs">{action.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {/* Floating action button */}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-[#E6A756] text-[#1F4D3A] rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center font-bold text-xl"
        >
          💬
        </button>
      ) : (
        <div className="absolute bottom-0 right-0 bg-white rounded-xl shadow-2xl p-6 w-80 border border-[#E8F0EB] space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-[#1F4D3A]">Trek Expert Support</h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          </div>

          {/* Message */}
          <p className="text-sm text-slate-700">
            Have questions about {trekName}? Our trek experts are here to help.
          </p>

          {/* Action buttons */}
          <div className="space-y-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.action}
                  onClick={() => handleAction(action.action)}
                  className={`w-full py-2 px-4 ${action.color} text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all`}
                >
                  <Icon size={18} />
                  <span>{action.label}</span>
                </button>
              );
            })}
          </div>

          {/* Hours */}
          <p className="text-xs text-slate-600 text-center pt-2 border-t border-[#E8F0EB]">
            Available 9 AM - 9 PM IST
          </p>
        </div>
      )}
    </div>
  );
}
