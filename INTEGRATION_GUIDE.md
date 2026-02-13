# 🧩 COMPONENT INTEGRATION GUIDE

Quick reference for importing and using all new components in your pages.

---

## TREK DETAIL PAGE INTEGRATION

Update `app/treks/[id]/page.tsx` to use the enhanced components:

```tsx
import { TrekHeroCinematic } from '@/components/trek-detail/trek-hero-cinematic';
import { TrekStorySection } from '@/components/trek-detail/trek-story-section';
import { TrekSpecsGrid } from '@/components/trek-detail/trek-specs-grid';
import { RouteTimelineVisual } from '@/components/trek-detail/route-timeline-visual-complete';
import { GuideCardExpanded } from '@/components/trek-detail/guide-card-expanded-v2';
import { ReviewsCarousel } from '@/components/shared/reviews-carousel';
import { PricingCardUrgency } from '@/components/trek-detail/pricing-card-urgency-v2';
import { SeatAvailabilityBar } from '@/components/trek-detail/seat-availability-bar';
import { FinalCTABlock } from '@/components/trek-detail/final-cta-block';
import { StickyMobileCTA } from '@/components/shared/sticky-mobile-cta-enhanced';

export default function TrekDetailPage({ trek, batches, reviews, guide }) {
  const nextBatch = batches[0];
  
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <TrekHeroCinematic trek={trek} />

      {/* 2. Story Section */}
      <TrekStorySection trek={trek} />

      {/* 3. Specs Grid */}
      <TrekSpecsGrid trek={trek} />

      {/* 4. Route Timeline */}
      <RouteTimelineVisual trek={trek} />

      {/* 5. Guide Card */}
      <GuideCardExpanded guide={guide} />

      {/* 6. Reviews Carousel */}
      <section className="py-20 px-6 sm:px-8 bg-[#F3F8F4]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#1F4D3A] text-center mb-12">
            Real Trekker Stories
          </h2>
          <ReviewsCarousel reviews={reviews} autoScroll={true} />
        </div>
      </section>

      {/* 7. Pricing & Value */}
      <PricingCardUrgency trek={trek} />

      {/* 8. Seat Availability Bar (Sticky) */}
      <SeatAvailabilityBar batch={nextBatch} trek={trek} />

      {/* 9. Inclusions/Exclusions */}
      {/* ... existing code ... */}

      {/* 10. Final CTA */}
      <FinalCTABlock trek={trek} />

      {/* Mobile CTA */}
      <StickyMobileCTA trekName={trek.name} />
    </main>
  );
}
```

---

## BOOKING FLOW INTEGRATION

Create complete booking page in `app/booking/[trekId]/page.tsx`:

```tsx
'use client';

import { useState } from 'react';
import { BookingProvider } from '@/lib/context/booking-context';
import { BookingStepper } from '@/components/booking/booking-stepper';
import { DateSelectorCalendar } from '@/components/booking/date-selector-calendar';
import { TrekkerForm } from '@/components/booking/trekker-form';
import { SafetyChecklist } from '@/components/booking/safety-checklist';
import { AddOnSelector } from '@/components/booking/add-on-selector';
import { PaymentSummaryCard } from '@/components/booking/payment-summary-card';
import { BookingSuccessScreen } from '@/components/booking/booking-success-screen';

export default function BookingPage({ params }) {
  const trek = getTrekById(params.trekId);
  const { step } = useBooking();

  return (
    <BookingProvider>
      <BookingStepper totalSteps={6} />
      
      <div className="min-h-screen bg-white py-12">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Form Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <DateSelectorCalendar 
                trek={trek} 
                onBatchSelect={() => moveToNextStep()} 
              />
            )}
            {step === 2 && <TrekkerForm />}
            {step === 3 && <SafetyChecklist />}
            {step === 4 && <AddOnSelector />}
            {step === 5 && <PaymentForm trek={trek} />}
            {step === 6 && (
              <BookingSuccessScreen 
                trek={trek} 
                bookingId={bookingId}
                trekkerName={formData.firstName}
                departureDate={selectedBatch.startDate}
              />
            )}
          </div>

          {/* Sticky Summary Card */}
          {step !== 6 && (
            <div className="lg:col-span-1">
              <PaymentSummaryCard 
                trek={trek}
                batch={selectedBatch}
                numberOfPeople={1}
                addOnTotal={calculateAddOnTotal()}
              />
            </div>
          )}
        </div>
      </div>
    </BookingProvider>
  );
}
```

---

## COMMUNITY PAGE INTEGRATION

Update `app/community/page.tsx`:

```tsx
import { ExplorerStoriesCard } from '@/components/community/explorer-stories-card';
import { TrailJournals } from '@/components/community/trail-journals-enhanced';

export default function CommunityPage() {
  const communityStories = fetchCommunityStories();
  const trailEntries = fetchTrailJournalEntries('kheerganga-trek');

  return (
    <main className="w-full">
      <CommunityHeroV2 />
      
      {/* Stories Grid */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#1F4D3A] mb-12">
            Explorer Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityStories.map(story => (
              <ExplorerStoriesCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Trail Journals */}
      <TrailJournals 
        trekName="Kheerganga: The Sacred Highland"
        entries={trailEntries}
      />

      <BelongingSection />
      <ShareStoryCTA />
      <CommunityCloseCTA />
    </main>
  );
}
```

---

## FAQ/TRUST HUB INTEGRATION

Update `app/faq-complete/page.tsx`:

```tsx
import { TrustCertifications } from '@/components/faq/trust-certifications';
import { GuideDirectory } from '@/components/faq/guide-directory';
import { FAQAccordion } from '@/components/faq/faq-accordion';

export default function FAQPage() {
  const guides = fetchGuides();
  const certifications = getCertificationList();

  return (
    <main className="w-full">
      {/* Hero */}
      <section className="py-20 bg-[#1F4D3A] text-white text-center">
        <h1 className="text-5xl font-playfair font-bold">
          Questions About Trekking?
        </h1>
      </section>

      {/* FAQ Accordion */}
      <FAQAccordion />

      {/* Trust & Certifications */}
      <TrustCertifications 
        teamCertifications={certifications}
      />

      {/* Guide Directory */}
      <GuideDirectory guides={guides} />
    </main>
  );
}
```

---

## ADVANCED FEATURES PAGES

### Waitlist Page

Create `app/treks/[id]/waitlist` or embedded in trek detail:

```tsx
import { WaitlistManagement } from '@/components/advanced-features/waitlist-management';

export default function WaitlistPage({ params }) {
  const trek = getTrekById(params.id);
  const nextBatch = getNextBatch(trek.id);

  return (
    <main className="min-h-screen bg-white">
      <WaitlistManagement 
        trekId={trek.id}
        trekName={trek.name}
        nextBatchDate={nextBatch.startDate}
      />
    </main>
  );
}
```

### Referral Program Page

Create `app/referral` or `/community/referral`:

```tsx
import { ReferralProgram } from '@/components/advanced-features/referral-program';

export default function ReferralPage({ user }) {
  return (
    <main className="min-h-screen bg-white">
      <ReferralProgram 
        userReferralCode={user.referralCode}
        userReferrals={user.referralCount}
        userEarnings={user.referralEarnings}
      />
    </main>
  );
}
```

### Achievements Page

Create `app/community/achievements`:

```tsx
import { CommunityAchievements } from '@/components/advanced-features/community-achievements';

export default function AchievementsPage({ user }) {
  const userBadges = getUserBadges(user.id);
  const allBadges = getAllBadges();

  return (
    <main className="min-h-screen bg-white">
      <CommunityAchievements 
        userBadges={userBadges}
        availableBadges={allBadges}
      />
    </main>
  );
}
```

---

## PROP INTERFACES REFERENCE

### Trek Detail Components

```tsx
// TrekHeroCinematic
interface TrekHeroCinematicProps {
  trek: Trek;
}

// RouteTimelineVisual
interface RouteTimelineVisualProps {
  trek: Trek;
}

// GuideCardExpanded
interface GuideCardExpandedProps {
  guide: GuideProfile;
}

// SeatAvailabilityBar
interface SeatAvailabilityBarProps {
  batch: Batch;
  trek: Trek;
}

// PricingCardUrgency
interface PricingCardUrgencyProps {
  trek: Trek;
}

// FinalCTABlock
interface FinalCTABlockProps {
  trek: Trek;
}
```

### Booking Components

```tsx
// DateSelectorCalendar
interface DateSelectorCalendarProps {
  trek: Trek;
  onBatchSelect: (batchId: string) => void;
}

// PaymentSummaryCard
interface PaymentSummaryCardProps {
  trek: Trek;
  batch: Batch;
  numberOfPeople: number;
  addOnTotal: number;
}

// BookingSuccessScreen
interface BookingSuccessScreenProps {
  trek: Trek;
  bookingId: string;
  trekkerName: string;
  departureDate: string;
}
```

### Community Components

```tsx
// ExplorerStoriesCard
interface ExplorerStoriesCardProps {
  story: CommunityStory;
}

// TrailJournals
interface TrailJournalsProps {
  trekName: string;
  entries: TrailEntry[];
}
```

### Advanced Feature Components

```tsx
// WaitlistManagement
interface WaitlistProps {
  trekId: string;
  trekName: string;
  nextBatchDate: string;
}

// ReferralProgram
interface ReferralProgramProps {
  userReferralCode?: string;
  userReferrals?: number;
  userEarnings?: number;
}

// CommunityAchievements
interface CommunityAchievementsProps {
  userBadges?: Badge[];
  availableBadges?: Badge[];
}
```

---

## ROUTING STRUCTURE RECOMMENDATION

```
app/
├── page.tsx (Home - existing)
├── treks/
│   ├── page.tsx (Trek listing - existing)
│   └── [id]/
│       ├── page.tsx (Trek detail with ALL 10 components)
│       └── waitlist/page.tsx (Waitlist management)
├── booking/
│   └── [trekId]/page.tsx (Complete 6-step booking)
├── community/
│   ├── page.tsx (Stories + journals + belonging)
│   ├── referral/page.tsx (Referral program)
│   └── achievements/page.tsx (Badges & leaderboard)
├── about/page.tsx (Existing)
└── faq-complete/page.tsx (FAQ + Trust + Guides)
```

---

## DATA FETCHING EXAMPLES

### Sample Data Hooks

```tsx
// Get trek with all details
async function getTrekById(id: string) {
  const trek = SAMPLE_TREKS.find(t => t.id === id);
  return {
    ...trek,
    batches: await fetchBatches(id),
    guide: await fetchGuide(trek.guides[0]),
    reviews: await fetchReviews(id),
  };
}

// Get community stories
async function fetchCommunityStories(limit = 12) {
  return await db.query(
    `SELECT * FROM community_stories 
     ORDER BY datePosted DESC 
     LIMIT $1`,
    [limit]
  );
}

// Get trail journal entries
async function fetchTrailJournalEntries(trekId: string) {
  return await db.query(
    `SELECT * FROM trail_journals 
     WHERE trekId = $1 
     ORDER BY day ASC`,
    [trekId]
  );
}
```

---

## STYLING NOTES

All components use Tailwind CSS with the custom color variables:
- `#1F4D3A` (Primary) - Use classes like `bg-[#1F4D3A]`, `text-[#1F4D3A]`
- `#E6A756` (Accent) - Use `bg-[#E6A756]`, `text-[#E6A756]`
- `#3F7A5C` (Secondary) - Use `text-[#3F7A5C]`, `border-[#3F7A5C]`
- `#F3F8F4` (Light BG) - Use `bg-[#F3F8F4]`

For consistency with existing components, maintain these patterns:
- Semantic HTML (h1, h2, h3, etc.)
- Rem-based spacing (py-20, px-6, gap-8, etc.)
- Responsive prefixes (md:, lg:, sm:)
- Hover states and transitions
- Focus states for accessibility

---

## NEXT: BACKEND INTEGRATION

After components are integrated, connect to:
1. Database for trek/batch data
2. Payment gateway (Razorpay)
3. Email service (SendGrid/SES)
4. WhatsApp API
5. Image storage (S3/Cloudinary)

Each component accepts props - ensure your data layer provides properly typed data.

---

**Ready to integrate? Start with Trek Detail page, then Booking Flow!**
