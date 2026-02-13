'use client';

interface GuideProfile {
  name: string;
  photo: string;
  bio: string;
  experience: string;
  certifications: string[];
  favorites: string[];
  trekksLed: number;
}

interface GuideCardExpandedProps {
  guide: GuideProfile;
}

export function GuideCardExpanded({ guide }: GuideCardExpandedProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#F3F8F4] to-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#E6A756] font-medium tracking-widest text-sm">
            YOUR GUIDE ON THE MOUNTAIN
          </p>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-[#1F4D3A]">
            You're not walking behind a guide.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            You're walking with someone who calls these mountains home.
          </p>
        </div>

        {/* Guide Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img
              src={guide.photo}
              alt={guide.name}
              className="w-full h-full object-cover"
            />
            {/* Overlay stats */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <p className="text-4xl font-bold">{guide.trekksLed}+</p>
              <p className="text-sm opacity-90">Treks led successfully</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Name and role */}
            <div className="space-y-3">
              <h3 className="text-4xl font-playfair font-bold text-[#1F4D3A]">
                {guide.name}
              </h3>
              <p className="text-lg text-[#E6A756] font-semibold">
                {guide.experience}
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                {guide.bio}
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-[#1F4D3A] uppercase tracking-widest">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {guide.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[#F3F8F4] border border-[#E8F0EB] rounded-lg text-sm text-[#1F4D3A] font-medium hover:border-[#E6A756] transition-colors"
                  >
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Favorites */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-[#1F4D3A] uppercase tracking-widest">
                Favorites on the Trail
              </h4>
              <ul className="space-y-2">
                {guide.favorites.map((fav, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#E6A756] font-bold mt-1">★</span>
                    <span>{fav}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust statement */}
            <div className="pt-6 border-t border-[#E8F0EB] italic text-slate-600">
              "I don't lead treks. I share mountains with people."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
