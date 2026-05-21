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
    { src: '/profile.jpeg', alt: 'Gallery Image 1', description: 'Captured in Garut, 2020.' },
    { src: '/galeri1.jpeg', alt: 'Gallery Image 2', description: 'Captured in Bandung, 2022' },
    { src: '/galeri2.jpeg', alt: 'Gallery Image 3', description: 'Captured in Bandung, 2022' },
    { src: '/galeri3.jpeg', alt: 'Gallery Image 4', description: 'Captured in Bandung, 2022' },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative min-h-screen px-6 py-32">
      <div className="mx-auto max-w-7xl relative z-10">
        <h2 className="mb-16 text-center text-5xl font-bold text-white md:text-6xl">
          About <span className="text-gray-400">Me</span>
        </h2>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-4 mb-16">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="glass glow-hover group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 aspect-square relative"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center font-medium px-4">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={(el) => {
            if (el) cardsRef.current[4] = el;
          }}
          className="glass mt-16 rounded-3xl p-12"
        >
          <p className="text-lg leading-relaxed text-gray-300">
           I'm a final-semester university student and freelance web developer passionate about building clean, 
           responsive, and user-friendly web applications. I specialize in modern web technologies and enjoy turning 
           ideas into functional digital experiences with a focus on performance and design.

          </p>
        </div>
      </div>
    </section>
  );
}
