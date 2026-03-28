'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    terms: false
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }
    if (!formData.terms) {
      toast.error('Please agree to the Terms of Service');
      return;
    }
    toast.success('Account created successfully!');
  };

  const handleSocialSignup = (platform: string) => {
    toast(`Signing up with ${platform}...`, { icon: '🔄' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full p-10 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-500/5 transition-colors duration-300"
      >
        <div className="flex flex-col space-y-2 mb-8 text-center">
          <Link href="/" className="text-3xl font-black italic bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent w-fit mx-auto mb-4">
            Beans
          </Link>
          <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 italic">Create <span className="text-blue-600">Account.</span></h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Join us for a premium shopping experience.</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 pl-1">Full Name</label>
            <div className="relative group">
              <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none outline-none ring-2 ring-transparent focus:ring-blue-500 rounded-2xl text-slate-900 dark:text-slate-100 transition-all font-medium placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 pl-1">Email Address</label>
            <div className="relative group">
              <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none outline-none ring-2 ring-transparent focus:ring-blue-500 rounded-2xl text-slate-900 dark:text-slate-100 transition-all font-medium placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 pl-1">Password</label>
            <div className="relative group">
              <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-12 pr-12 py-3 bg-slate-50 dark:bg-slate-800 border-none outline-none ring-2 ring-transparent focus:ring-blue-500 rounded-2xl text-slate-900 dark:text-slate-100 transition-all font-medium placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-blue-500 transition-colors"
              >
                {showPassword ? <HiOutlineEyeOff className="w-5 h-5" /> : <HiOutlineEye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2 pt-2 px-1">
            <input
              type="checkbox"
              id="terms"
              checked={formData.terms}
              onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
              className="w-5 h-5 rounded-lg border-slate-300 dark:border-slate-700 text-blue-600 focus:ring-blue-500 accent-blue-600 transition-colors cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-tight">
              I agree to the <Link href="#" className="font-bold text-blue-600 hover:underline">Terms of Service</Link> and <Link href="#" className="font-bold text-blue-600 hover:underline">Privacy Policy</Link>.
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-2xl shadow-xl shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-95 mt-4"
          >
            Create Free Account
          </button>
        </form>

        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
          </div>
          <span className="relative px-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase bg-white dark:bg-slate-900 transition-colors duration-300">
            Sign up faster with
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleSocialSignup('Google')}
            className="flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
          >
            <FaGoogle className="w-5 h-5 text-red-500" />
            Google
          </button>
          <button
            onClick={() => handleSocialSignup('GitHub')}
            className="flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
          >
            <FaGithub className="w-5 h-5 text-slate-900 dark:text-slate-100" />
            GitHub
          </button>
        </div>

        <p className="mt-8 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 font-bold hover:underline underline-offset-4">
            Sign In here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupPage;
