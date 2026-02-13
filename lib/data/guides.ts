export interface Guide {
  id: string;
  name: string;
  bio: string;
  experience: number;
  specialization: string[];
  certifications: string[];
  languages: string[];
  photoUrl?: string;
  story?: string;
}

export const GUIDES: Guide[] = [
  {
    id: 'guide-1',
    name: 'Rajesh Thapa',
    bio: 'High-altitude mountaineer from Nepal. 18 years leading expeditions across the Himalayas. Certified Mountain Guide and wilderness first responder.',
    experience: 18,
    specialization: ['High-altitude', 'Technical climbing', 'Himalayan routes'],
    certifications: ['IFMGA Mountain Guide', 'Wilderness First Responder', 'Altitude medicine'],
    languages: ['English', 'Hindi', 'Nepali'],
    story: 'Started climbing to feed his family. Now feeds souls with mountains.'
  },
  {
    id: 'guide-2',
    name: 'Priya Sharma',
    bio: 'Woman mountaineer breaking barriers. Expert in women-safe trekking practices. Specializes in cultural immersion treks.',
    experience: 12,
    specialization: ['Cultural treks', 'Women-safe expeditions', 'Nature interpretation'],
    certifications: ['Mountain Guide', 'Women Safety First Responder', 'Environmental Science'],
    languages: ['English', 'Hindi', 'Garhwali'],
    story: 'Grew up in these mountains. Now shows others what home feels like.'
  },
  {
    id: 'guide-3',
    name: 'Vikram Singh',
    bio: 'Kashmir trek specialist. 15 years exploring Ladakh and Kashmir ranges. Expert photographer and storyteller.',
    experience: 15,
    specialization: ['Ladakh expeditions', 'Alpine routes', 'Photography'],
    certifications: ['Mountain Guide', 'Rescue Technician', 'Environmental Conservation'],
    languages: ['English', 'Hindi', 'Ladakhi', 'Urdu'],
    story: 'Every mountain is a poem. He translates them into human language.'
  },
  {
    id: 'guide-4',
    name: 'Anil Patel',
    bio: 'Beginner-friendly trek specialist. Believes every person deserves mountains. 10 years making impossible treks possible.',
    experience: 10,
    specialization: ['Beginner treks', 'Family expeditions', 'Altitude training'],
    certifications: ['Mountain Guide', 'First Aid', 'Youth Leadership'],
    languages: ['English', 'Hindi', 'Gujarati'],
    story: 'His first trek changed his life. Now changes lives every season.'
  },
  {
    id: 'guide-5',
    name: 'Sarah McBride',
    bio: 'Scottish mountaineer living in India. Brings international safety standards. Expert in extreme altitude preparation.',
    experience: 16,
    specialization: ['Extreme altitude', 'Technical routes', 'International standards'],
    certifications: ['IFMGA Mountain Guide', 'Avalanche Training', 'High Altitude Medicine'],
    languages: ['English', 'Hindi'],
    story: 'Came for one trek. Stayed for the mountains. Will leave when they leave her.'
  }
];
