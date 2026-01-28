'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, Database, Zap, ArrowRight, Download, Mail, Code2, GitBranch, Workflow, Server, Cloud, Cpu, BarChart3, FileJson, Terminal, Boxes, Layers, Binary, Table2, PieChart, Activity } from 'lucide-react';
import { personalInfo, proofChips } from '@/data/portfolio';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const iconMap: Record<string, React.ReactNode> = {
  award: <Award size={14} />,
  database: <Database size={14} />,
  zap: <Zap size={14} />,
};

// Floating data icons with positions and properties
const floatingIcons = [
  { icon: Database, label: 'SQL', x: '8%', y: '15%', size: 32, color: 'text-azure-500' },
  { icon: Cloud, label: 'Azure', x: '92%', y: '12%', size: 36, color: 'text-blue-500' },
  { icon: Server, label: 'ETL', x: '5%', y: '45%', size: 28, color: 'text-purple-500' },
  { icon: Code2, label: 'Python', x: '88%', y: '35%', size: 30, color: 'text-emerald-500' },
  { icon: GitBranch, label: 'Git', x: '12%', y: '75%', size: 26, color: 'text-orange-500' },
  { icon: Workflow, label: 'Pipeline', x: '85%', y: '65%', size: 34, color: 'text-cyan-500' },
  { icon: Cpu, label: 'Spark', x: '3%', y: '60%', size: 30, color: 'text-red-500' },
  { icon: BarChart3, label: 'Analytics', x: '95%', y: '50%', size: 28, color: 'text-indigo-500' },
  { icon: FileJson, label: 'JSON', x: '15%', y: '25%', size: 24, color: 'text-yellow-500' },
  { icon: Terminal, label: 'CLI', x: '90%', y: '80%', size: 26, color: 'text-gray-500' },
  { icon: Boxes, label: 'Docker', x: '6%', y: '85%', size: 32, color: 'text-blue-400' },
  { icon: Layers, label: 'Stack', x: '93%', y: '25%', size: 28, color: 'text-violet-500' },
  { icon: Binary, label: 'Data', x: '18%', y: '55%', size: 22, color: 'text-teal-500' },
  { icon: Table2, label: 'Tables', x: '82%', y: '75%', size: 26, color: 'text-pink-500' },
  { icon: PieChart, label: 'BI', x: '10%', y: '35%', size: 28, color: 'text-amber-500' },
  { icon: Activity, label: 'Monitor', x: '87%', y: '45%', size: 24, color: 'text-lime-500' },
];

// Interactive floating icon component
function FloatingIcon({ icon: Icon, label, x, y, size, color, delay }: {
  icon: React.ElementType;
  label: string;
  x: string;
  y: string;
  size: number;
  color: string;
  delay: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    // Move away in random direction when hovered
    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 60;
    setPosition({
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    });
    setIsHovered(true);
    
    // Return to original position after a delay
    setTimeout(() => {
      setPosition({ x: 0, y: 0 });
      setIsHovered(false);
    }, 1500);
  };

  return (
    <motion.div
      className={`absolute cursor-pointer ${color} group`}
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: position.x,
        y: position.y,
      }}
      transition={{
        opacity: { delay: delay * 0.1, duration: 0.5 },
        scale: { delay: delay * 0.1, duration: 0.5, type: 'spring' },
        x: { type: 'spring', stiffness: 100, damping: 15 },
        y: { type: 'spring', stiffness: 100, damping: 15 },
      }}
      onMouseEnter={handleMouseEnter}
      whileHover={{ scale: 1.3 }}
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 ${color} blur-lg opacity-0`}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
      />
      {/* Icon */}
      <motion.div
        className="relative"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          delay: delay * 0.2,
        }}
      >
        <Icon size={size} strokeWidth={1.5} />
        {/* Label tooltip */}
        <motion.span
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium bg-gray-900/90 dark:bg-white/90 text-white dark:text-gray-900 px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {label}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-azure-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-900" />
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-azure-400/20 dark:bg-azure-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-400/15 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/10 dark:bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        {/* Data flow lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${10 + i * 15}%`}
              y1="0%"
              x2={`${20 + i * 12}%`}
              y2="100%"
              stroke="url(#dataGradient)"
              strokeWidth="1"
              strokeDasharray="8 12"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, repeatType: 'loop' }}
            />
          ))}
          <defs>
            <linearGradient id="dataGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Interactive Data Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, i) => (
          <FloatingIcon key={i} {...item} delay={i} />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Profile Photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            {/* Animated rotating ring */}
            <motion.div
              className="absolute -inset-3 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #3b82f6)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner ring */}
            <div className="absolute -inset-2 rounded-full bg-white dark:bg-gray-900" />
            {/* Pulsing glow */}
            <motion.div
              className="absolute -inset-6 rounded-full bg-azure-500/20 dark:bg-azure-400/15 blur-2xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* Photo container */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <Image
                src="/niharika_photo.png"
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Status badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: 'spring' }}
            >
              <motion.span 
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              Open to Work
            </motion.div>
            {/* Tech badges around photo */}
            <motion.div
              className="absolute -top-2 -left-2 bg-white dark:bg-gray-800 text-azure-600 dark:text-azure-400 p-2 rounded-lg shadow-lg"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.7, type: 'spring' }}
            >
              <Database size={20} />
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 p-2 rounded-lg shadow-lg"
              initial={{ scale: 0, rotate: 20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, type: 'spring' }}
            >
              <Cloud size={20} />
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="text-center lg:text-left flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Name with gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-azure-800 to-gray-900 dark:from-white dark:via-azure-300 dark:to-white bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Title with typing effect style */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl font-medium mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-azure-600 dark:text-azure-400">Data Engineer</span>
              <span className="text-gray-400">|</span>
              <span className="text-purple-600 dark:text-purple-400">Azure Specialist</span>
              <span className="text-gray-400">|</span>
              <span className="text-emerald-600 dark:text-emerald-400">Power Apps</span>
            </motion.div>

            {/* Tagline with highlight */}
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Proof Chips with gradient borders */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {proofChips.map((chip, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Gradient border on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-azure-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                  <div className="relative inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 group-hover:border-transparent text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span className="text-azure-600 dark:text-azure-400 group-hover:text-azure-500">
                      {iconMap[chip.icon]}
                    </span>
                    {chip.text}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons with enhanced styling */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-azure-600 to-azure-500 hover:from-azure-500 hover:to-azure-600 text-white font-medium rounded-xl shadow-lg shadow-azure-500/30 transition-all overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={{ translateX: ['−100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              </motion.a>

              <motion.a
                href="/resume"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-azure-300 dark:hover:border-azure-600 shadow-sm transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} className="group-hover:animate-bounce" />
                Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-purple-500/30 transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={18} />
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator with text */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-azure-300 dark:border-azure-600 flex items-start justify-center p-1"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div 
              className="w-1.5 h-2.5 bg-azure-500 rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
