import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

// Images
import chefbgImg from '../assets/images/chefbg.jpg';
import chefMainImg from '../assets/images/chef-main-portrait.jpg';
import chefPlatingImg from '../assets/images/chef-plating-detail.jpg';
import chefKitchenImg from '../assets/images/chef-kitchen-detail.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function ChefSection() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const quoteRef = useRef(null);
  const statementsRef = useRef(null);
  const archImageRef = useRef(null);
  const topRightImageRef = useRef(null);
  const bottomRightImageRef = useRef(null);
  const numberRef = useRef(null);
  const verticalLabelRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      /* ARCH IMAGE — clip reveal + scale settle */
      gsap.fromTo(
        archImageRef.current,
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.8,
          ease: 'power4.out',
          scrollTrigger: { trigger: archImageRef.current, start: 'top 85%' },
        }
      );

      gsap.fromTo(
        archImageRef.current.querySelector('img'),
        { scale: 1.06 },
        {
          scale: 1,
          duration: 2.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: archImageRef.current, start: 'top 85%' },
        }
      );

      /* SIDE IMAGES */
      gsap.fromTo(
        topRightImageRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0, duration: 1.4, delay: 0.35, ease: 'power3.out',
          scrollTrigger: { trigger: topRightImageRef.current, start: 'top 90%' },
        }
      );

      gsap.fromTo(
        bottomRightImageRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0, duration: 1.4, delay: 0.55, ease: 'power3.out',
          scrollTrigger: { trigger: bottomRightImageRef.current, start: 'top 92%' },
        }
      );

      /* TEXT REVEALS */
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: labelRef.current, start: 'top 90%' },
        }
      );

      gsap.fromTo(
        headingRef.current.querySelectorAll('.reveal-line'),
        { yPercent: 110 },
        {
          yPercent: 0, duration: 1.3, stagger: 0.14, ease: 'power4.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 88%' },
        }
      );

      gsap.fromTo(
        nameRef.current.querySelectorAll('.reveal-line'),
        { yPercent: 110 },
        {
          yPercent: 0, duration: 1.3, stagger: 0.14, delay: 0.2, ease: 'power4.out',
          scrollTrigger: { trigger: nameRef.current, start: 'top 90%' },
        }
      );

      gsap.fromTo(
        [
          roleRef.current,
          quoteRef.current,
          numberRef.current,
          verticalLabelRef.current,
          scrollIndicatorRef.current,
        ].filter(Boolean),
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 1, stagger: 0.12, delay: 0.4, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );

      gsap.fromTo(
        statementsRef.current?.children || [],
        { opacity: 0, y: 15 },
        {
          opacity: 1, y: 0, duration: 1, stagger: 0.1, delay: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: statementsRef.current, start: 'top 95%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="chef"
      className="relative bg-[#0B0B0A] text-[#F4F0E8] overflow-hidden min-h-screen flex items-center justify-center pt-20 pb-6"
    >
      {/* ============ FULL SECTION BACKGROUND ============ */}
      <div className="absolute inset-0 z-0">
        <img
          src={chefbgImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B0B0A]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0A]/80 via-[#0B0B0A]/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(11,11,10,0.75)_100%)]" />
      </div>

      {/* ============ STAGE ============ */}
      <div
        className="relative z-10 w-full flex flex-col gap-12 px-6 py-12 md:px-12
                   lg:block lg:p-0 lg:aspect-[3/2] lg:w-[min(100%,calc((100vh_-_6rem)*1.5))]"
        style={{ containerType: 'inline-size' }}
      >

        {/* ---------- VERTICAL LABEL (desktop) ---------- */}
        <div
          ref={verticalLabelRef}
          className="hidden lg:flex absolute left-[94.73%] top-[14.8%] w-[1.3cqw] z-30 flex-col items-center gap-[1cqw]"
        ></div>

        {/* ---------- SCROLL INDICATOR (desktop) ---------- */}
        <div
          ref={scrollIndicatorRef}
          className="hidden lg:flex absolute left-[93.35%] top-[81%] w-[4cqw] z-30 flex-col items-center gap-[0.7cqw]"
        ></div>

        {/* ---------- LEFT TEXT (moved to left-[4%]) ---------- */}
        <div className="order-1 flex flex-col gap-6">

          {/* Label */}
          <div
            ref={labelRef}
            className="flex items-center gap-3 lg:absolute lg:left-[4%] lg:top-[18.6%] lg:gap-[0.9cqw] z-20"
          >
            <span className="w-2 h-2 lg:w-[0.6cqw] lg:h-[0.6cqw] rotate-45 border border-[#C5A46D]" />
            <span className="text-[10px] md:text-[11px] lg:text-[0.85cqw] uppercase tracking-[0.35em] text-[#C5A46D] font-sans">
              From the Kitchen
            </span>
          </div>

          {/* OUR CHEF */}
          <div
            ref={headingRef}
            className="font-serif font-light uppercase text-[#F4F0E8] tracking-[0.02em]
                       text-7xl sm:text-8xl leading-[0.95]
                       lg:absolute lg:left-[4%] lg:top-[22%] lg:text-[7.2cqw] lg:leading-none z-20"
          >
            <div className="overflow-hidden">
              <h3 className="reveal-line block font-light">Our</h3>
            </div>
            <div className="overflow-hidden lg:-mt-[0.2em]">
              <h3 className="reveal-line block font-light">Chef</h3>
            </div>
          </div>

          {/* Divider */}
          <div className="w-28 h-px bg-[#C5A46D]/70 lg:absolute lg:left-[4%] lg:top-[43.75%] lg:w-[10.5cqw] z-20" />

          {/* DANIEL LAURENT */}
          <div
            ref={nameRef}
            className="font-serif font-light uppercase text-[#F4F0E8] tracking-[0.04em]
                       text-5xl sm:text-6xl leading-[1]
                       lg:absolute lg:left-[4%] lg:top-[46.4%] lg:text-[4.1cqw] z-20"
          >
            <div className="overflow-hidden">
              <h2 className="reveal-line block font-light">Daniel</h2>
            </div>
            <div className="overflow-hidden lg:-mt-[0.16em]">
              <h2 className="reveal-line block font-light">Laurent</h2>
            </div>
          </div>

          {/* Role */}
          <p
            ref={roleRef}
            className="text-[10px] md:text-[11px] leading-[2] uppercase tracking-[0.3em] text-[#CFC9BD] font-sans
                       lg:absolute lg:left-[4%] lg:top-[58.8%] lg:text-[0.95cqw] lg:leading-[1.6] z-20"
          >
            Executive Chef &<br />
            Creative Director
          </p>

          {/* Quote */}
          <blockquote
            ref={quoteRef}
            className="lg:absolute lg:left-[4%] lg:top-[67%] z-20"
          >
            <p className="font-serif italic text-xl sm:text-2xl lg:text-[1.82cqw] text-[#C5A46D] font-light leading-[1.3] lg:leading-[1.2]">
              "Great food begins with
              <br className="hidden lg:block" />
              <span className="lg:ml-[0.5cqw]"> exceptional ingredients."</span>
            </p>
          </blockquote>

          {/* Statements */}
          <div
            ref={statementsRef}
            className="flex items-center gap-4 lg:absolute lg:left-[4%] lg:top-[79%] lg:gap-[2cqw] z-20"
          >
            <span className="text-[10px] lg:text-[0.9cqw] uppercase tracking-[0.22em] text-[#C5A46D]">Seasonal</span>
            <span className="w-px h-4 lg:h-[1.3cqw] bg-[#C5A46D]/60" />
            <span className="text-[10px] lg:text-[0.9cqw] uppercase tracking-[0.22em] text-[#C5A46D]">Refined</span>
            <span className="w-px h-4 lg:h-[1.3cqw] bg-[#C5A46D]/60" />
            <span className="text-[10px] lg:text-[0.9cqw] uppercase tracking-[0.22em] text-[#C5A46D]">European</span>
          </div>
        </div>

        {/* ---------- "01 THE CRAFT" ---------- */}
        <div
          ref={numberRef}
          className="hidden lg:block absolute left-[37.7%] top-[14.45%] z-30"
        >
          
          
          
        </div>

        {/* ---------- CENTER ARCH (MOBILE RESPONSIVE ASPECT RATIO) ---------- */}
        <div
          ref={archImageRef}
          className="order-2 lg:order-none relative w-full max-w-[280px] sm:max-w-[360px] mx-auto aspect-[3/4] sm:aspect-[441/640] overflow-hidden rounded-t-[140px] sm:rounded-t-[180px] rounded-b-lg border border-[#C5A46D]/30 shadow-2xl transition-all duration-500 hover:border-[#C5A46D]/70
                     lg:absolute lg:max-w-none lg:mx-0 lg:aspect-auto lg:rounded-b-none lg:border-none lg:shadow-none
                     lg:left-[40.36%] lg:top-[9.67%] lg:w-[28.71%] lg:h-[81.54%] z-10
                     group cursor-pointer"
        >
          <img
            src={chefMainImg}
            alt="Daniel Laurent, Executive Chef"
            className="w-full h-full object-cover lg:max-w-none lg:h-auto lg:absolute
                       transition-transform duration-700 ease-out
                       group-hover:scale-[1.05]"
            style={{ left: '-4.535%', top: '-1.078%', width: '104.535%', transformOrigin: 'center center' }}
          />
        </div>

        {/* ---------- RIGHT IMAGES (MOBILE RESPONSIVE GRID) ---------- */}
        <div className="order-3 lg:order-none grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-[340px] sm:max-w-2xl mx-auto lg:contents">
          {/* Top right — plating */}
          <div
            ref={topRightImageRef}
            className="relative aspect-[4/3] sm:aspect-[300/320] overflow-hidden border border-[#C5A46D]/25 hover:border-[#C5A46D]/60 shadow-xl transition-all duration-500 cursor-pointer group
                       lg:absolute lg:aspect-auto lg:border-none lg:shadow-none lg:left-[68.36%] lg:top-[19.53%] lg:w-[19.53%] lg:h-[31.25%] z-20"
          >
            <img
              src={chefPlatingImg}
              alt="Chef plating a dish"
              className="block w-full h-full object-cover
                         transition-transform duration-700 ease-out
                         group-hover:scale-[1.06]"
            />
          </div>

          {/* Bottom right — kitchen */}
          <div
            ref={bottomRightImageRef}
            className="relative aspect-[4/3] sm:aspect-[320/300] overflow-hidden border border-[#C5A46D]/25 hover:border-[#C5A46D]/60 shadow-xl transition-all duration-500 cursor-pointer group
                       lg:absolute lg:aspect-auto lg:border-none lg:shadow-none lg:left-[67.71%] lg:top-[53.61%] lg:w-[20.83%] lg:h-[29.3%] z-20"
          >
            <img
              src={chefKitchenImg}
              alt="Chef hands at work"
              className="block w-full h-full object-cover
                         transition-transform duration-700 ease-out
                         group-hover:scale-[1.06]"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0B0B0A]/60 to-transparent z-[5]" />
    </section>
  );
}