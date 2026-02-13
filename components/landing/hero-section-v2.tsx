'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import Floating, { FloatingElement } from '@/components/ui/parallax-floating';

export function HeroSectionV2() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      '.floating-image',
      { opacity: [0, 1] },
      { duration: 0.6, delay: stagger(0.12) }
    );
  }, [animate]);

  const floatingImages = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
      depth: 0.5,
      width: 70,
      height: 70,
      top: "15%",
      left: "10%",
    },
    {
      src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=120&h=120&fit=crop",
      depth: 1.2,
      width: 90,
      height: 90,
      top: "18%",
      left: "30%",
    },
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=120&h=120&fit=crop",
      depth: 0.8,
      width: 80,
      height: 80,
      top: "12%",
      left: "65%",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=140&h=140&fit=crop",
      depth: 1.5,
      width: 100,
      height: 100,
      top: "25%",
      left: "85%",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=140&h=140&fit=crop",
      depth: 0.6,
      width: 85,
      height: 85,
      top: "65%",
      left: "5%",
    },
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=140&h=140&fit=crop",
      depth: 1.3,
      width: 95,
      height: 95,
      top: "72%",
      left: "80%",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden" ref={scope}>
      {/* Background image - layer 1 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/30791852/pexels-photo-30791852.jpeg)',
          zIndex: 0,
        }}
      />

      {/* Gradient overlay - layer 2, visible on top of image */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#1F4D3A]/65 via-[#3F7A5C]/50 to-[#1F4D3A]/70"
        style={{ zIndex: 1 }}
      />

      {/* Floating container - layer 3 */}
      <Floating sensitivity={-0.4} className="pointer-events-none" style={{ zIndex: 5 }}>
        {floatingImages.map((image, index) => (
          <FloatingElement
            key={index}
            depth={image.depth}
            className="floating-image pointer-events-auto"
            style={{
              position: 'absolute',
              top: image.top,
              left: image.left,
              zIndex: 10 + index,
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              style={{
                width: image.width,
                height: image.height,
              }}
            >
              <img
                src={image.src}
                alt="Trek"
                className="w-full h-full rounded-xl shadow-2xl object-cover"
              />
            </motion.div>
          </FloatingElement>
        ))}
      </Floating>

      {/* Content - layer 4 (on top) */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 sm:px-8 h-screen flex flex-col justify-center items-center text-center">
        {/* Main Headline */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight drop-shadow-lg">
            <span className="block">Some landscapes</span>
            <span className="block">don't welcome noise.</span>
            <span className="block text-[#E6A756]">Only footsteps.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-light drop-shadow">
            Small-group trekking expeditions designed for people who want depth, not distance.
            Walk where India still breathes untouched.
          </p>

          {/* Micro line */}
          <p className="text-sm text-[#E6A756] tracking-wider font-medium drop-shadow">
            EXPEDITION-GRADE • COMMUNITY-FOCUSED • RESPONSIBLY LED
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/treks"
            className="px-8 py-4 bg-[#E6A756] text-[#1F4D3A] rounded-lg font-medium text-lg hover:bg-[#D4922C] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Upcoming Treks
          </Link>
          <Link
            href="/community"
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium text-lg hover:bg-white/10 transition-all duration-300"
          >
            Watch Explorer Stories
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <svg className="w-6 h-6 text-[#E6A756]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
