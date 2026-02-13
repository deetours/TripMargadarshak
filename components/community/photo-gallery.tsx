'use client';

import { Heart, MessageCircle } from 'lucide-react';

export function PhotoGallery() {
  const photos = [
    {
      id: 1,
      photographer: 'Aisha Khan',
      trek: 'Kheerganga Trek',
      caption: 'Golden hour at the hot springs. Nature\'s palette.',
      likes: 892,
      comments: 67,
    },
    {
      id: 2,
      photographer: 'Sanjay Reddy',
      trek: 'Markha Valley Trek',
      caption: 'A moment of solitude at 4800m.',
      likes: 654,
      comments: 43,
    },
    {
      id: 3,
      photographer: 'Divya Iyer',
      trek: 'Brahmagiri Trek',
      caption: 'The forest whispers its secrets to those who listen.',
      likes: 1205,
      comments: 98,
    },
    {
      id: 4,
      photographer: 'Karan Verma',
      trek: 'Kheerganga Trek',
      caption: 'Rhododendrons in full bloom. Spring\'s masterpiece.',
      likes: 743,
      comments: 52,
    },
    {
      id: 5,
      photographer: 'Sneha Deshmukh',
      trek: 'Markha Valley Trek',
      caption: 'Sunrise above the clouds. Worth every step.',
      likes: 1456,
      comments: 112,
    },
    {
      id: 6,
      photographer: 'Aryan Bhat',
      trek: 'Brahmagiri Trek',
      caption: 'Wildlife at home. A privilege to witness.',
      likes: 589,
      comments: 38,
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-8 bg-white border-b border-trek-dust">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="font-playfair text-4xl font-bold text-trek-forest">Trek Moments</h2>
          <p className="text-slate-600 text-lg">
            Captured moments from our community. Every photo tells a story of discovery and wonder.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group rounded-lg overflow-hidden border border-trek-dust hover:border-trek-forest hover:shadow-lg transition-all bg-trek-dust flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="relative w-full h-64 bg-gradient-to-br from-trek-forest/20 to-trek-mist/20 flex items-center justify-center overflow-hidden group-hover:from-trek-forest/30 group-hover:to-trek-mist/30 transition-all">
                <div className="text-trek-forest/40 text-center space-y-2">
                  <div className="text-5xl">📷</div>
                  <p className="text-xs uppercase tracking-widest font-bold">{photo.trek}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-4 space-y-3">
                <div>
                  <p className="text-sm font-bold text-trek-forest">{photo.photographer}</p>
                  <p className="text-xs text-slate-500">@{photo.photographer.toLowerCase().replace(' ', '_')}</p>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed">"{photo.caption}"</p>

                {/* Engagement */}
                <div className="flex items-center gap-4 pt-3 border-t border-trek-dust mt-auto">
                  <button className="flex items-center gap-1 text-slate-600 hover:text-red-500 transition-colors">
                    <Heart size={16} />
                    <span className="text-xs">{photo.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-slate-600 hover:text-trek-forest transition-colors">
                    <MessageCircle size={16} />
                    <span className="text-xs">{photo.comments}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-trek-dust">
          <p className="text-slate-600 mb-4">Have photos to share? Inspire our community.</p>
          <button className="px-8 py-3 rounded-lg bg-trek-forest text-white font-bold hover:bg-trek-forest/90 transition-colors">
            Upload Your Photos
          </button>
        </div>
      </div>
    </section>
  );
}
