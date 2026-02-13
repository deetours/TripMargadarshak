export interface Batch {
  id: string;
  trekId: string;
  departDate: string;
  returnDate: string;
  seatsTotal: number;
  seatsAvailable: number;
  guideId: string;
  pricePerPerson: number;
  discountPercentage?: number;
  weatherCondition?: string;
  description?: string;
}

export const BATCHES: Batch[] = [
  // Kheerganga batches
  {
    id: 'batch-k1',
    trekId: 'kheerganga-trek',
    departDate: '2024-12-15',
    returnDate: '2024-12-18',
    seatsTotal: 12,
    seatsAvailable: 3,
    guideId: 'guide-1',
    pricePerPerson: 12500,
    weatherCondition: 'Clear skies expected',
    description: 'Holiday batch - Spring like weather'
  },
  {
    id: 'batch-k2',
    trekId: 'kheerganga-trek',
    departDate: '2024-12-22',
    returnDate: '2024-12-25',
    seatsTotal: 12,
    seatsAvailable: 8,
    guideId: 'guide-2',
    pricePerPerson: 12500,
    weatherCondition: 'Cold mornings, clear days'
  },
  {
    id: 'batch-k3',
    trekId: 'kheerganga-trek',
    departDate: '2025-01-10',
    returnDate: '2025-01-13',
    seatsTotal: 15,
    seatsAvailable: 15,
    guideId: 'guide-4',
    pricePerPerson: 11500,
    weatherCondition: 'Peak winter clarity'
  },
  {
    id: 'batch-k4',
    trekId: 'kheerganga-trek',
    departDate: '2025-02-01',
    returnDate: '2025-02-04',
    seatsTotal: 12,
    seatsAvailable: 6,
    guideId: 'guide-3',
    pricePerPerson: 13000,
    discountPercentage: 10,
    weatherCondition: 'Warming up, spring arriving'
  },
  {
    id: 'batch-k5',
    trekId: 'kheerganga-trek',
    departDate: '2025-03-15',
    returnDate: '2025-03-18',
    seatsTotal: 12,
    seatsAvailable: 12,
    guideId: 'guide-5',
    pricePerPerson: 14000,
    weatherCondition: 'Rhododendron bloom season'
  },

  // Kedarnath batch examples
  {
    id: 'batch-kd1',
    trekId: 'kedarnath-trek',
    departDate: '2025-01-20',
    returnDate: '2025-01-27',
    seatsTotal: 10,
    seatsAvailable: 2,
    guideId: 'guide-1',
    pricePerPerson: 28000,
    weatherCondition: 'Excellent visibility'
  },
  {
    id: 'batch-kd2',
    trekId: 'kedarnath-trek',
    departDate: '2025-02-15',
    returnDate: '2025-02-22',
    seatsTotal: 10,
    seatsAvailable: 10,
    guideId: 'guide-5',
    pricePerPerson: 28000,
    weatherCondition: 'Clear skies, cold nights'
  },

  // Rajmachi batch examples
  {
    id: 'batch-r1',
    trekId: 'rajmachi-trek',
    departDate: '2024-12-14',
    returnDate: '2024-12-15',
    seatsTotal: 15,
    seatsAvailable: 4,
    guideId: 'guide-2',
    pricePerPerson: 3500,
    weatherCondition: 'Perfect day trek weather'
  },
  {
    id: 'batch-r2',
    trekId: 'rajmachi-trek',
    departDate: '2024-12-21',
    returnDate: '2024-12-22',
    seatsTotal: 15,
    seatsAvailable: 15,
    guideId: 'guide-4',
    pricePerPerson: 3500
  },
];
