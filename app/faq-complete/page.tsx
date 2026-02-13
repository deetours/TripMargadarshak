import { Metadata } from 'next';
import { FAQAccordion } from '@/components/faq/faq-accordion';

export const metadata: Metadata = {
  title: 'FAQ & Trust Hub | Trip Margadarshak',
  description: 'Answers to common questions about our treks, safety, fitness requirements, and more.',
};

export default function FAQPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-[#1F4D3A] text-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
          <h1 className="text-5xl font-playfair font-bold mb-6">
            Questions About Trekking?
          </h1>
          <p className="text-xl text-white/80">
            We've led thousands of trekkers. We know every concern. Here are honest answers.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQAccordion />

      {/* Trust Elements */}
      <section className="py-20 bg-[#F3F8F4]">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <h2 className="text-4xl font-playfair font-bold text-[#1F4D3A] text-center mb-12">
            Why You Can Trust Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#E6A756] mb-2">2,400+</p>
              <p className="text-slate-700 font-semibold">Successful Treks</p>
              <p className="text-sm text-slate-600 mt-2">Zero major incidents</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#E6A756] mb-2">15+</p>
              <p className="text-slate-700 font-semibold">Expert Guides</p>
              <p className="text-sm text-slate-600 mt-2">Average 14 years experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#E6A756] mb-2">63%</p>
              <p className="text-slate-700 font-semibold">Return Rate</p>
              <p className="text-sm text-slate-600 mt-2">Within 2 years</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#E6A756] mb-2">4.8/5</p>
              <p className="text-slate-700 font-semibold">Average Rating</p>
              <p className="text-sm text-slate-600 mt-2">From 1,200+ reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Philosophy */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <h2 className="text-3xl font-playfair font-bold text-[#1F4D3A] mb-8">
            Our Safety Philosophy
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#1F4D3A] mb-3">Prevention Over Cure</h3>
              <p className="text-slate-700">
                We prevent problems through proper acclimatization, weather monitoring, and guide training. Not through fixing things after they go wrong.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1F4D3A] mb-3">Professional Standards</h3>
              <p className="text-slate-700">
                All guides hold international certifications (IFMGA, ACMG, or equivalent). We maintain 1:8 guide-to-trekker ratio. Daily health checks on every trekker. Satellite communication in all remote areas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1F4D3A] mb-3">Transparent Communication</h3>
              <p className="text-slate-700">
                We tell you what could go wrong. We show you our protocols. We answer every safety question honestly. No sugar-coating. No promises we can't keep.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1F4D3A] mb-3">Continuous Improvement</h3>
              <p className="text-slate-700">
                We debrief after every trek. We update protocols based on field data. We invest in training every year. Safety standards aren't static—they evolve as we learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#1F4D3A] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Still unsure? Let's talk.
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Schedule a 15-minute call with one of our guides. No sales pitch. Just honest conversation.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#E6A756] text-[#1F4D3A] rounded-lg font-bold hover:bg-white transition-colors"
          >
            Book a Call
          </a>
        </div>
      </section>
    </div>
  );
}
