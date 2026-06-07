'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="py-24 bg-slate-50 relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <Image 
                src="/images/תמונה של חסידה.png" 
                alt="חסידה מנשה - חזון הפעוטון" 
                width={600} 
                height={800}
                className="object-cover"
              />
            </div>
            {/* Soft decorative elements like Ganey Agnon */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-teal-100/50 rounded-full -z-10 blur-2xl" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-100/50 rounded-full -z-10 blur-xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 text-right"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-teal-500 rounded-full" />
              <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">החזון החינוכי</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              הדרך שבה אנו מחנכים <br />
              <span className="text-teal-600 italic">היא העתיד שלהם</span>
            </h2>
            
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium">
              <p>
                שמי חסידה מנשה, ואני מאמינה שכל ילד הוא עולם מלא בפוטנציאל שזקוק לסביבה הנכונה, הבטוחה והאוהבת ביותר כדי לפרוח.
              </p>
              
              <div className="bg-white p-8 rounded-[2rem] border-r-8 border-teal-500 shadow-sm my-10">
                <Quote size={40} className="text-teal-100 mb-4 fill-teal-50" />
                <p className="font-black text-slate-800 italic text-2xl leading-snug">
                  "החינוך אינו הכנת הילד לחיים, החינוך הוא החיים עצמם."
                </p>
              </div>
              
              <p>
                בפעוטון סנשיין, אנו משלבים את עקרונות המונטסורי המעודדים עצמאות, למידה חווייתית ובחירה חופשית, לצד דגש עצום על אינטליגנציה רגשית – כי ילד שמרגיש בטוח ואהוב הוא ילד פנוי ללמוד.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex flex-col">
                <p className="text-2xl font-black text-slate-900">חסידה מנשה</p>
                <p className="text-teal-600 font-bold text-sm">מייסדת ומנהלת פדגוגית</p>
              </div>
              <div className="w-16 h-[2px] bg-slate-200" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative organic shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white rounded-full blur-[120px]" />
    </section>
  );
}
