'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import { Search, Github, ExternalLink, ArrowRight, X, FolderKanban, Sparkles, TrendingUp, Code2 } from 'lucide-react';
import { projects, projectFilterTags } from '@/data/portfolio';
import { getTagColor, matchesFilter } from '@/lib/utils';
import Link from 'next/link';

const projectColors = [
  'from-azure-500 via-blue-500 to-cyan-500',
  'from-purple-500 via-violet-500 to-indigo-500',
  'from-emerald-500 via-teal-500 to-cyan-500',
  'from-amber-500 via-orange-500 to-red-500',
  'from-pink-500 via-rose-500 to-red-500',
  'from-indigo-500 via-purple-500 to-pink-500',
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilterTag = matchesFilter(project.tags, activeFilter);
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesFilterTag && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 bg-azure-200/30 dark:bg-azure-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        {/* Floating code symbols */}
        <motion.div
          className="absolute top-1/4 right-1/4 text-purple-200 dark:text-purple-800"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Code2 size={40} />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-azure-100 dark:from-purple-900/30 dark:to-azure-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: 'spring', delay: 0.1 }}
            >
              <FolderKanban size={16} />
              Portfolio
              <Sparkles size={14} className="text-amber-500" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Featured <span className="bg-gradient-to-r from-purple-600 to-azure-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Real-world solutions demonstrating expertise in data engineering, Azure, and Power Platform.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-10">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-5">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm"
                aria-label="Search projects"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap justify-center gap-2">
              {projectFilterTags.map((tag) => (
                <motion.button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === tag
                      ? 'bg-gradient-to-r from-purple-600 to-azure-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, type: 'spring' }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Animated Gradient Border on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${projectColors[index % projectColors.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                  style={{ padding: '2px' }}
                />
                
                {/* Colored Top Bar */}
                <div className={`h-1.5 bg-gradient-to-r ${projectColors[index % projectColors.length]}`} />
                
                {/* Card Content */}
                <div className="p-6">
                  {/* Project Icon & Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${projectColors[index % projectColors.length]} flex items-center justify-center text-white flex-shrink-0`}>
                      <FolderKanban size={18} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-azure-600 group-hover:bg-clip-text transition-all line-clamp-2">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Outcome */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-3 mb-4 border border-emerald-100 dark:border-emerald-800/30">
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 flex items-start gap-2">
                      <TrendingUp size={16} className="flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">Impact:</span> {project.outcome}</span>
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 text-xs rounded-lg font-medium ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 text-xs rounded-lg font-medium bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={15} />
                      Code
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={15} />
                      Demo
                    </a>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-azure-600 hover:from-purple-700 hover:to-azure-700 rounded-lg shadow-sm transition-all"
                    >
                      Details
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                No projects found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('All');
                  setSearchQuery('');
                }}
                className="mt-3 text-sm text-azure-600 dark:text-azure-400 hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
