export interface Location {
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface Amenity {
  icon: string; // Tailwind icon class or simple string for now
  name: string;
  description?: string; // Added description field
}

export interface Rules {
  title: string;
  description: string;
}

export interface RoomPricing {
  sharingCapacity: number; // e.g., 3, 4
  pricePerPerson: number; // e.g., 15000, 13000
}

export interface Listing {
  id: string;
  name: string;
  images: string[];
  // price: number; // per month - Removed
  currency: string;
  pricing: RoomPricing[]; // New field for multiple pricing options
  location: Location;
  description: string;
  rooms: number; // Renamed from 'bedrooms'
  bathrooms: number;
  areaSqFt: number;
  amenities: Amenity[];
  rules: Rules[];
  contactEmail: string;
  contactPhone: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number; // 1-5
  avatar: string; // URL to avatar image
}