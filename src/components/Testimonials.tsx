'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, FileText } from 'lucide-react';
import Link from 'next/link';

const testimonials = [
  {
    name: "משפחת כהן",
    text: "הפעוטון של חסידה הוא בית חם במלוא מובן המילה. הילד שלנו פורח שם כל יום מחדש.",
    role: "הורים לילד בקבוצת הפעוטות"
  },
  {
    name: "משפחת לוי",
    text: "המקצועיות והגישה המונטסורית באמת עושים את ההבדל. אנחנו רגועים כשהילדה בסאנשיין.",
    role: "הורים לתינוקת בקבוצת התינוקות"
  },
  {
    name: "משפחת אברהם",
    text: "האוכל הטרי, הצוות המוסמך והחום של חסידה הופכים את המקום הזה ליהלום בשכונת רמות.",
    role: "הורים לילד בקבוצת הבוגרים"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs font-black tracking-widest uppercase mb-4"
          >
            מה ההורים אומרים
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">ממליצים עלינו</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="flex text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <Quote size={32} className="text-teal-100 mb-4 fill-teal-50" />
              <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-grow italic">
                "{item.text}"
              </p>
              <div className="border-t border-slate-50 pt-6">
                <p className="font-black text-slate-900">{item.name}</p>
                <p className="text-sm text-teal-600 font-bold">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            href="/recommendations" 
            className="inline-flex items-center gap-3 bg-teal-600 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-teal-700 transition-all shadow-xl shadow-teal-900/10 group"
          >
            <FileText size={24} />
            לצפייה בכל מכתבי ההמלצה המקוריים
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
