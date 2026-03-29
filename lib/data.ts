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
    image: 'https://images.unsplash.com/photo-1760348213144-ca09c79214f8?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1621447980929-6638614633c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWluaW1hbGlzdCUyMERlc2slMjBMYW1wfGVufDB8fDB8fHww',
  },
  {
    id: '9',
    name: 'Aromatic Soy Candle Set',
    price: 24.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1623826550935-f2c22e79a52e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXJvbWF0aWMlMjBTb3klMjBDYW5kbGUlMjBTZXR8ZW58MHx8MHx8fDA%3D',
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
  // More Electronics
  {
    id: '13',
    name: 'Bluetooth Smart Speaker',
    price: 89.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1643385958950-8f0b8852171a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJsdWV0b290aCUyMFNtYXJ0JTIwU3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '14',
    name: 'Portable Power Bank 20000mAh',
    price: 39.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '15',
    name: 'Tablet Pro 11-inch',
    price: 649.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '16',
    name: '4K Action Camera',
    price: 199.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1586848417308-51a9d4718126?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fDRLJTIwQWN0aW9uJTIwQ2FtZXJhfGVufDB8fDB8fHww',
  },
  {
    id: '17',
    name: 'VR Gaming Headset',
    price: 399.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '18',
    name: 'Mini Drone with Camera',
    price: 249.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '19',
    name: 'True Wireless Earbuds',
    price: 129.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1667178173387-7e0cb51c0b4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJ1ZSUyMFdpcmVsZXNzJTIwRWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  
  // More Fashion
  {
    id: '20',
    name: 'Polarized Aviator Sunglasses',
    price: 59.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '21',
    name: 'Wool Blend Winter Coat',
    price: 189.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '22',
    name: 'Slim Fit Denim Jeans',
    price: 69.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '23',
    name: 'Patterned Silk Tie',
    price: 34.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1589756823695-278bc923f962?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBhdHRlcm5lZCUyMFNpbGslMjBUaWUlMjAoMjQpfGVufDB8fDB8fHww',
  },
  {
    id: '24',
    name: 'Breathable Athletic Shorts',
    price: 29.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '25',
    name: 'Chunky Knit Beanie',
    price: 19.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '26',
    name: 'Tailored Formal Trousers',
    price: 79.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=400',
  },

  // More Home & Living
  {
    id: '27',
    name: 'Velvet Throw Pillows Set',
    price: 39.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1595622543083-5081cbe96e24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fFZlbHZldCUyMFRocm93JTIwUGlsbG93cyUyMFNldHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '28',
    name: 'Abstract Wall Art Print',
    price: 49.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '29',
    name: 'Egyptian Cotton Bed Sheets',
    price: 119.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1702501543049-4cb666eeda15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWd5cHRpYW4lMjBDb3R0b24lMjBCZWQlMjBTaGVlZXR8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '30',
    name: 'Nordic Indoor Planter',
    price: 29.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '31',
    name: 'Pour-Over Coffee Maker',
    price: 45.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '32',
    name: 'Ultrasonic Essential Oil Diffuser',
    price: 34.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1608528577891-eb055944f2e7?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '33',
    name: 'Chunky Woven Blanket',
    price: 89.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1737061557243-6e1f3d0827c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENodW5reSUyMFdvdmVuJTIwQmxhbmtldHxlbnwwfHwwfHx8MA%3D%3D',
  },

  // More Accessories
  {
    id: '34',
    name: 'Full Grain Leather Belt',
    price: 39.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '35',
    name: 'Sterling Silver Cufflinks',
    price: 65.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1716461114307-6e6bf4e75ba5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RlcmxpbmclMjBTaWx2ZXIlMjBDdWZmbGlua3N8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '36',
    name: 'Vintage Canvas Backpack',
    price: 75.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '37',
    name: 'Classic Aviator Glasses',
    price: 110.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '38',
    name: 'Waterproof Weekend Duffle Bag',
    price: 95.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1630431174871-3c4a7a661a5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2F0ZXJwcm9vZiUyMFdlZWtlbmQlMjBEdWZmbGUlMjBiYWd8ZW58MHx8MHx8fDA%3D',
  },

  // Sports & Outdoors
  {
    id: '39',
    name: 'Non-Slip Yoga Mat',
    price: 24.99,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '40',
    name: 'Insulated Stainless Steel Bottle',
    price: 19.99,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '41',
    name: 'Premium Resistance Bands Set',
    price: 29.99,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '42',
    name: 'Lightweight Camping Tent',
    price: 149.99,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '43',
    name: 'Carbon Fiber Trekking Poles',
    price: 59.99,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1645999140921-db4668993c6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2FyYm9uJTIwRmliZXIlMjBUcmVra2luZ3xlbnwwfHwwfHx8MA%3D%3D',
  },

  // Beauty & Personal Care
  {
    id: '44',
    name: 'Vitamin C Brightening Serum',
    price: 34.99,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '45',
    name: 'Hydrating Foaming Face Wash',
    price: 18.99,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '46',
    name: 'Sonic Electric Toothbrush',
    price: 89.99,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '47',
    name: 'Matte Finish Hair Styling Pomade',
    price: 22.99,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '48',
    name: 'Rose Quartz Jade Roller',
    price: 15.99,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=400',
  },
];

export const categories = Array.from(new Set(products.map((p) => p.category)))
