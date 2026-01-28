'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, MapPin, Briefcase, Send, ArrowRight, Sparkles, MessageCircle, Clock } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  mail: <Mail size={22} />,
  linkedin: <Linkedin size={22} />,
  github: <Github size={22} />,
};

const buttonStyles: Record<string, { bg: string; gradient: string; shadow: string }> = {
  mail: { 
    bg: 'from-azure-600 to-blue-600', 
    gradient: 'from-azure-400 to-blue-400',
    shadow: 'shadow-azure-500/30'
  },
  linkedin: { 
    bg: 'from-[#0077B5] to-[#0066A2]', 
    gradient: 'from-[#00a0dc] to-[#0077B5]',
    shadow: 'shadow-[#0077B5]/30'
  },
  github: { 
    bg: 'from-gray-800 to-gray-900', 
    gradient: 'from-gray-600 to-gray-700',
    shadow: 'shadow-gray-800/30'
  },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-azure-50/30 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-1/4 w-72 h-72 bg-azure-200/30 dark:bg-azure-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        {/* Floating message icons */}
        <motion.div
          className="absolute top-1/4 right-10 text-azure-200 dark:text-azure-800"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <MessageCircle size={30} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-10 text-purple-200 dark:text-purple-800"
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Send size={25} />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-azure-100 to-purple-100 dark:from-azure-900/30 dark:to-purple-900/30 text-azure-600 dark:text-azure-400 text-sm font-semibold mb-4"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: 'spring', delay: 0.1 }}
            >
              <Send size={16} />
              Let&apos;s Connect
              <Sparkles size={14} className="text-amber-500" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Get In <span className="bg-gradient-to-r from-azure-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Interested in working together? Let&apos;s connect and discuss opportunities.
            </p>
          </div>

          {/* Contact Card */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 border-2 border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              {/* Decorative gradient corner */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-azure-400/20 to-purple-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-purple-400/20 to-azure-400/20 rounded-full blur-3xl" />

              <div className="relative grid md:grid-cols-2 gap-8">
                {/* Left - Info */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {personalInfo.name}
                  </h3>
                  <p className="text-lg text-transparent bg-gradient-to-r from-azure-600 to-purple-600 bg-clip-text font-semibold mb-6">
                    {personalInfo.title}
                  </p>

                  {/* What I'm Looking For */}
                  <motion.div 
                    className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-600/30 rounded-xl p-5 mb-6 border border-gray-200 dark:border-gray-600"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold mb-2">
                      <Briefcase size={18} className="text-azure-600 dark:text-azure-400" />
                      What I&apos;m Looking For
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {personalInfo.lookingFor}
                    </p>
                  </motion.div>

                  {/* Location & Availability */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <MapPin size={18} className="text-azure-600 dark:text-azure-400" />
                      </div>
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                        <Clock size={18} className="text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span>Response time: within 24 hours</span>
                    </div>
                  </div>
                </div>

                {/* Right - Contact Buttons */}
                <div className="flex flex-col justify-center space-y-4">
                  {socialLinks.map((link, index) => {
                    const style = buttonStyles[link.icon];
                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative flex items-center justify-between px-6 py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${style.bg} shadow-lg ${style.shadow} transition-all overflow-hidden`}
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                        whileHover={{ scale: 1.03, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`Contact via ${link.name}`}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        />
                        <div className="relative flex items-center gap-4">
                          {iconMap[link.icon]}
                          <span className="text-lg">{link.name}</span>
                        </div>
                        <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Availability Note */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-10 text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <motion.span 
              className="w-3 h-3 bg-emerald-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <p className="text-center font-medium">
              Currently open to new opportunities
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
