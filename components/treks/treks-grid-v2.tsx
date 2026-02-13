'use client';

import { TrekCardV2 } from './trek-card-v2';

export function TreksGridV2() {
  const treks = [
    {
      id: 'kheerganga',
      name: 'Kheerganga',
      moodTag: 'SACRED STILLNESS',
      emotionalHook: 'Walk into warmth rising from snow',
      story: 'Rhododendron forests open into alpine meadows, leading to a hot spring believed to heal both fatigue and thought.',
      altitude: '2680',
      duration: '4 Days',
      groupSize: '6-12 People',
      startingPrice: '₹12,999'
    },
    {
      id: 'brahmagiri',
      name: 'Brahmagiri',
      moodTag: 'LIVING FOREST',
      emotionalHook: 'The jungle watches you walk',
      story: 'Western Ghats rainforest trails shaped by elephants, pilgrims, and monsoon seasons older than memory.',
      altitude: '1680',
      duration: '3 Days',
      groupSize: '8-14 People',
      startingPrice: '₹9,999'
    },
    {
      id: 'markha-valley',
      name: 'Markha Valley',
      moodTag: 'HIGH SILENCE',
      emotionalHook: 'Where breath becomes your compass',
      story: 'Cross cold desert valleys, prayer-flag passes, and river crossings in one of India\'s most profound high-altitude landscapes.',
      altitude: '4800',
      duration: '8 Days',
      groupSize: '4-10 People',
      startingPrice: '₹24,999'
    },
    {
      id: 'auli-chopta',
      name: 'Auli to Chopta',
      moodTag: 'ALPINE WONDER',
      emotionalHook: 'Meadows that touch the sky',
      story: 'Alpine meadows stretch endlessly under clear mountain skies. Sunrise views that redefine silence.',
      altitude: '3000',
      duration: '5 Days',
      groupSize: '6-12 People',
      startingPrice: '₹14,999'
    },
    {
      id: 'kedarkantha',
      name: 'Kedarkantha',
      moodTag: 'SUMMIT CLARITY',
      emotionalHook: 'Peak clarity at 3600 meters',
      story: 'One of the most accessible winter summits in the Himalayas. Snow, silence, and 360-degree mountain views.',
      altitude: '3600',
      duration: '5 Days',
      groupSize: '6-12 People',
      startingPrice: '₹13,999'
    },
    {
      id: 'hampta-pass',
      name: 'Hampta Pass',
      moodTag: 'WATERSHED CROSSING',
      emotionalHook: 'Where monsoon meets mountains',
      story: 'Cross from lush Himachal valleys into arid Ladakh landscapes. Where water divides worlds.',
      altitude: '4270',
      duration: '6 Days',
      groupSize: '5-11 People',
      startingPrice: '₹16,999'
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
