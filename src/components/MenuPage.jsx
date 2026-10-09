import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantData';
import DishDetailOverlay from './DishDetailOverlay';

gsap.registerPlugin(ScrollTrigger);

export default function MenuPage({ initialTab = 'MENU', onBackToHome }) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedDishData, setSelectedDishData] = useState(null);
  
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const categoryRefs = useRef([]);

  const categories = restaurantConfig.menu.categories;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const ctx = gsap.context(() => {
      // Hero entrance
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
        );
      }

      // ScrollTrigger for category chapters
      categoryRefs.current.forEach((el, i) => {
        if (!el) return;
        const img = el.querySelector('.category-img-container');
        const list = el.querySelector('.category-dish-list');

        if (img) {
          gsap.fromTo(
            img,
            { clipPath: 'inset(100% 0% 0% 0%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1.5,
              ease: 'power4.out',
              scrollTrigger: { trigger: el, start: 'top 75%' }
            }
          );
        }

        if (list) {
          gsap.fromTo(
            list.children,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 75%' }
            }
          );
        }
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const scrollToCategory = (index) => {
    setActiveCategoryIndex(index);
    const target = categoryRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-[#080807] text-[#F4F0E8] font-sans selection:bg-[#C5A46D] selection:text-[#0B0B0A] relative pb-28 animate-fadeIn">
      
      {/* REDESIGNED LUXURY TOP HEADER & STICKY NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#0B0B0A]/95 backdrop-blur-xl border-b border-[#C5A46D]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300">
        
        {/* Main Branding & Actions Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between gap-4">
          
          {/* Back to Home Button (Luxury Boxed Pill) */}
          <button
            onClick={() => onBackToHome()}
            className="group relative inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#C5A46D]/35 bg-[#141412]/80 hover:bg-[#C5A46D] hover:border-[#C5A46D] transition-all duration-300 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C5A46D] hover:text-[#0B0B0A] font-sans font-medium cursor-pointer shadow-lg shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="hidden xs:inline">BACK TO HOME</span>
            <span className="xs:hidden">HOME</span>
          </button>

          {/* Restaurant Logo & Editorial Subtitle */}
          <div className="flex flex-col items-center text-center py-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hidden sm:inline-block w-4 sm:w-6 h-px bg-[#C5A46D]/40" />
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.25em] font-light text-[#F4F0E8] uppercase drop-shadow-md">
                {restaurantConfig.name}
              </span>
              <span className="hidden sm:inline-block w-4 sm:w-6 h-px bg-[#C5A46D]/40" />
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <Sparkles className="w-2.5 h-2.5 text-[#C5A46D]" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-[#C5A46D] font-sans font-medium">
                FINE DINING MENU
              </span>
              <Sparkles className="w-2.5 h-2.5 text-[#C5A46D]" />
            </div>
          </div>

          {/* Table Request CTA Button */}
          <button
            onClick={() => onBackToHome('reservation')}
            className="group inline-flex items-center gap-2 border border-[#C5A46D]/60 bg-gradient-to-r from-[#C5A46D]/15 to-[#C5A46D]/5 hover:from-[#C5A46D] hover:to-[#D4B67E] px-4 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#F4F0E8] hover:text-[#0B0B0A] transition-all duration-300 font-sans font-medium shadow-md cursor-pointer shrink-0 rounded-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A46D] group-hover:text-[#0B0B0A] transition-colors" />
            <span className="hidden md:inline">REQUEST TABLE</span>
            <span className="md:hidden">TABLE</span>
          </button>
        </div>

        {/* Category Navigation Bar (Integrated Sub-Header) */}
        <div className="border-t border-[#C5A46D]/15 bg-[#080807]/60">
          <nav className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-start sm:justify-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat, idx) => {
              const isActive = activeCategoryIndex === idx;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(idx)}
                  className={`group relative flex items-center gap-2.5 px-4 sm:px-6 py-2 rounded-full text-xs tracking-[0.25em] uppercase font-sans font-medium transition-all duration-300 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#C5A46D] text-[#0B0B0A] shadow-[0_0_20px_rgba(197,164,109,0.3)] font-semibold'
                      : 'bg-[#151513]/70 text-[#A8A39A] hover:text-[#F4F0E8] hover:bg-[#1E1E1C] border border-[#C5A46D]/15'
                  }`}
                >
                  <span className={`text-[10px] font-mono ${isActive ? 'text-[#0B0B0A]/80' : 'text-[#C5A46D]'}`}>
                    0{idx + 1}
                  </span>
                  <span>{cat.name}</span>
                  {cat.dishes && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-[#0B0B0A]/20 text-[#0B0B0A]' : 'bg-[#0B0B0A] text-[#A8A39A]'
                    }`}>
                      {cat.dishes.length}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* CATEGORY CHAPTERS */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        {categories.map((cat, catIdx) => {
          const isEven = catIdx % 2 === 0;

          return (
            <section
              key={cat.id}
              ref={(el) => (categoryRefs.current[catIdx] = el)}
              className="scroll-mt-36 pt-8 border-t border-[#262624]"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between mb-12 gap-4">
                <div className="space-y-1 text-left">
                  
                  <h2 className="font-serif text-4xl sm:text-6xl font-light uppercase tracking-[0.06em] text-[#F4F0E8]">
                    {cat.name}
                  </h2>
                </div>
                <p className="font-serif italic text-base sm:text-lg text-[#C5A46D]">
                  "{cat.tagline}"
                </p>
              </div>

              {/* 12-Column Grid (Alternate Image Left/Right per Category) */}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}>
                
                {/* CATEGORY IMAGE CONTAINER */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="category-img-container relative w-full aspect-[4/5] overflow-hidden bg-[#141412] border border-[#C5A46D]/20 shadow-2xl sticky top-36">
                    <img
                      src={cat.coverImage || cat.dishes[0].image}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080807]/70 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-sans text-[#F4F0E8] tracking-widest">
                      
                     
                    </div>
                  </div>
                </div>

                {/* DISH LIST */}
                <div className={`category-dish-list lg:col-span-7 space-y-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {cat.dishes.map((dish, dishIdx) => (
                    <div
                      key={dish.id}
                      onClick={() => setSelectedDishData({ dish, catName: cat.name, index: dishIdx + 1 })}
                      className="group relative pb-6 border-b border-[#262624] hover:border-[#C5A46D]/60 transition-all duration-300 cursor-pointer text-left"
                    >
                      <div className="flex items-baseline justify-between mb-2">
                        <div className="flex items-baseline gap-4">
                          <span className="font-serif text-sm text-[#A8A39A] group-hover:text-[#C5A46D] transition-colors">
                            0{dishIdx + 1}
                          </span>
                          <h3 className="font-serif text-2xl sm:text-3xl font-light uppercase tracking-wide text-[#F4F0E8] group-hover:text-[#C5A46D] transition-colors">
                            {dish.name}
                          </h3>
                          
                        </div>
                        
                        <span className="font-serif text-xl sm:text-2xl text-[#C5A46D] font-light">
                          {dish.price}
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pl-8">
                        <p className="text-xs sm:text-sm text-[#A8A39A] font-sans font-light leading-relaxed">
                          {dish.description}
                        </p>
                        
                        {/* Allergens & Hover Action */}
                        <div className="flex items-center gap-3 shrink-0">
                          {dish.allergens && dish.allergens.map((alg) => (
                            <span key={alg} className="text-[8px] font-sans text-[#A8A39A] border border-[#C5A46D]/20 px-1.5 py-0.5">
                              {alg}
                            </span>
                          ))}
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#A8A39A] group-hover:text-[#C5A46D] opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                            VIEW 
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>
          );
        })}
      </main>

      {/* DISH DETAIL OVERLAY */}
      {selectedDishData && (
        <DishDetailOverlay
          dish={selectedDishData.dish}
          categoryName={selectedDishData.catName}
          indexNumber={selectedDishData.index}
          onClose={() => setSelectedDishData(null)}
          onRequestTable={() => {
            onBackToHome('reservation');
          }}
        />
      )}

    

    </div>
  );
}
