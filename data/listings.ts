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
    price: 13500, // Slightly adjusted price for 'Ziva Living' feel
    currency: 'INR',
    location: {
      address: 'Plot No. 15, Viman Nagar',
      city: 'Pune',
      state: 'Maharashtra',
      zip: '411014',
    },
    description:
      'Welcome to Ziva Living, your premier paying guest accommodation exclusively for girls in the bustling Viman Nagar area of Pune. We offer a sophisticated blend of comfort, security, and convenience, ideal for students and young professionals. Our tastefully furnished rooms, state-of-the-art kitchen facilities, and round-the-clock security ensure a worry-free and luxurious living experience. With a dedicated reception to assist you and a focus on fostering a supportive community, Ziva Living is designed to be your serene sanctuary in the city. Enjoy seamless access to major educational hubs, corporate parks, and recreational zones.',
    bedrooms: 2,
    bathrooms: 1,
    areaSqFt: 650,
    amenities: [
      { icon: 'Wi-Fi', name: 'Free High-Speed Wi-Fi', description: 'Enjoy blazing-fast internet with 100 Mbps connectivity.' },
      { icon: 'Food', name: 'Nutritious Meals Included', description: 'Breakfast and dinner are included, prepared fresh daily.' },
      { icon: 'Laundry', name: 'Laundry Service', description: 'Convenient laundry service available twice a week.' },
      { icon: 'AC', name: 'Air Conditioning', description: 'Comfortable AC in all rooms for a pleasant stay.' },
      { icon: 'Security', name: 'Enhanced Security', description: '24/7 CCTV surveillance and biometric access for your safety.' },
      { icon: 'Cleaning', name: 'Daily Housekeeping', description: 'Rooms and common areas are cleaned and sanitized daily.' },
      { icon: 'Hot Water', name: '24-hour Hot Water', description: 'Consistent hot water supply available at all times.' },
      { icon: 'Power Backup', name: 'Full Power Backup', description: 'Uninterrupted electricity with a robust power backup system.' },
      { icon: 'Study Area', name: 'Quiet Study Lounge', description: 'Dedicated quiet space for focused study and work.' },
      { icon: 'Reception', name: '24/7 Front Desk', description: 'Assistance available around the clock from our friendly staff.' },
    ],
    rules: [
      { title: 'Curfew', description: 'Entry by 10 PM on weekdays, 11 PM on weekends. Prior notification required for late entry.' },
      { title: 'Visitors', description: 'Female visitors allowed in common areas until 8 PM with prior registration. No male visitors allowed inside rooms.' },
      { title: 'Smoking & Alcohol', description: 'Smoking and consumption of alcohol or illegal substances are strictly prohibited on the premises.' },
      { title: 'Noise Levels', description: 'Maintain quiet hours after 10 PM to ensure a peaceful environment for all residents.' },
      { title: 'Cleanliness', description: 'Residents are responsible for keeping their rooms and personal spaces clean and tidy. Common areas are regularly maintained by staff.' },
      { title: 'Damage Policy', description: 'Residents will be held responsible for any damage caused to property or furnishings beyond normal wear and tear.' },
    ],
    contactEmail: 'contact@zivaliving.com',
    contactPhone: '+91 88776 55443', // Updated phone number
  },
];