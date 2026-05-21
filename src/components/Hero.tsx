'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Text, PerspectiveCamera } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import gsap from 'gsap';
import * as THREE from 'three';

// 3D ID Card Component
function IDCard() {
  const cardRef = useRef<THREE.Group>(null);
  
  // Load profile photo texture
  // Ganti '/profile.jpg' dengan path foto Anda di folder public/
  const profileTexture = useLoader(THREE.TextureLoader, '/profile.jpeg');
  
  // Set texture properties untuk fit yang lebih baik
  profileTexture.center.set(0.5, 0.5);
  profileTexture.repeat.set(1, 1);
  profileTexture.wrapS = THREE.ClampToEdgeWrapping;
  profileTexture.wrapT = THREE.ClampToEdgeWrapping;
  
  const [springs, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  useFrame((state) => {
    if (cardRef.current) {
      cardRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const handlePointerMove = (e: any) => {
    const x = (e.point.x / 5) * 0.5;
    const y = (e.point.y / 5) * 0.5;
    api.start({ rotation: [y, x, 0] });
  };

  const handlePointerOut = () => {
    api.start({ rotation: [0, 0, 0] });
  };

  return (
    <animated.group
      ref={cardRef}
      rotation={springs.rotation as any}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
    >
      {/* Main Card Body - Single solid piece */}
      <RoundedBox args={[3.5, 2.2, 0.1]} radius={0.1} smoothness={4}>
        <meshStandardMaterial 
          color="#ffff" 
          metalness={0.8} 
          roughness={0.2}
        />
      </RoundedBox>

      {/* FRONT SIDE ELEMENTS */}
      <group position={[0, 0, 0.051]}>
        {/* Profile Picture Area with Photo - Diperbesar */}
        <RoundedBox args={[1.2, 1.2, 0.02]} radius={0.08} smoothness={4} position={[-0.9, 0.3, 0]}>
          <meshBasicMaterial 
            map={profileTexture}
            toneMapped={false}
          />
        </RoundedBox>

        {/* Name Text */}
        <Text
          position={[0.2, 0.6, 0.01]}
          fontSize={0.18}
          color="#ffffff"
          anchorX="left"
          anchorY="middle"
        >
          Dikirmd
        </Text>

        {/* Title Text */}
        <Text
          position={[0.2, 0.3, 0.01]}
          fontSize={0.12}
          color="#888888"
          anchorX="left"
          anchorY="middle"
        >
          Full Stack Developer
        </Text>

        {/* Decorative Line */}
        <RoundedBox args={[2.8, 0.02, 0.02]} radius={0.01} position={[0, -0.1, 0]}>
          <meshStandardMaterial color="#333333" />
        </RoundedBox>

        {/* Info Text 1 */}
        <Text
          position={[-1.3, -0.5, 0.01]}
          fontSize={0.08}
          color="#666666"
          anchorX="left"
          anchorY="middle"
        >
          Laravel • Next.js • Three.js
        </Text>

        {/* Info Text 2 */}
        <Text
          position={[-1.3, -0.7, 0.01]}
          fontSize={0.08}
          color="#666666"
          anchorX="left"
          anchorY="middle"
        >
          PHP • TypeScript • GSAP
        </Text>

        {/* Accent Corner */}
        <RoundedBox args={[0.3, 0.3, 0.02]} radius={0.05} position={[1.5, -0.8, 0]}>
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
          />
        </RoundedBox>
      </group>

      {/* BACK SIDE ELEMENTS */}
      <group position={[0, 0, -0.051]} rotation={[0, Math.PI, 0]}>
        {/* Decorative Lines on Back */}
        <RoundedBox args={[3.0, 0.03, 0.02]} radius={0.01} position={[0, 0.6, 0]}>
          <meshStandardMaterial 
            color="#2a2a2a" 
            metalness={0.7} 
            roughness={0.3}
          />
        </RoundedBox>

        <RoundedBox args={[3.0, 0.03, 0.02]} radius={0.01} position={[0, 0.3, 0]}>
          <meshStandardMaterial 
            color="#2a2a2a" 
            metalness={0.7} 
            roughness={0.3}
          />
        </RoundedBox>

        <RoundedBox args={[3.0, 0.03, 0.02]} radius={0.01} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#2a2a2a" 
            metalness={0.7} 
            roughness={0.3}
          />
        </RoundedBox>

        {/* Back Accent Corner */}
        <RoundedBox args={[0.4, 0.4, 0.02]} radius={0.05} position={[-1.4, -0.7, 0]}>
          <meshStandardMaterial
            color="#2a2a2a"
            metalness={0.8}
            roughness={0.2}
          />
        </RoundedBox>

        {/* Back Text */}
        <Text
          position={[0, -0.6, 0.01]}
          fontSize={0.1}
          color="#555555"
          anchorX="center"
          anchorY="middle"
        >
          Dikirmd
        </Text>
      </group>
    </animated.group>
  );
}

// 3D Scene Component
function CardScene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#888888" />
      <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={0.5} />
      
      <IDCard />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full overflow-hidden ">
      {/* Mobile Layout */}
      <div className="flex min-h-screen flex-col justify-center px-4 py-20 lg:hidden">
        {/* Text Content - Mobile */}
        <div className="z-10 mb-8 text-center">
          <h1
            ref={titleRef}
            className="mb-4 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl"
          >
            Diki
            <br />
            <span className="bg-linear-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
              Ramadan's
            </span>
            <br />
            Page
          </h1>

          <p
            ref={subtitleRef}
            className="mb-8 text-sm leading-relaxed text-gray-400 sm:text-base"
          >
            Crafting elegant digital experiences with modern technology.
          </p>

          <div ref={ctaRef} className="flex flex-col gap-3">
            <a
              href="#projects"
              className="glass glow-hover rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-gray-700 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-gray-500 hover:bg-gray-900"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* 3D Card - Mobile */}
        <div className="relative h-64 w-full sm:h-80">
          <Canvas>
            <CardScene />
          </Canvas>
          <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-white/5 via-transparent to-transparent blur-3xl" />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="mx-auto hidden min-h-screen max-w-7xl grid-cols-2 items-center gap-16 px-6 py-32 lg:grid">
        {/* Text Content - Desktop */}
        <div className="z-10 flex flex-col justify-center">
          <h1
            ref={titleRef}
            className="mb-6 text-7xl font-bold leading-tight tracking-tight text-white md:text-7xl"
          >
            Diki
            <br />
            <span className="bg-linear-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
              Ramadan's
            </span>
            <br />
            Page
          </h1>

          <p
            ref={subtitleRef}
            className="mb-12 max-w-xl text-xl leading-relaxed text-gray-400"
          >
            Crafting clean and functional web experiences with modern technology. 
            Focused on building responsive and user-friendly applications.
          </p>

          <div ref={ctaRef} className="flex gap-4">
            <a
              href="#projects"
              className="glass glow-hover rounded-full px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-gray-700 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-gray-500 hover:bg-gray-900"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* 3D Card - Desktop */}
        <div className="relative h-150 w-full">
          <Canvas>
            <CardScene />
          </Canvas>
          <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-white/5 via-transparent to-transparent blur-3xl" />
        </div>
      </div>

      
    </section>
  );
}
