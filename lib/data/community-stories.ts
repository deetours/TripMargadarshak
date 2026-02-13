export interface CommunityStory {
  id: string;
  authorName: string;
  authorRole?: string;
  trekName: string;
  title: string;
  excerpt: string;
  fullStory: string;
  photoUrls?: string[];
  date: string;
  returnedAgain: boolean;
}

export const COMMUNITY_STORIES: CommunityStory[] = [
  {
    id: 'story-1',
    authorName: 'Anjali Desai',
    authorRole: 'Software Engineer',
    trekName: 'Kheerganga',
    title: 'Finding myself where the path ended',
    excerpt: 'I came as a runner running from something. I left as someone running towards something.',
    fullStory: `Three years of coding, meetings, and performance reviews had made me forget what felt real. I booked Kheerganga on a whim—didn't even tell my parents.

Day one felt like punishment. My legs hated me. My lungs cursed me. But the guide, Rajesh, moved beside me quietly. No pep talks. No "you can do it." Just presence.

By day two, I stopped looking at my watch. By day three, I didn't want to come down.

The summit wasn't the highest point. It was when I cried without knowing why, and a stranger held my shoulder and said nothing.

I returned to my job, but I didn't return to my life. I joined the community. I'm bringing my sister next season.`,
    date: '2024-10-20',
    returnedAgain: true
  },
  {
    id: 'story-2',
    authorName: 'Rohan Menon',
    authorRole: 'Banking Executive',
    trekName: 'Kheerganga',
    title: 'The silence I was searching for',
    excerpt: 'Mountains don\'t tell you what to think. They teach you how to listen.',
    fullStory: `Took a sabbatical. My therapist suggested "something physically challenging." I took it as a hint to finally deal with my anxiety.

Kheerganga wasn't "challenging" in the way I expected. Yes, it was uphill. Yes, my knees felt it. But the real challenge was stopping.

Stopping my mind. Stopping my phone. Stopping the need to be productive.

On the second night, sitting by the fire, our guide told stories of the mountains. Not conquering them. Living with them. Learning from them.

I realized my anxiety wasn't a problem to solve. It was a signal to listen to.

The mountain whispered: "You don't need to fix yourself. You need to befriend yourself."

I'm not cured. But I'm different. Better different.`,
    date: '2024-09-15',
    returnedAgain: false
  },
  {
    id: 'story-3',
    authorName: 'Prateek Sharma',
    authorRole: 'Student',
    trekName: 'Kheerganga',
    title: 'I went as a tourist, I came back as an explorer',
    excerpt: 'One trek. Five friends. A lifetime of memories.',
    fullStory: `College applications were killing me. Scholarships, rankings, competition. I felt small.

My aunt said, "Go live in the mountains for three days. Everything else will feel manageable."

I was skeptical. Treks seemed like Instagram content—filtered, fake, performative.

Then I met Anil and the group. Eight strangers, one guide, three days.

Day one: I was quiet, observing. Day two: I was laughing, actually present. Day three: I was crying, not sure why.

What happened is we became real with each other. Without phones, without filters, without pretense. A lawyer, a teacher, a banker, a student, a doctor—and mountains didn't care about our titles.

I went back to my applications with a different question: "Where will I grow?" Not "Where's the best brand?"

I got into my first choice school. But the real acceptance happened on a mountain.`,
    date: '2024-08-10',
    returnedAgain: true
  },
  {
    id: 'story-4',
    authorName: 'Lisa Chen',
    authorRole: 'Photographer',
    trekName: 'Kheerganga',
    title: 'How I learned to see again',
    excerpt: 'The best photographs happen when you stop trying to take them.',
    fullStory: `I\'ve photographed these mountains before. Beautiful images. No soul.

I booked Kheerganga thinking I\'d document another trek. Instead, our guide Vikram taught me something humbling: "The mountain doesn\'t need your camera. Your camera needs the mountain\'s permission."

Every morning, before taking a single photo, we sat in silence. Watching. Listening. Feeling.

Vikram taught me that composition isn\'t about rules—it\'s about respect. Light isn\'t about technical settings—it\'s about conversation.

My photographs from this trek have sold more than my previous hundred combined. But more importantly, I\'m not taking pictures anymore. I\'m translating conversations between earth and sky.

The mountain gave me my purpose back.`,
    date: '2024-07-22',
    returnedAgain: true
  },
  {
    id: 'story-5',
    authorName: 'Dr. Meera Iyer',
    authorRole: 'Doctor',
    trekName: 'Kheerganga',
    title: 'The prescription my patients needed',
    excerpt: 'I can\'t prescribe peace, but I can prescribe a mountain.',
    fullStory: `As a cardiologist, I see the cost of stress daily. Hypertension, arrhythmia, anxiety—manifesting as disease.

I came to Kheerganga researching the physiological effects of altitude on anxiety. I stayed because I felt it.

Three days at 2,680 meters worked better than three months of therapy.

My vital signs improved. My mind quieted. My perspective shifted from "I need to fix this" to "I need to integrate this."

I now prescribe trekking to my stressed patients. Seriously. And they come back saying it changed them.

Trip Margadarshak isn't just a trekking company—it\'s a clinic. And the mountain is the medicine.`,
    date: '2024-06-30',
    returnedAgain: false
  },
  {
    id: 'story-6',
    authorName: 'Amrit Singh',
    authorRole: 'Startup Founder',
    trekName: 'Kheerganga',
    title: 'The team building that actually worked',
    excerpt: 'We climbed a mountain and came down with real trust.',
    fullStory: `Startup life is a pressure cooker. Investors, employees, competition—everyone wants something from you.

I took my team of six to Kheerganga thinking it might ease tension. Instead, something broken got repaired.

We stripped away titles. The CTO was slow uphill. The CFO was struggling with altitude. Our strongest person was emotionally vulnerable.

For three days, we weren\'t building a product. We were building trust.

On the final evening, my co-founder opened up about imposter syndrome. Our engineer talked about wanting to quit. Our designer shared her grief.

We went back to work different. We make decisions differently now. We argue differently—with compassion instead of defensiveness.

Mountains teach you that strength isn\'t about being the fastest or the strongest. It\'s about moving together, at the pace of the slowest.

We\'re better because of that mountain.`,
    date: '2024-05-28',
    returnedAgain: true
  }
];
