'use client';

export function StatsSection() {
  const stats = [
    {
      number: '2,400+',
      label: 'Lives Touched Through Trekking',
      description: 'Walked back with stories, not just photos.'
    },
    {
      number: '25+',
      label: 'Carefully Curated Routes',
      description: 'Each trail tested across seasons.'
    },
    {
      number: '15+',
      label: 'Professional Mountain Guides',
      description: 'Local knowledge. Expedition discipline.'
    }
  ];

  return (
    <section className="py-20 bg-[#F3F8F4]">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-playfair font-bold text-[#1F4D3A] mb-2">
                {stat.number}
              </div>
              <div className="h-1 w-12 bg-[#3F7A5C] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-[#1F4D3A] mb-2">
                {stat.label}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed italic">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
