'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  'images/2.png', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg',
  'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg',
  'images/10.jpg', 'images/11.jpg', 'images/12.jpg', 'images/13.jpg',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#fff9e6]/50 relative overflow-hidden" dir="rtl">
      {/* Background decorations */}
      <div className="absolute top-0 right-[-10%] opacity-5 pointer-events-none">
         <Image src="images/21.png" alt="" width={500} height={500} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-black mb-4 border border-yellow-200"
          >
            תמונות מהגן
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-slate-900 mb-4"
          >
            רגעים של קסם בסאנשיין
          </motion.h2>
          <p className="text-xl text-slate-700 font-medium">הצצה קטנה לחיי היום-יום המלאים בשמחה ולמידה</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative rounded-3xl overflow-hidden group shadow-lg border-4 border-white"
            >
              <Image 
                src={src} 
                alt={`Sunshine Nursery Gallery ${idx + 1}`} 
                width={500} 
                height={500}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-8">
                <div className="text-white">
                  <p className="font-black text-xl mb-1 italic">סאנשיין של יום ✨</p>
                  <div className="w-12 h-1 bg-yellow-400 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
