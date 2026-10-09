import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function DishDetailOverlay({ dish, categoryName, indexNumber, onClose, onRequestTable }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!dish) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-0 lg:p-10">
        
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080807]/90 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-6xl min-h-screen lg:min-h-[80vh] bg-[#0F0F0E] border border-[#C5A46D]/20 shadow-2xl overflow-hidden flex flex-col lg:flex-row my-auto"
        >
          {/* Close Button Top Right */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-30 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F4F0E8]/70 hover:text-[#C5A46D] transition-colors cursor-pointer bg-[#080807]/60 px-4 py-2 border border-white/10"
          >
            <span>CLOSE</span>
            <X className="w-4 h-4" />
          </button>

          {/* LEFT SIDE: Cinematic Food Image (55%) */}
          <div className="relative w-full lg:w-[55%] min-h-[350px] lg:min-h-full bg-[#080807] overflow-hidden">
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0E] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0F0F0E]" />
            
          



          </div>

          {/* RIGHT SIDE: Editorial Dish Details (45%) */}
          <div className="w-full lg:w-[45%] p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8 text-left bg-[#0F0F0E]">
            <div className="space-y-6">
              
              {/* Category & Index Label */}
              <div className="flex items-center gap-3">
               
                
              
              </div>

              {/* Dish Name */}
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-light uppercase tracking-[0.04em] text-[#F4F0E8] leading-tight">
                {dish.name}
              </h2>

              {/* Price */}
              <div className="font-serif text-3xl text-[#C5A46D] font-light pt-2">
                {dish.price}
              </div>

              <div className="w-16 h-px bg-[#C5A46D]/40 my-4" />

              {/* Ingredients / Description */}
              <p className="text-sm sm:text-base text-[#A8A39A] font-sans font-light leading-relaxed">
                {dish.description || dish.ingredients}
              </p>

              {/* Allergens */}
              {dish.allergens && dish.allergens.length > 0 && (
                <div className="pt-4 flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A8A39A]/70 font-sans">DIETARY / ALLERGENS:</span>
                  {dish.allergens.map((alg) => (
                    <span key={alg} className="text-[9px] uppercase font-sans text-[#C5A46D] border border-[#C5A46D]/30 px-2 py-0.5">
                      {alg}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className="pt-8 border-t border-[#C5A46D]/15 flex items-center justify-between">
              <button
                onClick={() => {
                  onClose();
                  if (onRequestTable) onRequestTable();
                }}
                className="w-full inline-flex items-center justify-center gap-3 border border-[#C5A46D] bg-[#C5A46D] text-[#0B0B0A] hover:bg-[#D4B67E] hover:border-[#D4B67E] py-4 px-8 text-xs tracking-[0.28em] uppercase font-sans font-semibold transition-all duration-300 shadow-xl cursor-pointer group"
              >
                <Calendar className="w-4 h-4" />
                <span>REQUEST A TABLE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
