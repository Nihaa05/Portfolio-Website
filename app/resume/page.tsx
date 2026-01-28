'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Download, FileText, Briefcase, GraduationCap, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { personalInfo, experiences, certifications, skillCategories } from '@/data/portfolio';

export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-azure-600 dark:hover:text-azure-400 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Portfolio
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-xl text-azure-600 dark:text-azure-400 font-medium mb-6">
              {personalInfo.title}
            </p>

            {/* Download Button */}
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-azure-600 hover:bg-azure-700 text-white font-medium rounded-lg shadow-lg shadow-azure-500/25 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={18} />
              Download Resume (PDF)
            </motion.a>
          </motion.header>

          {/* Resume Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 md:p-12"
          >
            {/* Summary */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-azure-600 dark:text-azure-400" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Professional Summary
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {personalInfo.tagline} Experienced in Azure data services, Microsoft Fabric, and Power Platform. 
                Passionate about building reliable data pipelines, implementing data quality frameworks, and 
                automating business processes. Holds Microsoft Certified: Fabric Data Engineer Associate certification.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-azure-600 dark:text-azure-400" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Experience
                </h2>
              </div>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.startDate} – {exp.endDate}
                      </span>
                    </div>
                    <p className="text-azure-600 dark:text-azure-400 font-medium mb-3">
                      {exp.company} • {exp.location}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-azure-500 mt-1.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-azure-600 dark:text-azure-400" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Technical Skills
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {skillCategories.map((category) => (
                  <div key={category.name}>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.skills.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-azure-600 dark:text-azure-400" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Certifications
                </h2>
              </div>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                  >
                    <Award className="text-amber-500 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-500 dark:text-gray-400 mt-8 text-sm"
          >
            Replace /public/resume.pdf with your actual resume file.
          </motion.p>
        </div>
      </main>
      <Footer />
    </>
  );
}
