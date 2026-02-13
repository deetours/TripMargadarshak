import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Trip Margadarshak',
  description: 'Frequently asked questions about our treks and booking process.',
};

export default function FAQPage() {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is the best season for trekking?',
          a: 'Different treks have different seasons. Generally, March-May (Spring) and September-November (Autumn) are ideal across most Indian regions. We specify the best seasons for each trek in its details.',
        },
        {
          q: 'Do I need prior trekking experience?',
          a: 'No! We have treks for all fitness levels. During booking, we assess your fitness level and provide appropriate pre-trek training recommendations.',
        },
        {
          q: 'How are groups formed?',
          a: 'We keep groups small (typically 8-12 people) to ensure personalized attention. Groups are formed based on fitness levels and trek difficulty to ensure everyone has a comfortable experience.',
        },
      ],
    },
    {
      category: 'Fitness & Health',
      questions: [
        {
          q: 'What fitness level do I need?',
          a: 'Each trek has different requirements. Easy treks need basic fitness (ability to walk 6-8 hours daily), while Extreme treks require advanced cardiovascular fitness and altitude experience.',
        },
        {
          q: 'What about altitude sickness?',
          a: 'We implement proper acclimatization protocols and monitor trekkers closely. Our guides carry oxygen and medicines. Descending is always prioritized if any symptoms appear.',
        },
        {
          q: 'Is training recommended before the trek?',
          a: 'Yes! For Challenging and Extreme treks, we recommend 4-8 weeks of training. We provide a customized training plan after booking.',
        },
      ],
    },
    {
      category: 'Logistics',
      questions: [
        {
          q: 'How do I reach the trek starting point?',
          a: 'We provide transportation from major cities/stations to the trek starting point. This is usually included in the trek cost.',
        },
        {
          q: 'What do you provide for accommodation?',
          a: 'Accommodation varies by trek—from mountain camps to village homestays. We ensure safe, clean facilities with hot meals prepared fresh.',
        },
        {
          q: 'Is there mobile connectivity on the trail?',
          a: 'Usually no mobile signal on the trail. We carry satellite phones for emergency communications. Daily check-ins with base camp are provided.',
        },
      ],
    },
    {
      category: 'Booking & Cancellation',
      questions: [
        {
          q: 'Can I cancel my booking?',
          a: 'Yes. Free cancellation up to 7 days before the trek. 50% refund if cancelled 3-7 days before. No refund within 3 days.',
        },
        {
          q: 'Do you offer group discounts?',
          a: 'Yes! Groups of 5 or more get 10% discount. Contact us for custom group packages.',
        },
        {
          q: 'Is trek insurance included?',
          a: 'Trek insurance is mandatory and included in the price. It covers altitude sickness, evacuation, and hospitalization up to ₹5,00,000.',
        },
      ],
    },
    {
      category: 'Safety',
      questions: [
        {
          q: 'What is your safety record?',
          a: 'We have maintained a 100% safety record over 8+ years and 25+ treks. All our guides are certified with wilderness first aid and emergency protocols.',
        },
        {
          q: 'What happens in case of emergency?',
          a: 'We have emergency protocols in place. Evacuation helicopters are on standby for extreme altitude treks. Real-time GPS tracking keeps families informed.',
        },
        {
          q: 'Are first aid kits available?',
          a: 'Yes. Comprehensive first aid kits are carried. Our guides are trained in wilderness medicine and emergency response.',
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 px-6 sm:px-8 bg-trek-dust/10 border-b border-trek-dust">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="font-playfair text-5xl font-bold text-trek-forest">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600">
            Find answers to common questions about our treks, booking process, and what to expect.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqs.map((section) => (
            <div key={section.category} className="space-y-8">
              <h2 className="font-playfair text-3xl font-bold text-trek-forest border-b-2 border-trek-forest pb-4">
                {section.category}
              </h2>

              <div className="space-y-6">
                {section.questions.map((item, idx) => (
                  <div key={idx} className="space-y-3 p-6 rounded-lg border border-trek-dust hover:border-trek-forest/30 transition-all">
                    <h3 className="font-bold text-trek-forest text-lg">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 sm:px-8 bg-trek-forest text-white text-center space-y-6">
        <h2 className="font-playfair text-3xl font-bold">Still have questions?</h2>
        <p className="text-lg text-white/90">
          Our team is here to help. Reach out anytime with your questions.
        </p>
        <button className="px-8 py-3 rounded-lg bg-white text-trek-forest font-bold hover:bg-trek-dust transition-colors">
          Contact Us
        </button>
      </section>
    </main>
  );
}
