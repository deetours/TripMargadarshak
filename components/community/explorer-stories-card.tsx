'use client';

import { CommunityStory } from '@/lib/types';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { useState } from 'react';

interface ExplorerStoriesCardProps {
  story: CommunityStory;
}

export function ExplorerStoriesCard({ story }: ExplorerStoriesCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-white border border-[#E8F0EB] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image */}
      {story.image && (
        <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#F3F8F4]">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Trek badge */}
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-[#E6A756] text-[#1F4D3A] text-xs font-bold rounded-full">
              {story.trekName}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E6A756] to-[#1F4D3A] flex-shrink-0" />
          <div className="flex-1">
            <p className="font-semibold text-[#1F4D3A] text-sm">
              {story.userName}
            </p>
            <p className="text-xs text-slate-600">
              {new Date(story.datePosted).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* Title and content */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[#1F4D3A] line-clamp-2">
            {story.title}
          </h3>
          <p className="text-slate-700 line-clamp-3 text-sm leading-relaxed">
            {story.content}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#E8F0EB]">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="flex items-center gap-2 text-sm transition-colors"
            >
              <Heart
                size={18}
                className={isLiked ? 'text-red-500 fill-red-500' : 'text-slate-400'}
              />
              <span
                className={isLiked ? 'text-red-500 font-semibold' : 'text-slate-600'}
              >
                {story.likes + (isLiked ? 1 : 0)}
              </span>
            </button>

            <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#3F7A5C] transition-colors">
              <MessageCircle size={18} />
              <span>Reply</span>
            </button>

            <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#E6A756] transition-colors">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className="transition-colors"
          >
            <Bookmark
              size={18}
              className={
                isSaved
                  ? 'text-[#E6A756] fill-[#E6A756]'
                  : 'text-slate-400 hover:text-[#E6A756]'
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}
