import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from 'framer-motion';




// ===== About images (direct import) =====
import imgMain from '../assets/about-img/main.jpg';
import imgChef from '../assets/about-img/top.jpg';
import imgDish from '../assets/about-img/bottom.jpg';

import imgSign from '../assets/about-img/sign.jpg';
import imgGlass from '../assets/about-img/glass.jpg';
import imgLeaf from '../assets/about-img/leaf.jpg';



const GOLD = '#C5A46D';
const EASE = [0.22, 1, 0.36, 1];

const details = [
  { id: '01', label: 'OUR ORIGIN', text: 'A journey that started with a passion for fine dining.' },
  { id: '02', label: 'OUR PHILOSOPHY', text: 'Seasonal ingredients, European techniques, modern soul.' },
  { id: '03', label: 'THE EXPERIENCE', text: 'Exceptional food, warm atmosphere, and genuine hospitality.' },
];

/* ---------- small motion helpers ---------- */

const Reveal = ({ children, delay = 0, y = 30, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, filter: 'blur(6px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    transition={{ duration: 1, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

const Line = ({ className = '', style, delay = 0 }) => (
  <motion.span
    className={`block origin-left ${className}`}
    style={style}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.3, delay, ease: EASE }}
  />
);

const MaskLine = ({ children, delay = 0, className = '' }) => (
  <span className="block overflow-hidden pt-3 pb-1 -mt-3">
    <motion.span
      className={`block ${className}`}
      initial={{ y: '115%', rotate: 3 }}
      whileInView={{ y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

/* Mouse + scroll parallax wrapper */
function Layer({ mx, my, progress, depth = 20, scrollAmt = 40, rotate = 0, className = '', zIndex = 1, children }) {
  const x = useTransform(mx, (v) => v * depth * 2);
  const y = useTransform([my, progress], ([m, p]) => m * depth * 2 + (0.5 - p) * scrollAmt * 2);
  return (
    <motion.div className={`absolute ${className}`} style={{ x, y, rotate, zIndex }}>
      {children}
    </motion.div>
  );
}

/* Image frame: entrance reveal + idle float + inner scroll parallax + hover */
function Frame({ src, alt = '', progress, delay = 0, float = 0, floatDur = 6, gray = false }) {
  const imgY = useTransform(progress, [0, 1], ['-7%', '7%']);
  return (
    <motion.div
      className="w-full h-full"
      animate={float ? { y: [0, -float, 0] } : undefined}
      transition={float ? { duration: floatDur, repeat: Infinity, ease: 'easeInOut' } : undefined}
    >
      <motion.div
        className="group relative w-full h-full overflow-hidden bg-[#151513] shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-shadow duration-700 hover:shadow-[0_0_60px_rgba(197,164,109,0.3)]"
        style={{ border: `1px solid ${GOLD}80` }}
        initial={{ opacity: 0, y: 90, scale: 0.9, clipPath: 'inset(100% 0% 0% 0%)' }}
        whileInView={{ opacity: 1, y: 0, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        transition={{ duration: 1.5, delay, ease: EASE }}
      >
        <motion.div className="absolute inset-[-8%]" style={{ y: imgY }}>
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-[1400ms] ease-out group-hover:scale-110 ${
              gray ? 'grayscale contrast-110 group-hover:grayscale-0' : ''
            }`}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        {/* light sweep on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1400ms] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}

/* ---------- main component ---------- */

export default function AboutSection() {
  const sectionRef = useRef(null);

const main = imgMain;        // Big center collage → 1.jpg
const chef = imgChef;        // Top-right B&W → ash.jpg
const dish = imgDish;        // Bottom-left dish → lumier_3_sign1.jpg
const sign = imgSign;      // Small image 1 → middle.jpg
const glass = imgGlass;       // Small image 2 → 1.jpg (repeat)
const leaf = imgLeaf;        // Small image 3 → lumier_3_sign1.jpg (repeat)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  // mouse parallax (-0.5 .. 0.5), smoothed
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 50, damping: 18 });
  const my = useSpring(rawY, { stiffness: 50, damping: 18 });

  const onMove = (e) => {
    const r = sectionRef.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const quoteLines = [
    { words: ['Good', 'food'], indent: '' },
    { words: ['deserves'], indent: 'ml-8' },
    { words: ['good', 'company.'], indent: 'ml-16' },
  ];

  const stripVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } },
  };
  const stripItem = {
    hidden: { opacity: 0, y: 50, clipPath: 'inset(100% 0% 0% 0%)' },
    show: { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1.1, ease: EASE } },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative overflow-hidden bg-[#0B0B0A] text-[#F4F0E8] py-24 lg:py-32"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');
        .about-script { font-family: 'Pinyon Script', cursive; }
        .about-display { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* ===== SIMPLE BACKGROUND: one soft glow + vignette ===== */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(50% 45% at 50% 45%, rgba(197,164,109,0.10) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.6) 100%)' }}
      />

      {/* ===== CONTENT (full width) ===== */}
      <div className="relative w-full px-6 md:px-12 lg:px-16 2xl:px-24">
        {/* top labels */}
        <div className="flex items-center justify-between mb-14 lg:mb-10 text-[10px] uppercase tracking-[0.35em] font-sans">
          <Reveal y={-15}>
            <div className="flex text-3xl items-center gap-4">
              <span>About</span>
              <Line className="h-px w-24" style={{ background: GOLD }} delay={0.3} />
            </div>
          </Reveal>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-6 items-start">
          {/* ---------- LEFT ---------- */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative">
              <motion.span
                className="about-script inline-block text-4xl sm:text-5xl -rotate-6 origin-left -mb-2 ml-1"
                style={{ color: GOLD }}
                initial={{ clipPath: 'inset(-30% 100% -30% 0%)', opacity: 0 }}
                whileInView={{ clipPath: 'inset(-30% -5% -30% 0%)', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              >
                The Story Behind
              </motion.span>
              <h2 className="about-display font-normal tracking-[0.02em] leading-none text-6xl sm:text-7xl xl:text-[5.5rem] text-[#F4F0E8]">
                <MaskLine delay={0.3}>LUMIÈRE</MaskLine>
              </h2>
            </div>

            <Reveal delay={0.5} className="mt-8">
              <p className="text-sm sm:text-[15px] tracking-[0.4em] uppercase font-sans font-light">More than a restaurant</p>
            </Reveal>

            <Reveal delay={0.2} className="mt-12">
              <p className="text-[13.5px] leading-[2] font-sans font-light text-[#F4F0E8]/80 max-w-xs">
                <span className="text-[#F4F0E8] font-normal">LUMIÈRE</span> is a celebration of food, people and moments. Our story began
                with a simple belief — that <span className="text-[#F4F0E8] font-normal">great food</span> brings people closer. Today, we
                continue to create meaningful dining experiences rooted in{' '}
                <span className="text-[#F4F0E8] font-normal">European tradition</span>, inspired by the seasons, and crafted with care.
              </p>
            </Reveal>

            <Line className="h-px w-14 mt-10 mb-10" style={{ background: GOLD }} />

            <div className="max-w-xs">
              {details.map((d, i) => (
                <motion.div
                  key={d.id}
                  className="relative flex gap-5 py-5 group cursor-default"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '0px 0px -8% 0px' }}
                  transition={{ duration: 1, delay: i * 0.15, ease: EASE }}
                  whileHover={{ x: 8 }}
                >
                  {i > 0 && <Line className="absolute top-0 left-0 right-0 h-px" style={{ background: `${GOLD}55` }} delay={i * 0.15} />}
                  <span className="about-display text-3xl font-normal leading-none transition-transform duration-500 group-hover:scale-110 origin-left" style={{ color: GOLD }}>
                    {d.id}
                  </span>
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.3em] font-sans mb-2">{d.label}</span>
                    <p className="text-xs leading-relaxed text-[#F4F0E8]/75 font-sans font-light">{d.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ---------- CENTER: collage ---------- */}
          <div className="lg:col-span-5 relative min-h-[560px] sm:min-h-[760px] lg:min-h-[820px]">
            <Layer mx={mx} my={my} progress={scrollYProgress} depth={10} scrollAmt={25} rotate={3} className="top-0 left-[10%] w-[78%] h-[78%]" zIndex={1}>
              <Frame src={main} alt="LUMIÈRE dining room" progress={scrollYProgress} delay={0} float={6} floatDur={8} />
            </Layer>

            <Layer mx={mx} my={my} progress={scrollYProgress} depth={30} scrollAmt={80} rotate={4} className="top-[-1%] right-[-2%] lg:right-[-3%] w-[34%] aspect-[4/5]" zIndex={3}>
              <Frame src={chef} alt="Chef plating" progress={scrollYProgress} delay={0.35} gray float={12} floatDur={6} />
            </Layer>

            <Layer mx={mx} my={my} progress={scrollYProgress} depth={22} scrollAmt={55} className="bottom-[8%] left-[-3%] lg:left-[-12%] w-[62%] aspect-[4/3]" zIndex={3}>
              <Frame src={dish} alt="Signature dish" progress={scrollYProgress} delay={0.6} float={10} floatDur={7} />
            </Layer>
          </div>

          {/* ---------- RIGHT ---------- */}
          <div className="lg:col-span-3 relative flex flex-col gap-10 lg:pl-14 lg:pt-10">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.4em] leading-[2.2] font-sans text-[#F4F0E8]/90">
                Fine Ingredients
                
              </p>
              <Line className="h-px w-12 mt-3" style={{ background: GOLD }} delay={0.4} />
            </Reveal>

            <div className="lg:mt-6">
              <h3 className="about-display italic text-[1.7rem] leading-snug text-[#F4F0E8] mb-5">
                <MaskLine delay={0.1}>Where European tradition</MaskLine>
                <MaskLine delay={0.25}>meets contemporary dining.</MaskLine>
              </h3>
              <Reveal delay={0.3}>
                <p className="text-[13px] leading-[1.95] font-sans font-light text-[#F4F0E8]/75">
                  At LUMIÈRE, we honor the rich heritage of European cuisine while embracing a modern approach to flavor, presentation
                  and hospitality. Every dish is a reflection of our commitment to quality, seasonality and the art of fine dining.
                </p>
              </Reveal>
            </div>

            {/* 3 small images */}
            <motion.div
              className="grid grid-cols-3 gap-2 relative"
              variants={stripVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            >
              {[sign, glass, leaf].map((src, i) => (
                <motion.div
                  key={i}
                  variants={stripItem}
                  whileHover={{ y: -10, scale: 1.04 }}
                  className="group relative aspect-[3/4] overflow-hidden"
                  style={{ border: `1px solid ${GOLD}55` }}
                >
                  <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-125" />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/0 transition-colors duration-700" />
                </motion.div>
              ))}
            </motion.div>

            {/* script quote, word by word */}
            <div className="mt-2">
              <p className="about-script text-4xl sm:text-5xl leading-[1.05] -rotate-6 origin-left" style={{ color: GOLD }}>
                {quoteLines.map((line, li) => (
                  <span key={li} className={`block ${line.indent}`}>
                    {line.words.map((w, wi) => (
                      <motion.span
                        key={wi}
                        className="inline-block mr-3"
                        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: li * 0.35 + wi * 0.18, ease: EASE }}
                      >
                        {w}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </p>
              <Reveal delay={1.1}>
                <p className="mt-8 ml-10 text-[10px] tracking-[0.35em] uppercase font-sans" style={{ color: GOLD }}>
                  LUMIÈRE — Est. 2012
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}