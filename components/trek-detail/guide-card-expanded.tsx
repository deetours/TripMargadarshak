'use client';

import { Guide } from '@/lib/data/guides';
import { Award, Zap, Users } from 'lucide-react';

interface GuideCardExpandedProps {
  guide: Guide;
  featured?: boolean;
}

export function GuideCardExpanded({ guide, featured = false }: GuideCardExpandedProps) {
  return (
    <div className={`rounded-lg border transition-all ${
      featured
        ? 'border-[#E6A756] bg-white shadow-lg ring-2 ring-[#E6A756]/20'
        : 'border-[#E8F0EB] bg-white hover:shadow-lg'
    }`}>
      {featured && (
        <div className="bg-[#E6A756] text-white px-4 py-2 text-center text-sm font-semibold">
          Your Guide
        </div>
      )}

      <div className={featured ? 'p-8' : 'p-6'}>
        {/* Avatar */}
        <div className={`rounded-full ${featured ? 'w-24 h-24' : 'w-20 h-20'} bg-gradient-to-br from-[#3F7A5C] to-[#1F4D3A] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4`}>
          {guide.name.charAt(0)}
        </div>

        {/* Name & intro */}
        <h3 className="text-2xl font-bold text-[#1F4D3A] text-center mb-2">{guide.name}</h3>
        <p className="text-slate-600 text-center mb-4 text-sm">{guide.experience} years leading expeditions</p>

        {/* Story */}
        {guide.story && (
          <p className="text-slate-700 italic text-center mb-6 text-sm leading-relaxed">
            "{guide.story}"
          </p>
        )}

        {/* Bio */}
        <p className="text-slate-700 mb-6">{guide.bio}</p>

        {/* Key traits */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <Award size={20} className="text-[#E6A756] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#1F4D3A] text-sm">Certifications</p>
              <p className="text-slate-600 text-sm">{guide.certifications.join(', ')}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Zap size={20} className="text-[#E6A756] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#1F4D3A] text-sm">Specializations</p>
              <p className="text-slate-600 text-sm">{guide.specialization.join(', ')}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users size={20} className="text-[#E6A756] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#1F4D3A] text-sm">Languages</p>
              <p className="text-slate-600 text-sm">{guide.languages.join(', ')}</p>
            </div>
          </div>
        </div>

        {/* Trust message */}
        <div className="pt-4 border-t border-[#E8F0EB] text-center">
          <p className="text-sm text-slate-600">
            This guide has taken over 200 trekkers to the summit. 94% rate them 5 stars.
          </p>
        </div>
      </div>
    </div>
  );
}
