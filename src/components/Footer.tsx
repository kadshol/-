'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe, MessageCircle, Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-slate-700 pt-24 pb-12 border-t border-slate-100 relative overflow-hidden" dir="rtl">
      {/* Organic shapes like Ganey Agnon */}
      <div className="absolute top-[-5%] right-[-5%] w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 p-2 shadow-sm border border-teal-100">
                <Image 
                   src="./images/תמונה של חסידה.png" 
                   alt="לוגו" 
                   width={50} 
                   height={50}
                   className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-slate-900">פעוטון סאנשיין</span>
                <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest">חינוך • בית • קהילה</span>
              </div>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8 font-medium">
              מרחב חינוכי איכותי בירושלים המעניק לילדכם חממה של חום, ביטחון וצמיחה פדגוגית ברמה הגבוהה ביותר.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-full bg-slate-50 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all duration-300 border border-slate-100">
                <Globe size={20} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-slate-50 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all duration-300 border border-slate-100">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 text-slate-900 border-b-2 border-teal-500/20 pb-2 inline-block">ניווט מהיר</h4>
            <ul className="space-y-4 text-slate-600 font-bold">
              <li><a href="#home" className="hover:text-teal-600 transition-colors">דף הבית</a></li>
              <li><a href="#about" className="hover:text-teal-600 transition-colors">אודות הפעוטון</a></li>
              <li><a href="#vision" className="hover:text-teal-600 transition-colors">החזון החינוכי</a></li>
              <li><a href="#gallery" className="hover:text-teal-600 transition-colors">גלריה</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 text-slate-900 border-b-2 border-teal-500/20 pb-2 inline-block">צרו קשר</h4>
            <ul className="space-y-6 text-slate-600 font-bold">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <span>0532741715</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <span>office@sunshine-hdo.co.il</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mt-1">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-slate-900">ירושלים • שכונת רמות א׳</p>
                  <p className="text-sm font-medium text-slate-500">רחוב יעקב אליעזר 47</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 text-slate-900 border-b-2 border-teal-500/20 pb-2 inline-block">שעות פעילות</h4>
            <ul className="space-y-4 text-slate-600 font-bold">
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span>ראשון - חמישי</span>
                <span className="text-slate-900">07:30 - 16:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm font-bold">
          <p>© 2026 פעוטון סאנשיין בירושלים. כל הזכויות שמורות.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-teal-600 transition-colors">הצהרת נגישות</a>
            <a href="#" className="hover:text-teal-600 transition-colors">מדיניות פרטיות</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
