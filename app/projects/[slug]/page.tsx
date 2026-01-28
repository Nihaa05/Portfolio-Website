import { notFound } from 'next/navigation';
import { projects } from '@/data/portfolio';
import ProjectCaseStudy from './ProjectCaseStudy';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.shortDescription,
      type: 'article',
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
