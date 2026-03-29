'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Successfully logged in!');
    // Redirect logic would go here
  };

  const handleSocialLogin = (platform: string) => {
    toast(`Logging in with ${platform}...`, { icon: '🔄' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full p-10 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-500/5 transition-colors duration-300"
      >
        <div className="flex flex-col space-y-2 mb-10 text-center">
          <Link href="/" className="text-3xl font-black italic bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent w-fit mx-auto mb-4">
            Beans
          </Link>
          <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100">Welcome Back</h2>
          <p className="text-slate-500 dark:text-slate-400">Enter your details to access your account.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 pl-1">Email Address</label>
            <div className="relative group">
              <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border-none outline-none ring-2 ring-transparent focus:ring-blue-500 rounded-2xl text-slate-900 dark:text-slate-100 transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Password</label>
              <Link href="#" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
                Forgot password?
              </Link>
            </div>
            <div className="relative group">
              <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border-none outline-none ring-2 ring-transparent focus:ring-blue-500 rounded-2xl text-slate-900 dark:text-slate-100 transition-all placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-blue-500 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <HiOutlineEyeOff className="w-5 h-5" /> : <HiOutlineEye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-2xl shadow-xl shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-95 mt-4"
          >
            Sign In
          </button>
        </form>

        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
          </div>
          <span className="relative px-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase bg-white dark:bg-slate-900 transition-colors duration-300">
            Or continue with
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleSocialLogin('Google')}
            className="flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all active:scale-95"
          >
            <FaGoogle className="w-5 h-5 text-red-500" />
            Google
          </button>
          <button
            onClick={() => handleSocialLogin('GitHub')}
            className="flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all active:scale-95"
          >
            <FaGithub className="w-5 h-5 text-slate-900 dark:text-slate-100" />
            GitHub
          </button>
        </div>

        <p className="mt-8 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
          Don't have an account?{' '}
          <Link href="/signup" className="text-blue-600 font-bold hover:underline underline-offset-4">
            Create one for free
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
