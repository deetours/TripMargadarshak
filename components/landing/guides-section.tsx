'use client';

export function GuidesSection() {
  const guides = [
    {
      name: 'Rajesh Kumar',
      credentials: '15 Years | Ex-Military Mountaineer',
      bio: 'Has led expeditions across high-altitude Himalayan terrain. Known for calm leadership and crisis management expertise.',
      specialties: ['Himalayan Expeditions', 'Altitude Mastery', 'Leadership Under Pressure']
    },
    {
      name: 'Priya Sharma',
      credentials: '12 Years | Environmental Scientist',
      bio: 'Brings ecology, culture, and sustainability into every trek. Passionate about protecting mountains and empowering women trekkers.',
      specialties: ['Ecosystem Knowledge', 'Cultural Immersion', 'Women Empowerment']
    },
    {
      name: 'Sonam Dorje',
      credentials: '20 Years | Ladakh Native',
      bio: 'Grew up walking high passes before roads reached Ladakh. Reads mountain weather faster than instruments and understands local spirits.',
      specialties: ['High Altitude Mastery', 'Weather Prediction', 'Cultural Wisdom']
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-[#1F4D3A] mb-4">
            The People Who Walk Before You
          </h2>
          <p className="text-lg text-slate-600">
            Experience earned through decades of mountain time.
          </p>
        </div>

        {/* Guides grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {guides.map((guide, index) => (
            <div key={index} className="group">
              {/* Avatar placeholder - using gradient */}
              <div className="h-56 bg-gradient-to-br from-[#1F4D3A] to-[#3F7A5C] rounded-lg mb-6 flex items-center justify-center text-white text-5xl font-bold font-playfair">
                {guide.name.charAt(0)}
              </div>

              <h3 className="text-2xl font-playfair font-bold text-[#1F4D3A] mb-1">
                {guide.name}
              </h3>
              
              <p className="text-[#3F7A5C] font-medium text-sm mb-4">
                {guide.credentials}
              </p>

              <p className="text-slate-600 leading-relaxed mb-6">
                {guide.bio}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2">
                {guide.specialties.map((specialty, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-[#F3F8F4] text-[#1F4D3A] rounded-full font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
