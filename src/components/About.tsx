'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
      });
    });
  }, []);

  const stats = [
    { value: '3.83', label: 'GPA' },
    { value: 'Fresh', label: 'Graduate' },
    { value: '∞', label: 'Curiosity' },
  ];

  const highlights = [
    {
      icon: '◆',
      title: 'Continuous Learning',
      description: 'Always exploring new technologies, tools, and ideas to grow.',
    },
    {
      icon: '◈',
      title: 'Team Collaboration',
      description: 'Believe in teamwork and knowledge sharing for meaningful results.',
    },
    {
      icon: '◉',
      title: 'Adaptability',
      description: 'Open to new challenges and eager to contribute positively.',
    },
  ];

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[index] = el;
  };

  return (
    <section ref={sectionRef} id="about" className="relative min-h-screen px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl relative z-10">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800 dark:text-gray-100 sm:mb-16 sm:text-5xl md:text-6xl">
          About <span className="text-gray-600 dark:text-gray-400">Me</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-5 md:gap-8">
          <div className="flex flex-col gap-6 md:col-span-2 md:gap-8">
            <div
              ref={setCardRef(0)}
              className="neo-raised group relative overflow-hidden rounded-3xl"
            >
              <div className="neo-pressed aspect-[4/5] w-full overflow-hidden">
                <img
                  src="/galeri1.jpeg"
                  alt="Portrait"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/30 to-transparent p-6">
                <p className="text-sm font-medium text-white/90">Captured in Bandung, 2026</p>
              </div>
            </div>

            <div
              ref={setCardRef(1)}
              className="neo-raised grid grid-cols-3 gap-3 rounded-3xl p-4 sm:p-6"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="neo-pressed flex flex-col items-center justify-center rounded-2xl p-3 sm:p-4"
                >
                  <span className="text-2xl font-bold text-gray-800 dark:text-gray-100 sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:text-xs">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 md:col-span-3 md:gap-8">
            <div
              ref={setCardRef(2)}
              className="neo-raised rounded-3xl p-6 sm:p-8 md:p-10"
            >
              <span className="neo-flat mb-4 inline-block rounded-full px-4 py-1 text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400">
                Hello there
              </span>
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-100 sm:text-3xl">
                Fresh graduate with a passion for growth.
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                I'm passionate about continuous learning and personal growth. I enjoy exploring new
                ideas, learning new technologies and skills, and adapting to new challenges. I also
                love communicating and collaborating with new people, believing that teamwork and
                knowledge sharing are essential for achieving meaningful results.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  ref={setCardRef(3 + index)}
                  className="neo-raised neo-hover group flex items-start gap-4 rounded-2xl p-5 transition-all sm:p-6"
                >
                  <div className="neo-pressed flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl text-gray-700 dark:text-gray-300 sm:h-14 sm:w-14 sm:text-2xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1 text-base font-semibold text-gray-800 dark:text-gray-100 sm:text-lg">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
