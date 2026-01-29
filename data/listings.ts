import { Listing } from '../types';

export const listings: Listing[] = [
  {
    id: 'pg-001',
    name: 'Ziva Living',
    images: [
      'https://picsum.photos/id/175/800/600', // Bright, modern bedroom
      'https://picsum.photos/id/1053/800/600', // Cozy common lounge/seating area
      'https://picsum.photos/id/10/800/600',  // Desk with natural light, suitable for study
      'https://picsum.photos/id/1060/800/600', // Clean, simple kitchenette area
      'https://picsum.photos/id/190/800/600', // Modern building exterior/apartment complex
      'https://picsum.photos/id/170/800/600', // Another tidy room perspective
    ],
    // price: 13500, // Removed old price field
    currency: '₹',
    pricing: [ // New pricing structure
      { sharingCapacity: 4, pricePerPerson: 13000 },
      { sharingCapacity: 3, pricePerPerson: 15000 },
    ],
    location: {
      address: 'ADDRESS______________',
      city: 'Ahmedabad',
      state: 'Gujarat',
      zip: '380060',
    },
    description:
      'Welcome to Ziva Living, your premier paying guest accommodation exclusively for girls in the bustling ADDRESS______________. We offer a sophisticated blend of comfort, security, and convenience, ideal for students and young professionals. Our tastefully furnished rooms, state-of-the-art kitchen facilities, and round-the-clock security ensure a worry-free and luxurious living experience. With a dedicated reception to assist you and a focus on fostering a supportive community, Ziva Living is designed to be your serene sanctuary in the city. Enjoy seamless access to major educational hubs, corporate parks, and recreational zones.',
    rooms: 3, // Renamed from bedrooms
    bathrooms: 1, // Updated to 2 (1 per room)
    areaSqFt: 650,
    amenities: [
      { icon: 'Wi-Fi', name: 'Free High-Speed Wi-Fi', description: 'Enjoy blazing-fast internet with 100 Mbps connectivity.' },
      { icon: 'Food', name: 'Nutritious Meals Included', description: 'Breakfast, Lunch and Dinner are included, prepared fresh daily.' },
      { icon: 'Laundry', name: 'Laundry Service', description: 'Convenient laundry service available alternate day.' },
      { icon: 'AC', name: 'Air Conditioning', description: 'Comfortable AC in all rooms for a pleasant stay.' },
      { icon: 'Security', name: 'Enhanced Security', description: '24/7 CCTV surveillance for your safety.' },
      { icon: 'Cleaning', name: 'Daily Housekeeping', description: 'Rooms, Bathrooms and Common Areas are cleaned and sanitized daily.' },
      { icon: 'Hot Water', name: '24-hour Hot Water', description: 'Consistent hot water supply available at all times.' },
      { icon: 'Power Backup', name: 'Full Power Backup', description: 'Uninterrupted electricity.' },
      { icon: 'Reception', name: '24/7 Front Desk', description: 'Assistance available around the clock from our friendly staff.' },
    ],
    rules: [
      { title: 'Curfew', description: 'Entry by 10 PM on weekdays, 11 PM on weekends. Prior notification required for late entry.' },
      { title: 'Visitors', description: 'Female visitors allowed in common areas until 8 PM with prior registration. No male visitors allowed.' },
      { title: 'Smoking & Alcohol', description: 'Smoking and consumption of alcohol or illegal substances are strictly prohibited.' },
      { title: 'Noise Levels', description: 'Maintain quiet hours after 10 PM to ensure a peaceful environment for all residents.' },
      { title: 'Cleanliness', description: 'Residents are responsible for keeping their rooms and personal spaces clean and tidy. Common areas are regularly maintained by staff.' },
      { title: 'Damage Policy', description: 'Residents will be held responsible for any damage caused to property or furnishings beyond normal wear and tear.' },
    ],
    contactEmail: 'contact@zivaliving.com',
    contactPhone: '+91 88776 55443', // Updated phone number
  },
];