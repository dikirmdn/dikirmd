'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiLaravel,
  SiNodedotjs,
  SiMysql,
  SiGit,
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const skills = skillsRef.current;

    skills.forEach((skill, index) => {
      gsap.from(skill, {
        scrollTrigger: {
          trigger: skill,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'back.out(1.7)',
      });

      // Floating animation
      gsap.to(skill, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2,
      });
    });
  }, []);

  const skills = [
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Three.js', icon: TbBrandThreejs, color: '#000000' },
  ];

  return (
    <section id="skills" className="relative min-h-screen px-6 py-32">
      <div className="mx-auto max-w-7xl relative z-10">
        <h2 className="mb-16 text-center text-5xl font-bold text-gray-800 dark:text-gray-100 md:text-6xl">
          Tech <span className="text-gray-600 dark:text-gray-400">Stack</span>
        </h2>

        <div ref={containerRef} className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                ref={(el) => {
                  if (el) skillsRef.current[index] = el;
                }}
                className="neo-raised neo-hover group relative flex flex-col items-center justify-center rounded-3xl p-8 transition-all duration-300"
              >
                <Icon className="mb-4 text-6xl transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
