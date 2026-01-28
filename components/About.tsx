'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { aboutContent } from '@/data/portfolio';
import { TrendingUp, Users, Briefcase, Award, CheckCircle2, Sparkles, Database, Cloud, Zap } from 'lucide-react';

// Animated counter component
function AnimatedCounter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: Briefcase, label: 'Years Experience', value: 4, suffix: '+', color: 'from-azure-500 to-blue-600', bg: 'bg-azure-50 dark:bg-azure-900/20' },
  { icon: TrendingUp, label: 'Projects Delivered', value: 20, suffix: '+', color: 'from-purple-500 to-violet-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
  { icon: Users, label: 'Technologies', value: 15, suffix: '+', color: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
  { icon: Award, label: 'Certifications', value: 1, suffix: '', color: 'from-amber-500 to-orange-600', bg: 'bg-amber-50 dark:bg-amber-900/20' },
];

const highlights = [
  { text: 'Microsoft Certified Professional', icon: Award },
  { text: 'ETL Pipeline Expert', icon: Database },
  { text: 'Power Platform Automation', icon: Zap },
  { text: 'Cloud-Native Solutions', icon: Cloud },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-azure-50/30 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-azure-200/30 dark:bg-azure-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-azure-100 to-purple-100 dark:from-azure-900/30 dark:to-purple-900/30 text-azure-600 dark:text-azure-400 text-sm font-semibold mb-4"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: 'spring', delay: 0.1 }}
            >
              <Sparkles size={16} className="text-amber-500" />
              Get to know me
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              About <span className="bg-gradient-to-r from-azure-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Passionate about building scalable data solutions that drive business impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Content */}
            <div className="space-y-5">
              <motion.div
                className="relative p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-azure-500 to-purple-500 rounded-lg" />
                <p className="text-lg text-gray-700 dark:text-gray-200 font-medium leading-relaxed">
                  {aboutContent.intro}
                </p>
              </motion.div>

              {aboutContent.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-gray-600 dark:text-gray-400 leading-relaxed pl-4 border-l-2 border-azure-200 dark:border-azure-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}

              {/* Highlight chips */}
              <motion.div
                className="flex flex-wrap gap-3 pt-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-azure-300 dark:hover:border-azure-600 transition-all cursor-default"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <Icon size={14} className="text-azure-500 group-hover:text-azure-600" />
                      {item.text}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right: Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className={`relative p-5 rounded-2xl ${stat.bg} border border-gray-100 dark:border-gray-700 overflow-hidden group cursor-default`}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                      <Icon size={24} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
