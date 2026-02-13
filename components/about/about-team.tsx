'use client';

export function AboutTeam() {
  const team = [
    {
      name: 'Rajesh Kumar',
      role: '15 Years | Ex-Military Mountaineer',
      bio: 'Has led expeditions across high-altitude Himalayan terrain. Known for calm leadership and crisis management expertise.',
      expertise: ['Himalayan Expeditions', 'Altitude Mastery', 'Leadership']
    },
    {
      name: 'Priya Sharma',
      role: '12 Years | Environmental Scientist',
      bio: 'Brings ecology, culture, and sustainability into every trek. Passionate about protecting mountains and empowering women trekkers.',
      expertise: ['Ecology', 'Cultural Immersion', 'Sustainability']
    },
    {
      name: 'Sonam Dorje',
      role: '20 Years | Ladakh Native',
      bio: 'Grew up walking high passes before roads reached Ladakh. Reads mountain weather faster than instruments.',
      expertise: ['High Altitude', 'Weather Mastery', 'Local Culture']
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

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              {/* Avatar */}
              <div className="h-48 bg-gradient-to-br from-[#1F4D3A] to-[#3F7A5C] rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-6xl font-playfair font-bold">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-2xl font-playfair font-bold text-[#1F4D3A] mb-2">
                {member.name}
              </h3>

              <p className="text-[#3F7A5C] font-medium text-sm mb-4">
                {member.role}
              </p>

              <p className="text-slate-600 leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Expertise tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.expertise.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-[#F3F8F4] text-[#1F4D3A] rounded-full font-medium"
                  >
                    {skill}
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
