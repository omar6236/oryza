export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  category: string;
  material: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  sku: string;
  rating: number;
  reviews: number;
  createdAt: Date;
};

export type Collection = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
};

export type CartItem = {
  productId: string;
  quantity: number;
  size: string;
  color: string;
};

export type Order = {
  id: string;
  orderNumber: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
};

export type JournalPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image: string;
  publishedAt: Date;
  readingTime: number;
};
