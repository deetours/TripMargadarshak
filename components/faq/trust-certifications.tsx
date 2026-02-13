'use client';

import { Award, Heart, MapPin, Users } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  year: number;
  icon: string;
  description: string;
}

interface TrustCertificationsProps {
  totalTrajectory?: {
    yearsOperating: number;
    trekksCompleted: number;
    trekkersTrained: number;
    incidents: number;
  };
  teamCertifications?: Certification[];
}

export function TrustCertifications({
  totalTrajectory = {
    yearsOperating: 8,
    trekksCompleted: 2400,
    trekkersTrained: 18000,
    incidents: 0,
  },
  teamCertifications = [
    {
      name: 'IFMGA Guide Certification',
      issuer: 'International Federation',
      year: 2018,
      icon: '🏔',
      description: 'International Mountain Guide certification',
    },
    {
      name: 'Wilderness First Aid',
      issuer: 'WEMT India',
      year: 2022,
      icon: '🏥',
      description: 'Advanced wilderness medical training',
    },
    {
      name: 'Leave No Trace',
      issuer: 'LNT Center',
      year: 2020,
      icon: '♻️',
      description: 'Environmental stewardship certification',
    },
    {
      name: 'Altitude Sickness Protocol',
      issuer: 'high-altitude.org',
      year: 2023,
      icon: '🛡️',
      description: 'Altitude medicine specialization',
    },
  ],
}: TrustCertificationsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#E6A756] font-medium tracking-widest text-sm">
            TRUST & CREDENTIALS
          </p>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-[#1F4D3A]">
            Built on facts, proven by action.
          </h2>
        </div>

        {/* Trajectory Card */}
        <div className="mb-20 bg-gradient-to-r from-[#1F4D3A] to-[#16382B] text-white rounded-lg p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-5xl font-bold text-[#E6A756]">
                {totalTrajectory.yearsOperating}+
              </p>
              <p className="text-white/80 font-semibold">Years Operating</p>
              <p className="text-xs text-white/60">Continuously</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-[#E6A756]">
                {(totalTrajectory.trekksCompleted / 1000).toFixed(1)}k+
              </p>
              <p className="text-white/80 font-semibold">Treks Completed</p>
              <p className="text-xs text-white/60">Zero compromises</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-[#E6A756]">
                {(totalTrajectory.trekkersTrained / 1000).toFixed(1)}k+
              </p>
              <p className="text-white/80 font-semibold">Trekkers Trained</p>
              <p className="text-xs text-white/60">Transformed</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-[#E6A756]">100%</p>
              <p className="text-white/80 font-semibold">Safety Record</p>
              <p className="text-xs text-white/60">{totalTrajectory.incidents} major incidents</p>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-[#1F4D3A]">
              Our Team's Professional Credentials
            </h3>
            <p className="text-slate-600">
              Every guide holds multiple certifications and maintains continuous training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamCertifications.map((cert, idx) => (
              <div
                key={idx}
                className="relative bg-white border border-[#E8F0EB] rounded-lg p-8 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="mb-4 text-4xl">{cert.icon}</div>

                {/* Content */}
                <h4 className="text-lg font-bold text-[#1F4D3A] mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  {cert.description}
                </p>

                {/* Issuer & Year */}
                <div className="pt-4 border-t border-[#E8F0EB] flex items-center justify-between">
                  <p className="text-xs font-semibold text-[#3F7A5C]">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-500">Renewed {cert.year}</p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E6A756] rounded-b-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#E8F0EB]">
          {/* Insurance */}
          <div className="text-center space-y-3">
            <div className="text-4xl">🛡️</div>
            <h4 className="font-bold text-[#1F4D3A]">Comprehensive Insurance</h4>
            <p className="text-sm text-slate-600">
              All trekkers covered up to ₹5,00,000 for altitude, evacuation, and medical emergencies.
            </p>
          </div>

          {/* Monitoring */}
          <div className="text-center space-y-3">
            <div className="text-4xl">📍</div>
            <h4 className="font-bold text-[#1F4D3A]">Real-time Tracking</h4>
            <p className="text-sm text-slate-600">
              GPS coordinates sent to families daily. Satellite communication in all areas.
            </p>
          </div>

          {/* Support */}
          <div className="text-center space-y-3">
            <div className="text-4xl">🆘</div>
            <h4 className="font-bold text-[#1F4D3A]">Emergency Protocol</h4>
            <p className="text-sm text-slate-600">
              Helicopter evacuation standby for extreme altitude treks. Response within 2 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
