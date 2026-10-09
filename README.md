# LUMIÈRE — Modern European Restaurant & Fine Dining Experience

> **Location:** Birmingham, UK  
> **Cuisine:** Modern European  
> **Visual Identity:** Luxury, Editorial, Cinematic, Awwwards-Level Campaign Website  

---

## ✦ Overview

**LUMIÈRE** is a high-end restaurant website sales demo built for UK restaurant owners and luxury hospitality client acquisitions. Moving away from generic restaurant templates, ecommerce grids, and white card designs, **LUMIÈRE** delivers an editorial campaign experience with oversized typography, cinematic image transformations, scroll-driven reveals, and seamless micro-interactions.

---

## 🛠️ Technologies & Core Libraries Used

### 1. **React 19**
- Component-driven architecture using functional components and custom React hooks.
- Client-side navigation between the landing experience (`Home`) and the standalone dedicated menu (`MenuPage`).

### 2. **Vite 8**
- Lightning-fast dev server with Hot Module Replacement (HMR).
- Optimized production bundling with CSS minification and asset processing.

### 3. **Tailwind CSS v4**
- Modern utility-first CSS framework configured with custom dark theme colors (`#0B0B0A`, `#151513`, `#C5A46D`, `#F4F0E8`).
- High-contrast typography stack (`Cormorant Garamond` serif and `Inter` sans-serif).
- Custom background noise overlays and custom scrollbars.

### 4. **GSAP (GreenSock Animation Platform) & ScrollTrigger**
- **Cinematic Scroll Reveals**: Image clip-path mask reveals (`clipPath: 'inset(100% 0% 0% 0%)'`).
- **Text & Section Choreography**: Line-by-line staggered text reveals, clip reveals, and smooth opacity transitions.
- **GSAP Ticker Integration**: Synchronized with Lenis smooth scroll ticker for lag-free performance.

### 5. **Framer Motion**
- **Dish Detail Overlay**: Smooth full-screen modal backdrop fade and scale transitions (`AnimatePresence`).
- **Gallery Lightbox Slideshow**: Animated full-screen image modal with slide controls and counters.
- **Mobile Menu Overlay**: Drawer entrance/exit animations.
- **Category Nav Highlights**: Interactive tab badges and micro-interaction spring physics.

### 6. **Lenis Scroll**
- Global smooth momentum scrolling across desktop and mobile devices.
- Seamlessly linked with GSAP ScrollTrigger updates to prevent jitter or scroll jumping.

### 7. **Lucide React**
- Clean, minimal icons (`Calendar`, `Clock`, `Users`, `ArrowRight`, `ArrowLeft`, `Mail`, `Phone`, `MapPin`, `X`, `ChevronLeft`, `ChevronRight`, `Sparkles`, `Maximize2`).

---

## ✦ Key Features & Component Systems

### 1. **Header & Navigation (`Navbar.jsx`)**
- Glassmorphic top header bar with backdrop blur (`backdrop-blur-md`).
- Desktop navigation links with animated underline hover effects.
- Full-screen mobile navigation drawer with Framer Motion stagger effects.
- Direct quick-action `REQUEST A TABLE` CTA.

### 2. **Cinematic Hero (`Hero.jsx`)**
- Full-screen HTML5 video background with fallback imagery.
- Staggered serif typography reveal (`LUMIÈRE — Modern European Dining`).
- Smooth scroll indicator with animated diamond accents (`✦`).

### 3. **Editorial Story (`AboutSection.jsx`)**
- 12-column asymmetric editorial layout showcasing LUMIÈRE's culinary philosophy.
- Multi-photo composition with gold hairline borders and hover scale effects.

### 4. **"LUMIÈRE — The Living Menu" (`MenuSection.jsx` & `MenuPage.jsx`)**
- **Home Menu Section**: Features an interactive 12-column editorial preview. Hovering over signature dish titles updates the large featured dish photo in real-time.
- **Dedicated Menu Page (`MenuPage.jsx`)**:
  - Glassmorphic top navigation bar with luxury back-button pill and table booking button.
  - Sticky numbered category switcher (`01 STARTERS`, `02 MAINS`, `03 DESSERTS`) with live dish counts.
  - Alternating 12-column chapter layouts featuring cover photography, dish titles, prices, ingredients, and allergen tags (`GF`, `V`, `VE`).

### 5. **Interactive Dish Detail Overlay (`DishDetailOverlay.jsx`)**
- 55-45 split screen modal layout: high-resolution dish photography on the left, full ingredients, pricing, dietary allergens, and direct table request triggers on the right.
- Keyboard support (`Escape` key close) and scroll-locking.

### 6. **Executive Chef Spotlight (`ChefSection.jsx`)**
- 3-image composition highlighting Executive Chef Daniel Laurent.
- Center arch image with GSAP clip-path reveal, flanked by plating and kitchen detail photography.
- Fully responsive multi-column layout on desktop and single-column stacked flow on mobile.

### 7. **Interactive Atmosphere Gallery (`GallerySection.jsx`)**
- 8-image asymmetrical masonry grid showcasing restaurant ambiance, cocktails, table settings, and dining spaces.
- **Cinematic Lightbox Modal**: Full-screen image slideshow with keyboard navigation (`←`, `→`, `ESC`), image counter (`03 / 08`), title captions, and backdrop blur.

### 8. **Guest Testimonials (`TestimonialsSection.jsx`)**
- Editorial review cards highlighting guest feedback, locations, and featured dishes.

### 9. **Interactive Table Reservation (`ReservationSection.jsx`)**
- Full table booking form featuring date picker, time selector, guest count, and special request field.
- **WhatsApp & Email Integration**: Form submission formats and sends complete booking details directly to WhatsApp (`https://wa.me/`) or generates a pre-formatted email mailto link.

### 10. **Location & Contact (`VisitSection.jsx` & `Footer.jsx`)**
- Opening hours schedule, location details in St Paul's Square, Birmingham, UK.
- Direct interactive Google Maps link and contact details.

---

## 🎨 Design System

| Element | Specification |
| :--- | :--- |
| **Primary Dark** | `#0B0B0A` |
| **Surface Dark** | `#151513` / `#080807` |
| **Gold Accent** | `#C5A46D` |
| **Gold Light** | `#D4B67E` |
| **Cream Text** | `#F4F0E8` |
| **Muted Text** | `#A8A39A` |
| **Serif Font** | `Cormorant Garamond` (Google Fonts) |
| **Sans Font** | `Inter` (Google Fonts) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation & Run Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

*LUMIÈRE — Modern European Restaurant | Birmingham, UK*
