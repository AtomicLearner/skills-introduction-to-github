export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  priceType: 'Free' | 'Paid' | 'Freemium';
}
