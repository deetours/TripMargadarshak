'use client';

import { GUIDES } from '@/lib/constants';
import { Award, Shield, Users } from 'lucide-react';

export function TrustSection() {
  const trustPoints = [
    {
      icon: Award,
      title: 'Certified Professionals',
      description: 'All guides are IFMGA certified with wilderness first aid and emergency response training.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Real-time GPS tracking, emergency evacuation protocols, and comprehensive trek insurance included.',
    },
    {
      icon: Users,
      title: 'Expert Leadership',
      description: 'Curated teams of experienced guides passionate about mountains and storytelling.',
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-8 bg-trek-dust/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-trek-forest">
            Trust is Everything
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your safety and experience are backed by years of expertise and proven protocols.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-trek-forest/10 flex items-center justify-center">
                  <Icon size={32} className="text-trek-forest" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-trek-forest">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Guide Profiles */}
        <div className="space-y-8">
          <h3 className="font-playfair text-3xl font-bold text-trek-forest text-center mb-12">
            Meet Our Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GUIDES.slice(0, 3).map((guide) => (
              <div key={guide.id} className="flex flex-col items-center text-center space-y-4 p-8 rounded-lg bg-white border border-trek-dust">
                <div className="w-20 h-20 rounded-full bg-trek-forest/10 flex items-center justify-center">
                  <Users size={40} className="text-trek-forest" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-trek-forest">{guide.name}</h4>
                <p className="text-sm text-slate-600">{guide.experience} years of experience</p>
                <p className="text-slate-600 text-sm leading-relaxed">{guide.bio}</p>
                <div className="pt-4 border-t border-trek-dust/30 w-full">
                  <p className="text-xs uppercase tracking-widest text-trek-mist font-bold">Specializations</p>
                  <div className="flex flex-wrap gap-2 justify-center mt-3">
                    {guide.specialization.slice(0, 2).map((spec) => (
                      <span key={spec} className="text-xs bg-trek-dust text-trek-forest px-3 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
