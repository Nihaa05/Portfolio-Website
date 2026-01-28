'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Database, Download, Shuffle, Layers, Share2, Activity, Workflow, ArrowRight, Sparkles } from 'lucide-react';
import { pipelineStages } from '@/data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  database: <Database size={24} />,
  download: <Download size={24} />,
  shuffle: <Shuffle size={24} />,
  layers: <Layers size={24} />,
  'share-2': <Share2 size={24} />,
  activity: <Activity size={24} />,
};

const stageColors = [
  { bg: 'from-blue-500 to-blue-600', glow: 'blue-500', light: 'bg-blue-50 dark:bg-blue-900/20' },
  { bg: 'from-cyan-500 to-teal-600', glow: 'cyan-500', light: 'bg-cyan-50 dark:bg-cyan-900/20' },
  { bg: 'from-purple-500 to-violet-600', glow: 'purple-500', light: 'bg-purple-50 dark:bg-purple-900/20' },
  { bg: 'from-indigo-500 to-blue-600', glow: 'indigo-500', light: 'bg-indigo-50 dark:bg-indigo-900/20' },
  { bg: 'from-amber-500 to-orange-600', glow: 'amber-500', light: 'bg-amber-50 dark:bg-amber-900/20' },
  { bg: 'from-emerald-500 to-teal-600', glow: 'emerald-500', light: 'bg-emerald-50 dark:bg-emerald-900/20' },
];

export default function DataEngineerMindset() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800/50 dark:via-gray-900 dark:to-gray-800/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Flowing data lines animation */}
        <svg className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${-100 + i * 50} ${100 + i * 30} Q${200 + i * 100} ${50 + i * 40} ${500 + i * 80} ${150 + i * 20} T${1000 + i * 50} ${100 + i * 35}`}
              stroke={`url(#flowGradient${i})`}
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 20"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
              transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, repeatType: 'loop' }}
            />
          ))}
          <defs>
            {[...Array(8)].map((_, i) => (
              <linearGradient key={i} id={`flowGradient${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={i % 2 === 0 ? '#3b82f6' : '#8b5cf6'} stopOpacity="0" />
                <stop offset="50%" stopColor={i % 2 === 0 ? '#3b82f6' : '#8b5cf6'} stopOpacity="0.8" />
                <stop offset="100%" stopColor={i % 2 === 0 ? '#3b82f6' : '#8b5cf6'} stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>
        </svg>
        
        <motion.div 
          className="absolute top-10 left-1/4 w-64 h-64 bg-purple-200/40 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-1/4 w-64 h-64 bg-azure-200/40 dark:bg-azure-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-azure-100 dark:from-purple-900/30 dark:to-azure-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: 'spring', delay: 0.1 }}
            >
              <Workflow size={16} />
              End-to-End Pipeline
              <Sparkles size={14} className="text-amber-500" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Data Engineer <span className="bg-gradient-to-r from-purple-600 to-azure-600 bg-clip-text text-transparent">Mindset</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              How I approach data engineering: from source to insights, with reliability at every stage.
            </p>
          </div>

          {/* Pipeline Visual */}
          <div className="relative">
            {/* Desktop View - Horizontal */}
            <div className="hidden lg:block">
              {/* Connection line with flowing animation */}
              <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0">
                <div className="w-full h-full bg-gradient-to-r from-blue-200 via-purple-200 to-emerald-200 dark:from-blue-800 dark:via-purple-800 dark:to-emerald-800 rounded-full" />
                <motion.div
                  className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-azure-500 to-transparent rounded-full"
                  animate={{ x: ['0%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </div>
              
              <div className="flex items-stretch justify-between gap-3 relative z-10">
                {pipelineStages.map((stage, index) => (
                  <motion.div
                    key={stage.name}
                    className="flex-1 relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.15, type: 'spring' }}
                    onMouseEnter={() => setHoveredStage(index)}
                    onMouseLeave={() => setHoveredStage(null)}
                  >
                    {/* Animated Arrow Connector */}
                    {index < pipelineStages.length - 1 && (
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
                        <motion.div
                          className="flex items-center"
                          animate={hoveredStage === index ? { x: [0, 5, 0] } : {}}
                          transition={{ duration: 0.5, repeat: hoveredStage === index ? Infinity : 0 }}
                        >
                          <ArrowRight
                            size={24}
                            className={`transition-colors duration-300 ${hoveredStage === index ? 'text-azure-500' : 'text-gray-300 dark:text-gray-600'}`}
                          />
                        </motion.div>
                      </div>
                    )}

                    {/* Stage Card with glow effect */}
                    <motion.div
                      className={`relative h-full p-6 rounded-2xl bg-white dark:bg-gray-800 border-2 transition-all duration-300 overflow-hidden ${
                        hoveredStage === index
                          ? 'border-transparent shadow-2xl'
                          : 'border-gray-200 dark:border-gray-700 shadow-sm'
                      }`}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      {/* Gradient border effect on hover */}
                      {hoveredStage === index && (
                        <motion.div
                          className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r ${stageColors[index].bg} blur-sm`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                        />
                      )}
                      
                      {/* Glow effect */}
                      <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-${stageColors[index].glow}/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />

                      {/* Step number */}
                      <div className="absolute top-3 right-3 text-xs font-bold text-gray-300 dark:text-gray-600">
                        0{index + 1}
                      </div>

                      {/* Icon with gradient */}
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stageColors[index].bg} flex items-center justify-center text-white mb-4 shadow-lg`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {iconMap[stage.icon]}
                      </motion.div>

                      {/* Name */}
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {stage.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {stage.description}
                      </p>

                      {/* Tools with animation */}
                      <motion.div
                        className="space-y-1.5"
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: hoveredStage === index ? 1 : 0.6 }}
                      >
                        {stage.tools.slice(0, 4).map((tool, toolIndex) => (
                          <motion.div
                            key={toolIndex}
                            className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2"
                            initial={{ x: 0 }}
                            animate={{ x: hoveredStage === index ? 5 : 0 }}
                            transition={{ delay: toolIndex * 0.05 }}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stageColors[index].bg}`} />
                            {tool}
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile/Tablet View - Vertical */}
            <div className="lg:hidden">
              <div className="space-y-4">
                {pipelineStages.map((stage, index) => (
                  <motion.div
                    key={stage.name}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Vertical Connector */}
                    {index < pipelineStages.length - 1 && (
                      <div className="absolute left-6 bottom-0 w-0.5 h-4 bg-gray-300 dark:bg-gray-600 transform translate-y-full" />
                    )}

                    {/* Stage Card */}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stageColors[index]} flex items-center justify-center text-white flex-shrink-0`}
                      >
                        {iconMap[stage.icon]}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {stage.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {stage.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {stage.tools.slice(0, 3).map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
