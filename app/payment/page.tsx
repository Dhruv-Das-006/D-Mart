'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { clearCart } from '@/lib/redux/slices/cartSlice';
import { 
  HiOutlineCreditCard, 
  HiOutlineShieldCheck, 
  HiOutlineChevronLeft,
  HiOutlineCheckCircle
} from 'react-icons/hi';
import { FaPaypal, FaGooglePay } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const PaymentPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { totalAmount, items } = useAppSelector((state) => state.cart);
  const { isAuthenticated, isLoading, user } = useAppSelector(state => state.auth);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast.error('Please login or signup to perform payment.', { id: 'auth-guard' });
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  const shipping = totalAmount > 500 ? 0 : 25;
  const tax = totalAmount * 0.1;
  const grandTotal = totalAmount + shipping + tax;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(async () => {
      try {
        // Save to History using api
        await fetch('/api/history', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: user?.id,
            items: items,
            totalAmount: grandTotal,
            date: new Date().toISOString()
          })
        });
      } catch (err) {}

      setIsProcessing(false);
      setIsSuccess(true);
      sessionStorage.setItem('hasOrdered', 'true');
      dispatch(clearCart());
      toast.success('Payment Successful!', {
        icon: '🎉',
        duration: 3000,
      });
      // Redirect to Order Tracking directly
      router.push('/order-tracking');
    }, 2000);
  };

  React.useEffect(() => {
    if (items.length === 0 && !isSuccess) {
      toast.error('Add something to your cart first!', {
        icon: '🛒',
        duration: 3000,
      });
      router.push('/shopping');
    }
  }, [items.length, isSuccess, router]);

  if (isLoading || !isAuthenticated || (items.length === 0 && !isSuccess)) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        {(isLoading || !isAuthenticated) ? (
           <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        ) : null}
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-6 p-10 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl"
        >
          <div className="flex justify-center">
            <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full">
              <HiOutlineCheckCircle className="w-20 h-20 text-green-500" />
            </div>
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 italic">Payment <span className="text-green-500">Confirmed.</span></h2>
          <p className="text-slate-500 dark:text-slate-400">
            Thank you for your purchase! Your order is being processed and will be shipped shortly.
          </p>
          <div className="pt-4">
            <Link 
              href="/" 
              className="block w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/cart" className="flex items-center text-slate-500 hover:text-blue-600 font-bold mb-8 transition-colors group">
        <HiOutlineChevronLeft className="w-5 h-5 mr-1 transition-transform group-hover:-translate-x-1" /> Back to Cart
      </Link>

      <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-12 italic">
        Secure <span className="text-blue-600">Checkout.</span>
      </h1>

      <form onSubmit={handlePayment} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Payment Form */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-lg text-sm">1</span>
              Shipping Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required type="text" placeholder="First Name" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border-none outline-none ring-2 ring-transparent focus:ring-blue-500 rounded-xl text-slate-900 dark:text-slate-100 transition-all" />
              <input required type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border-none outline-none ring-2 ring-transparent focus:ring-blue-500 rounded-xl text-slate-900 dark:text-slate-100 transition-all" />
              <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border-none outline-none ring-2 ring-transparent focus:ring-blue-500 rounded-xl text-slate-900 dark:text-slate-100 md:col-span-2" />
              <input required type="text" placeholder="Shipping Address" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border-none outline-none ring-2 ring-transparent focus:ring-blue-500 rounded-xl text-slate-900 dark:text-slate-100 md:col-span-2" />
            </div>
          </section>

          <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-lg text-sm">2</span>
              Payment Method
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button 
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all ${paymentMethod === 'card' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-100 dark:border-slate-700 hover:border-blue-200'}`}
              >
                <HiOutlineCreditCard className={`w-8 h-8 mb-2 ${paymentMethod === 'card' ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className={`text-sm font-bold ${paymentMethod === 'card' ? 'text-blue-600' : 'text-slate-600 dark:text-slate-400'}`}>Card</span>
              </button>
              <button 
                type="button"
                onClick={() => setPaymentMethod('paypal')}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all ${paymentMethod === 'paypal' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-100 dark:border-slate-700 hover:border-blue-200'}`}
              >
                <FaPaypal className={`w-8 h-8 mb-2 ${paymentMethod === 'paypal' ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className={`text-sm font-bold ${paymentMethod === 'paypal' ? 'text-blue-600' : 'text-slate-600 dark:text-slate-400'}`}>PayPal</span>
              </button>
              <button 
                type="button"
                onClick={() => setPaymentMethod('gpay')}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all ${paymentMethod === 'gpay' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-100 dark:border-slate-700 hover:border-blue-200'}`}
              >
                <FaGooglePay className={`w-10 h-10 mb-2 ${paymentMethod === 'gpay' ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className={`text-sm font-bold ${paymentMethod === 'gpay' ? 'text-blue-600' : 'text-slate-600 dark:text-slate-400'}`}>G-Pay</span>
              </button>
            </div>

            <AnimatePresence mode="wait">
              {paymentMethod === 'card' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 pt-4"
                >
                  <input required type="text" placeholder="Card Number" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border-none outline-none ring-2 ring-transparent focus:ring-blue-500 rounded-xl text-slate-900 dark:text-slate-100 transition-all font-mono" />
                  <div className="grid grid-cols-2 gap-4">
                    <input required type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border-none outline-none ring-2 ring-transparent focus:ring-blue-500 rounded-xl text-slate-900 dark:text-slate-100 transition-all" />
                    <input required type="text" placeholder="CVV" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border-none outline-none ring-2 ring-transparent focus:ring-blue-500 rounded-xl text-slate-900 dark:text-slate-100 transition-all" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>

        {/* Order Summary Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-6">
            <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 italic">Order <span className="text-blue-600">Summary.</span></h3>
            
            <div className="space-y-4 border-b border-slate-200 dark:border-slate-700 pb-6">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Items Subtotal</span>
                <span className="font-bold">${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Shipping Fee</span>
                <span className="text-green-600 dark:text-green-400 font-bold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Tax Estimation</span>
                <span className="font-bold">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-2 text-slate-900 dark:text-slate-100">
              <span className="text-lg font-bold">Grand Total</span>
              <span className="text-3xl font-black italic text-blue-600">${grandTotal.toFixed(2)}</span>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-black text-xl rounded-2xl shadow-xl shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  Processing...
                </>
              ) : (
                'Pay Now'
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
