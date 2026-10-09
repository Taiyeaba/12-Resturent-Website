import React, { useRef } from 'react';
import { motion, MotionConfig, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, ChefHat, ConciergeBell } from 'lucide-react';
import { getLenis } from '../hooks/useLenis';

import atmosphereImg from '../assets/experience-img/atmosphere.jpg';
import craftImg from '../assets/experience-img/craft.jpg';
import cuisineImg from '../assets/experience-img/cuisine.jpg';

const EASE = [0.22, 1, 0.36, 1];

/* ============ HARDCODED DATA ============ */
const EXPERIENCE_DATA = {
  label: 'The Experience',
  headingLines: ['More Than', 'Dinner.'],
  quote:
    'From intimate dinners to special celebrations, every detail at LUMIÈRE is designed to make the evening memorable.',

  moments: [
  {
    id: '01',
    image: atmosphereImg,
    alt: 'The LUMIÈRE dining room',
    title: 'The Atmosphere',
    desc: 'Warm candlelight, dark marble and intimate spaces — designed for lingering, memorable evenings.',
  },
  {
    id: '02',
    image: craftImg,
    alt: 'Chef plating a dish',
    title: 'The Craft',
    desc: 'Precise technique, thoughtful preparation and culinary artistry brought to every single plate.',
  },
  {
    id: '03',
    image: cuisineImg,
    alt: 'Signature dish',
    title: 'The Cuisine',
    desc: 'Seasonal plates shaped by European finesse, refined modern technique and fresh ingredients.',
  },
],
  features: [
    { icon: 'leaf', title: 'Seasonal Ingredients', desc: 'Fresh, local, and seasonal ingredients at their peak.' },
    { icon: 'chef', title: 'Culinary Artistry', desc: 'Classic techniques meet modern creativity.' },
    { icon: 'bell', title: 'Intimate Dining', desc: 'Thoughtful spaces for meaningful connections.' },
  ],

  evening: {
    label: 'An Evening at LUMIÈRE',
    steps: [
      { time: '6:30 PM', title: 'Arrival', desc: 'A warm greeting, a quiet table and a glass to begin.' },
      { time: '7:00 PM', title: 'The Table', desc: 'Candlelit seating with a menu shaped by the season.' },
      { time: '8:00 PM', title: 'The Courses', desc: 'Unhurried plates, each one paired with care.' },
      { time: '9:30 PM', title: 'The Finish', desc: 'Something sweet, a last pour and good conversation.' },
    ],
  },

  cta: {
    button: 'Reserve Your Evening',
    href: '#reservation',
  },

  /* Not shown in the current design (kept here in case you want them back) */
  stats: [
    { value: 4, label: 'Seasonal Menus a Year' },
    { value: 7, label: 'Course Tasting Menu' },
    { value: 60, label: 'Intimate Seats' },
    { value: 100, suffix: '%', label: 'Seasonal Produce' },
  ],
  occasions: ['Date Nights', 'Anniversaries', 'Private Dining', 'Business Dinners'],
};

const FEATURE_ICONS = { leaf: Leaf, chef: ChefHat, bell: ConciergeBell };

/* Zigzag layout per moment (desktop) */
const ROW_LAYOUT = [
  {
    side: 'right',
    row: '',
    image: 'lg:col-span-7 lg:col-start-1',
    caption: 'lg:col-span-4 lg:col-start-9',
    aspect: 'aspect-[2/1]',
    from: 'left',
  },
  {
    side: 'left',
    row: 'lg:-mt-14 relative z-10',
    image: 'lg:col-span-7 lg:col-start-6',
    caption: 'lg:col-span-4 lg:col-start-1',
    aspect: 'aspect-[16/9]',
    from: 'right',
  },
  {
    side: 'right',
    row: 'lg:mt-8',
    image: 'lg:col-span-8 lg:col-start-1',
    caption: 'lg:col-span-3 lg:col-start-10',
    aspect: 'aspect-[5/2]',
    from: 'left',
  },
];

/* ---------- motion helpers ---------- */

const Fade = ({ children, delay = 0, y = 30, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '0px 0px -8% 0px' }}
    transition={{ duration: 1.1, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

const Line = ({ className = '', delay = 0 }) => (
  <motion.span
    className={`block origin-left ${className}`}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.3, delay, ease: EASE }}
  />
);

const MaskLine = ({ children, delay = 0, className = '' }) => (
  <span className="block overflow-hidden pt-4 pb-2 -mt-4 -mb-2">
    <motion.span
      className={`block ${className}`}
      initial={{ y: '115%', rotate: 2 }}
      whileInView={{ y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

/* Photo frame: wipes in from the side, scroll parallax, hover zoom */
function PhotoFrame({ src, alt, aspect, from = 'left', className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const hidden = from === 'left' ? 'inset(0% 100% 0% 0%)' : 'inset(0% 0% 0% 100%)';

  return (
    <motion.figure
      ref={ref}
      className={`group relative overflow-hidden bg-[#141413] border border-[#C5A46D]/30 hover:border-[#C5A46D]/70 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] transition-colors duration-700 ${aspect} ${className}`}
      initial={{ opacity: 0, clipPath: hidden }}
      whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 1.6, ease: EASE }}
    >
      <motion.div className="absolute inset-[-10%]" style={{ y }}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/40 via-transparent to-transparent pointer-events-none" />
    </motion.figure>
  );
}

function MomentCaption({ item, side, className = '' }) {
  const fromX = side === 'right' ? 40 : -40;
  const indent = side === 'right' ? 'lg:ml-14' : '';

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
    >
      <div className="flex items-center gap-4 mb-4">
        {side === 'right' && (
          <Line className="hidden lg:block w-10 shrink-0 h-px bg-[#C5A46D]/60" delay={0.7} />
        )}
        <h4 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-[#F4F0E8] leading-tight whitespace-nowrap">
          {item.title}
        </h4>
        {side === 'left' && (
          <Line className="hidden lg:block flex-1 h-px bg-[#C5A46D]/60" delay={0.7} />
        )}
      </div>

      <p
        className={`text-sm md:text-base text-[#A8A39A] font-sans font-light leading-[1.8] max-w-[18rem] ${indent}`}
      >
        {item.desc}
      </p>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const data = EXPERIENCE_DATA;

  const handleCta = (e) => {
    e.preventDefault();
    const target = document.querySelector(data.cta.href);
    if (!target) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(target, { offset: -60, duration: 1.2 });
    else target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="experience"
        className="relative py-28 lg:py-40 bg-[#0B0B0A] text-[#F4F0E8] overflow-hidden"
      >




        
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 z-0">

          
          <div className="absolute -top-20 right-[10%] w-[600px] h-[600px] rounded-full bg-[#C5A46D]/[0.05] blur-[140px]" />
          <div className="absolute bottom-1/4 left-[5%] w-[500px] h-[500px] rounded-full bg-[#8C6D3B]/[0.04] blur-[130px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(11,11,10,0.8)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          {/* ============ TOP — Eyebrow, heading, quote ============ */}

          
          <div className="mb-20 md:mb-28">
            <Fade className="flex items-center gap-3 mb-8">
              <span className="w-1 h-1 rotate-45 bg-[#C5A46D]" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A46D] font-sans font-medium">
                {data.label}
              </span>
              <Line className="w-8 h-px bg-[#C5A46D]/70" delay={0.3} />
            </Fade>

            <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl font-light uppercase tracking-[0.02em] text-[#F4F0E8] leading-[0.95] mb-8">
              <MaskLine delay={0.1}>{data.headingLines[0]}</MaskLine>
              <MaskLine delay={0.25} className="italic normal-case tracking-normal text-[#C5A46D]">
                {data.headingLines[1]}
              </MaskLine>
            </h2>

            <Fade delay={0.4}>
              <p className="text-sm md:text-[15px] text-[#F4F0E8]/80 font-sans font-light leading-[1.8] max-w-md">
                {data.quote}
              </p>
            </Fade>
          </div>





          {/* ============ MOMENTS — zigzag photos with captions ============ */}
          <div className="space-y-12 lg:space-y-0 mb-24 md:mb-32">
            {data.moments.map((item, i) => {
              const L = ROW_LAYOUT[i];
              return (
                <div
                  key={item.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-0 ${L.row}`}
                >
                  <div className={`lg:row-start-1 ${L.image}`}>
                    <PhotoFrame src={item.image} alt={item.alt} aspect={L.aspect} from={L.from} />
                  </div>
                  <MomentCaption
                    item={item}
                    side={L.side}
                    className={`lg:row-start-1 ${L.caption}`}
                  />
                </div>
              );
            })}
          </div>

        

          {/* ============ AN EVENING AT LUMIÈRE — timeline ============ */}
          <div className="mb-20 md:mb-28">
            <Fade className="flex items-center gap-3 mb-12 md:mb-16">
              <span className="w-1 h-1 rotate-45 bg-[#C5A46D]" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A46D] font-sans font-medium">
                {data.evening.label}
              </span>
            </Fade>

            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
              {/* Line draws across (desktop) */}
              <Line className="hidden md:block absolute top-[5px] left-0 right-0 h-px bg-gradient-to-r from-[#C5A46D] via-[#C5A46D]/50 to-[#C5A46D]/10" />

              {data.evening.steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  className="group relative pl-7 md:pl-0 md:pt-10 border-l border-[#C5A46D]/25 md:border-l-0"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -8% 0px' }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.18, ease: EASE }}
                >
                  <motion.span
                    className="absolute w-[11px] h-[11px] bg-[#0B0B0A] border border-[#C5A46D] shadow-[0_0_14px_rgba(197,164,109,0.6)] -left-[6px] top-1 md:left-0 md:top-0 group-hover:bg-[#C5A46D] transition-colors duration-500"
                    initial={{ scale: 0, rotate: 45 }}
                    whileInView={{ scale: 1, rotate: 45 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.4 + i * 0.18 }}
                  />

                  <span className="block text-[10px] uppercase tracking-[0.35em] text-[#C5A46D] font-sans mb-3">
                    {step.time}
                  </span>
                  <h4 className="font-serif text-xl md:text-2xl text-[#F4F0E8] group-hover:text-[#C5A46D] transition-colors duration-500 mb-2 leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-xs md:text-[13px] text-[#A8A39A] font-sans font-light leading-[1.8] max-w-[16rem]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ============ CTA — boxed button between two lines ============ */}
          <div className="flex items-center justify-center gap-5 md:gap-8">
            <Line className="flex-1 max-w-[16rem] h-px bg-gradient-to-r from-transparent to-[#C5A46D]/60" />

            <Fade delay={0.2}>
              <motion.a
                href={data.cta.href}
                onClick={handleCta}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-4 px-8 md:px-10 py-3.5 overflow-hidden border border-[#C5A46D]/60 hover:border-[#C5A46D] text-[10px] md:text-[11px] tracking-[0.32em] uppercase font-sans text-[#F4F0E8] transition-colors duration-500 whitespace-nowrap"
              >
                <span className="absolute inset-0 bg-gradient-to-b from-[#D9BC86] to-[#C5A46D] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <span className="relative z-10 group-hover:text-[#0B0B0A] transition-colors duration-500">
                  {data.cta.button}
                </span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D] group-hover:text-[#0B0B0A] transition-colors duration-500" />
                </motion.span>
              </motion.a>
            </Fade>

            <Line className="flex-1 max-w-[16rem] h-px bg-gradient-to-l from-transparent to-[#C5A46D]/60 origin-right" />
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}