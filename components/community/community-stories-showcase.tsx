'use client';

import { COMMUNITY_STORIES } from '@/lib/data/community-stories';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { useState } from 'react';

export function CommunityStoriesShowcase() {
  const [likedStories, setLikedStories] = useState<string[]>([]);

  const toggleLike = (storyId: string) => {
    setLikedStories((prev) =>
      prev.includes(storyId) ? prev.filter((id) => id !== storyId) : [...prev, storyId]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-playfair font-bold text-[#1F4D3A] mb-4">
            Stories from Our Tribe
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Most arrive as individuals. Few leave that way. These are the transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMMUNITY_STORIES.map((story) => (
            <article
              key={story.id}
              className="rounded-lg border border-[#E8F0EB] overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-r from-[#F3F8F4] to-white border-b border-[#E8F0EB]">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-[#1F4D3A] mb-2">{story.title}</h3>
                  <p className="text-sm text-slate-600">
                    by {story.authorName}
                    {story.authorRole && <span> • {story.authorRole}</span>}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{story.trekName}</p>
                </div>

                {story.returnedAgain && (
                  <div className="inline-block px-3 py-1 bg-[#3F7A5C] text-white text-xs font-bold rounded-full">
                    ✓ Returned Again
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-slate-700 leading-relaxed line-clamp-3 mb-4">
                  {story.fullStory}
                </p>

                <a
                  href="#"
                  className="text-[#1F4D3A] font-semibold text-sm hover:underline"
                >
                  Read full story →
                </a>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-[#F3F8F4] border-t border-[#E8F0EB] flex items-center justify-between">
                <div className="flex gap-4">
                  <button
                    onClick={() => toggleLike(story.id)}
                    className="flex items-center gap-1 text-slate-600 hover:text-[#E6A756] transition-colors"
                  >
                    <Heart
                      size={18}
                      className={likedStories.includes(story.id) ? 'fill-[#E6A756]' : ''}
                    />
                    <span className="text-xs">{likedStories.includes(story.id) ? 'Loved' : 'Love'}</span>
                  </button>
                  <button className="flex items-center gap-1 text-slate-600 hover:text-[#1F4D3A] transition-colors">
                    <MessageCircle size={18} />
                    <span className="text-xs">Comment</span>
                  </button>
                </div>
                <button className="flex items-center gap-1 text-slate-600 hover:text-[#1F4D3A] transition-colors">
                  <Share2 size={18} />
                  <span className="text-xs">Share</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#share"
            className="inline-block px-8 py-4 bg-[#1F4D3A] text-white rounded-lg font-bold hover:bg-[#16382B] transition-colors"
          >
            Share Your Story
          </a>
        </div>
      </div>
    </section>
  );
}
