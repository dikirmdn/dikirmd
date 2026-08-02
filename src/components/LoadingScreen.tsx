'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const logoRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Animate logo entrance
    gsap.from(logoRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Pulsing animation for logo
    gsap.to(logoRef.current, {
      scale: 1.05,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Ring rotation
    gsap.to(ringRef.current, {
      rotation: 360,
      duration: 3,
      repeat: -1,
      ease: 'linear',
    });

    // Exit animation when done
    const timer = setTimeout(() => {
      gsap.to('.loading-screen', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => setIsLoading(false),
      });
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  // Force light theme styles - override any dark mode
  const lightThemeStyles = {
    '--shadow-light': '#ffffff',
    '--shadow-dark': '#c8c6c1',
    '--background': '#e8e6e1',
    backgroundColor: '#e8e6e1',
  } as React.CSSProperties;

  return (
    <div 
      className="loading-screen light fixed inset-0 z-[10000] flex items-center justify-center"
      style={lightThemeStyles}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated decorative ring */}
        <div 
          ref={ringRef}
          className="absolute inset-0 -m-12 opacity-20"
        >
          <div className="h-full w-full rounded-full" style={{
            background: '#e8e6e1',
            boxShadow: '5px 5px 10px #c8c6c1, -5px -5px 10px #ffffff'
          }}></div>
        </div>

        {/* Main logo container */}
        <div 
          ref={logoRef}
          className="relative z-10 mb-8"
        >
          <div className="rounded-full p-8 transition-all duration-300" style={{
            background: '#e8e6e1',
            boxShadow: '8px 8px 16px #c8c6c1, -8px -8px 16px #ffffff'
          }}>
            <div className="rounded-full p-6" style={{
              background: '#e8e6e1',
              boxShadow: 'inset 6px 6px 12px #c8c6c1, inset -6px -6px 12px #ffffff'
            }}>
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold leading-tight tracking-tight sm:text-6xl" style={{ color: '#2d3748' }}>
                  Diki
                </div>
                <div className="text-2xl font-bold sm:text-3xl" style={{
                  background: 'linear-gradient(to right, #4a5568, #2d3748, #1a202c)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Ramadan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative w-64">
          <div className="h-3 overflow-hidden rounded-full" style={{
            background: '#e8e6e1',
            boxShadow: 'inset 6px 6px 12px #c8c6c1, inset -6px -6px 12px #ffffff'
          }}>
            <div 
              ref={progressRef}
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(to right, #cbd5e0, #a0aec0, #718096)'
              }}
            />
          </div>
          
          {/* Progress percentage */}
          <div className="mt-4 text-center text-sm font-medium" style={{ color: '#4a5568' }}>
            {progress}%
          </div>
        </div>

        {/* Orbiting decorative dots */}
        <div className="absolute -inset-16 animate-spin-slow opacity-30">
          <div className="absolute left-1/2 top-0 -ml-1.5 -mt-1.5 h-3 w-3 rounded-full" style={{
            backgroundColor: '#d1d5db',
            boxShadow: '8px 8px 16px #c8c6c1, -8px -8px 16px #ffffff'
          }}></div>
        </div>
        <div className="absolute -inset-16 animate-spin-reverse-slow opacity-30">
          <div className="absolute bottom-0 left-1/2 -mb-1.5 -ml-1.5 h-3 w-3 rounded-full" style={{
            backgroundColor: '#9ca3af',
            boxShadow: '8px 8px 16px #c8c6c1, -8px -8px 16px #ffffff'
          }}></div>
        </div>
      </div>
    </div>
  );
}
