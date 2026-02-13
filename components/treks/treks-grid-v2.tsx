'use client';

import { TrekCardV2 } from './trek-card-v2';

export function TreksGridV2() {
  const treks = [
    {
      id: 'kheerganga-trek',
      name: 'Kheerganga: The Sacred Highland',
      moodTag: 'SACRED STILLNESS',
      emotionalHook: 'Walk into warmth rising from snow',
      story: 'Rhododendron forests open into alpine meadows, leading to a hot spring believed to heal both fatigue and thought.',
      altitude: '2680',
      duration: '3 Days',
      groupSize: '6-12 People',
      startingPrice: '₹8,999'
    },
    {
      id: 'brahmagiri-trek',
      name: 'Brahmagiri: The Living Temple',
      moodTag: 'LIVING FOREST',
      emotionalHook: 'The jungle watches you walk',
      story: 'Western Ghats rainforest trails shaped by elephants, pilgrims, and monsoon seasons older than memory.',
      altitude: '1680',
      duration: '3 Days',
      groupSize: '8-14 People',
      startingPrice: '₹7,999'
    },
    {
      id: 'markha-valley-trek',
      name: 'Markha Valley: The High Silence',
      moodTag: 'HIGH SILENCE',
      emotionalHook: 'Where breath becomes your compass',
      story: 'Cross cold desert valleys, prayer-flag passes, and river crossings in one of India\'s most profound high-altitude landscapes.',
      altitude: '4800',
      duration: '8 Days',
      groupSize: '4-10 People',
      startingPrice: '₹18,999'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treks.map((trek) => (
            <TrekCardV2 key={trek.id} {...trek} />
          ))}
        </div>
      </div>
    </section>
  );
}
