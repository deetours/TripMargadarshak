'use client';

import { useEffect, useState } from 'react';

export function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const scrollPercent = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 bg-[#E8F0EB] z-50">
      <div
        className="h-full bg-[#E6A756] transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
