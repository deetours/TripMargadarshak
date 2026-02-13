'use client';

import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1F4D3A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-playfair font-bold text-white mb-4">Trip Margadarshak</h3>
            <p className="text-sm text-[#DCE9E2] leading-relaxed">
              Expedition-led trekking across India's most meaningful landscapes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/treks" className="text-sm text-[#DCE9E2] hover:text-white transition-colors">
                  All Treks
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-[#DCE9E2] hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[#DCE9E2] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#DCE9E2] hover:text-white transition-colors">
                  Our Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Information</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/faq" className="text-sm text-[#DCE9E2] hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#DCE9E2] hover:text-white transition-colors">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#DCE9E2] hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#DCE9E2] hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Get in Touch</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#E6A756] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#DCE9E2]">+91 (0) 1892-XXX-XXX</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#E6A756] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#DCE9E2]">hello@tripmargadarshak.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#E6A756] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#DCE9E2]">Himachal Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#3F7A5C] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#DCE9E2]">© 2026 Trip Margadarshak. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-[#DCE9E2] hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                <circle cx="12" cy="12" r="3.6" />
              </svg>
            </a>
            <a href="#" className="text-[#DCE9E2] hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
