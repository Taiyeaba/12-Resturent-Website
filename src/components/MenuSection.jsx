import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantData';
import DishDetailOverlay from './DishDetailOverlay';

gsap.registerPlugin(ScrollTrigger);

export default function MenuSection({ onNavigateToMenu }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const listRef = useRef(null);

  // 3 Featured Signature Dishes
  const signatureDishes = [
    restaurantConfig.menu.categories[0].dishes[1], // Beef Carpaccio (£14)
    restaurantConfig.menu.categories[1].dishes[0], // Pan-Roasted Sea Bass (£24)
    restaurantConfig.menu.categories[2].dishes[0], // Dark Chocolate Fondant (£9)
  ];

  const [activeDishIndex, setActiveDishIndex] = useState(0);
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' }
        }
      );

      // Image Mask Clip Reveal & Parallax Scale
      if (imageWrapperRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.4,
            ease: 'power4.out',
            scrollTrigger: { trigger: imageWrapperRef.current, start: 'top 80%' }
          }
        );

        const img = imageWrapperRef.current.querySelector('img');
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.08 },
            {
              scale: 1,
              duration: 1.8,
              ease: 'power3.out',
              scrollTrigger: { trigger: imageWrapperRef.current, start: 'top 80%' }
            }
          );
        }
      }

      // Dish list stagger reveal
      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: { trigger: listRef.current, start: 'top 80%' }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentDish = signatureDishes[activeDishIndex] || signatureDishes[0];

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative py-28 lg:py-36 bg-[#0B0B0A] text-[#F4F0E8] overflow-hidden border-t border-[#C5A46D]/15"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* SECTION INTRO */}
        <div ref={headerRef} className="max-w-3xl mb-16 text-left">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#C5A46D] font-sans font-medium block mb-3">
            SEASONAL / MODERN EUROPEAN
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-[0.05em] text-[#F4F0E8] mb-4">
            THE SIGNATURES
          </h2>
          <p className="text-xs sm:text-sm text-[#A8A39A] font-sans font-light tracking-widest leading-relaxed">
            A considered selection from our seasonal kitchen.
          </p>
        </div>

        {/* 12-COLUMN DESKTOP EDITORIAL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Cinematic Food Image (Col 5) */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageWrapperRef}
              className="relative w-full aspect-[4/5] overflow-hidden bg-[#151513] border border-[#C5A46D]/20 shadow-2xl"
            >
              <img
                src={currentDish.image}
                alt={currentDish.name}
                className="w-full h-full object-cover transition-all duration-700 ease-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Image Footer Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-sans tracking-widest text-[#F4F0E8]">
                
               
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Signature Dish List (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div ref={listRef} className="space-y-6">
              {signatureDishes.map((dish, idx) => {
                const isActive = activeDishIndex === idx;
                return (
                  <div
                    key={dish.id}
                    onMouseEnter={() => setActiveDishIndex(idx)}
                    onClick={() => setSelectedDish(dish)}
                    className={`group relative pb-6 border-b transition-all duration-500 cursor-pointer ${
                      isActive ? 'border-[#C5A46D]' : 'border-[#262624] hover:border-[#C5A46D]/40'
                    }`}
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <div className="flex items-baseline gap-4">
                        <span className={`font-serif text-sm transition-colors ${isActive ? 'text-[#C5A46D]' : 'text-[#A8A39A]'}`}>
                          0{idx + 1}
                        </span>
                        <h3 className={`font-serif text-2xl sm:text-4xl font-light uppercase tracking-wide transition-colors ${
                          isActive ? 'text-[#C5A46D]' : 'text-[#F4F0E8] group-hover:text-[#C5A46D]'
                        }`}>
                          {dish.name}
                        </h3>
                      </div>
                      <span className="font-serif text-xl sm:text-2xl text-[#C5A46D] font-light">
                        {dish.price}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pl-8">
                      <p className="text-xs sm:text-sm text-[#A8A39A] font-sans font-light tracking-wide">
                        {dish.description}
                      </p>
                      <span className={`text-[10px] uppercase tracking-[0.2em] transition-opacity duration-300 font-sans ${
                        isActive ? 'opacity-100 text-[#C5A46D]' : 'opacity-0 group-hover:opacity-100 text-[#A8A39A]'
                      }`}>
                        VIEW DISH 
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* EXPLORE THE MENU CTA */}
            <div className="pt-6">
              <button
                onClick={() => {
                  if (onNavigateToMenu) onNavigateToMenu('MENU');
                }}
                className="group inline-flex items-center gap-4 text-xs tracking-[0.3em] uppercase font-sans font-medium text-[#F4F0E8] hover:text-[#C5A46D] transition-colors cursor-pointer"
              >
                <span>EXPLORE THE MENU</span>
                <div className="relative w-12 h-[1px] bg-[#C5A46D] overflow-hidden">
                  <div className="absolute inset-0 bg-[#F4F0E8] translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </div>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* DISH DETAIL OVERLAY */}
      {selectedDish && (
        <DishDetailOverlay
          dish={selectedDish}
          categoryName="SIGNATURE SELECTION"
          indexNumber={activeDishIndex + 1}
          onClose={() => setSelectedDish(null)}
          onRequestTable={() => {
            if (onNavigateToMenu) {
              onNavigateToMenu('MENU');
              setTimeout(() => {
                const el = document.getElementById('reservation');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }
          }}
        />
      )}
    </section>
  );
}