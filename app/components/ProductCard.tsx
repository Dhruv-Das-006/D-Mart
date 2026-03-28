'use client';

import React from 'react';
import Image from 'next/image';
import { HiOutlineShoppingBag, HiStar } from 'react-icons/hi';
import { useAppDispatch } from '@/lib/redux/hooks';
import { addItemToCart, Product } from '@/lib/redux/slices/cartSlice';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
    toast.success(`${product.name} added to cart!`, {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Badge */}
      <div className="absolute top-4 left-4 z-10 px-2 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase rounded-md tracking-wider">
        New
      </div>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-t-2xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col space-y-3">
        <div className="flex flex-col">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <HiStar key={i} className="w-4 h-4" />
          ))}
          <span className="ml-2 text-xs text-slate-400">(24)</span>
        </div>

        <div className="flex items-center justify-between mt-2 pt-4 border-t border-slate-100 dark:border-slate-700">
          <div className="flex flex-col">
            <span className="text-xl font-black text-slate-900 dark:text-slate-100">
              ${product.price}
            </span>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-90 flex items-center justify-center group/btn"
            aria-label="Add to Cart"
          >
            <HiOutlineShoppingBag className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
