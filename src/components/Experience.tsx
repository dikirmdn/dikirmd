'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const items = timelineRef.current;

    items.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.8,
        ease: 'power3.out',
      });
    });
  }, []);

  const experiences = [
    {
      year: '2024 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading development of enterprise-scale applications using modern tech stack',
    },
    {
      year: '2022 - 2024',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      description: 'Built responsive web applications and RESTful APIs for various clients',
    },
    {
      year: '2020 - 2022',
      title: 'Frontend Developer',
      company: 'Creative Agency',
      description: 'Developed interactive user interfaces with focus on performance and UX',
    },
    {
      year: '2019 - 2020',
      title: 'Junior Developer',
      company: 'StartUp Labs',
      description: 'Contributed to multiple projects while learning modern development practices',
    },
  ];

  return (
    <section id="experience" className="relative min-h-screen px-6 py-32">
      <div className="mx-auto max-w-4xl relative z-10">
        <h2 className="mb-16 text-center text-5xl font-bold text-white md:text-6xl">
          Experience <span className="text-gray-400">Timeline</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-linear-to-b from-gray-700 via-gray-600 to-gray-700" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              ref={(el) => {
                if (el) timelineRef.current[index] = el;
              }}
              className={`relative mb-16 flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="glass rounded-2xl p-6 transition-all duration-300 hover:scale-105">
                  <div className="mb-2 text-sm text-gray-400">{exp.year}</div>
                  <h3 className="mb-1 text-xl font-bold text-white">{exp.title}</h3>
                  <div className="mb-3 text-sm text-gray-300">{exp.company}</div>
                  <p className="text-sm text-gray-400">{exp.description}</p>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-gray-800 bg-white shadow-lg shadow-white/20" />

              {/* Empty space */}
              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
