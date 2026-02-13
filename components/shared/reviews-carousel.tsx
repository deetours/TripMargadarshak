'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Review } from '@/lib/data/reviews';

interface ReviewsCarouselProps {
  reviews: Review[];
  autoScroll?: boolean;
}

export function ReviewsCarousel({ reviews, autoScroll = true }: ReviewsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!autoScroll || isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoScroll, isPaused, reviews.length]);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  if (!reviews.length) return null;

  const review = reviews[current];

  return (
    <div
      className="relative bg-white border border-[#E8F0EB] rounded-lg p-8 md:p-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-[#E6A756] text-[#E6A756]" />
        ))}
      </div>

      {/* Review Body */}
      <p className="text-lg text-slate-700 italic mb-6 line-clamp-4">"{review.body}"</p>

      {/* Author */}
      <div className="mb-6">
        <p className="font-semibold text-[#1F4D3A]">{review.trekkerName}</p>
        <p className="text-sm text-slate-600">{review.trekkerRole}</p>
        {review.guideName && (
          <p className="text-sm text-slate-500 mt-1">Guided by {review.guideName}</p>
        )}
      </div>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2 mb-6">
        {review.highlights.map((highlight, i) => (
          <span
            key={i}
            className="text-xs bg-[#F3F8F4] text-[#1F4D3A] px-3 py-1 rounded-full"
          >
            {highlight}
          </span>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="p-2 hover:bg-[#F3F8F4] rounded-lg transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} className="text-[#1F4D3A]" />
          </button>
          <button
            onClick={next}
            className="p-2 hover:bg-[#F3F8F4] rounded-lg transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={20} className="text-[#1F4D3A]" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? 'bg-[#1F4D3A] w-8'
                  : 'bg-[#E8F0EB] w-2 hover:bg-[#3F7A5C]'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-sm text-slate-500">
          {current + 1} / {reviews.length}
        </div>
      </div>
    </div>
  );
}
