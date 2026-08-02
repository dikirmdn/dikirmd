'use client';

import { useTheme } from './ThemeProvider';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="neo-toggle relative h-12 w-24 rounded-full transition-all duration-300">
        <div className="neo-toggle-slider absolute top-1 left-1 h-10 w-10 rounded-full transition-all duration-300 flex items-center justify-center">
          <FaSun className="text-yellow-500 text-lg" />
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="neo-toggle relative h-12 w-24 rounded-full transition-all duration-300 hover:scale-105"
      aria-label="Toggle theme"
    >
      <div
        className={`neo-toggle-slider absolute top-1 h-10 w-10 rounded-full transition-all duration-300 flex items-center justify-center ${
          theme === 'dark' ? 'left-[calc(100%-2.75rem)]' : 'left-1'
        }`}
      >
        {theme === 'light' ? (
          <FaSun className="text-yellow-500 text-lg" />
        ) : (
          <FaMoon className="text-blue-400 text-lg" />
        )}
      </div>
    </button>
  );
}
