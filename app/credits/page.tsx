'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker,
  HiOutlineArrowLeft,
  HiOutlineHeart
} from 'react-icons/hi';
import { motion } from 'framer-motion';

const CreditsPage = () => {
  const credits = [
    {
      name: 'Next.js',
      role: 'Framework',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=400',
      desc: 'The powerful React framework for production.'
    },
    {
      name: 'Tailwind CSS',
      role: 'Styling',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=400',
      desc: 'A utility-first CSS framework for rapid UI development.'
    },
    {
      name: 'Unsplash',
      role: 'Photography',
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=400',
      desc: 'High-quality, free-to-use images for everyone.'
    },
    {
      name: 'Redux Toolkit',
      role: 'State Management',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400',
      desc: 'The official, opinionated, batteries-included toolset for Redux.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-20 sm:px-6 lg:px-8 space-y-12 md:space-y-20">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center space-y-6"
      >
        <Link href="/" className="group flex items-center text-blue-600 font-bold hover:underline underline-offset-4">
          <HiOutlineArrowLeft className="mr-2 w-5 h-5 transition-transform group-hover:-translate-x-1" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-slate-100 italic leading-tight">
          Credits & <span className="text-blue-600">Appreciation.</span>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          The Beans store is built with love using modern tools and high-quality resources. We appreciate the community for their incredible contributions.
        </p>
      </motion.div>

      {/* Credit Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {credits.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative aspect-video">
              <Image 
                src={item.image} 
                alt={item.name} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{item.role}</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-slate-100">{item.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="bg-slate-50 dark:bg-slate-900 rounded-4xl md:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-20 border border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-100 italic">Get in <span className="text-blue-600">Touch.</span></h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Have questions about our credits or technical inquiries? Reach out to our team anytime.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-200">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-blue-600">
                  <HiOutlinePhone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                  <p className="text-lg font-black italic text-slate-900 dark:text-slate-100">8092404100</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-200">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-blue-600">
                  <HiOutlineMail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-lg font-black italic text-slate-900 dark:text-slate-100">dhruvdas006@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-200">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-blue-600">
                  <HiOutlineLocationMarker className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</p>
                  <p className="text-lg font-black italic text-slate-900 dark:text-slate-100">Bihar, Katihar, Tejatola</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square lg:aspect-auto w-full max-w-[280px] sm:max-w-[360px] lg:max-w-none mx-auto h-full min-h-[280px] md:min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/good.jpeg" 
              alt="Our Team" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white space-y-1">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black italic">Team Leader</p>
              <p className="text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2">Built with <HiOutlineHeart className="text-red-500 shrink-0" /> for the community.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreditsPage;
