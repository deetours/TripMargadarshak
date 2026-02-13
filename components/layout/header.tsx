'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-2xl font-playfair font-bold text-[#1F4D3A] group-hover:text-[#3F7A5C] transition-colors">
            Trip Margadarshak
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <Link href="/" className="text-sm font-medium text-slate-700 nav-underline">
            Home
          </Link>
          <Link href="/treks" className="text-sm font-medium text-slate-700 nav-underline">
            Treks
          </Link>
          <Link href="/community" className="text-sm font-medium text-slate-700 nav-underline">
            Community
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-700 nav-underline">
            About
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/treks"
            className="inline-block px-6 py-2 rounded-lg bg-[#1F4D3A] text-white text-sm font-medium hover:bg-[#16382B] transition-colors green-glow"
          >
            Explore Treks
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-trek-dust bg-white md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            <Link href="/" className="text-sm font-medium text-slate-700 hover:text-trek-forest">
              Home
            </Link>
            <Link href="/treks" className="text-sm font-medium text-slate-700 hover:text-trek-forest">
              Treks
            </Link>
            <Link href="/community" className="text-sm font-medium text-slate-700 hover:text-trek-forest">
              Community
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-trek-forest">
              About
            </Link>
            <Link
              href="/treks"
              className="inline-block px-6 py-2 rounded-lg bg-trek-forest text-white text-sm font-medium hover:bg-trek-forest/90"
            >
              Explore Treks
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
