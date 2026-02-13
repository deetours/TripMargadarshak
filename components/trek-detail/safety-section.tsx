'use client';

import { Trek } from '@/lib/types';
import { Shield, Heart, FileCheck } from 'lucide-react';

interface SafetySectionProps {
  trek: Trek;
}

export function SafetySection({ trek }: SafetySectionProps) {
  return (
    <section className="py-16 px-6 sm:px-8 border-b border-trek-dust bg-trek-dust/10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-start gap-4">
          <Shield size={32} className="text-trek-forest mt-1 flex-shrink-0" />
          <div className="space-y-4 flex-1">
            <h2 className="font-playfair text-3xl font-bold text-trek-forest">
              Safety & Security
            </h2>
            <p className="text-slate-600">
              Your safety is non-negotiable. Here&apos;s exactly what we do to keep you safe.
            </p>
          </div>
        </div>

        {/* Safety Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Guide Ratio */}
          <div className="p-6 rounded-lg border border-trek-dust bg-white space-y-3">
            <h3 className="font-bold text-trek-forest text-lg">👥 Guide Ratio</h3>
            <p className="text-slate-700">{trek.safety.guideRatio}</p>
          </div>

          {/* Medical */}
          <div className="p-6 rounded-lg border border-trek-dust bg-white space-y-3">
            <Heart size={24} className="text-red-600" />
            <h3 className="font-bold text-trek-forest text-lg">Medical Support</h3>
            <p className="text-slate-700">{trek.safety.medical}</p>
          </div>

          {/* Insurance */}
          <div className="p-6 rounded-lg border border-trek-dust bg-white space-y-3">
            <FileCheck size={24} className="text-trek-forest" />
            <h3 className="font-bold text-trek-forest text-lg">Insurance</h3>
            <p className="text-slate-700">{trek.safety.insurance}</p>
          </div>
        </div>

        {/* Safety Protocols */}
        <div className="space-y-4 p-6 rounded-lg border-2 border-trek-forest/20 bg-white">
          <h3 className="font-bold text-trek-forest text-lg">✓ Our Protocols</h3>
          <ul className="space-y-3">
            {trek.safety.protocols.map((protocol) => (
              <li key={protocol} className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 text-sm font-bold flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-slate-700">{protocol}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Monitoring */}
        <div className="p-6 rounded-lg border border-trek-dust bg-trek-mist/5 space-y-3">
          <h3 className="font-bold text-trek-forest text-lg">📍 Real-time Monitoring</h3>
          <p className="text-slate-700">{trek.safety.monitoring}</p>
        </div>
      </div>
    </section>
  );
}
