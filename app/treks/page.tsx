import { Metadata } from 'next';
import { TreksHero } from '@/components/treks/treks-hero';
import { TreksGridV2 } from '@/components/treks/treks-grid-v2';

export const metadata: Metadata = {
  title: 'Explore Treks | Trip Margadarshak',
  description: 'Handpicked expedition-grade treks across India. From cultural journeys to high-altitude expeditions.',
  keywords: ['treks', 'hiking', 'expeditions', 'India', 'mountains', 'Himalayas'],
};

export default function TreksPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <TreksHero />

      {/* Trek Grid */}
      <TreksGridV2 />

      {/* Trust section */}
      <section className="py-20 bg-[#F3F8F4]">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-[#1F4D3A] mb-6">
            Every Trek Here Is Field-Tested
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Routes are walked before season opens. Camps are verified. Weather windows are studied. 
            Each expedition is designed to challenge without overwhelming, to teach without lecturing, 
            and to transform without forcing.
          </p>
        </div>
      </section>

      {/* Community teaser */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
          <div className="bg-[#F3F8F4] rounded-lg p-12">
            <p className="text-2xl font-playfair font-bold text-[#1F4D3A] mb-4">
              "82% of our trekkers return within 2 years"
            </p>
            <p className="text-slate-600 mb-8">
              Most arrive solo. Few leave that way.
            </p>
            <a
              href="/community"
              className="inline-block px-6 py-3 bg-[#1F4D3A] text-white rounded-lg font-medium hover:bg-[#16382B] transition-colors"
            >
              Read Explorer Stories →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
