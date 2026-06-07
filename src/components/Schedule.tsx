'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Coffee, BookOpen, Music, Zap, Moon } from 'lucide-react';
import Image from 'next/image';

const scheduleItems = [
  {
    time: '07:30 - 08:30',
    title: 'קבלת פנים ומשחק חופשי',
    description: 'נחיתה רכה בגן, מפגש עם החברים ופעילות חופשית בפינות המשחק המונטסוריות.',
    icon: <Sun className="text-amber-500" />,
    image: 'images/4.jpg'
  },
  {
    time: '08:30 - 09:15',
    title: 'ארוחת בוקר מזינה',
    description: 'ארוחה ביתית עשירה בויטמינים, המעודדת עצמאות סביב השולחן ונימוסי אכילה.',
    icon: <Coffee className="text-orange-500" />,
    image: 'images/6.jpg'
  },
  {
    time: '09:15 - 10:30',
    title: 'מפגש בוקר ופעילות דידקטית',
    description: 'שירי בוקר, למידת מושגים, חשיפה לאנגלית ופיתוח שפתי בקבוצות קטנות.',
    icon: <BookOpen className="text-teal-500" />,
    image: 'images/3.jpg'
  },
  {
    time: '10:30 - 11:30',
    title: 'חצר וחוגי העשרה',
    description: 'פעילות גופנית בחצר המרווחת, משחקי תנועה או חוגי ריתמיקה ויוגה.',
    icon: <Music className="text-blue-500" />,
    image: 'images/10.jpg'
  },
  {
    time: '11:30 - 12:30',
    title: 'ארוחת צהריים חמה',
    description: 'ארוחה בשרית/צמחונית מלאה, טרייה ומבושלת מדי יום במקום.',
    icon: <Zap className="text-red-500" />,
    image: 'images/11.jpg'
  },
  {
    time: '12:30 - 16:00',
    title: 'מנוחת צהריים',
    description: 'זמן טעינת מצברים בסביבה שקטה, רגועה ומבוקרת.',
    icon: <Moon className="text-indigo-500" />,
    image: 'images/12.jpg'
  }
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-white relative overflow-hidden" dir="rtl">
      {/* Background decorations like Ganey Agnon */}
      <div className="absolute top-0 right-[-10%] opacity-5 pointer-events-none">
         <Image src="/images/21.png" alt="" width={600} height={600} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs font-black tracking-widest uppercase mb-4"
          >
            סדר היום שלנו
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">המסע היומי בסאנשיין</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            סדר יום מובנה ומאוזן המעניק לילדים ביטחון, עניין ומרחב להתפתחות מיטבית.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute right-[50%] top-0 bottom-0 w-px bg-slate-100 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {scheduleItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className="lg:w-1/2 flex justify-center px-4 lg:px-12">
                   <div className={`max-w-md text-center ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="inline-block px-4 py-1 bg-teal-50 text-teal-600 rounded-full text-sm font-black mb-4">
                         {item.time}
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3 justify-center lg:justify-start">
                         <span className="lg:hidden">{item.icon}</span>
                         {item.title}
                         <span className="hidden lg:block">{idx % 2 !== 0 && item.icon}</span>
                         <span className="hidden lg:block">{idx % 2 === 0 && <div className="order-first">{item.icon}</div>}</span>
                      </h3>
                      <p className="text-slate-600 font-medium leading-relaxed">
                         {item.description}
                      </p>
                   </div>
                </div>

                {/* Dot in the middle */}
                <div className="hidden lg:flex w-12 h-12 rounded-full bg-white border-4 border-teal-500 shadow-xl z-20 items-center justify-center -mr-6 -ml-6">
                   <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
                </div>

                {/* Image Side */}
                <div className="lg:w-1/2 flex justify-center px-4 lg:px-12">
                   <div className="relative w-full max-w-md aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-teal-900/10 group-hover:bg-transparent transition-colors" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-teal-600 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-6">לוח חופשות ואירועים</h3>
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto font-medium">
              אנו מקפידים על לוח שנה מסודר המאפשר להורים לתכנן את זמנם מראש. לוח החופשות שלנו מותאם לצרכי המשפחות המודרניות.
            </p>
            <button className="bg-white text-teal-600 px-10 py-4 rounded-full font-black text-lg hover:bg-teal-50 transition-all shadow-xl">
              להורדת לוח החופשות המלא
            </button>
          </div>
          <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
