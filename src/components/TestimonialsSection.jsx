

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantData';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 40, filter: 'blur(12px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.2,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
          }
        );
      }

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 70, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.3,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = restaurantConfig.testimonials.slice(0, 3);

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 md:pt-40 pb-40 md:pb-48 bg-[#151513] text-[#F4F0E8] overflow-hidden"
    >
      {/* Ambient warm glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#C5A46D]/[0.04] blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#8C6D3B]/[0.05] blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#8C6D3B]/[0.04] blur-[100px]" />
      </div>

      {/* Faded bg */}
      <div className="absolute inset-0 z-0 opacity-[0.05]">
        <img
          src={restaurantConfig.assets.heroFallback}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(11,11,10,0.6)_100%)]" />

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-20 md:h-28 block"
          fill="#0B0B0A"
        >
          <path d="M0,0 L1440,0 L1440,40 C1080,120 360,120 0,40 Z" />
        </svg>
      </div>

      {/* Header */}
      <div
        ref={headerRef}
        className="relative z-20 max-w-4xl mx-auto px-6 text-center mb-16 md:mb-24"
      >
        <div className="inline-flex items-center gap-3 mb-6 md:mb-7">
          <span className="w-10 md:w-12 h-px bg-gradient-to-r from-transparent to-[#C5A46D]" />
          <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#C5A46D] font-sans font-medium">
            Guest Reviews
          </span>
          <span className="w-10 md:w-12 h-px bg-gradient-to-l from-transparent to-[#C5A46D]" />
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#F4F0E8] tracking-[0.02em] leading-[1.05] mb-6 md:mb-7 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          Customer Feedbacks
        </h2>

        <div className="flex items-center justify-center gap-3 mb-6 md:mb-7">
          <span className="block w-14 md:w-16 h-px bg-gradient-to-r from-transparent via-[#C5A46D]/60 to-transparent" />
          <span className="block w-1.5 h-1.5 rotate-45 bg-[#C5A46D]" />
          <span className="block w-14 md:w-16 h-px bg-gradient-to-r from-transparent via-[#C5A46D]/60 to-transparent" />
        </div>

        <p className="font-serif italic text-base md:text-lg text-[#A8A39A] max-w-md mx-auto">
          Words from our valued dining guests
        </p>
      </div>

      {/* 3 Cards */}
      <div
        ref={cardsRef}
        className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-12 lg:gap-14"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col h-full"
          >
            {/* Image */}
            <div className="relative aspect-[5/4] rounded-[28px] overflow-hidden bg-[#141413] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.95)] transition-all duration-700 group-hover:shadow-[0_50px_100px_-30px_rgba(197,164,109,0.25)]">

              <img
                src={item.image}
                alt={item.author}
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.15]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/80 via-[#0B0B0A]/10 to-transparent" />

              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.4)_100%)]" />

              {item.dish && (
                <div className="absolute top-4 right-4 md:top-5 md:right-5 px-3.5 py-1.5 md:px-4 md:py-2 bg-[#0B0B0A]/75 backdrop-blur-md rounded-full border border-[#C5A46D]/25 shadow-lg">
                  <span className="font-serif italic text-[11px] md:text-[13px] text-[#F4F0E8] whitespace-nowrap">
                    {item.dish}
                  </span>
                </div>
              )}

              <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10 group-hover:ring-[#C5A46D]/50 transition-colors duration-700 pointer-events-none" />

              <div className="pointer-events-none absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C5A46D]/0 group-hover:border-[#C5A46D]/40 transition-all duration-700" />
              <div className="pointer-events-none absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C5A46D]/0 group-hover:border-[#C5A46D]/40 transition-all duration-700" />
            </div>

            {/* Floating review card */}
            <div className="relative -mt-20 md:-mt-24 mx-6 sm:mx-8 md:mx-10 bg-gradient-to-b from-[#FBF8F3] via-[#F5EFE3] to-[#EFE6D5] rounded-[18px] px-5 py-5 md:px-6 md:py-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] group-hover:-translate-y-2 transition-transform duration-700">

              <div className="absolute inset-0 rounded-[18px] ring-1 ring-inset ring-[#8C6D3B]/20 pointer-events-none" />

              <div className="pointer-events-none absolute inset-0 rounded-[18px] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />

              {/* Quote icon */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-b from-[#A07D42] to-[#8C6D3B] flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(140,109,59,0.7),0_0_0_1px_rgba(197,164,109,0.3),inset_0_1px_0_rgba(255,255,255,0.3)]">
                <Quote className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#FBF8F3]" strokeWidth={2.5} />
              </div>

              <div className="relative pt-2">

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 md:w-4 md:h-4 fill-[#E5B94A] text-[#E5B94A] drop-shadow-[0_2px_6px_rgba(229,185,74,0.5)]"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif text-[13px] md:text-[14px] text-[#1A1815] leading-[1.55] mb-4 md:mb-5">
                  "{item.quote}"
                </p>

                {/* Divider */}
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <span className="w-7 md:w-8 h-px bg-gradient-to-r from-[#8C6D3B] to-transparent" />
                  <span className="w-1 h-1 rotate-45 bg-[#8C6D3B]/60" />
                </div>

                {/* Author */}
                <div className="flex items-end justify-between gap-3">
                  <span className="font-serif text-[13px] md:text-sm text-[#1A1815] font-medium tracking-wide">
                    — {item.author}
                  </span>
                  {item.location && (
                    <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-[#8C6D3B] whitespace-nowrap">
                      {item.location}
                    </span>
                  )}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== SEE ALL REVIEWS → GOOGLE MAPS ===== */}
      <div className="relative z-20 flex justify-center mt-16 md:mt-20">
        <a
          href={restaurantConfig.contact.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-sans text-[#C5A46D] hover:text-[#E0C287] transition-colors duration-500"
        >
          <span className="block w-6 md:w-8 h-px bg-[#C5A46D]/40 group-hover:bg-[#C5A46D] group-hover:w-10 md:group-hover:w-12 transition-all duration-500" />

          <span>Read All Reviews on Google</span>

          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />

          <span className="block w-6 md:w-8 h-px bg-[#C5A46D]/40 group-hover:bg-[#C5A46D] group-hover:w-10 md:group-hover:w-12 transition-all duration-500" />
        </a>
      </div>

      {/* Dots */}
      <div className="relative z-20 flex items-center justify-center gap-3 mt-12 md:mt-16">
        <span className="relative">
          <span className="absolute inset-0 rounded-full bg-[#C5A46D] opacity-40 animate-ping" />
          <span className="relative block w-2.5 h-2.5 rounded-full bg-[#C5A46D]" />
        </span>
        <span className="w-2 h-2 rounded-full bg-[#C5A46D]/30" />
        <span className="w-2 h-2 rounded-full bg-[#C5A46D]/30" />
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-20 md:h-28 block rotate-180"
          fill="#0B0B0A"
        >
          <path d="M0,0 L1440,0 L1440,40 C1080,120 360,120 0,40 Z" />
        </svg>
      </div>
    </section>
  );
}