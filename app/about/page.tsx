import { Metadata } from 'next';
import { AboutHero } from '@/components/about/about-hero';
import { AboutMission } from '@/components/about/about-mission';
import { AboutPhilosophy } from '@/components/about/about-philosophy';
import { AboutTeam } from '@/components/about/about-team';

export const metadata: Metadata = {
  title: 'About Us | Trip Margadarshak',
  description: 'Our mission to create transformative trekking experiences. Meet the expedition leaders behind every journey.',
  keywords: ['about', 'mission', 'guides', 'trekking', 'expeditions'],
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Cinematic hero */}
      <AboutHero />

      {/* Mission and pillars */}
      <AboutMission />

      {/* Philosophy */}
      <AboutPhilosophy />

      {/* Team */}
      <AboutTeam />

      {/* Final CTA */}
      <section className="py-32 bg-[#1F4D3A] text-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-playfair font-bold mb-8">
            The trail will exist with or without you.
            <br />
            The question is — will you walk it this year?
          </h2>

          <a
            href="/treks"
            className="inline-block mt-8 px-8 py-4 bg-white text-[#1F4D3A] rounded-lg font-medium hover:bg-[#DCE9E2] transition-colors"
          >
            See Upcoming Departures
          </a>
        </div>
      </section>
    </div>
  );
}
