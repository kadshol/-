'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'דף הבית', href: '#home' },
  { name: 'אודות הפעוטון', href: '#about' },
  { name: 'החזון החינוכי', href: '#vision' },
  { name: 'סדר יום', href: '#schedule' },
  { name: 'גלריה', href: '#gallery' },
  { name: 'ממליצים', href: '#testimonials' },
  { name: 'צור קשר', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4',
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        )}
        dir="rtl"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link href="#home" className="flex items-center gap-3 relative z-[60]">
            <div className="relative h-12 w-12 rounded-xl bg-teal-600 flex items-center justify-center p-1.5 shadow-lg">
               <Image 
                 src="/images/תמונה של חסידה.png" 
                 alt="לוגו סאנשיין" 
                 width={40} 
                 height={40}
                 className="object-contain brightness-0 invert"
               />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-2xl font-black tracking-tight leading-none transition-colors duration-500",
                (isOpen || scrolled) ? "text-slate-900" : "text-slate-800"
              )}>
                סאנשיין
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-teal-600 mt-1">
                 ירושלים
              </span>
            </div>
          </Link>

          {/* Hamburger Menu Toggle - Always visible as requested */}
          <button
            className="relative z-[60] p-3 bg-white rounded-full shadow-md border border-slate-100 text-slate-900 hover:scale-110 transition-transform flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="תפריט"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-white flex flex-col md:flex-row"
            dir="rtl"
          >
            {/* Left/Main Side: Links */}
            <div className="flex-1 flex flex-col justify-center px-12 md:px-24 py-20 overflow-y-auto">
              <div className="space-y-6 md:space-y-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-6"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-slate-200 text-2xl font-black group-hover:text-teal-100 transition-colors">0{i + 1}</span>
                      <span className="text-4xl md:text-6xl font-black text-slate-900 group-hover:text-teal-600 transition-all group-hover:translate-x-[-10px]">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Contact Info (Hidden on small mobile) */}
            <div className="w-full md:w-1/3 bg-slate-50 p-12 md:p-24 flex flex-col justify-center border-r border-slate-100">
              <div className="mb-12">
                <h3 className="text-sm font-black text-teal-600 uppercase tracking-widest mb-8">צרו קשר</h3>
                <ul className="space-y-8">
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-teal-600">
                      <Phone size={20} />
                    </div>
                    <span className="text-xl font-bold text-slate-800">0532741715</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-teal-600">
                      <Mail size={20} />
                    </div>
                    <span className="text-lg font-bold text-slate-800">office@sunshine.co.il</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-teal-600">
                      <MapPin size={20} />
                    </div>
                    <div>
                       <p className="text-lg font-bold text-slate-800 leading-none">ירושלים • רמות א׳</p>
                       <p className="text-sm text-slate-500 font-medium mt-1">רחוב יעקב אליעזר 47</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-12 border-t border-slate-200">
                <p className="text-sm font-bold text-slate-400 mb-4 italic leading-relaxed">
                  "הדרך שבה אנו מדברים אל ילדינו הופכת לקול הפנימי שלהם."
                </p>
                <div className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
                   <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
