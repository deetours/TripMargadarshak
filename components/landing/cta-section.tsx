'use client';

import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';

export function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 px-6 sm:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Main CTA */}
          <div className="space-y-8">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-trek-forest leading-tight">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Browse our upcoming treks, read stories from past explorers, and book your next unforgettable journey.
            </p>
            <Link
              href="/treks"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-trek-forest text-white font-medium hover:bg-trek-forest/90 transition-colors w-full md:w-auto"
            >
              Explore All Treks
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Right: Email Signup */}
          <div className="space-y-6 p-8 rounded-lg border border-trek-dust bg-trek-dust/10">
            <h3 className="font-playfair text-2xl font-bold text-trek-forest">
              Stay Updated
            </h3>
            <p className="text-slate-600">
              Get notified about new treks, community stories, and special offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-trek-dust focus-within:border-trek-forest transition-colors">
                <Mail size={20} className="text-trek-mist flex-shrink-0" />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 outline-none text-slate-900 placeholder:text-slate-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-trek-forest text-white font-medium hover:bg-trek-forest/90 transition-colors"
              >
                {submitted ? 'Thanks for subscribing!' : 'Subscribe'}
              </button>
            </form>
            <p className="text-xs text-slate-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom: Divider and additional info */}
        <div className="border-t border-trek-dust mt-16 pt-12 text-center space-y-4">
          <p className="text-slate-600">
            Questions? <span className="text-trek-forest font-medium">Contact our team</span> for personalized recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}
