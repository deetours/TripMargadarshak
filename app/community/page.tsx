import { Metadata } from 'next';
import { CommunityHeroV2 } from '@/components/community/community-hero-v2';
import { ExplorerStoriesV2 } from '@/components/community/explorer-stories-v2';
import { BelongingSection } from '@/components/community/belonging-section';
import { ShareStoryCTA } from '@/components/community/share-story-cta';
import { CommunityCloseCTA } from '@/components/community/community-close-cta';

export const metadata: Metadata = {
  title: 'Community | Trip Margadarshak',
  description: 'Stories of transformation from our trekking community. Real people, real mountains, real change.',
  keywords: ['community', 'stories', 'trekking', 'transformations'],
};

export default function CommunityPage() {
  return (
    <div className="w-full">
      {/* Hero - Emotional connection */}
      <CommunityHeroV2 />

      {/* Explorer Stories - Transformational narratives */}
      <ExplorerStoriesV2 />

      {/* Belonging - Social proof of connection */}
      <BelongingSection />

      {/* Share Story - Call to action */}
      <ShareStoryCTA />

      {/* Final Close - Back to treks */}
      <CommunityCloseCTA />
    </div>
  );
}
