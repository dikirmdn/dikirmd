'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const projects = projectsRef.current;

    projects.forEach((project, index) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1,
        ease: 'power3.out',
      });
    });
  }, []);

  const projects = [
    {
      title: 'Room Booking',
      description: 'Web based room reservation system with real-time booking management and schedule tracking.',
      tech: ['Laravel', 'MySQL', 'TailwindCSS', 'Alpinejs'],
      image: '/bookings.png',
      demoUrl: 'https://bookingroom.dsi.co.id',
      sourceUrl: '',
    },
    {
      title: 'Competency Test for Prospective Employees',
      description: 'Online employee assessment platform with interactive tests.',
      tech: ['Laravel', 'MySQL', 'TailwindCSS', 'Alpinejs'],
      image: '/iqtest.png',
      demoUrl: 'https://demo.dikirmd.tech',
      sourceUrl: '', 
    },
    {
      title: 'DSI Recruitment Portal',
      description: 'A professional recruitment platform for DSI that enables job seekers to explore career opportunities, submit applications online, and streamline the hiring process efficiently.',
      tech: ['Laravel', 'MySQL', 'TailwindCSS', 'Alpinejs'],
      image: '/karir.png',
      demoUrl: 'https://karir.dsi.co.id',
      sourceUrl: '', 
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen px-6 py-32">
      <div className="mx-auto max-w-7xl relative z-10">
        <h2 className="mb-16 text-center text-5xl font-bold text-white md:text-6xl">
          Recent <span className="text-gray-400">Projects</span>
        </h2>

        <div ref={containerRef} className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                if (el) projectsRef.current[index] = el;
              }}
              className="glass group overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="relative h-64 overflow-hidden bg-black/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="mb-3 text-2xl font-bold text-white">{project.title}</h3>
                <p className="mb-4 text-gray-400">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gray-700 px-6 py-2 text-sm text-white transition-all hover:border-gray-500 hover:bg-gray-900"
                  >
                    View Website
                  </a>
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-6 py-2 text-sm text-black transition-all hover:bg-gray-200"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
