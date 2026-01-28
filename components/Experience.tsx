'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Calendar, Building2, ChevronDown, ChevronUp, Briefcase, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { experiences } from '@/data/portfolio';

const cardColors = [
  { gradient: 'from-azure-500 to-blue-600', border: 'border-l-azure-500', bg: 'bg-azure-50 dark:bg-azure-900/20' },
  { gradient: 'from-purple-500 to-violet-600', border: 'border-l-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
  { gradient: 'from-emerald-500 to-teal-600', border: 'border-l-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
  { gradient: 'from-amber-500 to-orange-600', border: 'border-l-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id || null);

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800/50 dark:via-gray-900 dark:to-gray-800/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-azure-200/30 dark:bg-azure-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
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
              <Briefcase size={16} />
              Career Journey
              <Sparkles size={14} className="text-amber-500" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Professional <span className="bg-gradient-to-r from-azure-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              A track record of building reliable data solutions and delivering measurable impact.
            </p>
          </div>

          {/* Experience Cards with Timeline */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-azure-500 via-purple-500 to-emerald-500 hidden md:block" />
            
            <div className="space-y-4">
              {experiences.map((exp, index) => {
                const isExpanded = expandedId === exp.id;
                const colorScheme = cardColors[index % cardColors.length];
                return (
                  <motion.div
                    key={exp.id}
                    className="relative md:pl-16"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.15, type: 'spring' }}
                  >
                    {/* Timeline Dot */}
                    <motion.div 
                      className={`absolute left-4 top-6 w-5 h-5 rounded-full bg-gradient-to-br ${colorScheme.gradient} border-4 border-white dark:border-gray-900 shadow-lg hidden md:flex items-center justify-center z-10`}
                      whileHover={{ scale: 1.3 }}
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      className={`bg-white dark:bg-gray-800 rounded-2xl border-l-4 ${colorScheme.border} border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl transition-all`}
                      whileHover={{ y: -3, scale: 1.01 }}
                    >
                      {/* Header - Always Visible */}
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                        className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          {/* Company Logo */}
                          <motion.div 
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorScheme.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                            whileHover={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            {exp.company.charAt(0)}
                          </motion.div>
                          
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                              {exp.role}
                              {index === 0 && (
                                <span className="text-xs font-semibold px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full">
                                  Current
                                </span>
                              )}
                            </h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400 mt-1">
                              <span className="flex items-center gap-1.5 font-medium text-gray-700 dark:text-gray-300">
                                <Building2 size={14} className="text-azure-500" />
                                {exp.company}
                              </span>
                              <span className="hidden sm:flex items-center gap-1.5">
                                <MapPin size={14} />
                                {exp.location}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Calendar size={14} />
                                {exp.startDate} – {exp.endDate}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <motion.div 
                          className={`p-2 rounded-full ${colorScheme.bg}`}
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={20} className="text-gray-500 dark:text-gray-400" />
                        </motion.div>
                      </button>

                      {/* Expandable Content */}
                      <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700/50">
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-emerald-500" />
                            Key Achievements
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {exp.highlights.map((highlight, hIndex) => (
                              <motion.div
                                key={hIndex}
                                className={`flex items-start gap-3 p-3 rounded-lg ${colorScheme.bg} text-sm text-gray-700 dark:text-gray-300`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={isExpanded ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: hIndex * 0.05 }}
                              >
                                <ArrowUpRight size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
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
