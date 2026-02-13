'use client';

import Link from 'next/link';
import { BookOpen, MapPin } from 'lucide-react';

export function TrailJournals() {
  const journals = [
    {
      id: 1,
      title: 'Day 3: The Last Camp',
      author: 'Rohit Kapoor',
      trek: 'Kheerganga Trek',
      excerpt:
        'As we pitched camp at 2600m, the sky turned shades of purple and gold. My legs ached but my soul felt lighter than air. This is why we climb.',
      readTime: '5 min read',
      date: '3 weeks ago',
    },
    {
      id: 2,
      title: 'Conversations with Sonam',
      author: 'Meera Singh',
      trek: 'Markha Valley Trek',
      excerpt:
        'Our lead guide Sonam shared stories under the stars that made me forget everything else. His 20 years of mountaineering wisdom in simple sentences.',
      readTime: '8 min read',
      date: '1 month ago',
    },
    {
      id: 3,
      title: 'The Silent Herd',
      author: 'Vikram Desai',
      trek: 'Brahmagiri Trek',
      excerpt:
        'We watched 12 elephants cross our path in complete silence. Not a word was spoken. Just the sound of giant feet on earth and our collective awe.',
      readTime: '4 min read',
      date: '6 weeks ago',
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-8 bg-trek-dust/10 border-b border-trek-dust">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="font-playfair text-4xl font-bold text-trek-forest">Trail Journals</h2>
          <p className="text-slate-600 text-lg">
            Detailed recounts of trek days. Writers sharing their internal journey alongside their external adventure.
          </p>
        </div>

        {/* Journals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journals.map((journal) => (
            <Link
              key={journal.id}
              href="#"
              className="flex flex-col space-y-4 p-6 rounded-lg border border-trek-dust hover:border-trek-forest bg-white hover:shadow-lg transition-all group"
            >
              {/* Icon & Category */}
              <div className="flex items-center gap-2">
                <BookOpen size={20} className="text-trek-mist" />
                <span className="text-xs uppercase tracking-widest text-trek-mist font-bold">{journal.trek}</span>
              </div>

              {/* Title */}
              <h3 className="font-playfair text-xl font-bold text-trek-forest group-hover:text-trek-forest/80 transition-colors">
                {journal.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-700 leading-relaxed text-sm">"{journal.excerpt}"</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-trek-dust text-xs">
                <div className="space-y-1">
                  <p className="font-bold text-trek-forest">{journal.author}</p>
                  <p className="text-slate-500">{journal.date}</p>
                </div>
                <span className="text-slate-500">{journal.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Read More */}
        <div className="text-center pt-8 border-t border-trek-dust">
          <Link
            href="/community/journals"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-trek-forest text-trek-forest font-bold hover:bg-trek-dust transition-colors"
          >
            Read All Journals
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
