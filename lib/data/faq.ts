export interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  // Safety
  {
    category: 'Safety',
    question: 'What safety measures are in place?',
    answer: 'All guides are certified mountaineers with wilderness first responder training. We maintain 1:8 guide-to-trekker ratio. Daily weather briefings, real-time altitude monitoring, and emergency communication systems are standard. We have evacuation protocols and partnerships with medical facilities.'
  },
  {
    category: 'Safety',
    question: 'What happens if someone gets altitude sickness?',
    answer: 'Our guides are trained in recognizing AMS symptoms. Protocol: stop, hydrate, descend if necessary. We carry oxygen and medication. Prevention: slow acclimatization, proper hydration, and altitude training guides. 98% of our trekkers acclimatize successfully.'
  },
  {
    category: 'Safety',
    question: 'Do you have emergency services available?',
    answer: 'Yes. We have partnerships with mountain rescue teams, helipad access in critical areas, and satellite communication. Each trek carries first aid kits, emergency medicines, and communication devices. Our guides conduct emergency drills before every season.'
  },
  {
    category: 'Safety',
    question: 'What about women safety on treks?',
    answer: 'All our batches have female guides available upon request. We have female-only washroom areas, separate tents for women if preferred, and dedicated safety protocols. Zero tolerance for harassment—guaranteed by guide conduct code.'
  },

  // Fitness
  {
    category: 'Fitness',
    question: 'I\'m not very fit. Can I still trek?',
    answer: 'Absolutely. We have treks for all fitness levels—from beginner-friendly day treks to extreme altitude expeditions. Our guides pace according to the group. What matters is consistency, not speed. Many of our trekkers started as "non-athletes" and are now repeat adventurers.'
  },
  {
    category: 'Fitness',
    question: 'How much training should I do before trekking?',
    answer: 'Light preparation helps: 30 minutes daily walking for 4 weeks before trek. Stair climbing builds leg strength. But our guides prepare everyone on-trek. We have pre-trek preparation guides sent 30 days before departure.'
  },
  {
    category: 'Fitness',
    question: 'What if I\'m slow on the trek?',
    answer: 'Guides wait for the slowest person—always. No one is left behind. We believe trekking is about the experience, not speed. Many "slow" trekkers actually have the best conversations and observations.'
  },

  // Packing
  {
    category: 'Packing',
    question: 'What should I pack?',
    answer: 'We provide a detailed packing list 30 days before trek. Essential: comfortable trekking shoes, warm layers, rain gear, sunscreen, water bottle, basic medicines. We recommend not overpacking—carry only what you\'ll use. Most trekkers carry 8-12kg total.'
  },
  {
    category: 'Packing',
    question: 'Can I rent gear instead of buying?',
    answer: 'Yes. We offer gear rental packages: sleeping bags, trekking poles, rain gear, warm jackets. Rental rates are 10% of purchase price per trek. Quality is guaranteed.'
  },
  {
    category: 'Packing',
    question: 'What about medications and altitude sickness pills?',
    answer: 'Bring your regular medications. For altitude sickness prevention, we recommend consulting your doctor 2 weeks before. We carry Diamox and can guide dosage. Insurance covers most altitude-related medications.'
  },

  // Batches & Dates
  {
    category: 'Booking',
    question: 'When should I book?',
    answer: 'Popular dates book 2-3 months in advance. Early booking gives you better flexibility and group preference. But we maintain several "last-minute" slots for spontaneous adventurers. Current availability shown on trek pages.'
  },
  {
    category: 'Booking',
    question: 'Can I change my trek date after booking?',
    answer: 'Yes. Changes free up to 7 days before departure. After 7 days, Rs. 500 change fee. Cancellation beyond 7 days: 50% refund. Within 7 days: no refund (unless we reschedule due to weather).'
  },
  {
    category: 'Booking',
    question: 'What\'s the group size?',
    answer: 'Ideal group size: 8-12 trekkers per guide. Maximum: 15. This ensures personalized attention and community building. Smaller groups available on request (higher per-person rate).'
  },

  // Meals & Accommodation
  {
    category: 'Experience',
    question: 'What about food on treks?',
    answer: 'Meals prepared fresh at camps by local cooks. Mix of local cuisine and familiar vegetarian/non-vegetarian options. Dietary restrictions accommodated (vegan, gluten-free, etc. inform 2 weeks prior). Water purified daily.'
  },
  {
    category: 'Experience',
    question: 'Where do we sleep?',
    answer: 'Mix of homestays and tent camps depending on trek. Clean bedding, sleeping bags provided. Bathrooms: basic outdoor setup (composting toilets). Water: collected from mountain streams, purified. Not luxury camping, but clean and safe.'
  },
  {
    category: 'Experience',
    question: 'Is there internet/phone connectivity?',
    answer: 'Limited connectivity. Some base camps have 2G, most higher camps: no signal. This is intentional—digital detox is part of the trek. We recommend informing family before departure.'
  },

  // Community & Returning
  {
    category: 'Community',
    question: 'How do I stay connected with the trekking community?',
    answer: 'After trek, you join our community WhatsApp group, get access to our online portal with trekker stories and photos, and receive invites to offline meetups. We organize monthly community events in major cities.'
  },
  {
    category: 'Community',
    question: 'Can I share my trek story?',
    answer: 'Yes! We love hearing stories. Submit photos, videos, journal entries, or voice notes post-trek. Best stories get featured on our platform and website. Contributors get 20% discount on next trek.'
  },
  {
    category: 'Community',
    question: 'What\'s the returning trekker rate?',
    answer: '63% of our trekkers return for another trek within 2 years. Returning trekkers get 10% discount on next trek. Plus you\'re matched with friends from previous treks when possible.'
  },

  // Refunds & Cancellations
  {
    category: 'Policies',
    question: 'What if trek is cancelled due to weather?',
    answer: 'Full refund or reschedule at no charge. We prioritize safety over schedule. If weather deteriorates mid-trek, we descend and reschedule the remainder.'
  },
  {
    category: 'Policies',
    question: 'What insurance do you recommend?',
    answer: 'Standard travel insurance (Rs. 500-2000 per trek) covers medical emergencies and evacuation. We have partnerships with ICICI and Bharati AXA for preferential rates. Insurance is optional but highly recommended.'
  },
  {
    category: 'Policies',
    question: 'Do you offer refunds?',
    answer: '> 7 days before: 50% refund. 7 days before: 25% refund. < 3 days: no refund (unless we reschedule). Refunds processed within 10 days.'
  }
];

export const FAQ_CATEGORIES = Array.from(new Set(FAQ_DATA.map(item => item.category)));
