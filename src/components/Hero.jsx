import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantData';
import { getLenis } from '../hooks/useLenis';

export default function Hero() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isCrossfadingRef = useRef(false);

  // Detect Screen Size for Responsive Asset Selection (Mobile vs Desktop)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const currentVideoSrc = isMobile
    ? restaurantConfig.assets.mblHeroVideo
    : restaurantConfig.assets.heroVideo;

  const currentFallbackImg = isMobile
    ? restaurantConfig.assets.mblHeroFallback
    : restaurantConfig.assets.heroFallback;

  // Force autoplay & HD playback on mount or source change
  useEffect(() => {
    [videoRef1.current, videoRef2.current].forEach((v) => {
      if (v) {
        v.load();
        v.play().catch(() => {});
      }
    });
  }, [currentVideoSrc]);

  // Seamless Dual-Video Crossfade Loop Logic
  useEffect(() => {
    const v1 = videoRef1.current;
    const v2 = videoRef2.current;
    if (!v1 || !v2) return;

    const handleTimeUpdate = () => {
      const activeV = activeVideoIndex === 0 ? v1 : v2;
      const nextV = activeVideoIndex === 0 ? v2 : v1;

      if (
        activeV.duration &&
        activeV.currentTime >= activeV.duration - 0.8 &&
        !isCrossfadingRef.current
      ) {
        isCrossfadingRef.current = true;
        nextV.currentTime = 0;
        nextV.play().catch(() => {});
        setActiveVideoIndex((prev) => (prev === 0 ? 1 : 0));

        setTimeout(() => {
          isCrossfadingRef.current = false;
        }, 1200);
      }
    };

    const currentV = activeVideoIndex === 0 ? v1 : v2;
    currentV.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      currentV.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [activeVideoIndex, isMobile]);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(targetElement, { offset: -60, duration: 1.2 });
      } else {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Entrance Motion Variants for Editorial Stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[720px] flex items-center justify-start overflow-hidden">
      {/* Background Video Layer - 100% Preserved HD Background Video */}
      <div className="absolute inset-0 z-0 bg-[#0B0B0A]">
        {/* Layer 1 Video */}
        <video
          ref={videoRef1}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={currentFallbackImg}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            activeVideoIndex === 0 ? 'opacity-100 z-1' : 'opacity-0 z-0'
          }`}
        >
          <source src={currentVideoSrc} type="video/mp4" />
          <img
            src={currentFallbackImg}
            alt="Lumiere Dining"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Layer 2 Video (Crossfade target) */}
        <video
          ref={videoRef2}
          muted
          playsInline
          preload="auto"
          poster={currentFallbackImg}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            activeVideoIndex === 1 ? 'opacity-100 z-1' : 'opacity-0 z-0'
          }`}
        >
          <source src={currentVideoSrc} type="video/mp4" />
        </video>

        {/* Soft bottom vignette transition preserving video clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
      </div>

      {/* Hero Content Container - Editorial Left-Side Typography */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl flex flex-col items-start text-left"
        >
          {/* 1. Small Refined Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#C5A46D]" />
            <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#C5A46D] font-sans font-medium">
              {restaurantConfig.tagline} · BIRMINGHAM
            </span>
          </motion.div>

          {/* 2. Large Elegant Headline - High-End Editorial Serif */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-6xl sm:text-8xl md:text-9xl font-light text-[#F4F0E8] tracking-[0.1em] uppercase leading-[0.92] mb-5 drop-shadow-[0_8px_16px_rgba(0,0,0,0.85)]"
          >
            {restaurantConfig.name}
          </motion.h1>

          {/* 3. Subtitle / Headline Secondary Statement */}
          <motion.p
            variants={itemVariants}
            className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#C5A46D] font-light tracking-wide mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
          >
            {restaurantConfig.subtitle}
          </motion.p>

          {/* 4. Short Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#F4F0E8]/90 font-sans font-light leading-relaxed mb-10 max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            “{restaurantConfig.description}”
          </motion.p>

          {/* 5. Minimal CTA Area */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#menu"
              onClick={(e) => handleScrollTo(e, '#menu')}
              className="px-8 py-4 bg-transparent border border-[#F4F0E8]/40 hover:border-[#C5A46D] text-[#F4F0E8] hover:text-[#C5A46D] transition-all duration-300 text-xs tracking-[0.25em] uppercase font-sans text-center group"
            >
              <span className="flex items-center justify-center gap-2">
                VIEW MENU
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <a
              href="#reservation"
              onClick={(e) => handleScrollTo(e, '#reservation')}
              className="px-8 py-4 bg-[#C5A46D] border border-[#C5A46D] text-[#0B0B0A] hover:bg-[#D4B67E] hover:border-[#D4B67E] transition-all duration-300 text-xs tracking-[0.25em] uppercase font-sans font-medium text-center shadow-2xl hover:shadow-[#C5A46D]/30"
            >
              REQUEST A TABLE
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.a
        href="#about"
        onClick={(e) => handleScrollTo(e, '#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-12 z-20 flex items-center gap-3 text-[#A8A39A] hover:text-[#C5A46D] transition-colors group cursor-pointer drop-shadow-md"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-sans">SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#C5A46D]" />
        </motion.div>
      </motion.a>
    </section>
  );
}
