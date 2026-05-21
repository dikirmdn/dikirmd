'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to('.loading-screen', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => setIsLoading(false),
      });
    }, 2000);

    // Animate loading text
    gsap.to('.loading-text', {
      opacity: 0.5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen fixed inset-0 z-10000 flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="loading-text mb-4 text-5xl font-bold text-white">Dikirmd</div>
        <div className="h-1 w-48 overflow-hidden rounded-full bg-gray-800">
          <div className="h-full w-full origin-left animate-[loading_2s_ease-in-out] bg-white" />
        </div>
      </div>
    </div>
  );
}
