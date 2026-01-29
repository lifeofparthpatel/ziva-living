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

export interface Listing {
  id: string;
  name: string;
  images: string[];
  price: number; // per month
  currency: string;
  location: Location;
  description: string;
  bedrooms: number;
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