'use client';

import { Trophy, Zap, Heart, Compass, TrendingUp } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  criteria: string;
  unlockedDate?: string;
}

interface CommunityAchievementsProps {
  userBadges?: Badge[];
  availableBadges?: Badge[];
}

export function CommunityAchievements({
  userBadges = [
    {
      id: 'first-trek',
      name: 'Mountain Initiate',
      description: 'Completed your first trek',
      icon: '🥾',
      rarity: 'common',
      criteria: 'Complete 1 trek',
      unlockedDate: '2024-08-15',
    },
    {
      id: 'altitude-master',
      name: 'Altitude Veteran',
      description: 'Summited 3+ peaks above 4000m',
      icon: '🏔️',
      rarity: 'epic',
      criteria: 'Complete 3 treks above 4000m',
      unlockedDate: '2024-12-20',
    },
  ],
  availableBadges = [
    {
      id: 'community-maker',
      name: 'Community Builder',
      description: 'Refer 5+ friends to Trip Margadarshak',
      icon: '👥',
      rarity: 'rare',
      criteria: 'Refer 5 friends',
    },
    {
      id: 'story-teller',
      name: 'Tale Weaver',
      description: 'Share 3+ trek stories in community',
      icon: '📖',
      rarity: 'rare',
      criteria: 'Post 3 stories',
    },
    {
      id: 'photo-artist',
      name: 'Visual Storyteller',
      description: 'Get 100+ likes on trail photos',
      icon: '📸',
      rarity: 'rare',
      criteria: '100 photo likes',
    },
    {
      id: 'seasonal-explorer',
      name: 'All-Season Trekker',
      description: 'Trek in all 4 seasons',
      icon: '🌍',
      rarity: 'epic',
      criteria: 'Trek in Spring, Summer, Fall, Winter',
    },
    {
      id: 'guide-approved',
      name: 'Guide\'s Favorite',
      description: 'Nominated by a guide as exceptional trekker',
      icon: '⭐',
      rarity: 'epic',
      criteria: 'Guide nomination',
    },
    {
      id: 'explorer-master',
      name: 'Mountain Master',
      description: 'Complete 10+ treks',
      icon: '🗺️',
      rarity: 'legendary',
      criteria: 'Complete 10 treks',
    },
  ],
}: CommunityAchievementsProps) {
  const rarityColors = {
    common: 'bg-slate-100 border-slate-300 text-slate-700',
    rare: 'bg-blue-100 border-blue-400 text-blue-900',
    epic: 'bg-purple-100 border-purple-400 text-purple-900',
    legendary: 'bg-yellow-100 border-yellow-400 text-yellow-900',
  };

  const rarityGlow = {
    common: 'shadow-sm',
    rare: 'shadow-lg shadow-blue-200',
    epic: 'shadow-lg shadow-purple-200',
    legendary: 'shadow-xl shadow-yellow-200',
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#F3F8F4] to-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#E6A756] font-medium tracking-widest text-sm">
            ACHIEVEMENTS & BADGES
          </p>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-[#1F4D3A]">
            Collect stories. Earn badges. Build legacy.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every milestone on the mountains is a badge earned. Share your achievements with the community.
          </p>
        </div>

        {/* User Badges Section */}
        {userBadges && userBadges.length > 0 && (
          <div className="mb-20 space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1F4D3A] mb-2">
                Your Achievements
              </h3>
              <p className="text-slate-600">
                {userBadges.length} badges earned • Keep trekking to unlock more
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {userBadges.map((badge) => (
                <div
                  key={badge.id}
                  className={`relative border-2 rounded-lg p-8 transition-all ${rarityColors[badge.rarity]} ${rarityGlow[badge.rarity]}`}
                >
                  {/* Rarity indicator */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-white/50 rounded text-xs font-bold uppercase">
                    {badge.rarity}
                  </div>

                  {/* Badge content */}
                  <div className="space-y-4">
                    <div className="text-6xl">{badge.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{badge.name}</h4>
                      <p className="text-sm opacity-80">{badge.description}</p>
                    </div>
                    {badge.unlockedDate && (
                      <div className="pt-4 border-t border-current border-opacity-30">
                        <p className="text-xs font-semibold opacity-70">
                          Unlocked {new Date(badge.unlockedDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Available Badges Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#1F4D3A] mb-2">
              Unlock More Badges
            </h3>
            <p className="text-slate-600">
              {availableBadges.length - (userBadges?.length || 0)} badges waiting for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableBadges.map((badge) => {
              const isUnlocked = userBadges?.some((b) => b.id === badge.id);

              return (
                <div
                  key={badge.id}
                  className={`relative border-2 rounded-lg p-6 transition-all group cursor-pointer ${
                    isUnlocked
                      ? `${rarityColors[badge.rarity]} ${rarityGlow[badge.rarity]}`
                      : 'border-[#E8F0EB] bg-white hover:border-[#E6A756] opacity-75'
                  }`}
                >
                  {/* Lock overlay if not unlocked */}
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                      <p className="text-white text-3xl">🔒</p>
                    </div>
                  )}

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="text-5xl opacity-75 group-hover:opacity-100 transition-opacity">
                      {badge.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{badge.name}</h4>
                      <p className="text-sm opacity-80">{badge.description}</p>
                    </div>

                    {/* Progress or unlock criteria */}
                    <div className="pt-3 border-t border-current border-opacity-20">
                      <p className="text-xs font-semibold opacity-70">
                        {isUnlocked ? '✓ Unlocked' : `To unlock: ${badge.criteria}`}
                      </p>
                    </div>
                  </div>

                  {/* Rarity tag */}
                  <div className="absolute top-2 right-2 text-xs font-bold px-2 py-1 bg-white/30 rounded backdrop-blur-sm">
                    {badge.rarity}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Badge Benefits */}
        <div className="mt-20 bg-white border border-[#E8F0EB] rounded-lg p-12">
          <h3 className="text-2xl font-bold text-[#1F4D3A] text-center mb-12">
            Badge Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎖️',
                title: 'Profile Showcase',
                desc: 'Display badges on your profile and trek stories',
              },
              {
                icon: '💰',
                title: 'Special Discounts',
                desc: 'Unlock exclusive offers and early-bird pricing',
              },
              {
                icon: '👑',
                title: 'Community Recognition',
                desc: 'Featured in monthly highlights and leaderboards',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl mb-3">{benefit.icon}</p>
                <h4 className="font-bold text-[#1F4D3A] mb-2">{benefit.title}</h4>
                <p className="text-sm text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard teaser */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#1F4D3A] mb-4">
            Mountain Masters Leaderboard
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            See where you stand among our community. Earn badges faster, climb the leaderboard, unlock VIP perks.
          </p>
          <button className="px-8 py-3 bg-[#1F4D3A] text-white rounded-lg font-semibold hover:bg-[#16382B] transition-colors">
            View Leaderboard
          </button>
        </div>
      </div>
    </section>
  );
}
