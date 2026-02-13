import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SAMPLE_TREKS } from '@/lib/constants';
import { DetailHero } from '@/components/trek-detail/detail-hero';
import { StorySection } from '@/components/trek-detail/story-section';
import { RouteStory } from '@/components/trek-detail/route-story';
import { ChallengeSection } from '@/components/trek-detail/challenge-section';
import { LifeOnTrail } from '@/components/trek-detail/life-on-trail';
import { SafetySection } from '@/components/trek-detail/safety-section';
import { BatchSelector } from '@/components/trek-detail/batch-selector';

interface TrekDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(props: TrekDetailPageProps): Promise<Metadata> {
  const params = await props.params;
  const trek = SAMPLE_TREKS.find((t) => t.id === params.id);

  if (!trek) {
    return {
      title: 'Trek Not Found',
    };
  }

  return {
    title: `${trek.name} | Trip Margadarshak`,
    description: trek.narrative,
    keywords: [trek.name, trek.region, trek.difficulty, 'trek', 'hiking'],
    openGraph: {
      title: `${trek.name} | Trip Margadarshak`,
      description: trek.narrative,
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return SAMPLE_TREKS.map((trek) => ({
    id: trek.id,
  }));
}

export default async function TrekDetailPage(props: TrekDetailPageProps) {
  const params = await props.params;
  const trek = SAMPLE_TREKS.find((t) => t.id === params.id);

  if (!trek) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <DetailHero trek={trek} />

      {/* Story Section */}
      <StorySection trek={trek} />

      {/* Route Story */}
      <RouteStory trek={trek} />

      {/* Challenge Section */}
      <ChallengeSection trek={trek} />

      {/* Life on Trail */}
      <LifeOnTrail trek={trek} />

      {/* Safety Section */}
      <SafetySection trek={trek} />

      {/* Batch Selector */}
      <BatchSelector trek={trek} />

      {/* Inclusions & Exclusions */}
      <section className="py-16 px-6 sm:px-8 bg-trek-dust/10 border-t border-trek-dust">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div className="space-y-4">
              <h3 className="font-playfair text-2xl font-bold text-trek-forest">What&apos;s Included</h3>
              <ul className="space-y-2">
                {trek.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-0.5">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="space-y-4">
              <h3 className="font-playfair text-2xl font-bold text-trek-forest">What&apos;s Not Included</h3>
              <ul className="space-y-2">
                {trek.exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-slate-400 font-bold mt-0.5">—</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
