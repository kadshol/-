'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, Download, Star, Heart, Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function RecommendationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans" dir="rtl">
      {/* Header Area */}
      <header className="bg-white border-b border-slate-100 py-6 px-6 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <ChevronRight size={24} />
            </div>
            <span className="text-xl font-black text-slate-900">חזרה לדף הבית</span>
          </Link>
          <div className="flex items-center gap-3">
             <Image src="/images/תמונה של חסידה.png" alt="לוגו" width={40} height={40} className="object-contain" />
             <span className="text-lg font-black text-teal-600">סאנשיין בירושלים</span>
          </div>
        </div>
      </header>

      {/* Hero Section for Page */}
      <section className="py-20 bg-teal-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl mb-8 border border-white/30 shadow-xl">
              <Star size={40} className="text-yellow-300 fill-yellow-300" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">מכתבי המלצה מקוריים</h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-2xl mx-auto font-medium leading-relaxed">
              הביטחון שלכם הוא השליחות שלנו. הנה מה שהורים אמיתיים כותבים על המסע המשותף שלהם איתנו ב"סאנשיין".
            </p>
          </motion.div>
        </div>
        
        {/* Background stork decorations */}
        <div className="absolute top-10 left-10 opacity-10 rotate-12">
          <Image src="/images/21.png" alt="" width={200} height={200} className="filter brightness-0 invert" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 -rotate-12">
          <Image src="/images/33.png" alt="" width={250} height={250} className="filter brightness-0 invert" />
        </div>
      </section>

      {/* Main Content: The PDF Viewer/Link */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100"
          >
            <div className="p-12 text-center border-b border-slate-50 bg-[#fcfdfd]">
              <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-8 shadow-inner">
                <FileText size={48} />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">מכתבי המלצה - קובץ מלא</h2>
              <p className="text-slate-500 font-bold mb-10 max-w-lg mx-auto">
                לנוחותכם, ריכזנו את כל מכתבי התודה וההמלצה שקיבלנו מההורים לאורך השנים בקובץ PDF אחד שניתן לצפייה ישירה או להורדה.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a 
                  href="/pdfs/recommendations.pdf" 
                  target="_blank" 
                  className="bg-teal-600 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-teal-700 transition-all shadow-xl shadow-teal-900/20 flex items-center justify-center gap-3 group"
                >
                  <FileText size={24} />
                  פתיחת הקובץ לצפייה
                </a>
                <a 
                  href="/pdfs/recommendations.pdf" 
                  download 
                  className="bg-slate-100 text-slate-700 px-10 py-5 rounded-full font-black text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-3"
                >
                  <Download size={24} />
                  הורדת הקובץ למחשב
                </a>
              </div>
            </div>

            <div className="p-12 bg-slate-50/50 grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-4 border-white rotate-1">
                <div className="absolute inset-0 bg-teal-600/5 flex items-center justify-center p-8 text-center">
                  <div className="text-slate-300">
                    <FileText size={80} className="mx-auto mb-4 opacity-50" />
                    <p className="font-bold text-sm">תצוגה מקדימה של מכתבי ההמלצה</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0 mt-1">
                       <Heart size={20} className="fill-current" />
                    </div>
                    <div>
                       <h4 className="font-black text-slate-900 mb-1">מכתבים מהלב</h4>
                       <p className="text-sm text-slate-500 font-medium">המלצות אישיות שנכתבו בכתב יד ובמייל על ידי הורי הגן המרוצים.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0 mt-1">
                       <Star size={20} className="fill-current" />
                    </div>
                    <div>
                       <h4 className="font-black text-slate-900 mb-1">הצלחה חינוכית</h4>
                       <p className="text-sm text-slate-500 font-medium">עדות להתפתחות המופלאה של הילדים תחת הגישה המונטסורית שלנו.</p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Footer Area */}
      <section className="py-20 border-t border-slate-100 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <Quote size={60} className="text-teal-50 mx-auto mb-8 fill-teal-50/50" />
           <p className="text-3xl font-black text-slate-800 italic leading-snug mb-8">
             "תודה רבה לחסידה ולכל הצוות על המסירות, החום והאהבה האינסופית. הילד שלנו פשוט מחכה כל בוקר להגיע לגן."
           </p>
           <p className="font-bold text-teal-600">אחת מהמלצות ההורים הרבות שקיבלנו</p>
        </div>
      </section>
    </main>
  );
}
