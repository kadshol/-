'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ShieldCheck, Heart, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 bg-[#fcfdfd]" dir="rtl">
      {/* Ganey Agnon style clean background with subtle image overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/40 z-10" />
        <Image 
          src="/images/8.jpg" 
          alt="רקע גן סנשיין" 
          fill 
          className="object-cover object-center opacity-30"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-12 bg-teal-500 rounded-full" />
            <span className="text-teal-600 font-bold uppercase tracking-[0.2em] text-sm">ירושלים • רמת שרת</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
            פעוטון בוטיק <br />
            <span className="text-teal-600 underline decoration-teal-100 decoration-8 underline-offset-4">סנשיין</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-medium max-w-xl">
            מרחב חינוכי איכותי המבוסס על ערכי המונטסורי, אינטליגנציה רגשית וסביבה חמה ותומכת המהווה בית שני לילדכם.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <button className="bg-teal-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-700 transition-all shadow-xl shadow-teal-900/10 flex items-center gap-2 group">
              בואו נדבר
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-teal-700 border-2 border-teal-600/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all flex items-center gap-2">
              הכירו את הצוות
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">
            {[
              { label: 'צוות מקצועי', icon: <ShieldCheck className="text-teal-500" /> },
              { label: 'תזונה עשירה', icon: <Heart className="text-pink-500" /> },
              { label: 'חוגי העשרה', icon: <Star className="text-amber-500" /> },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center border border-slate-50">
                  {item.icon}
                </div>
                <span className="text-sm font-bold text-slate-700 tracking-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          {/* Main Hero Image with Rounded Corners as per Ganey Agnon */}
          <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-[16px] border-white ring-1 ring-slate-100">
            <Image 
              src="/images/3.jpg" 
              alt="פעילות בפעוטון סנשיין" 
              width={700} 
              height={800}
              className="object-cover"
            />
          </div>
          
          {/* Floating Element 1 - Professional Detail */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 z-20 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-50 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center">
               <Image src="/images/21.png" alt="" width={40} height={40} />
            </div>
            <div>
              <p className="text-[10px] text-teal-600 font-black uppercase tracking-widest">שיטה חינוכית</p>
              <p className="text-lg font-black text-slate-800">מונטסורי בשיא התפארת</p>
            </div>
          </motion.div>

          {/* Floating Element 2 - Safety/Care */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-50 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center">
               <Heart className="text-orange-500 fill-orange-500/20" />
            </div>
            <div>
              <p className="text-[10px] text-orange-600 font-black uppercase tracking-widest">חום ואהבה</p>
              <p className="text-lg font-black text-slate-800">בית חם לכל ילד</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle organic shapes like Ganey Agnon */}
      <div className="absolute top-[10%] right-[-5%] w-96 h-96 bg-teal-50 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[10%] left-[-5%] w-[30rem] h-[30rem] bg-amber-50/50 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
