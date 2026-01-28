'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { skillCategories } from '@/data/portfolio';
import { Cpu, Sparkles, Database, Cloud, Code2, Workflow, BarChart3, Zap } from 'lucide-react';

const chartColors = ['#0078D4', '#742774', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'];
const gradientColors = [
  'from-azure-500 to-blue-600',
  'from-purple-500 to-violet-600',
  'from-emerald-500 to-teal-600',
  'from-indigo-500 to-purple-600',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-600',
];

const categoryIcons = [Database, Cloud, Code2, Workflow, BarChart3, Zap];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Chart data
  const chartData = skillCategories.map((cat, index) => ({
    name: cat.name.split(' ').slice(0, 2).join(' '),
    fullName: cat.name,
    value: cat.proficiency,
    color: chartColors[index],
  }));

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 bg-emerald-200/30 dark:bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-72 h-72 bg-azure-200/30 dark:bg-azure-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        {/* Floating icons */}
        <motion.div
          className="absolute top-1/3 left-10 text-emerald-200 dark:text-emerald-800"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Cpu size={35} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-10 text-azure-200 dark:text-azure-800"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Code2 size={35} />
        </motion.div>
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-azure-100 dark:from-emerald-900/30 dark:to-azure-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-4"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: 'spring', delay: 0.1 }}
            >
              <Cpu size={16} />
              Technical Expertise
              <Sparkles size={14} className="text-amber-500" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Technical <span className="bg-gradient-to-r from-emerald-600 to-azure-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Core competencies across the modern data stack, from Azure services to Power Platform automation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skills Heatmap/Grid */}
            <div className="space-y-4">
              {skillCategories.map((category, catIndex) => {
                const Icon = categoryIcons[catIndex % categoryIcons.length];
                return (
                  <motion.div
                    key={category.name}
                    className={`relative p-5 rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                      hoveredCategory === category.name
                        ? 'border-transparent shadow-xl'
                        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                    }`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: catIndex * 0.1, type: 'spring' }}
                    onMouseEnter={() => setHoveredCategory(category.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Gradient background on hover */}
                    {hoveredCategory === category.name && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${gradientColors[catIndex]} opacity-10`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                      />
                    )}
                    
                    {/* Animated border */}
                    {hoveredCategory === category.name && (
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradientColors[catIndex]}`}
                        style={{ padding: '2px', margin: '-2px' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl" />
                      </motion.div>
                    )}

                    <div className="relative z-10">
                      {/* Category Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div 
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientColors[catIndex]} flex items-center justify-center shadow-lg`}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon size={22} className="text-white" />
                          </motion.div>
                          <h3 className="text-base font-bold text-gray-900 dark:text-white">
                            {category.name}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                            {category.proficiency}%
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full mb-4 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${gradientColors[catIndex]} relative`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${category.proficiency}%` } : {}}
                          transition={{ delay: catIndex * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                          />
                        </motion.div>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            className={`px-3 py-1.5 text-xs rounded-lg font-medium bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-transparent hover:shadow-md transition-all cursor-default`}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Skills Chart */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <BarChart3 size={20} className="text-emerald-500" />
                Proficiency by Category
              </h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis type="number" domain={[0, 100]} tick={{ fill: '#6B7280' }} />
                    <YAxis
                      type="category"
                      dataKey="name"
                      width={100}
                      tick={{ fill: '#6B7280', fontSize: 12 }}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
                              <p className="font-bold text-gray-900 dark:text-white">
                                {data.fullName}
                              </p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Proficiency: {data.value}%
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          className="transition-opacity duration-300"
                          style={{
                            opacity:
                              hoveredCategory === null ||
                              hoveredCategory === skillCategories[index].name
                                ? 1
                                : 0.3,
                          }}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                {skillCategories.map((cat, index) => (
                  <div
                    key={cat.name}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: chartColors[index] }}
                    />
                    <span className="hidden sm:inline">{cat.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
