'use client';

import React from 'react';
import Link from 'next/link';
import { 
  HiOutlineTruck, 
  HiOutlineCheckCircle, 
  HiOutlineCube,
  HiOutlineSupport,
  HiOutlineArrowLeft
} from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useAppSelector } from '@/lib/redux/hooks';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const OrderTrackingPage = () => {
  const router = useRouter();
  const { items } = useAppSelector((state) => state.cart);

  React.useEffect(() => {
    const hasOrdered = sessionStorage.getItem('hasOrdered');
    
    if (items.length === 0 && !hasOrdered) {
      toast.error('Order something first to track it!', {
        icon: '📦',
        duration: 3000,
      });
      router.push('/shopping');
    }

    // Clean up the flag after checking or when leaving
    return () => {
    };
  }, [items.length, router]);

  if (items.length === 0 && (typeof window !== 'undefined' && !sessionStorage.getItem('hasOrdered'))) {
    return null;
  }

  const steps = [
    { title: 'Ordered', icon: HiOutlineCheckCircle, date: 'Mar 24', completed: true },
    { title: 'Supplying', icon: HiOutlineCube, date: 'Mar 25', completed: true },
    { title: 'Shipping', icon: HiOutlineTruck, date: 'Mar 26', completed: true, current: true },
    { title: 'Delivered', icon: HiOutlineCheckCircle, date: 'Estimated Mar 29', completed: false },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-slate-100 italic">
          Track Your <span className="text-blue-600">Order.</span>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-bold italic underline decoration-blue-600/30 underline-offset-8">
          Your order is on the way!
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-10"
      >
        {/* Tracking Progress */}
        <div className="bg-white dark:bg-slate-800 p-8 lg:p-12 rounded-[3rem] border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-black rounded-full italic">
              IN TRANSIT
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-9 left-[10%] right-[10%] h-1 bg-slate-100 dark:bg-slate-700 z-0" />
            <motion.div 
              initial={{ width: '0%' }}
              animate={{ width: '50%' }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="hidden md:block absolute top-9 left-[10%] h-1 bg-blue-600 z-0" 
            />

            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center gap-4 relative z-10">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: index <= 2 ? 1.1 : 1, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${step.completed || step.current ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-100 dark:bg-slate-700 text-slate-400'}`}
                >
                  <step.icon className="w-7 h-7" />
                </motion.div>
                <div className="text-center">
                  <p className={`font-black italic text-lg ${step.completed || step.current ? 'text-slate-900 dark:text-slate-100' : 'text-slate-400'}`}>
                    {step.title}
                  </p>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mt-1">
                    {step.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipment Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-10 space-y-6">
            <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 italic">Shipment <span className="text-blue-600">Details.</span></h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-4 text-sm font-bold">
                <span className="text-slate-500">Order ID:</span>
                <span className="text-slate-900 dark:text-slate-100 italic font-mono uppercase tracking-tighter text-lg">#BN-809240</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-4 text-sm font-bold">
                <span className="text-slate-500">Carrier:</span>
                <span className="text-slate-900 dark:text-slate-100 italic">Beans Express Global</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-4 text-sm font-bold">
                <span className="text-slate-500">Address:</span>
                <span className="text-slate-900 dark:text-slate-100 text-right">Bihar, Katihar, Tejatola</span>
              </div>
              <div className="flex justify-between pt-2 text-sm font-bold">
                <span className="text-slate-500">Last Updated:</span>
                <span className="text-slate-900 dark:text-slate-100 italic">Today, 10:45 AM</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white flex flex-col justify-between shadow-2xl shadow-blue-500/20">
            <div className="space-y-4">
              <HiOutlineSupport className="w-12 h-12" />
              <h3 className="text-3xl font-black italic leading-tight">Need help with your shipment?</h3>
              <p className="text-blue-100 font-bold italic">Our support team is available 24/7 to assist you with any questions.</p>
            </div>
            <div className="flex gap-4 mt-8 lg:mt-0">
              <a href="mailto:dhruvdas006@gmail.com" className="px-6 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold flex items-center gap-2 transition-all">
                Email Support
              </a>
              <a href="tel:8092404100" className="px-6 py-4 bg-white text-blue-600 rounded-2xl font-bold transition-all shadow-xl hover:scale-105 active:scale-95">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="text-center">
        <Link href="/shopping" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors">
          <HiOutlineArrowLeft className="w-5 h-5" /> Back to Store
        </Link>
      </div>
    </div>
  );
};

export default OrderTrackingPage;
