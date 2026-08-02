'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['about', 'projects', 'music', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#music', label: 'Music' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 max-w-7xl mt-2 mx-auto px-6">
      <div
        className={`rounded-full transition-all duration-300 ${
          scrolled ? 'neo-raised py-4' : 'py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#" className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Dikirmd
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="neo-pressed rounded-full p-1.5 flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium rounded-full px-5 py-2.5 transition-all duration-300 relative ${
                      isActive
                        ? 'neo-raised text-gray-900 dark:text-gray-100 scale-105'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:neo-raised hover:scale-105'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="neo-flat p-3 rounded-full text-xl text-gray-800 dark:text-gray-100 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="neo-raised mt-4 rounded-2xl md:hidden">
          <div className="neo-pressed rounded-2xl p-3 m-3 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium rounded-xl px-5 py-3 transition-all duration-300 text-center ${
                    isActive
                      ? 'neo-raised text-gray-900 dark:text-gray-100 scale-[1.02]'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:neo-raised hover:scale-[1.02]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
