import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SAMPLE_TREKS } from '@/lib/constants';
import { BookingProvider } from '@/lib/context/booking-context';
import { BookingProgress } from '@/components/booking/booking-progress';
import { BookingContent } from '@/components/booking/booking-content';

interface BookingPageProps {
  params: Promise<{ trekId: string }>;
  searchParams: Promise<{ batch?: string }>;
}

export async function generateMetadata(props: BookingPageProps): Promise<Metadata> {
  const params = await props.params;
  const trek = SAMPLE_TREKS.find((t) => t.id === params.trekId);

  if (!trek) {
    return { title: 'Trek Not Found' };
  }

  return {
    title: `Book ${trek.name} | Trip Margadarshak`,
    description: `Complete your booking for ${trek.name}`,
  };
}

export function generateStaticParams() {
  return SAMPLE_TREKS.map((trek) => ({
    trekId: trek.id,
  }));
}

export default async function BookingPage(props: BookingPageProps) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const trek = SAMPLE_TREKS.find((t) => t.id === params.trekId);
  const batchId = searchParams.batch;

  if (!trek) {
    notFound();
  }

  const batch = trek.batches.find((b) => b.id === batchId) || trek.batches[0];

  if (!batch) {
    notFound();
  }

  return (
    <BookingProvider>
      <main className="min-h-screen bg-white">
        {/* Progress Bar */}
        <BookingProgress />

        {/* Content */}
        <div className="py-12 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <BookingContent trek={trek} batch={batch} />
            </div>

            {/* Sidebar Summary */}
            <div className="lg:col-span-1">
              {/* Import OrderSummary when needed */}
              <div className="sticky top-24 h-fit"></div>
            </div>
          </div>
        </div>
      </main>
    </BookingProvider>
  );
}
