
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

// Configuración de Assets en GitHub utilizando las imágenes reales cargadas
export const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/habitatnova/web-assets/main/img';

export const ASSETS = {
  logo: `https://raw.githubusercontent.com/habitatnova/web-assets/main/img/logo-habitat-nova.png`,
  hero: `https://raw.githubusercontent.com/habitatnova/web-assets/main/img/living-room-premium.jpg`,
  bento: {
    integral: `https://raw.githubusercontent.com/habitatnova/web-assets/main/img/kitchen-after.jpg`,
    luxury: `https://raw.githubusercontent.com/habitatnova/web-assets/main/img/living-room-premium.jpg`,
  },
  compare: {
    before: `https://raw.githubusercontent.com/habitatnova/web-assets/main/img/kitchen-before.jpg`,
    after: `https://raw.githubusercontent.com/habitatnova/web-assets/main/img/kitchen-after.jpg`,
  },
  quiz: {
    minimalist: `https://raw.githubusercontent.com/habitatnova/web-assets/main/img/living-room-premium.jpg`,
    industrial: `https://raw.githubusercontent.com/habitatnova/web-assets/main/img/kitchen-after.jpg`,
    classic: `https://raw.githubusercontent.com/habitatnova/web-assets/main/img/kitchen-before.jpg`,
  },
  clients: [
    `${GITHUB_BASE_URL}/client-maria.jpg`,
    `${GITHUB_BASE_URL}/client-jordi.jpg`,
    `${GITHUB_BASE_URL}/client-elena.jpg`,
    `${GITHUB_BASE_URL}/client-carles.jpg`,
  ]
};
