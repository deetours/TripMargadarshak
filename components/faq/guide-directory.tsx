'use client';

import { MapPin, Star, Users, Award } from 'lucide-react';

interface Guide {
  id: string;
  name: string;
  photo: string;
  region: string;
  experience: number;
  treksLed: number;
  rating: number;
  reviews: number;
  specialties: string[];
  languages: string[];
  bio: string;
}

interface GuideDirectoryProps {
  guides: Guide[];
  onSelectGuide?: (guideId: string) => void;
}

export function GuideDirectory({
  guides = [
    {
      id: 'raj',
      name: 'Raj Kumar',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      region: 'Himachal Pradesh',
      experience: 12,
      treksLed: 450,
      rating: 4.9,
      reviews: 230,
      specialties: ['High Altitude', 'Mountain Skills'],
      languages: ['Hindi', 'English', 'Garhwali'],
      bio: 'Born and raised in the Himalayas. Leads Kheerganga and Chopta treks with deep local knowledge.',
    },
    {
      id: 'priya',
      name: 'Priya Sharma',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
      region: 'Karnataka',
      experience: 8,
      treksLed: 180,
      rating: 4.8,
      reviews: 145,
      specialties: ['Waterfall Treks', 'Photography'],
      languages: ['Hindi', 'English', 'Kannada'],
      bio: 'Wildlife enthusiast. Specializes in Karnataka Western Ghats with focus on biodiversity.',
    },
  ],
  onSelectGuide,
}: GuideDirectoryProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#F3F8F4] to-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#E6A756] font-medium tracking-widest text-sm">
            MEET OUR GUIDES
          </p>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-[#1F4D3A]">
            Expert mountaineers who call these trails home.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Average 10+ years experience. Every guide is a storyteller, safety expert, and mountain mentor.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white border border-[#E8F0EB] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => onSelectGuide?.(guide.id)}
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden bg-[#F3F8F4]">
                <img
                  src={guide.photo}
                  alt={guide.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-[#E6A756] text-[#1F4D3A] px-3 py-1 rounded-full font-bold flex items-center gap-1">
                  <Star size={16} className="fill-current" />
                  {guide.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Name & region */}
                <div>
                  <h3 className="text-2xl font-bold text-[#1F4D3A]">
                    {guide.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[#3F7A5C] mt-1">
                    <MapPin size={16} />
                    <span className="text-sm font-semibold">{guide.region}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-slate-700 text-sm leading-relaxed">
                  {guide.bio}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-[#E8F0EB]">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#E6A756]">
                      {guide.experience}y
                    </p>
                    <p className="text-xs text-slate-600 mt-1">Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#E6A756]">
                      {guide.treksLed}+
                    </p>
                    <p className="text-xs text-slate-600 mt-1">Treks Led</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#E6A756]">
                      {guide.reviews}
                    </p>
                    <p className="text-xs text-slate-600 mt-1">Reviews</p>
                  </div>
                </div>

                {/* Specialties */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest">
                    Specialties
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {guide.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#F3F8F4] text-[#1F4D3A] text-xs font-semibold rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest">
                    Languages
                  </p>
                  <p className="text-sm text-slate-700">
                    {guide.languages.join(', ')}
                  </p>
                </div>

                {/* View profile button */}
                <button className="w-full py-3 border-2 border-[#E6A756] text-[#E6A756] rounded-lg font-bold hover:bg-[#E6A756]/10 transition-colors mt-4">
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-20 bg-white border border-[#E8F0EB] rounded-lg p-12 text-center space-y-6">
          <h3 className="text-2xl font-bold text-[#1F4D3A]">
            Our Guide Selection Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '1', title: 'Experience', desc: 'Minimum 10 years in mountains' },
              { number: '2', title: 'Training', desc: 'International certifications' },
              { number: '3', title: 'Safety', desc: 'Wilderness first aid certified' },
              { number: '4', title: 'Reviews', desc: '4.8+ rating from trekkers' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="w-10 h-10 mx-auto bg-[#E6A756] rounded-full flex items-center justify-center text-white font-bold">
                  {item.number}
                </div>
                <h4 className="font-bold text-[#1F4D3A]">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
