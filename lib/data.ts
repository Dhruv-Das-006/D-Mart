import { Product } from './redux/slices/cartSlice';

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Ultra HD 4K Monitor',
    price: 499.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    name: 'Wireless Noise Cancelling Headphones',
    price: 349.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '3',
    name: 'Mechanical Gaming Keyboard',
    price: 159.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '4',
    name: 'Ergonomic Wireless Mouse',
    price: 79.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a44?auto=format&fit=crop&q=80&w=400',
  },
  
  // Fashion
  {
    id: '5',
    name: 'Premium Leather Jacket',
    price: 129.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '6',
    name: 'Classic White Sneakers',
    price: 89.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '7',
    name: 'Cotton Oxford Shirt',
    price: 49.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400',
  },
  
  // Home & Living
  {
    id: '8',
    name: 'Minimalist Desk Lamp',
    price: 34.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed657f99ad?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '9',
    name: 'Aromatic Soy Candle Set',
    price: 24.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1603006766419-f00e9643edb1?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '10',
    name: 'Geometric Ceramic Vase',
    price: 19.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=400',
  },
  
  // Accessories
  {
    id: '11',
    name: 'Titanium Smart Watch',
    price: 299.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '12',
    name: 'RFID Protected Wallet',
    price: 45.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=400',
  },
];

export const categories = Array.from(new Set(products.map((p) => p.category)));
