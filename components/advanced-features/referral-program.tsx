'use client';

import { Gift, Users, TrendingUp, Copy, Share2 } from 'lucide-react';
import { useState } from 'react';

interface ReferralProgramProps {
  userReferralCode?: string;
  userReferrals?: number;
  userEarnings?: number;
}

export function ReferralProgram({
  userReferralCode = 'TREK2025',
  userReferrals = 3,
  userEarnings = 6000,
}: ReferralProgramProps) {
  const [copied, setCopied] = useState(false);

  const referralTiers = [
    {
      referrals: '1-3',
      perReferral: '₹1,000',
      totalBonus: '₹1,000',
      badge: '🌱',
      level: 'Seed',
    },
    {
      referrals: '4-10',
      perReferral: '₹1,500',
      totalBonus: '₹5,000',
      badge: '🌿',
      level: 'Sapling',
    },
    {
      referrals: '11-25',
      perReferral: '₹2,000',
      totalBonus: '₹15,000',
      badge: '🌳',
      level: 'Forest',
    },
    {
      referrals: '25+',
      perReferral: '₹2,500',
      totalBonus: '₹30,000+',
      badge: '🏔️',
      level: 'Mountain',
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userReferralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#E6A756] font-medium tracking-widest text-sm">
            REFERRAL REWARDS
          </p>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-[#1F4D3A]">
            Share the mountains. Earn rewards.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every friend who joins becomes a mountain-lover. You both win.
          </p>
        </div>

        {/* User stats and share section */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Referral code */}
          <div className="md:col-span-1 bg-gradient-to-br from-[#F3F8F4] to-[#E8F0EB] rounded-lg p-8 space-y-4">
            <p className="text-sm font-semibold text-[#1F4D3A] uppercase tracking-widest">
              Your Code
            </p>
            <div className="flex items-center gap-2 bg-white p-4 rounded-lg border-2 border-[#E6A756]">
              <p className="text-2xl font-bold text-[#E6A756] flex-1">
                {userReferralCode}
              </p>
              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-[#F3F8F4] rounded-lg transition-colors"
              >
                <Copy
                  size={20}
                  className={
                    copied
                      ? 'text-[#1F4D3A]'
                      : 'text-[#3F7A5C]'
                  }
                />
              </button>
            </div>
            <p className="text-xs text-slate-600">
              {copied ? '✓ Copied!' : 'Click to copy'}
            </p>
          </div>

          {/* Stats */}
          <div className="md:col-span-1 bg-white border border-[#E8F0EB] rounded-lg p-8 space-y-4">
            <p className="text-sm font-semibold text-slate-600 uppercase tracking-widest">
              Your Referrals
            </p>
            <p className="text-5xl font-bold text-[#1F4D3A]">{userReferrals}</p>
            <div className="flex items-center gap-2 text-sm text-[#3F7A5C] font-semibold">
              <Users size={16} />
              <span>Friends sent on treks</span>
            </div>
          </div>

          {/* Earnings */}
          <div className="md:col-span-1 bg-white border border-[#E8F0EB] rounded-lg p-8 space-y-4">
            <p className="text-sm font-semibold text-slate-600 uppercase tracking-widest">
              Earned
            </p>
            <p className="text-5xl font-bold text-[#E6A756]">
              ₹{userEarnings.toLocaleString()}
            </p>
            <div className="flex items-center gap-2 text-sm text-[#E6A756] font-semibold">
              <Gift size={16} />
              <span>Can be used as trek credit</span>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-16 bg-[#F3F8F4] rounded-lg p-12">
          <h3 className="text-2xl font-bold text-[#1F4D3A] text-center mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '1', title: 'Share Code', desc: 'Send {userReferralCode} to a friend' },
              { number: '2', title: 'They Book', desc: 'Friend uses code to book trek' },
              { number: '3', title: 'Trek Complete', desc: 'Friend completes the trek' },
              { number: '4', title: 'You Earn', desc: 'Credits deposited to your account' },
            ].map((step, idx) => (
              <div key={idx} className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-[#E6A756] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
                <h4 className="font-bold text-[#1F4D3A]">{step.title}</h4>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compensation tiers */}
        <div className="mb-16 space-y-8">
          <h3 className="text-2xl font-bold text-[#1F4D3A] text-center">
            Earn More, Share More
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {referralTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-6 border-2 transition-all ${
                  userReferrals >= parseInt(tier.referrals.split('-')[1] || tier.referrals)
                    ? 'border-[#E6A756] bg-[#F3F8F4]'
                    : 'border-[#E8F0EB] hover:border-[#E6A756]'
                }`}
              >
                <p className="text-4xl mb-2">{tier.badge}</p>
                <p className="text-lg font-bold text-[#1F4D3A] mb-1">
                  {tier.level}
                </p>
                <p className="text-xs text-slate-600 mb-4">
                  {tier.referrals} referrals
                </p>
                <div className="space-y-2 text-sm font-semibold text-[#E6A756]">
                  <p>Per: {tier.perReferral}</p>
                  <p>Bonus: {tier.totalBonus}</p>
                </div>
                {userReferrals >=
                  parseInt(tier.referrals.split('-')[1] || tier.referrals) && (
                  <p className="text-xs text-[#3F7A5C] mt-3 font-bold">
                    ✓ Unlocked
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Share buttons */}
        <div className="bg-white border border-[#E8F0EB] rounded-lg p-12 text-center space-y-6">
          <h3 className="text-2xl font-bold text-[#1F4D3A]">
            Share Your Code
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'WhatsApp', emoji: '💬' },
              { name: 'Email', emoji: '✉️' },
              { name: 'Instagram', emoji: '📸' },
              { name: 'Copy Link', emoji: '🔗' },
            ].map((platform) => (
              <button
                key={platform.name}
                className="px-6 py-3 border-2 border-[#E6A756] text-[#E6A756] rounded-lg font-semibold hover:bg-[#E6A756]/10 transition-colors flex items-center gap-2"
              >
                <span>{platform.emoji}</span>
                <span>{platform.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              q: 'When do I get the credit?',
              a: 'After your referral completes their trek. You can use it anytime.',
            },
            {
              q: 'Can I refer anyone?',
              a: 'Yes! Anyone who\'s never trekked with us can use your code.',
            },
            {
              q: 'Can credits be transferred?',
              a: 'Credits are personal to your account but can be gifted as trek vouchers.',
            },
            {
              q: 'Is there a limit?',
              a: 'No limit! Refer as many as you want. Higher tiers = better rewards.',
            },
          ].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <p className="font-bold text-[#1F4D3A]">{item.q}</p>
              <p className="text-slate-600 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
