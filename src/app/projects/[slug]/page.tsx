import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft, FaExternalLinkAlt, FaCheck } from 'react-icons/fa';
import { projects, getProject } from '@/lib/projects';
import Navbar from '@/components/Navbar';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { label: 'The Problem', text: project.problem, tone: 'text-rose-500 dark:text-rose-400' },
    { label: 'The Solution', text: project.solution, tone: 'text-blue-500 dark:text-blue-400' },
    { label: 'The Impact', text: project.impact, tone: 'text-emerald-500 dark:text-emerald-400' },
  ];

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <article className="relative mx-auto max-w-5xl px-6 pb-32 pt-32">
          {/* Back */}
          <Link
            href="/#projects"
            className="neo-flat neo-hover mb-10 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 transition-all dark:text-gray-300"
          >
            <FaArrowLeft className="text-xs" /> Back to Projects
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="neo-flat rounded-full px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300">
                {project.category}
              </span>
              <span className="text-sm font-medium text-gray-400 dark:text-gray-500">
                {project.year}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-raised neo-hover inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-gray-800 transition-all dark:text-gray-100"
                >
                  Visit Live Site <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-pressed inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-gray-800 transition-all dark:text-gray-100"
                >
                  Source Code
                </a>
              )}
            </div>
          </header>

          {/* Mockup */}
          <div className="neo-raised mb-16 overflow-hidden rounded-3xl p-3 sm:p-4">
            {/* Browser chrome */}
            <div className="neo-pressed mb-3 flex items-center gap-2 rounded-2xl px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-rose-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <div className="ml-3 flex-1 truncate rounded-full bg-black/5 px-4 py-1 text-xs text-gray-500 dark:bg-white/5 dark:text-gray-400">
                {project.demoUrl || 'preview'}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl neo-pressed">
              <img
                src={project.image}
                alt={`${project.title} mockup`}
                className="w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Case study */}
            <div className="space-y-10 lg:col-span-2">
              {sections.map((section) => (
                <section key={section.label} className="neo-flat rounded-3xl p-8">
                  <h2
                    className={`mb-3 text-sm font-bold uppercase tracking-widest ${section.tone}`}
                  >
                    {section.label}
                  </h2>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    {section.text}
                  </p>
                </section>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="neo-raised rounded-3xl p-8">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="neo-flat rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="neo-raised rounded-3xl p-8">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="neo-flat mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] text-emerald-500 dark:text-emerald-400">
                        <FaCheck />
                      </span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {/* Other projects */}
          <div className="mt-24">
            <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-gray-100">
              Other Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {projects
                .filter((p) => p.slug !== project.slug)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={`/projects/${other.slug}`}
                    className="neo-raised neo-hover group flex items-center gap-4 overflow-hidden rounded-2xl p-4 transition-all hover:-translate-y-1"
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl neo-pressed">
                      <img
                        src={other.image}
                        alt={other.title}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate font-semibold text-gray-800 dark:text-gray-100">
                        {other.title}
                      </h3>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        {other.category}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
