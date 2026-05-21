'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Music Note Icon
const MusicIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
  </svg>
);

// Play Icon
const PlayIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
  </svg>
);

// Pause Icon
const PauseIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
  </svg>
);

// Volume Icon
const VolumeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.547 3.062A.75.75 0 0110 3.75v12.5a.75.75 0 01-1.264.546L5.203 13H3.667a.75.75 0 01-.7-.48A6.985 6.985 0 012 10c0-.887.165-1.737.468-2.52a.75.75 0 01.7-.48h1.535l3.533-3.796a.75.75 0 01.311-.142zM13.28 7.22a.75.75 0 10-1.06 1.06L13.94 10l-1.72 1.72a.75.75 0 001.06 1.06L15 11.06l1.72 1.72a.75.75 0 101.06-1.06L16.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L15 8.94l-1.72-1.72z" />
  </svg>
);

export default function Music() {
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.7);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 50 },
          {
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
          }
        );
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.music-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out',
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const favoriteSongs = [
    {
      title: 'Her (all versions)',
      artist: 'Jvke',
      year: '2025',
      audioUrl: '/music/her.mp3', // Letakkan file audio di folder public/music/
    },
    {
      title: 'A Thousand Years',
      artist: 'JohnMichaelHowell, Jvke',
      year: '2026',
      audioUrl: '/music/thousand.mp3',
    },
    {
      title: 'About You',
      artist: 'The 1975',
      year: '2022',
      audioUrl: '/music/AboutYou.mp3',
    },
  ];

  const handlePlayPause = (index: number) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    if (currentPlaying === index) {
      audio.pause();
      setCurrentPlaying(null);
    } else {
      // Pause other playing audio
      audioRefs.current.forEach((a, i) => {
        if (a && i !== index) {
          a.pause();
          a.currentTime = 0;
        }
      });
      
      audio.play();
      setCurrentPlaying(index);
    }
  };

  const handleTimeUpdate = (index: number) => {
    const audio = audioRefs.current[index];
    if (audio && currentPlaying === index) {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    }
  };

  const handleSeek = (index: number, value: number) => {
    const audio = audioRefs.current[index];
    if (audio) {
      audio.currentTime = value;
      setCurrentTime(value);
    }
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value);
    audioRefs.current.forEach((audio) => {
      if (audio) audio.volume = value;
    });
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section id="music" className="relative min-h-screen px-6 py-32">
      <div className="mx-auto max-w-5xl relative z-10">
        <div ref={contentRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <MusicIcon />
            <h2 className="text-5xl font-bold text-white md:text-6xl">
              My Fav <span className="text-gray-400">Music</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Music that inspires me while coding and creating. Here are my current top picks.
          </p>
        </div>

        <div ref={cardsRef} className="space-y-4">
          {favoriteSongs.map((song, index) => (
            <div
              key={index}
              className="music-card glass rounded-2xl p-6 transition-all duration-300 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <audio
                ref={(el) => {
                  audioRefs.current[index] = el;
                }}
                src={song.audioUrl}
                onTimeUpdate={() => handleTimeUpdate(index)}
                onEnded={() => setCurrentPlaying(null)}
                onLoadedMetadata={(e) => {
                  if (currentPlaying === index) {
                    setDuration(e.currentTarget.duration);
                  }
                }}
              />

              <div className="flex items-center gap-4 mb-4">
                {/* Play/Pause Button */}
                <button
                  onClick={() => handlePlayPause(index)}
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  {currentPlaying === index ? <PauseIcon /> : <PlayIcon />}
                </button>

                {/* Song Info */}
                <div className="flex-grow min-w-0">
                  <h3 className="text-lg font-bold text-white mb-1 truncate">
                    {song.title}
                  </h3>
                  <p className="text-gray-400 text-sm truncate">
                    {song.artist} 
                  </p>
                </div>

                {/* Year */}
                <div className="flex-shrink-0 hidden md:block">
                  <span className="text-gray-500 text-sm font-mono">{song.year}</span>
                </div>
              </div>

              {/* Progress Bar */}
              {currentPlaying === index && (
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={(e) => handleSeek(index, parseFloat(e.target.value))}
                    className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #fff ${(currentTime / duration) * 100}%, #374151 ${(currentTime / duration) * 100}%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Volume Control */}
        {currentPlaying !== null && (
          <div className="glass rounded-2xl p-6 mt-8">
            <div className="flex items-center gap-4">
              <VolumeIcon />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="flex-grow h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #fff ${volume * 100}%, #374151 ${volume * 100}%)`,
                }}
              />
              <span className="text-sm text-gray-400 w-12 text-right">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>
        )}

        <div className="glass rounded-2xl p-8 text-center mt-8">
          <p className="text-gray-400 text-sm">
            Want to share your favorite music? Let's connect and exchange playlists!
          </p>
        </div>
      </div>
    </section>
  );
}
