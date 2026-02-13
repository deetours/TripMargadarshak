import { Metadata } from 'next';
import { HeroSectionV2 } from '@/components/landing/hero-section-v2';
import { BeliefStatement } from '@/components/landing/belief-statement';
import { StatsSection } from '@/components/landing/stats-section';
import { TrekTypesSection } from '@/components/landing/trek-types-section';
import { PreparationSection } from '@/components/landing/preparation-section';
import { GuidesSection } from '@/components/landing/guides-section';
import { FinalCTASection } from '@/components/landing/final-cta-section';

export const metadata: Metadata = {
  title: 'Trip Margadarshak | Expedition-Grade Trekking in India',
  description: 'Cinematic trekking expeditions across India\'s most meaningful landscapes. Small-group journeys with expert guides and transformational storytelling.',
  keywords: ['trekking', 'hiking', 'India', 'mountains', 'adventure', 'Himalayas', 'expeditions'],
  openGraph: {
    title: 'Trip Margadarshak | Expedition Trekking',
    description: 'Expedition-grade trekking with professional guides and immersive storytelling.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Hero - Cinematic opening */}
      <HeroSectionV2 />

      {/* Belief statement - Emotional anchor */}
      <BeliefStatement />

      {/* Stats - Social proof */}
      <StatsSection />

      {/* Trek types - Choice and story */}
      <TrekTypesSection />

      {/* Preparation - Trust and safety */}
      <PreparationSection />

      {/* Guides - Human connection */}
      <GuidesSection />

      {/* Final CTA - Emotional close */}
      <FinalCTASection />
    </div>
  );
}
