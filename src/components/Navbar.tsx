'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#music', label: 'Music' },
    { href: '#contact', label: 'Contact' },

  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 max-w-7xl mx-auto px-6">
      <div
        className={`rounded-full transition-all duration-300 will-change-transform ${
          scrolled ? 'glass py-4' : 'py-6'
        }`}
        style={{
          background: scrolled 
            ? 'rgba(20, 20, 20, 0.4)' 
            : 'rgba(20, 20, 20, 0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          border: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#" className="text-2xl font-bold text-white">
            Dikirmd
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="glass mt-4 rounded-2xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
