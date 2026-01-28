'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Target,
  Lightbulb,
  CheckCircle2,
  ArrowUpCircle,
} from 'lucide-react';
import { Project } from '@/data/portfolio';
import { getTagColor, getArchitectureBlockColor } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ProjectCaseStudyProps {
  project: Project;
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-azure-600 dark:hover:text-azure-400 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-sm rounded-full ${getTagColor(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <Github size={18} />
                View Code
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-azure-600 text-white rounded-lg hover:bg-azure-700 transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            </div>
          </motion.header>

          {/* Outcome Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white mb-12"
          >
            <h2 className="text-lg font-semibold mb-2">Key Outcome</h2>
            <p className="text-emerald-50">{project.outcome}</p>
          </motion.div>

          {/* Problem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                <Target className="text-rose-600 dark:text-rose-400" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                The Problem
              </h2>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>
          </motion.section>

          {/* Approach */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <Lightbulb className="text-amber-600 dark:text-amber-400" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Approach
              </h2>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.caseStudy.approach}
              </p>
            </div>
          </motion.section>

          {/* Architecture Diagram */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Architecture
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 overflow-x-auto">
              <div className="flex flex-wrap justify-center gap-4 min-w-max">
                {project.caseStudy.architecture.map((block, index) => (
                  <div key={block.name} className="flex items-center gap-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className={`px-4 py-3 rounded-lg text-white text-sm font-medium shadow-md ${getArchitectureBlockColor(
                        block.type
                      )}`}
                    >
                      {block.name}
                    </motion.div>
                    {block.connections && block.connections.length > 0 && (
                      <motion.svg
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="text-gray-400 dark:text-gray-500"
                      >
                        <path
                          d="M5 12 L19 12 M14 7 L19 12 L14 17"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    )}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Legend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { type: 'source', label: 'Source' },
                    { type: 'ingestion', label: 'Ingestion' },
                    { type: 'storage', label: 'Storage' },
                    { type: 'processing', label: 'Processing' },
                    { type: 'serving', label: 'Serving' },
                    { type: 'monitoring', label: 'Monitoring' },
                  ].map((item) => (
                    <div key={item.type} className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded ${getArchitectureBlockColor(item.type)}`}
                      />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Results */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <CheckCircle2
                  className="text-emerald-600 dark:text-emerald-400"
                  size={20}
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Results
              </h2>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <ul className="space-y-3">
                {project.caseStudy.results.map((result, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                  >
                    <CheckCircle2
                      className="text-emerald-500 flex-shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>{result}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* What I'd Improve */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-azure-100 dark:bg-azure-900/30 flex items-center justify-center">
                <ArrowUpCircle
                  className="text-azure-600 dark:text-azure-400"
                  size={20}
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                What I&apos;d Improve Next
              </h2>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <ul className="space-y-3">
                {project.caseStudy.improvements.map((improvement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                  >
                    <ArrowUpCircle
                      className="text-azure-500 flex-shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>{improvement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft size={18} />
              View All Projects
            </Link>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  );
}
