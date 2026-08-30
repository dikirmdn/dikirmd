'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/lib/projects';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          }
        );
      }

      projectsRef.current.forEach((project, index) => {
        if (!project) return;

        gsap.fromTo(
          project,
          {
            opacity: 0,
            y: 50,
            scale: 0.96,
          },
          {
            scrollTrigger: {
              trigger: project,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: (index % 2) * 0.15,
            ease: 'power3.out',
            clearProps: 'transform',
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="relative min-h-screen px-6 py-32">
      <div className="mx-auto max-w-7xl relative z-10">
        <h2 ref={titleRef} className="mb-16 text-center text-5xl font-bold text-gray-800 dark:text-gray-100 md:text-6xl">
          Selected <span className="text-gray-600 dark:text-gray-400">Projects</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              ref={(el) => {
                if (el) projectsRef.current[index] = el;
              }}
              className="neo-raised group flex flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:neo-hover"
            >
              <Link href={`/projects/${project.slug}`} className="flex flex-1 flex-col">
                <div className="relative h-64 overflow-hidden neo-pressed">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mb-3 text-2xl font-bold text-gray-800 dark:text-gray-100">{project.title}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="neo-pressed rounded-full px-3 py-1 text-xs text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-black/5 pt-6 dark:border-white/5">
                    <span className="neo-raised neo-hover inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm text-gray-800 dark:text-gray-100 font-medium transition-all">
                      View Details
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>

                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
