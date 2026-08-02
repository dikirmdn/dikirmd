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

  return (
    <div className="loading-screen fixed inset-0 z-[10000] flex items-center justify-center bg-[#e8e6e1]">
      <div className="relative flex flex-col items-center">
        {/* Animated decorative ring */}
        <div 
          ref={ringRef}
          className="absolute inset-0 -m-12 opacity-20"
        >
          <div className="neo-flat h-full w-full rounded-full"></div>
        </div>

        {/* Main logo container */}
        <div 
          ref={logoRef}
          className="relative z-10 mb-8"
        >
          <div className="neo-raised rounded-full p-8 transition-all duration-300">
            <div className="neo-pressed rounded-full p-6">
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold leading-tight tracking-tight text-gray-800 sm:text-6xl">
                  Diki
                </div>
                <div className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                  Ramadan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative w-64">
          <div className="neo-pressed h-3 overflow-hidden rounded-full">
            <div 
              ref={progressRef}
              className="h-full rounded-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Progress percentage */}
          <div className="mt-4 text-center text-sm font-medium text-gray-600">
            {progress}%
          </div>
        </div>

        {/* Orbiting decorative dots */}
        <div className="absolute -inset-16 animate-spin-slow opacity-30">
          <div className="absolute left-1/2 top-0 -ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-gray-300 neo-raised"></div>
        </div>
        <div className="absolute -inset-16 animate-spin-reverse-slow opacity-30">
          <div className="absolute bottom-0 left-1/2 -mb-1.5 -ml-1.5 h-3 w-3 rounded-full bg-gray-400 neo-raised"></div>
        </div>
      </div>
    </div>
  );
}
