'use client';

export function ExplorerStoriesV2() {
  const stories = [
    {
      name: 'Priya Nair',
      trek: 'Kheerganga',
      quote: 'When we reached the hot springs, conversation stopped. For the first time in years, my thoughts slowed down.',
      title: 'The Day Noise Left My Mind',
      transformation: 'Clarity',
      feeling: 'SACRED'
    },
    {
      name: 'Arjun Mehta',
      trek: 'Brahmagiri',
      quote: 'Watching elephants cross silently changed how I see forests. We are visitors here. Not owners.',
      title: 'We Walked Through Someone Else\'s Kingdom',
      transformation: 'Respect',
      feeling: 'WILD'
    },
    {
      name: 'Ananya Singh',
      trek: 'Markha Valley',
      quote: 'The altitude removed small talk. What remained was honesty and connection.',
      title: 'Friendships Forged Above Oxygen Comfort',
      transformation: 'Community',
      feeling: 'CONNECTING'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section intro */}
        <div className="text-center mb-16">
          <p className="text-slate-600 text-lg mb-4">
            These are not reviews. These are moments people carried back home.
          </p>
        </div>

        {/* Stories grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group">
              {/* Feeling tag */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#F3F8F4] text-[#1F4D3A] text-xs font-bold tracking-wider rounded-full">
                  {story.feeling}
                </span>
              </div>

              {/* Story title */}
              <h3 className="text-2xl font-playfair font-bold text-[#1F4D3A] mb-4">
                {story.title}
              </h3>

              {/* Quote */}
              <div className="mb-6 pl-4 border-l-4 border-[#3F7A5C]">
                <p className="text-lg text-slate-600 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              {/* Attribution and transformation */}
              <div className="pt-6 border-t border-[#E3EFE8]">
                <p className="text-sm font-medium text-[#1F4D3A] mb-2">
                  {story.name}
                </p>
                <p className="text-xs text-[#3F7A5C] mb-4">
                  Trekked: {story.trek}
                </p>
                <div className="inline-block px-3 py-1 bg-[#E6A756]/10 text-[#E6A756] text-xs font-bold rounded">
                  Transformation: {story.transformation}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
