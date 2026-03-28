'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './CustomThemeProvider';
import { useAppSelector } from '@/lib/redux/hooks';
import { 
  HiOutlineShoppingBag, 
  HiOutlineSun, 
  HiOutlineMoon, 
  HiOutlineMenuAlt3, 
  HiOutlineX,
  HiOutlineDesktopComputer
} from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shopping', href: '/shopping' },
    { name: 'Cart', href: '/cart' },
  ];

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  const ThemeIcon = () => {
    if (!mounted) return <HiOutlineDesktopComputer className="w-5 h-5" />;
    return resolvedTheme === 'dark' ? (
      <HiOutlineSun className="w-5 h-5 text-yellow-400" />
    ) : (
      <HiOutlineMoon className="w-5 h-5 text-slate-700" />
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">
              Beans
            </Link>
          </div>

          {/* Desktop Links - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                  pathname === link.href 
                    ? 'text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-8 decoration-2' 
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons & Actions */}
          <div className="flex-1 hidden md:flex items-center justify-end space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              <ThemeIcon />
            </button>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-2 pl-4 border-l border-slate-200 dark:border-slate-800">
              <Link href="/login" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Login
              </Link>
              <Link href="/signup" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-md active:scale-95">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ThemeIcon />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-400 focus:outline-none"
            >
              {isOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenuAlt3 className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-2 px-3 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2 text-slate-700 dark:text-slate-200 font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2 bg-blue-600 text-white rounded-lg font-medium shadow-md"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
