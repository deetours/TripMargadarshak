'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface StickyMobileCTAProps {
  trekId?: string;
  label?: string;
  message?: string;
}

export function StickyMobileCTA({ 
  trekId = '', 
  label = 'Book Now',
  message = 'Ready to climb?'
}: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-white border-t border-[#E8F0EB] shadow-lg">
      <div className="flex items-center justify-between gap-3 p-3">
        <div className="flex-1">
          <p className="text-xs text-slate-600">{message}</p>
          <p className="text-sm font-semibold text-[#1F4D3A]">Join the tribe</p>
        </div>
        
        <Link
          href={trekId ? `/booking/${trekId}` : '/treks'}
          className="px-4 py-2 bg-[#1F4D3A] text-white rounded-lg text-sm font-medium hover:bg-[#16382B] transition-colors whitespace-nowrap"
        >
          {label}
        </Link>
        
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
