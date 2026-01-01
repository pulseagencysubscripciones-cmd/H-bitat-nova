
export type ReformType = 'básica' | 'estándar' | 'premium';

export interface CalculatorResult {
  min: number;
  max: number;
}

export interface Review {
  id: number;
  name: string;
  city: string;
  text: string;
  rating: number;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}
