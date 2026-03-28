'use client';

import React, { useState } from 'react';
import { products, categories } from '@/lib/data';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const ShoppingPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <div className="flex flex-col space-y-4 max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 italic">
          Premium <span className="text-blue-600">Collection.</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Browse through our curated selection of top-tier products across all categories.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 pt-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
            activeCategory === 'All'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-slate-900'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
          }`}
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              activeCategory === category
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-slate-900'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-slate-500 text-lg italic">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingPage;
