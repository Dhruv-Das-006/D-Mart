'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { removeItemFromCart, addItemToCart, clearCart } from '@/lib/redux/slices/cartSlice';
import { 
  HiOutlineTrash, 
  HiOutlineMinus, 
  HiOutlinePlus, 
  HiOutlineShoppingBag,
  HiOutlineArrowRight
} from 'react-icons/hi';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const { items, totalAmount, totalQuantity } = useAppSelector((state) => state.cart);

  const handleRemove = (id: string, name: string) => {
    dispatch(removeItemFromCart(id));
    toast.error(`${name} removed from cart`);
  };

  const handleAdd = (item: any) => {
    dispatch(addItemToCart(item));
  };

  const handleClear = () => {
    if (confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
      toast.success('Cart cleared');
    }
  };

  const shipping = totalAmount > 500 ? 0 : 25;
  const tax = totalAmount * 0.1;
  const grandTotal = totalAmount + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col items-center justify-center text-center space-y-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="p-8 bg-slate-100 dark:bg-slate-900 rounded-full"
        >
          <HiOutlineShoppingBag className="w-20 h-20 text-slate-400" />
        </motion.div>
        <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100">Your cart is empty</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-md">
          Looks like you haven't added anything to your cart yet. Explore our products and find something you love.
        </p>
        <Link 
          href="/shopping" 
          className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all active:scale-95 flex items-center gap-2"
        >
          Start Shopping <HiOutlineArrowRight className="w-5 h-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-12 italic">
        Shopping <span className="text-blue-600">Cart.</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative w-32 h-32 flex-shrink-0 bg-slate-100 dark:bg-slate-700 rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-grow flex flex-col justify-between h-full space-y-4 sm:space-y-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{item.category}</span>
                      <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mt-1">{item.name}</h3>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id, item.name)}
                      className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <HiOutlineTrash className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-4 bg-slate-100 dark:bg-slate-900/50 rounded-xl p-1">
                      <button
                        onClick={() => dispatch(removeItemFromCart(item.id))}
                        className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-lg shadow-sm transition-all active:scale-95"
                      >
                        <HiOutlineMinus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold text-lg">{item.quantity}</span>
                      <button
                        onClick={() => handleAdd(item)}
                        className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-lg shadow-sm transition-all active:scale-95"
                      >
                        <HiOutlinePlus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
                      ${item.totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <button
            onClick={handleClear}
            className="flex items-center gap-2 text-slate-500 hover:text-red-500 font-medium transition-colors ml-auto pr-4"
          >
            <HiOutlineTrash className="w-5 h-5" /> Clear Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 p-8 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-6 shadow-2xl shadow-blue-900/20">
            <h3 className="text-2xl font-black mb-6">Order Summary</h3>
            
            <div className="space-y-4 border-b border-white/10 pb-6">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal ({totalQuantity} items)</span>
                <span className="text-white font-bold">${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Shipping</span>
                <span className="text-green-400 font-bold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Estimated Tax (10%)</span>
                <span className="text-white font-bold">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-2">
              <span className="text-lg font-bold">Total Amount</span>
              <span className="text-4xl font-black text-blue-500 italic">${grandTotal.toFixed(2)}</span>
            </div>

            <Link 
              href="/payment"
              className="w-full h-16 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xl rounded-2xl shadow-xl shadow-blue-500/30 transition-all flex items-center justify-center hover:scale-[1.02] active:scale-95"
            >
              Checkout
            </Link>
            
            <p className="text-center text-xs text-slate-500 font-medium pt-2">
              Free shipping on orders over $500. Secure checkout guaranteed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
