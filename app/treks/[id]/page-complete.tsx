'use client';

import { SAMPLE_TREKS } from '@/lib/constants';
import { GUIDES } from '@/lib/data/guides';
import { REVIEWS } from '@/lib/data/reviews';
import { BATCHES } from '@/lib/data/batches';
import { TrekHeroCinematic } from '@/components/trek-detail/trek-hero-cinematic';
import { TrekSpecsGrid } from '@/components/trek-detail/trek-specs-grid';
import { RouteTimelineVisual } from '@/components/trek-detail/route-timeline-visual';
import { GuideCardExpanded } from '@/components/trek-detail/guide-card-expanded';
import { ReviewsCarousel } from '@/components/shared/reviews-carousel';
import { PricingCardUrgency } from '@/components/trek-detail/pricing-card-urgency';
import { ProgressBar } from '@/components/shared/progress-bar';
import { StickyMobileCTA } from '@/components/shared/sticky-mobile-cta';

interface TrekDetailPageProps {
  params: {
    id: string;
  };
}

export default function TrekDetailPage({ params }: TrekDetailPageProps) {
  const trek = SAMPLE_TREKS.find((t) => t.id === params.id);
  
  if (!trek) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Trek not found</h1>
          <p className="text-slate-600">The trek you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const guides = GUIDES.slice(0, 2);
  const trekReviews = REVIEWS.filter((r) => r.trekId === trek.id);
  const trekBatches = BATCHES.filter((b) => b.trekId === trek.id);
  const basePrice = trekBatches[0]?.pricePerPerson || 12500;

  return (
    <div className="w-full bg-white">
      <ProgressBar />
      <StickyMobileCTA trekId={trek.id} />

      {/* Hero Section */}
      <TrekHeroCinematic trek={trek} />

      {/* Main content with sidebar */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-20">
              {/* Specs Grid */}
              <div className="bg-white">
                <TrekSpecsGrid trek={trek} />
              </div>

              {/* Why Should You Do This */}
              <section className="py-12">
                <h2 className="text-3xl font-playfair font-bold text-[#1F4D3A] mb-6">
                  Why Trek This Mountain
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  {trek.narrative}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {trek.whyShouldDo?.map((reason: string, i: number) => (
                    <div key={i} className="p-4 bg-[#F3F8F4] rounded-lg">
                      <p className="text-[#1F4D3A] font-semibold">✓ {reason}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Route Timeline */}
              <div className="bg-white">
                <RouteTimelineVisual trek={trek} />
              </div>

              {/* Who Should NOT Do This */}
              {trek.whyShouldNotDo && trek.whyShouldNotDo.length > 0 && (
                <section className="py-12 bg-[#FEF3C7] border-l-4 border-[#D97706] p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-[#92400E] mb-4">
                    Is This Trek Right For You?
                  </h3>
                  <p className="text-[#92400E] mb-4">
                    This trek might not be ideal if you have:
                  </p>
                  <ul className="space-y-2">
                    {trek.whyShouldNotDo.map((reason: string, i: number) => (
                      <li key={i} className="text-[#92400E] flex items-start gap-2">
                        <span className="mt-1">•</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Guide Introduction */}
              <section className="py-12">
                <h2 className="text-3xl font-playfair font-bold text-[#1F4D3A] mb-8">
                  Meet Your Guides
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {guides.map((guide) => (
                    <GuideCardExpanded
                      key={guide.id}
                      guide={guide}
                      featured={guide.id === guides[0]?.id}
                    />
                  ))}
                </div>
              </section>

              {/* Reviews Section */}
              <section id="reviews" className="py-12">
                <h2 className="text-3xl font-playfair font-bold text-[#1F4D3A] mb-8">
                  Trekker Stories
                </h2>
                {trekReviews.length > 0 && (
                  <ReviewsCarousel reviews={trekReviews} />
                )}
              </section>

              {/* Safety Section */}
              <section className="py-12 bg-[#F3F8F4] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#1F4D3A] mb-4">
                  Safety is Our Priority
                </h3>
                <div className="space-y-4 text-slate-700">
                  <p>
                    <strong>Guide Ratio:</strong> 1 guide per 8 trekkers maximum
                  </p>
                  <p>
                    <strong>Protocols:</strong> Weather monitoring, altitude assessment, emergency evacuation plans
                  </p>
                  <p>
                    <strong>Medical:</strong> First aid trained guides, basic medical kits, partnership with nearby medical facilities
                  </p>
                  <p>
                    <strong>Insurance:</strong> Recommended for all trekkers
                  </p>
                </div>
              </section>

              {/* Final emotional CTA */}
              <section className="py-16 text-center bg-[#1F4D3A] text-white rounded-lg p-8">
                <h3 className="text-4xl font-playfair font-bold mb-4">
                  The Mountain Is Waiting
                </h3>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Some decisions change you forever. Some moments you'll remember for a lifetime. This trek has both.
                </p>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <PricingCardUrgency
                trekId={trek.id}
                basePrice={basePrice}
                batches={trekBatches}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <section className="py-16 bg-[#F3F8F4] text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-playfair font-bold text-[#1F4D3A] mb-6">
            Ready to Begin?
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            Every trekker starts with one decision. Most never regret it.
          </p>
          <a
            href={`/booking/${trek.id}`}
            className="inline-block px-8 py-4 bg-[#1F4D3A] text-white rounded-lg font-bold hover:bg-[#16382B] transition-colors"
          >
            Book Your Trek Now
          </a>
        </div>
      </section>
    </div>
  );
}
