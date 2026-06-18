
export interface GearItem {
  id: string;
  name: string;
  brand: string;
  image: string;
  description?: string;
  features?: string[];
  link: string;
  price?: string;
}

export interface Spot {
  name: string;
  location: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  description: string;
}

export interface Tutorial {
  id: string;
  title: string;
  duration: string;
  author: string;
  thumbnail: string;
  url: string;
}