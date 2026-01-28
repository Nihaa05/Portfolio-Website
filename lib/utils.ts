import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export function getTagColor(tag: string): string {
  const tagColors: Record<string, string> = {
    'Fabric': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    'Lakehouse': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    'Dataflows Gen2': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    'ADF': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    'Synapse': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    'ADLS Gen2': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    'Azure': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    'Event Hubs': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
    'Databricks': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    'Spark': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    'Delta': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
    'SQL': 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300',
    'Python': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Power Apps': 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
    'Power Automate': 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
    'Dataverse': 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
    'SharePoint': 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
    'Power BI': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
    'Monitoring': 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
    'Great Expectations': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'CI/CD': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
    'Reporting': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
    'Optimization': 'bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300',
    'Partitioning': 'bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300',
    'Best Practices': 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300',
  };

  return tagColors[tag] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
}

export function getArchitectureBlockColor(type: string): string {
  const colors: Record<string, string> = {
    'source': 'bg-blue-500 border-blue-600',
    'ingestion': 'bg-cyan-500 border-cyan-600',
    'storage': 'bg-emerald-500 border-emerald-600',
    'processing': 'bg-purple-500 border-purple-600',
    'serving': 'bg-amber-500 border-amber-600',
    'monitoring': 'bg-rose-500 border-rose-600',
  };

  return colors[type] || 'bg-gray-500 border-gray-600';
}

export function matchesFilter(tags: string[], filter: string): boolean {
  if (filter === 'All') return true;
  
  const filterMappings: Record<string, string[]> = {
    'Azure': ['ADF', 'Synapse', 'ADLS Gen2', 'Azure', 'Event Hubs', 'Databricks'],
    'Fabric': ['Fabric', 'Lakehouse', 'Dataflows Gen2'],
    'Power Apps': ['Power Apps', 'Power Automate', 'Dataverse', 'SharePoint'],
    'ETL': ['ADF', 'Synapse', 'Python', 'SQL', 'Dataflows Gen2'],
    'Streaming': ['Event Hubs', 'Databricks', 'Spark', 'Delta'],
    'Analytics': ['Power BI', 'Reporting', 'SQL'],
  };

  const matchingTags = filterMappings[filter] || [filter];
  return tags.some(tag => matchingTags.includes(tag));
}
