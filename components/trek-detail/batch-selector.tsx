'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Trek } from '@/lib/types';
import { Calendar, Users, ArrowRight } from 'lucide-react';

interface BatchSelectorProps {
  trek: Trek;
}

export function BatchSelector({ trek }: BatchSelectorProps) {
  const [selectedBatch, setSelectedBatch] = useState<string | null>(trek.batches[0]?.id || null);

  const selected = trek.batches.find((b) => b.id === selectedBatch);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return { text: 'Open', color: 'bg-green-100 text-green-800' };
      case 'closing-soon':
        return { text: 'Last Spots', color: 'bg-orange-100 text-orange-800' };
      case 'full':
        return { text: 'Full', color: 'bg-red-100 text-red-800' };
      default:
        return { text: status, color: 'bg-trek-dust text-trek-forest' };
    }
  };

  return (
    <section className="py-16 px-6 sm:px-8 border-b border-trek-dust bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="font-playfair text-3xl font-bold text-trek-forest">
            Choose Your Batch
          </h2>
          <p className="text-slate-600">
            Select your preferred dates and group size to get started.
          </p>
        </div>

        {/* Batches */}
        {trek.batches.length === 0 ? (
          <div className="p-6 rounded-lg bg-trek-dust/20 text-center space-y-2">
            <p className="text-slate-600">No batches available at the moment.</p>
            <p className="text-sm text-slate-500">Check back soon for upcoming batches!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {trek.batches.map((batch) => (
              <div
                key={batch.id}
                onClick={() => setSelectedBatch(batch.id)}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedBatch === batch.id
                    ? 'border-trek-forest bg-trek-dust/20'
                    : 'border-trek-dust hover:border-trek-forest/30'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  {/* Dates */}
                  <div className="flex items-start gap-3">
                    <Calendar size={20} className="text-trek-mist mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs uppercase tracking-widest text-trek-mist font-bold">Dates</div>
                      <div className="font-bold text-trek-forest">
                        {new Date(batch.startDate).toLocaleDateString('en-IN', {
                          month: 'short',
                          day: 'numeric',
                        })}{' '}
                        -{' '}
                        {new Date(batch.endDate).toLocaleDateString('en-IN', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-start gap-3">
                    <Users size={20} className="text-trek-mist mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs uppercase tracking-widest text-trek-mist font-bold">Spots</div>
                      <div className="font-bold text-trek-forest">
                        {batch.availableSlots}/{batch.totalSlots} available
                      </div>
                    </div>
                  </div>

                  {/* Lead Guide */}
                  {batch.leadGuide && (
                    <div>
                      <div className="text-xs uppercase tracking-widest text-trek-mist font-bold">Lead Guide</div>
                      <div className="font-bold text-trek-forest">{batch.leadGuide}</div>
                    </div>
                  )}

                  {/* Price */}
                  <div>
                    <div className="text-xs uppercase tracking-widest text-trek-mist font-bold">Price/Person</div>
                    <div className="font-bold text-trek-forest">₹{batch.pricePerPerson.toLocaleString()}</div>
                  </div>

                  {/* Status */}
                  <div className="flex justify-end">
                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${getStatusBadge(batch.status).color}`}>
                      {getStatusBadge(batch.status).text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Selected Batch Summary & CTA */}
        {selected && selected.status !== 'full' && (
          <div className="p-8 rounded-lg bg-trek-forest/10 border-2 border-trek-forest space-y-6">
            <div className="space-y-2">
              <h3 className="font-bold text-trek-forest text-lg">Ready to Book?</h3>
              <p className="text-slate-600">
                Complete your booking for {trek.name} on{' '}
                <span className="font-bold text-trek-forest">
                  {new Date(selected.startDate).toLocaleDateString('en-IN', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </p>
            </div>
            <Link
              href={`/booking/${trek.id}?batch=${selected.id}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-trek-forest text-white font-bold hover:bg-trek-forest/90 transition-colors w-full"
            >
              Continue to Booking
              <ArrowRight size={20} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
