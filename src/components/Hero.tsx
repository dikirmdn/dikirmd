'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaGithub, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa6';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
      }

      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: -50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.3,
          }
        );
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5,
          }
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.7,
          }
        );
      }

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.4,
          }
        );
      }

      if (socialRef.current && socialRef.current.children.length > 0) {
        gsap.fromTo(
          socialRef.current.children,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.6,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Mouse tracking for parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;

    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    setMousePosition({ x: x * 20, y: y * 20 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/dikirmdn',
      icon: FaGithub,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/dikirmdnnn',
      icon: FaInstagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/diki-ramadan',
      icon: FaLinkedin,
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@dkrmdnnn',
      icon: FaTiktok,
    },
  ];

  return (
    <section
      id="home"
      aria-label="Hero - Diki Ramadan, Freelance Web Developer"
      className="relative min-h-screen w-full overflow-hidden px-4 sm:px-6 pt-24 pb-12 lg:pt-28 lg:pb-16 flex flex-col justify-between max-w-7xl mx-auto"
    >
      {/* SEO-only content, visually hidden but crawlable */}
      <p className="sr-only">
        Diki Ramadan (Diki) adalah seorang Freelance Web Developer dan Full-Stack
        Developer asal Indonesia. Diki membangun website modern, responsif, dan
        cepat menggunakan Next.js, React, dan TypeScript. Halaman ini adalah
        portfolio resmi Diki Ramadan.
      </p>
      {/* Top Bar / Status Badge Pill */}
      <div className="hidden md:block w-full items-center justify-between mt-12 lg:mb-4 z-10">
        <div
          ref={badgeRef}
          className="neo-raised inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          #OpenToWork
        </div>
      </div>

      {/* Main Hero Header Title - Spanning Full Width */}
      <div
        ref={titleRef}
        className="w-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 lg:gap-8 mt-0 mb-6 sm:mb-8 lg:mb-12 z-10 select-none px-2"
      >
        <h1
          style={{ fontSize: 'clamp(3rem, 10.5vw, 9rem)' }}
          className="font-black uppercase tracking-tighter leading-none text-transparent whitespace-nowrap [-webkit-text-stroke:2px_#374151] dark:[-webkit-text-stroke:2px_#e5e7eb] lg:[-webkit-text-stroke:3px_#374151] dark:lg:[-webkit-text-stroke:3px_#e5e7eb]"
        >
          DIKI
        </h1>
        <h1
          style={{ fontSize: 'clamp(3rem, 10.5vw, 9rem)' }}
          className="font-black uppercase tracking-tighter leading-none whitespace-nowrap text-gray-800 dark:text-gray-100"
        >
          RAMADAN
        </h1>
      </div>

      {/* 3-Column Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-end w-full mt-4 lg:mt-6 relative z-20">
        {/* Left Column: Role, Description, CTA */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left z-20 order-2 lg:order-1 pb-8 lg:pb-24">
          <div ref={subtitleRef} className="max-w-md ">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 tracking-tight mb-3">
              Full-Stack Developer
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Crafting clean and functional web experiences with modern technology. Focused on building responsive and user-friendly applications.
            </p>
          </div>

          <div ref={ctaRef} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">


            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-flat neo-hover group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105"
            >
              <span>View CV</span>
              <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Center Column: Portrait Image (overlapping the giant title text) */}
        <div
          ref={imageContainerRef}
          className="lg:col-span-6 flex justify-center items-end relative z-30 order-1 lg:order-2 -mt-4 sm:-mt-8 lg:-mt-16 xl:-mt-24 2xl:-mt-28"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={imageRef}
            className="relative flex justify-center items-end group cursor-pointer"
          >
            <img
              src="/hero-img.png"
              alt="Diki Ramadan - Freelance Web Developer"
              width={820}
              height={820}
              loading="eager"
              fetchPriority="high"
              className="w-[320px] sm:w-[420px] md:w-[500px] lg:w-[620px] xl:w-[720px] 2xl:w-[820px] max-w-none h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Column: Social Links Stack */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center z-20 order-3 w-full pb-8 lg:pb-24">
          <div
            ref={socialRef}
            className="flex flex-row lg:flex-col gap-3 justify-center items-center w-full max-w-xs lg:max-w-[190px] xl:max-w-[210px]"
          >
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="w-auto sm:w-full">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.name}
                    aria-label={item.name}
                    className="neo-raised neo-hover group flex items-center justify-center sm:justify-between rounded-full p-3.5 sm:px-5 sm:py-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105 hover:text-gray-900 dark:hover:text-white w-11 h-11 sm:w-full sm:h-auto"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-5 w-5 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                      <span className="hidden sm:inline">{item.name}</span>
                    </span>
                    <ArrowUpRight className="hidden sm:block h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


