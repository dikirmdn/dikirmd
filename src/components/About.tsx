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
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power3.out',
      });
    });
  }, []);

  const galleryImages = [
    { src: '/galeri1.jpeg', alt: 'Gallery Image 1', description: 'Captured in Garut, 2020.' },
    { src: '/galeri1.jpeg', alt: 'Gallery Image 2', description: 'Captured in Bandung, 2022' },
    { src: '/galeri2.jpeg', alt: 'Gallery Image 3', description: 'Captured in Bandung, 2022' },
    { src: '/galeri3.jpeg', alt: 'Gallery Image 4', description: 'Captured in Bandung, 2022' },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative min-h-screen px-6 py-32">
      <div className="mx-auto max-w-7xl relative z-10">
        <h2 className="mb-16 text-center text-5xl font-bold text-gray-800 dark:text-gray-100 md:text-6xl">
          About <span className="text-gray-600 dark:text-gray-400">Me</span>
        </h2>

        <div className="grid grid-cols-4 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-1 mb-16">
          {galleryImages.map((image, index) => {
            const mobileLayout = [
              "col-span-2 row-span-2", // besar
              "col-span-2 row-span-1", // kecil
              "col-span-1 row-span-1", // kecil
              "col-span-1 row-span-1", // kecil
            ];

            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`
                  neo-raised neo-hover group rounded-3xl overflow-hidden relative
                  ${mobileLayout[index]}
                  md:col-span-1 md:row-span-1 md:aspect-square
                `}
              >
                <div className="neo-pressed w-full h-full overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center font-medium px-4">
                    {image.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          ref={(el) => {
            if (el) cardsRef.current[4] = el;
          }}
          className="neo-raised rounded-3xl p-12"
        >
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I'm a fresh graduate with a GPA of 3.83 who is passionate about continuous learning and personal growth.
            I enjoy exploring new ideas, learning new technologies and skills, and adapting to new challenges. I also enjoy communicating and collaborating
            with new people, believing that teamwork and knowledge sharing are essential for achieving meaningful results. I am eager to contribute, grow professionally,
            and create a positive impact in every opportunity.
          </p>
        </div>
      </div>
    </section>
  );
}
