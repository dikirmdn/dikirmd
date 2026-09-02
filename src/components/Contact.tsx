'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// SVG Icons as components
const EmailIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      if (contentRef.current) {
        tl.fromTo(
          contentRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            clearProps: 'transform',
          }
        );
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.contact-card');
        tl.fromTo(
          cards,
          { opacity: 0, y: 35, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.12,
            duration: 0.85,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          '-=0.5'
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          '-=0.4'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactMethods = [
    {
      icon: EmailIcon,
      title: 'Email',
      href: 'mailto:ramadhandiki940@gmail.com',
      label: 'ramadhandiki940@gmail.com',
    },
    {
      icon: LinkedInIcon,
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/diki-ramadan',
      label: 'www.linkedin.com/in/diki-ramadan',
    },
    {
      icon: GitHubIcon,
      title: 'GitHub',
      href: 'https://github.com/dikirmdn',
      label: 'github.com/dikirmdn',
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative min-h-screen px-6 py-32">
      <div className="mx-auto max-w-5xl relative z-10">
        <div ref={contentRef} className="text-center mb-16">
          <h2 className="mb-6 text-5xl font-bold text-gray-800 dark:text-gray-100 md:text-6xl">
            Let's <span className="text-gray-600 dark:text-gray-400">Collaborate</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm open to collaboration opportunities, freelance projects, or simply discussing technology and ideas.
            Feel free to reach out to me through the platforms below.
          </p>
        </div>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-3 mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card neo-raised neo-hover rounded-3xl p-8 transition-all duration-300 group text-gray-700 dark:text-gray-300"
              >
                <div className="inline-flex p-4 rounded-2xl neo-flat mb-4 group-hover:neo-pressed transition-all duration-300">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{method.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs font-mono break-all">{method.label}</p>
              </a>
            );
          })}
        </div>

        <div ref={ctaRef} className="neo-raised rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Have an Interesting Project Idea?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always interested in challenging and innovative projects.
            Let's turn your ideas into reality!
          </p>
          <a
            href="mailto:ramadhandiki940@gmail.com"
            className="neo-pressed neo-hover inline-block rounded-full px-8 py-4 font-medium text-gray-800 dark:text-gray-100 transition-all duration-300"
          >
            Contact Now!
          </a>
        </div>

        <footer className="mt-16 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Diki Ramadan (dikirmdnnn / diki rmd) • Porto Diki Ramadan. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}

