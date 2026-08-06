'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

      // Floating animation
      gsap.to(imageRef.current, {
        y: -20,
        duration: 2.5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  // Mouse tracking for parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    
    setMousePosition({ x: x * 30, y: y * 30 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Mobile Layout */}
      <div className="flex min-h-screen flex-col justify-center px-4 py-20 lg:hidden">
        {/* Text Content - Mobile */}
        <div className="z-10 mb-12 text-center">
          <h1
            ref={titleRef}
            className="mb-4 text-5xl font-bold leading-tight tracking-tight text-gray-800 dark:text-gray-100 sm:text-6xl"
          >
            Diki
            <br />
            <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 dark:from-gray-300 dark:via-gray-400 dark:to-gray-200 bg-clip-text text-transparent">
              Ramadan's
            </span>
            <br />
            Page
          </h1>

          <p
            ref={subtitleRef}
            className="mb-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base"
          >
            Crafting elegant digital experiences with modern technology.
          </p>

          <div ref={ctaRef} className="flex flex-col gap-3">
            <a
              href="#projects"
              className="neo-raised neo-hover rounded-full px-6 py-3 text-sm font-medium text-gray-800 dark:text-gray-100 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="/cv.pdf"
              target='_blank'
              rel='noopener noreferrer'
              className="neo-flat rounded-full px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:neo-hover"
            >
              View CV
            </a>
          </div>
        </div>

        {/* Profile Image - Mobile */}
        <div 
          ref={imageContainerRef}
          className="relative mx-auto w-64 h-64"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={imageRef}
            className="relative w-full h-full group cursor-pointer"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full animate-ping-slow opacity-20 neo-raised"></div>
            <div className="absolute inset-0 rounded-full animate-pulse-slow opacity-30 neo-flat"></div>
            
            {/* Main image container */}
            <div className="relative neo-raised rounded-full p-4 w-full h-full overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:neo-hover">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src="/profile.jpeg"
                  alt="Diki Ramadan"
                  className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                />
                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)',
                  }}
                ></div>
              </div>
            </div>

            {/* Decorative orbiting dots */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 neo-raised rounded-full bg-gray-300"></div>
            </div>
            <div className="absolute inset-0 animate-spin-reverse-slow">
              <div className="absolute bottom-0 left-1/2 w-3 h-3 -ml-1.5 -mb-1.5 neo-raised rounded-full bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="mx-auto hidden min-h-screen max-w-7xl grid-cols-2 items-center gap-16 px-6 py-32 lg:grid">
        {/* Text Content - Desktop */}
        <div className="z-10 flex flex-col justify-center">
          <h1
            ref={titleRef}
            className="mb-6 text-7xl font-bold leading-tight tracking-tight text-gray-800 dark:text-gray-100 md:text-7xl"
          >
            Diki
            <br />
            <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 dark:from-gray-300 dark:via-gray-400 dark:to-gray-200 bg-clip-text text-transparent">
              Ramadan's
            </span>
            <br />
            Page
          </h1>

          <p
            ref={subtitleRef}
            className="mb-12 max-w-xl text-xl leading-relaxed text-gray-600 dark:text-gray-400"
          >
            Crafting clean and functional web experiences with modern technology. 
            Focused on building responsive and user-friendly applications.
          </p>

          <div ref={ctaRef} className="flex gap-4">
            <a
              href="#projects"
              className="neo-raised neo-hover rounded-full px-8 py-4 text-sm font-medium text-gray-800 dark:text-gray-100 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="/cv.pdf"
              target='_blank'
              rel='noopener noreferrer'
              className="neo-flat rounded-full px-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:neo-hover"
            >
              View CV
            </a>
          </div>
        </div>

        {/* Profile Image - Desktop */}
        <div 
          ref={imageContainerRef}
          className="relative flex justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={imageRef}
            className="relative w-96 h-96 group cursor-pointer"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            {/* Animated outer rings */}
            <div className="absolute -inset-4 rounded-full animate-ping-slow opacity-20 neo-raised"></div>
            <div className="absolute -inset-2 rounded-full animate-pulse-slow opacity-30 neo-flat"></div>
            
            {/* Main image container */}
            <div className="relative neo-raised rounded-full p-6 w-full h-full transition-all duration-500 group-hover:scale-105 group-hover:neo-hover">
              <div className="neo-pressed rounded-full w-full h-full overflow-hidden">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/profile.jpeg"
                    alt="Diki Ramadan"
                    className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)',
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Decorative orbiting dots */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/2 w-4 h-4 -ml-2 -mt-2 neo-raised rounded-full bg-gray-300"></div>
              <div className="absolute top-1/4 right-0 w-3 h-3 -mr-1.5 neo-raised rounded-full bg-gray-200"></div>
            </div>
            <div className="absolute inset-0 animate-spin-reverse-slow">
              <div className="absolute bottom-0 left-1/2 w-4 h-4 -ml-2 -mb-2 neo-raised rounded-full bg-gray-400"></div>
              <div className="absolute bottom-1/4 left-0 w-3 h-3 -ml-1.5 neo-raised rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
