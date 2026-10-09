

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { MapPin, Phone, Mail, Clock, ArrowUpRight, ArrowRight } from 'lucide-react';
// import { restaurantConfig } from '../data/restaurantData';

// gsap.registerPlugin(ScrollTrigger);

// export default function VisitSection() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         sectionRef.current.querySelectorAll('.animate-reveal'),
//         { opacity: 0, y: 50, filter: 'blur(10px)' },
//         {
//           opacity: 1,
//           y: 0,
//           filter: 'blur(0px)',
//           duration: 1.2,
//           stagger: 0.15,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top 78%',
//           },
//         }
//       );

//       gsap.fromTo(
//         sectionRef.current.querySelectorAll('.glow-orb'),
//         { y: 0 },
//         {
//           y: -60,
//           ease: 'none',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top bottom',
//             end: 'bottom top',
//             scrub: 1.2,
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       id="visit"
//       ref={sectionRef}
//       className="relative py-28 lg:py-40 bg-[#0B0B0A] text-[#F4F0E8] overflow-hidden"
//     >
//       {/* Background stack */}
//       <div className="pointer-events-none absolute inset-0 z-0">
//         <div className="glow-orb absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full bg-[#C5A46D]/[0.05] blur-[130px]" />
//         <div className="glow-orb absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#8C6D3B]/[0.06] blur-[120px]" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(11,11,10,0.7)_100%)]" />
//         <div
//           className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
//           style={{
//             backgroundImage:
//               "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
//           }}
//         />
//       </div>

//       {/* Gold hairline frame */}
//       <div className="pointer-events-none absolute inset-4 md:inset-6 border border-[#C5A46D]/10 z-[1]" />
//       <div className="pointer-events-none absolute top-4 left-4 md:top-6 md:left-6 w-6 h-6 border-t border-l border-[#C5A46D]/50 z-[1]" />
//       <div className="pointer-events-none absolute top-4 right-4 md:top-6 md:right-6 w-6 h-6 border-t border-r border-[#C5A46D]/50 z-[1]" />
//       <div className="pointer-events-none absolute bottom-4 left-4 md:bottom-6 md:left-6 w-6 h-6 border-b border-l border-[#C5A46D]/50 z-[1]" />
//       <div className="pointer-events-none absolute bottom-4 right-4 md:bottom-6 md:right-6 w-6 h-6 border-b border-r border-[#C5A46D]/50 z-[1]" />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

//         {/* Section tag */}
//        <div className="group/tag flex items-center gap-4 mb-10 md:mb-14 animate-reveal">
//   <span className="w-1 h-1 rotate-45 bg-[#C5A46D]" />
//   <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A46D] font-sans font-medium">
//     Find Us
//   </span>
//   <div className="h-px w-16 md:w-24 bg-gradient-to-r from-[#C5A46D]/60 to-transparent group-hover/tag:w-32 md:group-hover/tag:w-40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
// </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

//           {/* ===== LEFT ===== */}


//           <div className="lg:col-span-6 space-y-10 animate-reveal">
//             <div>
//               <h2
//                 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light uppercase tracking-[0.06em] text-[#F4F0E8] leading-[1.02] mb-6"
//                 style={{
//                   textShadow: '0 4px 24px rgba(0,0,0,0.7), 0 20px 60px rgba(0,0,0,0.4)',
//                 }}
//               >
//                 Come &amp; Visit
//               </h2>

//               <div className="flex items-center gap-3 mb-6">
//                 <span className="block w-12 h-px bg-[#C5A46D]" />
//                 <span className="block w-1 h-1 rotate-45 bg-[#C5A46D]" />
//                 <span className="block w-6 h-px bg-[#C5A46D]/60" />
//               </div>

//               <p className="text-base sm:text-lg text-[#A8A39A] font-sans font-light leading-relaxed max-w-lg">
//                 Situated in the historic heart of St Paul's Square, Birmingham — a short walk from the city's cultural quarter.
//               </p>
//             </div>

//             {/* Address */}
//             <div className="flex items-start gap-5 border-t border-[#C5A46D]/15 pt-8">
//               <div className="shrink-0 w-11 h-11 rounded-full border border-[#C5A46D]/30 flex items-center justify-center bg-[#C5A46D]/[0.04] backdrop-blur-sm">
//                 <MapPin className="w-4 h-4 text-[#C5A46D]" />
//               </div>
//               <div>
//                 <span className="text-[10px] uppercase tracking-[0.35em] text-[#A8A39A] block font-sans mb-2">
//                   Location
//                 </span>
//                 <p className="font-serif text-xl md:text-2xl text-[#F4F0E8] leading-tight mb-1">
//                   {restaurantConfig.contact.address}
//                 </p>
//                 <p className="text-sm text-[#A8A39A] font-sans">
//                   {restaurantConfig.contact.city}, {restaurantConfig.contact.postcode}
//                 </p>
//               </div>
//             </div>

//             {/* Contact */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#C5A46D]/15 pt-8">
//               <div className="flex items-start gap-4">
//                 <div className="shrink-0 w-10 h-10 rounded-full border border-[#C5A46D]/30 flex items-center justify-center bg-[#C5A46D]/[0.04]">
//                   <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
//                 </div>
//                 <div>
//                   <span className="text-[10px] uppercase tracking-[0.35em] text-[#A8A39A] block font-sans mb-2">
//                     Telephone
//                   </span>
//                   <a
//                     href={`tel:${restaurantConfig.contact.phone}`}
//                     className="text-sm text-[#F4F0E8] hover:text-[#C5A46D] transition-colors font-sans"
//                   >
//                     {restaurantConfig.contact.displayPhone}
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="shrink-0 w-10 h-10 rounded-full border border-[#C5A46D]/30 flex items-center justify-center bg-[#C5A46D]/[0.04]">
//                   <Mail className="w-3.5 h-3.5 text-[#C5A46D]" />
//                 </div>
//                 <div>
//                   <span className="text-[10px] uppercase tracking-[0.35em] text-[#A8A39A] block font-sans mb-2">
//                     Email
//                   </span>
//                   <a
//                     href={`mailto:${restaurantConfig.contact.email}`}
//                     className="text-sm text-[#F4F0E8] hover:text-[#C5A46D] transition-colors font-sans break-all"
//                   >
//                     {restaurantConfig.contact.email}
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* CTA */}
//             <div className="pt-4">
//               <a
//                 href={restaurantConfig.contact.googleMapsUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden text-[11px] tracking-[0.32em] uppercase font-sans font-semibold text-[#F4F0E8] border border-[#C5A46D]/50 hover:border-[#C5A46D] transition-colors duration-500"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-b from-[#D9BC86] to-[#C5A46D] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
//                 <span className="absolute -top-px -left-px w-2 h-2 border-t border-l border-[#C5A46D]" />
//                 <span className="absolute -top-px -right-px w-2 h-2 border-t border-r border-[#C5A46D]" />
//                 <span className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-[#C5A46D]" />
//                 <span className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-[#C5A46D]" />

//                 <span className="relative z-10 group-hover:text-[#0B0B0A] transition-colors duration-500">
//                   Get Directions
//                 </span>
//                 <ArrowUpRight className="relative z-10 w-4 h-4 text-[#C5A46D] group-hover:text-[#0B0B0A] transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </a>
//             </div>
//           </div>





//           {/* ===== RIGHT — OPENING HOURS ===== */}
//           <div className="lg:col-span-6 animate-reveal">
//             <div className="relative bg-gradient-to-b from-[#151513] to-[#111110] border border-[#C5A46D]/15 rounded-[20px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">

//               <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C5A46D]/50 to-transparent" />
//               <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#C5A46D]/[0.06] blur-[100px]" />

//               <div className="relative p-8 sm:p-10 lg:p-12 space-y-8">

//                 {/* Header */}
//                 <div className="flex items-center gap-3 border-b border-[#C5A46D]/15 pb-6">
//                   <Clock className="w-5 h-5 text-[#C5A46D]" />
//                   <h3 className="font-serif text-2xl md:text-3xl font-light uppercase tracking-[0.08em] text-[#F4F0E8]">
//                     Opening Hours
//                   </h3>
//                 </div>

//                 {/* Schedule rows — with HOVER EFFECT */}


//                 <div className="space-y-2">
//                   {restaurantConfig.hours.map((schedule, idx) => {
//                     const isClosed = schedule.time.toLowerCase().includes('closed');
//                     return (
//                       <div
//                         key={idx}
//                         className="group/row relative flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 py-4 border-b border-[#C5A46D]/10 last:border-0 cursor-default"
//                       >

//                         {/* Left gold marker (grows on hover) */}
//                         <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 group-hover/row:h-8 bg-gradient-to-b from-[#C5A46D] via-[#8C6D3B] to-transparent rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />

//                         {/* Right gold marker (grows on hover) */}
//                         <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-0 group-hover/row:h-8 bg-gradient-to-b from-[#C5A46D] via-[#8C6D3B] to-transparent rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />

//                         {/* Day */}
//                         <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#F4F0E8] font-sans font-medium pl-0 group-hover/row:pl-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
//                           {schedule.days}
//                         </span>

//                         {/* Time — Cinematic hover + slide */}
//                         <span
//                           className={`relative font-serif italic text-lg md:text-xl font-light whitespace-nowrap pr-0 group-hover/row:pr-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
//                             isClosed ? 'text-[#A8A39A]' : 'text-[#C5A46D]'
//                           } group-hover/row:text-[#E0C287]`}
//                           style={{
//                             textShadow: '0 0 0px transparent',
//                           }}
//                         >
//                           {/* Left line (grows on hover) */}
//                           <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-px bg-gradient-to-r from-transparent to-[#C5A46D] group-hover/row:w-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />

//                           <span className="inline-block pl-0 group-hover/row:pl-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
//                             {schedule.time}
//                           </span>

//                           {/* Right line (grows on hover) */}
//                           <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-px bg-gradient-to-l from-transparent to-[#C5A46D] group-hover/row:w-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
//                         </span>

//                       </div>
//                     );
//                   })}
//                 </div>









//                 {/* Private dining note */}
//                 <div className="relative bg-[#0B0B0A] border border-[#C5A46D]/20 rounded-[12px] p-6 overflow-hidden">
//                   <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#C5A46D] to-[#8C6D3B]" />
//                   <div className="pointer-events-none absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-[#C5A46D]/[0.05] blur-3xl" />

//                   <div className="relative pl-3">
//                     <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#C5A46D] font-medium font-sans mb-2">
//                       Private Dining &amp; Events
//                     </p>
//                     <p className="text-xs sm:text-[13px] text-[#A8A39A] font-sans font-light leading-relaxed">
//                       For groups larger than 6 or exclusive hire requests, please contact our team directly via email or telephone.
//                     </p>
//                   </div>
//                 </div>


//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantData';

gsap.registerPlugin(ScrollTrigger);

export default function VisitSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.animate-reveal'),
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="visit"
      ref={sectionRef}
      className="relative py-28 lg:py-40 bg-[#0B0B0A] text-[#F4F0E8] overflow-hidden"
    >
      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Italianno&display=swap');
  
  .about-script {
    font-family: 'Pinyon Script', 'Italianno', cursive;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.015em;
  }
`}</style>

      {/* ============ CONTENT ============ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 -mt-36 md:px-12">

        {/* ============ TOP CONNECTOR ============ */}
        <div className="animate-reveal flex flex-col items-center mb-12 md:mb-16">

          {/* Script caption — bigger, on top */}
          <span
            className="about-script text-5xl sm:text-6xl md:text-7xl text-[#C5A46D] mb-8 md:mb-10 leading-[1.1] -rotate-2"
            style={{ textShadow: '0 4px 24px rgba(197,164,109,0.2)' }}
          >
            Continue your journey
          </span>

          {/* Ornamental divider */}
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="block w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-[#C5A46D]/40 to-transparent" />
            <span className="block w-1 h-1 rotate-45 bg-[#C5A46D]/70" />
            <span className="block w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-[#C5A46D]/40 to-transparent" />
          </div>



        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ============ LEFT ============ */}
          <div className="lg:col-span-6 space-y-10 animate-reveal">
            <div>
              <h2
                className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light uppercase tracking-[0.06em] text-[#F4F0E8] leading-[1.02] mb-6"
                style={{
                  textShadow: '0 4px 24px rgba(0,0,0,0.7), 0 20px 60px rgba(0,0,0,0.4)',
                }}
              >
                Come &amp; Visit
              </h2>

              <div className="flex items-center gap-3 mb-6">
                <span className="block w-12 h-px bg-[#C5A46D]" />
                <span className="block w-1 h-1 rotate-45 bg-[#C5A46D]" />
                <span className="block w-6 h-px bg-[#C5A46D]/60" />
              </div>

              <p className="text-base sm:text-lg text-[#A8A39A] font-sans font-light leading-relaxed max-w-lg">
                Situated in the historic heart of St Paul's Square, Birmingham — a short walk from the city's cultural quarter.
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-5 border-t border-[#C5A46D]/15 pt-8">
              <div className="shrink-0 w-11 h-11 rounded-full border border-[#C5A46D]/30 flex items-center justify-center bg-[#C5A46D]/[0.04] backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-[#C5A46D]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#A8A39A] block font-sans mb-2">
                  Location
                </span>
                <p className="font-serif text-xl md:text-2xl text-[#F4F0E8] leading-tight mb-1">
                  {restaurantConfig.contact.address}
                </p>
                <p className="text-sm text-[#A8A39A] font-sans">
                  {restaurantConfig.contact.city}, {restaurantConfig.contact.postcode}
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#C5A46D]/15 pt-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full border border-[#C5A46D]/30 flex items-center justify-center bg-[#C5A46D]/[0.04]">
                  <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#A8A39A] block font-sans mb-2">
                    Telephone
                  </span>
                  <a
                    href={`tel:${restaurantConfig.contact.phone}`}
                    className="text-sm text-[#F4F0E8] hover:text-[#C5A46D] transition-colors font-sans"
                  >
                    {restaurantConfig.contact.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full border border-[#C5A46D]/30 flex items-center justify-center bg-[#C5A46D]/[0.04]">
                  <Mail className="w-3.5 h-3.5 text-[#C5A46D]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#A8A39A] block font-sans mb-2">
                    Email
                  </span>
                  <a
                    href={`mailto:${restaurantConfig.contact.email}`}
                    className="text-sm text-[#F4F0E8] hover:text-[#C5A46D] transition-colors font-sans break-all"
                  >
                    {restaurantConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href={restaurantConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden text-[11px] tracking-[0.32em] uppercase font-sans font-semibold text-[#F4F0E8] border border-[#C5A46D]/50 hover:border-[#C5A46D] transition-colors duration-500"
              >
                <span className="absolute inset-0 bg-gradient-to-b from-[#D9BC86] to-[#C5A46D] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <span className="absolute -top-px -left-px w-2 h-2 border-t border-l border-[#C5A46D]" />
                <span className="absolute -top-px -right-px w-2 h-2 border-t border-r border-[#C5A46D]" />
                <span className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-[#C5A46D]" />
                <span className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-[#C5A46D]" />

                <span className="relative z-10 group-hover:text-[#0B0B0A] transition-colors duration-500">
                  Get Directions
                </span>
                <ArrowUpRight className="relative z-10 w-4 h-4 text-[#C5A46D] group-hover:text-[#0B0B0A] transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* ============ RIGHT — OPENING HOURS ============ */}
          <div className="lg:col-span-6 animate-reveal">
            <div className="relative bg-gradient-to-b from-[#151513] to-[#111110] border border-[#C5A46D]/15 rounded-[20px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C5A46D]/50 to-transparent" />
              <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#C5A46D]/[0.06] blur-[100px]" />

              <div className="relative p-8 sm:p-10 lg:p-12 space-y-8">

                {/* Header */}
                <div className="flex items-center gap-3 border-b border-[#C5A46D]/15 pb-6">
                  <Clock className="w-5 h-5 text-[#C5A46D]" />
                  <h3 className="font-serif text-2xl md:text-3xl font-light uppercase tracking-[0.08em] text-[#F4F0E8]">
                    Opening Hours
                  </h3>
                </div>

                {/* Schedule rows */}
                <div className="space-y-2">
                  {restaurantConfig.hours.map((schedule, idx) => {
                    const isClosed = schedule.time.toLowerCase().includes('closed');
                    return (
                      <div
                        key={idx}
                        className="group/row relative flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 py-4 border-b border-[#C5A46D]/10 last:border-0 cursor-default"
                      >
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 group-hover/row:h-8 bg-gradient-to-b from-[#C5A46D] via-[#8C6D3B] to-transparent rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-0 group-hover/row:h-8 bg-gradient-to-b from-[#C5A46D] via-[#8C6D3B] to-transparent rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />

                        <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#F4F0E8] font-sans font-medium pl-0 group-hover/row:pl-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                          {schedule.days}
                        </span>

                        <span
                          className={`relative font-serif italic text-lg md:text-xl font-light whitespace-nowrap pr-0 group-hover/row:pr-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isClosed ? 'text-[#A8A39A]' : 'text-[#C5A46D]'
                            } group-hover/row:text-[#E0C287]`}
                        >
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-px bg-gradient-to-r from-transparent to-[#C5A46D] group-hover/row:w-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                          <span className="inline-block pl-0 group-hover/row:pl-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                            {schedule.time}
                          </span>
                          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-px bg-gradient-to-l from-transparent to-[#C5A46D] group-hover/row:w-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Private dining note */}
                <div className="relative bg-[#0B0B0A] border border-[#C5A46D]/20 rounded-[12px] p-6 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#C5A46D] to-[#8C6D3B]" />
                  <div className="pointer-events-none absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-[#C5A46D]/[0.05] blur-3xl" />

                  <div className="relative pl-3">
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#C5A46D] font-medium font-sans mb-2">
                      Private Dining &amp; Events
                    </p>
                    <p className="text-xs sm:text-[13px] text-[#A8A39A] font-sans font-light leading-relaxed">
                      For groups larger than 6 or exclusive hire requests, please contact our team directly via email or telephone.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}