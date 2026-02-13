# Trip Margadarshak - Cinematic Trekking Web Application

A premium trekking and expedition web application built with Next.js 16, TypeScript, and Tailwind CSS. Featuring cinematic storytelling, curated expedition experiences across India, and a community-driven platform for trekkers.

## Project Overview

Trip Margadarshak is a full-featured web application that combines:
- **Premium Trek Marketplace** - Curated trekking expeditions with detailed narratives
- **Booking System** - Multi-step booking flow with batch selection, fitness assessment, and payment
- **Community Hub** - Explorer stories, trail journals, and shared trek photos
- **Educational Content** - FAQ, safety information, and guide profiles

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4 with custom Trek color system
- **UI Components**: shadcn/ui
- **State Management**: React Context API
- **Fonts**: Playfair Display (headlines) + Inter (body)

## Design System

### Color Palette
- **Primary Forest**: `#1F4D3A` - Deep forest green (trek-forest)
- **Mist Green**: `#7FAF9B` - Accent and highlights (trek-mist)
- **Trail Dust**: `#E9EFEA` - Light backgrounds and borders (trek-dust)
- **Background**: `#FFFFFF` - Clean white
- **Text**: Slate grays for hierarchy

### Typography
- **Headlines**: Playfair Display (serif, editorial feel)
- **Body**: Inter (sans-serif, readable at all sizes)

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Landing page
│   ├── treks/
│   │   ├── page.tsx            # Trek listing page
│   │   └── [id]/
│   │       └── page.tsx        # Trek detail page
│   ├── booking/
│   │   └── [trekId]/
│   │       └── page.tsx        # Booking flow page
│   ├── community/
│   │   └── page.tsx            # Community hub
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── faq/
│   │   └── page.tsx            # FAQ page
│   ├── globals.css             # Global styles with Trek tokens
│   └── not-found.tsx           # 404 page
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Navigation header
│   │   └── footer.tsx          # Footer with links
│   ├── landing/
│   │   ├── hero-section.tsx
│   │   ├── chapters-section.tsx
│   │   ├── pause-section.tsx
│   │   ├── trust-section.tsx
│   │   └── cta-section.tsx
│   ├── treks/
│   │   ├── filter-bar.tsx      # Trek filtering
│   │   ├── trek-card.tsx       # Trek listing card
│   │   └── trek-grid.tsx       # Trek grid layout
│   ├── trek-detail/
│   │   ├── detail-hero.tsx
│   │   ├── story-section.tsx
│   │   ├── route-story.tsx     # Day-by-day itinerary
│   │   ├── challenge-section.tsx
│   │   ├── life-on-trail.tsx
│   │   ├── safety-section.tsx
│   │   └── batch-selector.tsx
│   ├── booking/
│   │   ├── booking-progress.tsx
│   │   ├── booking-content.tsx
│   │   ├── order-summary.tsx
│   │   ├── step-batch-select.tsx
│   │   ├── step-fitness.tsx
│   │   ├── step-gear-addons.tsx
│   │   ├── step-emergency-contact.tsx
│   │   └── step-payment.tsx
│   └── community/
│       ├── explorer-stories.tsx
│       ├── trail-journals.tsx
│       └── photo-gallery.tsx
├── lib/
│   ├── types.ts                # TypeScript types
│   ├── constants.ts            # Sample data
│   └── context/
│       ├── filter-context.tsx  # Trek filtering state
│       └── booking-context.tsx # Booking flow state
└── tailwind.config.ts          # Tailwind configuration
```

## Key Features

### 1. Landing Page
- Cinematic hero section with brand statement
- Three chapter categories (Hidden, Cultural, Expedition)
- Philosophy pause section
- Trust/credibility section with guide profiles
- Email subscription CTA

### 2. Trek Listing
- Filterable trek catalog by region, difficulty, terrain, altitude
- Real-time filtering with Context API
- Trek cards with key metrics (altitude, duration, group size, price)
- Status indicators (Open, Closing Soon, Full)

### 3. Trek Detail Pages
- Narrative-first approach with storytelling
- Day-by-day route storytelling with highlights
- Life on Trail section (accommodation, food, weather, communication)
- Safety protocols and guide information
- Batch selection for booking
- Inclusions/exclusions breakdown

### 4. Multi-Step Booking Flow
1. **Batch Selection** - Choose dates and number of participants
2. **Fitness Assessment** - Self-assess fitness level, provide trek experience
3. **Gear Addons** - Optional equipment rentals
4. **Contact Information** - Personal and emergency contact details
5. **Payment** - Order summary, cancellation policy, payment simulation

### 5. Community Hub
- **Explorer Stories** - Short-form trek recounts from trekkers
- **Trail Journals** - Long-form narratives and reflections
- **Photo Gallery** - User-generated trek photography

### 6. Additional Pages
- **About** - Mission, philosophy, guides, impact metrics
- **FAQ** - Comprehensive Q&A on general, fitness, logistics, booking, safety
- **404** - Mountain-themed error page

## Data Structure

### Trek Model
```typescript
Trek {
  id: string
  name: string
  region: TrekRegion
  season: TrekSeason[]
  difficulty: TrekDifficulty
  terrain: TrekTerrain[]
  maxAltitude: number
  duration: number (days)
  groupSize: number
  moodWord: string
  narrative: string
  whyShouldNotDo: string[]
  routeStory: RouteDay[]
  lifeOnTrail: LifeOnTrail
  safety: SafetyInfo
  images: string[]
  basePrice: number
  inclusions: string[]
  exclusions: string[]
  batches: Batch[]
}
```

## Sample Data

The application includes 3 sample treks:

1. **Kheerganga Trek** (Himachal Pradesh)
   - Difficulty: Moderate
   - Duration: 3 days
   - Max Altitude: 2,680m
   - Price: ₹8,999+

2. **Brahmagiri Trek** (Karnataka)
   - Difficulty: Easy
   - Duration: 2 days
   - Max Altitude: 1,608m
   - Price: ₹4,999+

3. **Markha Valley Trek** (Uttarakhand/Ladakh)
   - Difficulty: Extreme
   - Duration: 7 days
   - Max Altitude: 5,000m
   - Price: ₹24,999+

## State Management

### Filter Context
Manages trek listing filters (region, difficulty, terrain, altitude, duration).

### Booking Context
Manages multi-step booking state across 5 steps with validation.

## Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly navigation and forms
- Optimized for all screen sizes

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Screen reader optimized
- High contrast color palette
- Keyboard navigation support

## Getting Started

### Installation

```bash
# Clone or set up the project
cd v0-project

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

The application will be available at `http://localhost:3000`.

### Build for Production

```bash
pnpm build
pnpm start
```

## Future Enhancements

1. **Database Integration** - Connect to Supabase or similar for persistent data
2. **User Authentication** - Implement user accounts and booking history
3. **Real Payment Gateway** - Integrate Stripe or Razorpay
4. **Image Optimization** - Add actual trek images with Next.js Image component
5. **Email Notifications** - Confirmation emails and reminders
6. **Advanced Analytics** - Track user behavior and trek popularity
7. **Admin Dashboard** - Manage treks, bookings, and community content
8. **Real-time Chat** - Trekker communication before/after treks
9. **Review & Rating System** - Post-trek feedback from participants
10. **Accessibility Audit** - WCAG 2.1 AA compliance verification

## Performance

- Next.js automatic code splitting
- Optimized bundle size with tree-shaking
- CSS-in-JS via Tailwind (no runtime overhead)
- Static site generation where possible
- Image lazy loading ready

## SEO

- Meta tags on all pages
- Semantic HTML structure
- Open Graph tags for social sharing
- Sitemap-ready URL structure
- Mobile-friendly viewport configuration

## License

This is a proprietary project for Trip Margadarshak.

## Support

For questions or issues, contact the development team.
