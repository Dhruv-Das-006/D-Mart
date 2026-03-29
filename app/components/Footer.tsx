'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineExternalLink } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Hide footer on cart, payment and shopping pages
  const hideFooterPaths = ['/cart', '/payment', '/shopping', '/order-tracking'];
  if (hideFooterPaths.includes(pathname)) {
    return null;
  }

  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { name: 'All Products', href: '/shopping' },
        { name: 'New Arrivals', href: '/shopping' },
        { name: 'On Sale', href: '/shopping' },
        { name: 'Featured', href: '/shopping' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Credits', href: '/credits' },
        { name: 'Contact Us', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Shipping Policy', href: '#' },
        { name: 'Returns & Refunds', href: '#' },
        { name: 'Track Order', href: '/order-tracking' },
        { name: 'FAQs', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">
              Beans
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs leading-relaxed">
              Experience the best in modern e-commerce. Premium products, secure payments, and worldwide delivery.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://github.com/Dhruv-Das-006/D-Mart.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-90 flex items-center gap-2 font-bold text-sm"
              >
                <FaGithub className="w-5 h-5" /> GitHub
              </a>
              <Link 
                href="/credits"
                className="px-4 py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2 group"
              >
                Credits <HiOutlineExternalLink className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info and Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <HiOutlineMail className="w-4 h-4 text-blue-500" /> dhruvdas006@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <HiOutlinePhone className="w-4 h-4 text-blue-500" /> 8092404100
            </span>
            <span className="flex items-center gap-2">
              <HiOutlineLocationMarker className="w-4 h-4 text-blue-500" /> Bihar, Katihar, Tejatola
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {currentYear} Beans. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
