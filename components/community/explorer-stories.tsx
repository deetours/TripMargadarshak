'use client';

import { Heart, Share2 } from 'lucide-react';

export function ExplorerStories() {
  const stories = [
    {
      id: 1,
      name: 'Priya Sharma',
      trek: 'Kheerganga Trek',
      title: 'Life-Changing Heights',
      content:
        'The moment we reached the hot springs, everything changed for me. It wasn\'t just about the altitude—it was about finding myself in silence.',
      date: '2 weeks ago',
      likes: 247,
      shares: 18,
    },
    {
      id: 2,
      name: 'Arjun Patel',
      trek: 'Brahmagiri Trek',
      title: 'Where Elephants Walk',
      content:
        'Seeing the herd cross our path was surreal. Our guide Suresh shared stories of these magnificent creatures that made me feel like part of their world.',
      date: '1 month ago',
      likes: 412,
      shares: 45,
    },
    {
      id: 3,
      name: 'Ananya Gupta',
      trek: 'Markha Valley Trek',
      title: 'Beyond the Clouds',
      content:
        'High altitude. Thin air. But the thickest bonds we made. Trekking with strangers who became friends is something words cannot capture.',
      date: '6 weeks ago',
      likes: 589,
      shares: 92,
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-8 bg-white border-b border-trek-dust">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="font-playfair text-4xl font-bold text-trek-forest">Explorer Stories</h2>
          <p className="text-slate-600 text-lg">
            Real voices from our trekking community. These are stories of transformation, friendship, and discovery.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex flex-col space-y-4 p-6 rounded-lg border border-trek-dust hover:border-trek-forest/30 hover:shadow-lg transition-all bg-white group"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-trek-forest">{story.name}</h3>
                  <p className="text-xs text-slate-500">{story.trek}</p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2 flex-grow">
                <h4 className="font-playfair text-lg font-bold text-trek-forest group-hover:text-trek-forest/80 transition-colors">
                  {story.title}
                </h4>
                <p className="text-slate-700 leading-relaxed text-sm">"{story.content}"</p>
              </div>

              {/* Engagement */}
              <div className="flex items-center justify-between pt-4 border-t border-trek-dust text-sm">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-slate-600 hover:text-red-500 transition-colors">
                    <Heart size={16} />
                    <span>{story.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-slate-600 hover:text-trek-forest transition-colors">
                    <Share2 size={16} />
                    <span>{story.shares}</span>
                  </button>
                </div>
                <span className="text-xs text-slate-500">{story.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-trek-dust">
          <p className="text-slate-600 mb-4">Have a trek story to share?</p>
          <button className="px-8 py-3 rounded-lg bg-trek-forest text-white font-bold hover:bg-trek-forest/90 transition-colors">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
}
