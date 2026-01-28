'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              <span className="text-azure-600 dark:text-azure-400">NP</span> • {personalInfo.name}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Data Engineer | Azure | Power Platform
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-azure-100 dark:hover:bg-azure-900/30 hover:text-azure-600 dark:hover:text-azure-400 transition-colors"
                aria-label={link.name}
              >
                {link.icon === 'github' && <Github size={20} />}
                {link.icon === 'linkedin' && <Linkedin size={20} />}
                {link.icon === 'mail' && <Mail size={20} />}
              </a>
            ))}
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 flex items-center justify-center md:justify-end gap-1">
              Built with <Heart size={12} className="text-rose-500" /> using Next.js & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
