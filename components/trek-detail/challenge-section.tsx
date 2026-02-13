'use client';

import { Trek } from '@/lib/types';
import { AlertCircle } from 'lucide-react';

interface ChallengeSectionProps {
  trek: Trek;
}

export function ChallengeSection({ trek }: ChallengeSectionProps) {
  return (
    <section className="py-16 px-6 sm:px-8 border-b border-trek-dust bg-trek-dust/10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-start gap-4">
          <AlertCircle size={32} className="text-trek-forest mt-1 flex-shrink-0" />
          <div className="space-y-4 flex-1">
            <h2 className="font-playfair text-3xl font-bold text-trek-forest">
              Is This Trek For You?
            </h2>
            <p className="text-slate-600 text-lg">
              We believe in radical honesty about who should and shouldn&apos;t do this trek. Here&apos;s what we look for.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-trek-forest mb-4">⚠️ You might want to skip this trek if:</h3>
          <ul className="space-y-3">
            {trek.whyShouldNotDo.map((reason, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-700 text-sm font-bold flex-shrink-0 mt-0.5">
                  ✕
                </span>
                <span className="text-slate-700">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-green-50 border border-green-200 space-y-3">
          <h3 className="font-bold text-green-900">✓ You&apos;re a good fit if:</h3>
          <ul className="space-y-2 text-green-900 text-sm">
            <li>You&apos;re honest about your fitness level</li>
            <li>You&apos;re prepared to embrace discomfort</li>
            <li>You want to be part of a community</li>
            <li>You&apos;re open to learning from guides and fellow trekkers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
