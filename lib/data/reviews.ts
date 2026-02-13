export interface Review {
  id: string;
  trekId: string;
  trekkerName: string;
  trekkerRole?: string;
  rating: number;
  title: string;
  body: string;
  highlights: string[];
  date: string;
  guideName?: string;
}

export const REVIEWS: Review[] = [
  {
    id: 'review-1',
    trekId: 'kheerganga-trek',
    trekkerName: 'Anjali Desai',
    trekkerRole: 'Software Engineer, Bangalore',
    rating: 5,
    title: 'My legs forgot they could hurt',
    body: 'I came for fitness. I stayed for the fellowship. Every morning the guide would wait for the slowest person, never once showing impatience. By day three, I was leading climbs. That kind of transformation is rare.',
    highlights: ['Incredible guides', 'Group chemistry', 'Stunning views', 'Well organized'],
    date: '2024-10-15',
    guideName: 'Rajesh'
  },
  {
    id: 'review-2',
    trekId: 'kheerganga-trek',
    trekkerName: 'Rohan Menon',
    trekkerRole: 'Banking Executive, Mumbai',
    rating: 5,
    title: 'Silence where I needed it most',
    body: 'Took a sabbatical from work. Wasn\'t sure what I was looking for. On day two, I realized I wasn\'t looking—I was running from. The mountain taught me to stop. To breathe. To listen.',
    highlights: ['Life-changing', 'Patient guides', 'Perfect pacing', 'Peer connections'],
    date: '2024-09-28',
    guideName: 'Priya'
  },
  {
    id: 'review-3',
    trekId: 'kheerganga-trek',
    trekkerName: 'Dr. Meera Iyer',
    trekkerRole: 'Doctor, Chennai',
    rating: 5,
    title: 'The best medicine money can buy',
    body: 'Prescribed this to my hypertensive patients. Actually they came back demanding more. The stress relief from 3 days in mountains beats 6 months of meditation apps.',
    highlights: ['Health benefits', 'Stress relief', 'Safety first', 'Expert care'],
    date: '2024-08-12',
    guideName: 'Sarah'
  },
  {
    id: 'review-4',
    trekId: 'kheerganga-trek',
    trekkerName: 'Prateek Sharma',
    trekkerRole: 'Student, Delhi',
    rating: 4,
    title: 'How many treks till I find my people?',
    body: 'This was my first trek. I was terrified. By day two, I forgot to be scared. Made friends I talk to daily. Already planning the next trek with the crew.',
    highlights: ['Beginner-friendly', 'Great group', 'Confidence building', 'Community'],
    date: '2024-07-30',
    guideName: 'Anil'
  },
  {
    id: 'review-5',
    trekId: 'kheerganga-trek',
    trekkerName: 'Lisa Chen',
    trekkerRole: 'Photographer, Goa',
    rating: 5,
    title: 'Nature in Focus',
    body: 'As a photographer, I\'ve been to these places before. But never like this. Our guide made me see the light I\'d missed 100 times. Photography improved 10x.',
    highlights: ['Photography friendly', 'Creative guides', 'Stunning light', 'Detail oriented'],
    date: '2024-06-15',
    guideName: 'Vikram'
  },
  {
    id: 'review-6',
    trekId: 'kheerganga-trek',
    trekkerName: 'Amrit Singh',
    trekkerRole: 'Entrepreneur, Chandigarh',
    rating: 5,
    title: 'My team never worked better',
    body: 'Brought my startup team. Thought it\'d be trust falls and corporate games. Instead, real vulnerability happened. People opened up in ways team building never achieved.',
    highlights: ['Team building', 'Trust', 'Vulnerability', 'Authentic bonding'],
    date: '2024-05-20',
    guideName: 'Rajesh'
  }
];
