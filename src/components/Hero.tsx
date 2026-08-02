'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3,
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        x: -30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6,
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.9,
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Mobile Layout */}
      <div className="flex min-h-screen flex-col justify-center px-4 py-20 lg:hidden">
        {/* Text Content - Mobile */}
        <div className="z-10 mb-12 text-center">
          <h1
            ref={titleRef}
            className="mb-4 text-5xl font-bold leading-tight tracking-tight text-gray-800 sm:text-6xl"
          >
            Diki
            <br />
            <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              Ramadan's
            </span>
            <br />
            Page
          </h1>

          <p
            ref={subtitleRef}
            className="mb-8 text-sm leading-relaxed text-gray-600 sm:text-base"
          >
            Crafting elegant digital experiences with modern technology.
          </p>

          <div ref={ctaRef} className="flex flex-col gap-3">
            <a
              href="#projects"
              className="neo-raised neo-hover rounded-full px-6 py-3 text-sm font-medium text-gray-800 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="neo-flat rounded-full px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:neo-hover"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image - Mobile */}
        <div ref={imageRef} className="relative mx-auto w-64 h-64">
          <div className="neo-raised rounded-full p-4 w-full h-full overflow-hidden">
            <img
              src="/profile.jpeg"
              alt="Diki Ramadan"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="mx-auto hidden min-h-screen max-w-7xl grid-cols-2 items-center gap-16 px-6 py-32 lg:grid">
        {/* Text Content - Desktop */}
        <div className="z-10 flex flex-col justify-center">
          <h1
            ref={titleRef}
            className="mb-6 text-7xl font-bold leading-tight tracking-tight text-gray-800 md:text-7xl"
          >
            Diki
            <br />
            <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              Ramadan's
            </span>
            <br />
            Page
          </h1>

          <p
            ref={subtitleRef}
            className="mb-12 max-w-xl text-xl leading-relaxed text-gray-600"
          >
            Crafting clean and functional web experiences with modern technology. 
            Focused on building responsive and user-friendly applications.
          </p>

          <div ref={ctaRef} className="flex gap-4">
            <a
              href="#projects"
              className="neo-raised neo-hover rounded-full px-8 py-4 text-sm font-medium text-gray-800 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="neo-flat rounded-full px-8 py-4 text-sm font-medium text-gray-700 transition-all duration-300 hover:neo-hover"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image - Desktop */}
        <div ref={imageRef} className="relative flex justify-center">
          <div className="neo-raised rounded-full p-6 w-96 h-96">
            <div className="neo-pressed rounded-full w-full h-full overflow-hidden">
              <img
                src="/profile.jpeg"
                alt="Diki Ramadan"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
