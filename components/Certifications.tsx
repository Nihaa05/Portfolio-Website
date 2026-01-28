'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, BadgeCheck, Sparkles } from 'lucide-react';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-50 via-amber-50/30 to-gray-50 dark:from-gray-800/50 dark:via-gray-900 dark:to-gray-800/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-1/4 w-72 h-72 bg-amber-200/30 dark:bg-amber-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        {/* Floating stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-300 dark:text-amber-600"
            style={{ 
              left: `${15 + i * 20}%`, 
              top: `${20 + (i % 3) * 25}%` 
            }}
            animate={{ 
              y: [0, -10, 0], 
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          >
            <Sparkles size={16 + i * 4} />
          </motion.div>
        ))}
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-600 dark:text-amber-400 text-sm font-semibold mb-4"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: 'spring', delay: 0.1 }}
            >
              <BadgeCheck size={16} />
              Verified Credentials
              <Sparkles size={14} className="text-amber-500" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Professional <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Validated expertise through industry-recognized certifications.
            </p>
          </div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15, type: 'spring' }}
                whileHover={{ y: -5, scale: 1.01 }}
              >
                {/* Background glow */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-amber-400/20 to-purple-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col md:flex-row items-start gap-6">
                  {/* Badge with animation */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      className="relative w-20 h-20 md:w-24 md:h-24"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Outer glow ring */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400 to-purple-500 opacity-30 blur-lg"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      {/* Badge background */}
                      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-purple-600 flex items-center justify-center shadow-xl overflow-hidden">
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                          animate={{ translateX: ['-100%', '200%'] }}
                          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                        />
                        <Award size={36} className="text-white drop-shadow-lg" />
                      </div>
                      {/* Verified badge */}
                      <motion.div
                        className="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.15, type: 'spring' }}
                      >
                        <BadgeCheck size={14} className="text-white" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                      {cert.name}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-azure-100 to-azure-50 dark:from-azure-900/30 dark:to-azure-800/20 text-azure-700 dark:text-azure-300 text-sm font-semibold border border-azure-200 dark:border-azure-700">
                        {cert.issuer}
                      </span>
                      <span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium">
                        {cert.date}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                      {cert.description}
                    </p>

                    {/* Verify Link */}
                    <motion.a
                      href="#"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-semibold shadow-lg shadow-amber-500/25 transition-all"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BadgeCheck size={18} />
                      Verify Credential
                      <ExternalLink size={14} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Note with sparkle */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-12 text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <Sparkles size={18} className="text-amber-500" />
            <p className="text-center">
              Continuously learning and pursuing additional certifications in cloud data technologies.
            </p>
            <Sparkles size={18} className="text-amber-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
