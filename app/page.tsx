'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowRight, HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineTruck } from 'react-icons/hi';
import { products, categories } from '@/lib/data';
import ProductCard from './components/ProductCard';
import { motion } from 'framer-motion';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col space-y-20 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-slate-100 dark:bg-slate-900 overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 dark:bg-blue-600/20 blur-3xl rounded-full -translate-x-1/4 -translate-y-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col space-y-6"
            >
              <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold rounded-full w-fit">
                New Winter Collection 2026
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-slate-100 leading-tight">
                Upgrade Your <br />
                <span className="text-blue-600 italic">Lifestyle.</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                Discover the latest in tech, fashion, and home essentials. Premium quality met with modern design.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/shopping" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-xl shadow-blue-500/30 transition-all flex items-center group active:scale-95">
                  Shop Now
                  <HiOutlineArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/shopping" className="px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl font-bold transition-all active:scale-95">
                  View Categories
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-600/40 blur-3xl rounded-full scale-110" />
                <Image
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600"
                  alt="Hero Product"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl z-11 animate-float"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<HiOutlineTruck className="w-8 h-8" />} 
            title="Fast Delivery" 
            desc="Same-day shipping on all orders over $99." 
          />
          <FeatureCard 
            icon={<HiOutlineShieldCheck className="w-8 h-8" />} 
            title="Secure Payments" 
            desc="Fully encrypted transactions with your safety in mind." 
          />
          <FeatureCard 
            icon={<HiOutlineLightningBolt className="w-8 h-8" />} 
            title="Modern Solutions" 
            desc="Curated tech gadgets for the digital age." 
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100">Featured Products</h2>
            <p className="text-slate-500 dark:text-slate-400">Hand picked deals for you.</p>
          </div>
          <Link href="/shopping" className="text-blue-600 font-bold hover:underline underline-offset-4 flex items-center">
            View All <HiOutlineArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="text-3xl font-black text-center text-slate-900 dark:text-slate-100">Shop by Category</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category}
                href="/shopping"
                className="group relative h-40 overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 active:scale-95"
              >
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity" />
                <span className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600"
  >
    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl w-fit mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
      {desc}
    </p>
  </motion.div>
);

export default Home;