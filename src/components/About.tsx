'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Coffee, Users, ShieldCheck, Zap, Heart, LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
}

const features: Feature[] = [
  {
    title: 'שיטת מונטסורי',
    description: 'סביבה המאפשרת לילד לבחור, להתנסות ולפתח עצמאות בקצב שלו תוך ליווי פדגוגי מקצועי.',
    icon: BookOpen,
    color: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    title: 'אינטליגנציה רגשית',
    description: 'ליווי רגשי צמוד המעניק לילד כלים לביטוי עצמי, ויסות רגשי וביטחון עצמי גבוה.',
    icon: Heart,
    color: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
  {
    title: 'תזונה בריאה ומאוזנת',
    description: 'אוכל טרי המבושל מדי יום במטבח המקצועי שלנו, תפריט שנבנה בליווי תזונאית.',
    icon: Coffee,
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    title: 'חשיפה לאנגלית',
    description: 'סביבה דו-לשונית המעניקה לילדים חשיפה טבעית ומהנה לשפה האנגלית דרך שירים ומשחקים.',
    icon: Users,
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    title: 'חוגי העשרה',
    description: 'מגוון רחב של פעילויות: ריתמיקה, תיאטרון בובות, יוגה לקטנטנים ותנועה.',
    icon: Zap,
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    title: 'ביטחון ובטיחות',
    description: 'צוות מוסמך שעובר הכשרות עזרה ראשונה, סביבה מבוקרת ומאובטחת ברמה הגבוהה ביותר.',
    icon: ShieldCheck,
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs font-black tracking-widest uppercase mb-4"
          >
            הפעוטון שלנו
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            סטנדרט חדש של חינוך וטיפול
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto font-medium"
          >
            אנחנו מאמינים בשותפות אמת בין הצוות להורים, למען צמיחה מיטבית של הילד בסביבה בטוחה ומעצימה.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-2 transition-all"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-[1.5rem] flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                  <Icon size={30} className={feature.iconColor} />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
