
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

// Configuración de Assets en GitHub
export const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/habitatnova/web-assets/main/img';

export const ASSETS = {
  hero: `${GITHUB_BASE_URL}/hero-luxury-apartment.jpg`,
  bento: {
    integral: `${GITHUB_BASE_URL}/reforma-integral-bento.jpg`,
    luxury: `${GITHUB_BASE_URL}/acabados-lujo-bento.jpg`,
  },
  compare: {
    before: `${GITHUB_BASE_URL}/kitchen-before.jpg`,
    after: `${GITHUB_BASE_URL}/kitchen-after.jpg`,
  },
  quiz: {
    minimalist: `${GITHUB_BASE_URL}/style-minimalist.jpg`,
    industrial: `${GITHUB_BASE_URL}/style-industrial.jpg`,
    classic: `${GITHUB_BASE_URL}/style-classic.jpg`,
  },
  clients: [
    `${GITHUB_BASE_URL}/client-maria.jpg`,
    `${GITHUB_BASE_URL}/client-jordi.jpg`,
    `${GITHUB_BASE_URL}/client-elena.jpg`,
    `${GITHUB_BASE_URL}/client-carles.jpg`,
  ]
};
