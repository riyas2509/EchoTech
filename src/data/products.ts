export interface ProductData {
  logo: string;
  title: string;
  description: string;
  status: string;
  website: string;
  coverImage: string;
  category: string;
}

export const productsData: ProductData[] = [
  {
    logo: '',
    title: 'EchoPlatform',
    description: 'Enterprise AI Agent Platform',
    status: 'Active',
    website: 'https://echotechai.in',
    coverImage: 'https://placehold.co/600x400/e2e8f0/475569?text=EchoPlatform',
    category: 'SaaS'
  },
  {
    logo: '',
    title: 'EchoVision',
    description: 'Computer Vision API',
    status: 'Beta',
    website: 'https://echotechai.in/vision',
    coverImage: 'https://placehold.co/600x400/e2e8f0/475569?text=EchoVision',
    category: 'API'
  }
];