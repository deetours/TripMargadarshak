export type TrekDifficulty = 'Easy' | 'Moderate' | 'Challenging' | 'Extreme';
export type TrekTerrain = 'Forest' | 'Mountain' | 'Valley' | 'Alpine' | 'Technical';
export type TrekRegion = 'Himachal Pradesh' | 'Karnataka' | 'Maharashtra' | 'Northeast India' | 'Uttarakhand';
export type TrekSeason = 'Spring' | 'Summer' | 'Monsoon' | 'Autumn' | 'Winter';

export interface RouteDay {
  day: number;
  title: string;
  narrative: string;
  altitude: number;
  distance: string;
  highlights: string[];
  camp?: string;
  mealDetails?: {
    breakfast?: string;
    lunch?: string;
    dinner?: string;
  };
}

export interface LifeOnTrail {
  stay: string;
  food: string;
  weather: string;
  communication: string;
  hygiene: string;
  altitude_adjustment: string;
}

export interface SafetyInfo {
  guideRatio: string;
  protocols: string[];
  medical: string;
  insurance: string;
  monitoring: string;
}

export interface Trek {
  id: string;
  name: string;
  region: TrekRegion;
  season: TrekSeason[];
  difficulty: TrekDifficulty;
  terrain: TrekTerrain[];
  maxAltitude: number;
  duration: number;
  groupSize: number;
  groupSizeMin: number;
  moodWord: string;
  narrative: string;
  whyShouldNotDo: string[];
  routeStory: RouteDay[];
  lifeOnTrail: LifeOnTrail;
  safety: SafetyInfo;
  images: string[];
  imageCredit?: string;
  basePrice: number;
  inclusions: string[];
  exclusions: string[];
  batches: Batch[];
}

export interface Batch {
  id: string;
  trekId: string;
  startDate: string;
  endDate: string;
  availableSlots: number;
  totalSlots: number;
  pricePerPerson: number;
  leadGuide?: string;
  coGuides?: string[];
  status: 'open' | 'closing-soon' | 'full' | 'cancelled';
}

export interface BookingStep1 {
  batchId: string;
  numberOfPeople: number;
  totalPrice: number;
}

export interface BookingStep2 {
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  trekExperience: string;
  medicalConditions: string;
  allergies: string;
}

export interface BookingStep3 {
  tent: boolean;
  sleepingBag: boolean;
  trekPole: boolean;
  gaiters: boolean;
  dayBackpack: boolean;
  rainJacket: boolean;
  insectRepellent: boolean;
}

export interface BookingStep4 {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Booking {
  id: string;
  userId: string;
  trekId: string;
  batchId: string;
  step1: BookingStep1;
  step2: BookingStep2;
  step3: BookingStep3;
  step4: BookingStep4;
  paymentStatus: 'pending' | 'completed' | 'failed';
  bookingDate: string;
  status: 'active' | 'completed' | 'cancelled';
}

export interface CommunityStory {
  id: string;
  userId: string;
  userName: string;
  userImage: string;
  trekId: string;
  trekName: string;
  title: string;
  content: string;
  image?: string;
  datePosted: string;
  likes: number;
  shares: number;
}

export interface CommunityPhoto {
  id: string;
  userId: string;
  userName: string;
  trekId: string;
  trekName: string;
  imageUrl: string;
  caption?: string;
  datePosted: string;
  likes: number;
}

export interface Guide {
  id: string;
  name: string;
  experience: number;
  specialization: string[];
  bio: string;
  image: string;
  certifications: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  bio?: string;
  completedTreks: string[];
  bookings: string[];
  createdAt: string;
  updatedAt: string;
}
