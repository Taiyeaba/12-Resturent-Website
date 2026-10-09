// Local Asset Imports
import heroFallbackImg from '../assets/images/hero-fallback.jpg';
import mblHeroFallbackImg from '../assets/images/mbl-hero-fallback.jpg';
import aboutImg from '../assets/images/about.jpg';
import chefImg from '../assets/images/chef.jpg';

// Dedicated Menu Folder Asset Imports
import starter1Img from '../assets/menu/starter1.jpg';
import starter2Img from '../assets/menu/starter2.jpg';
import starter3Img from '../assets/menu/starter3.jpg';
import starter23Img from '../assets/menu/starter23.jpg';
import starteryImg from '../assets/menu/startery.jpg';

import maindishImg from '../assets/menu/maindish.jpg';
import main1Img from '../assets/menu/main1.jpg';
import main3Img from '../assets/menu/main3.jpg';
import main66Img from '../assets/menu/main66.jpg';
import main88Img from '../assets/menu/main88.jpg';
import main99Img from '../assets/menu/main99.jpg';

import dessert1Img from '../assets/menu/dessert1.jpg';
import dessert21Img from '../assets/menu/dessert21.jpg';
import dessert9Img from '../assets/menu/dessert9.jpg';
import dessert90Img from '../assets/menu/dessert90.jpg';
import dessertttImg from '../assets/menu/desserttt.jpg';

import heroVideo from '../assets/video/hero.mp4';
import mblHeroVideo from '../assets/video/hero-fallback.mp4';

export const restaurantConfig = {
  name: 'LUMIÈRE',
  tagline: 'Modern European Dining',
  subtitle: 'Modern Dining. Thoughtfully Crafted.',
  description: 'An intimate dining experience where seasonal ingredients, refined technique and contemporary European flavours come together.',
  
  contact: {
    address: "24 St Paul's Square",
    city: 'Birmingham, UK',
    postcode: 'B3 1RB',
    phone: '+44 121 000 0000',
    displayPhone: '+44 (0) 121 000 0000',
    email: 'hello@lumiere-birmingham.co.uk',
    whatsappNumber: '441210000000', // International format without +
    googleMapsUrl: 'https://maps.google.com/?q=24+St+Paul%27s+Square,+Birmingham,+UK'
  },

  hours: [
    { days: 'MONDAY — THURSDAY', time: '17:30 — 22:30' },
    { days: 'FRIDAY — SATURDAY', time: '17:30 — 23:00' },
    { days: 'SUNDAY', time: 'CLOSED' }
  ],

  navLinks: [
    { label: 'ABOUT', href: '#about' },
    { label: 'MENU', href: '#menu' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'VISIT', href: '#visit' }
  ],

  assets: {
    heroVideo,
    mblHeroVideo,
    heroFallback: heroFallbackImg,
    mblHeroFallback: mblHeroFallbackImg,
    about: aboutImg,
    chef: chefImg
  },

  about: {
    title: 'A TABLE WORTH REMEMBERING',
    body: 'LUMIÈRE is a contemporary European restaurant in the heart of Birmingham, bringing together seasonal ingredients, thoughtful cooking and an atmosphere designed for lingering evenings.',
    highlights: [
      { id: '01', title: 'SEASONAL MENU', desc: 'Sourced from the finest regional UK suppliers and European markets.' },
      { id: '02', title: 'BIRMINGHAM', desc: 'Located in the historic and elegant St Paul\'s Square.' },
      { id: '03', title: 'DINNER & PRIVATE DINING', desc: 'Tailored dining experiences for intimate moments and gatherings.' }
    ]
  },

  // Centralized Premium Fine-Dining Menu Architecture
  menu: {
    header: {
      eyebrow: '✦ THE MENU ✦',
      title: 'OUR MENU',
      tagline: 'Seasonal European · Crafted Daily'
    },
    categories: [
      {
        id: 'starters',
        name: 'STARTERS',
        dishCountLabel: '6 DISHES',
        tagline: 'Seasonal beginnings, prepared with precision.',
        coverImage: starter1Img,
        dishes: [
          {
            id: 'scallops',
            name: 'Seared Scallops',
            description: 'cauliflower purée · caviar · yuzu',
            price: '£18',
            image: starter1Img,
            allergens: ['GF', 'SF'],
            signature: true
          },
          {
            id: 'beef-carpaccio',
            name: 'Passion Fruit Mojito',
            description: 'passion fruit · lime · fresh mint · crushed ice',
            price: '£12',
            image: starter2Img,
            allergens: ['GF'],
            signature: true
          },
          {
            id: 'burrata',
            name: 'Burrata',
            description: 'heritage tomato · basil oil · sea salt',
            price: '£14',
            image: starter3Img,
            allergens: ['V'],
            signature: false
          },
          {
            id: 'mushroom-arancini',
            name: 'Wild Mushroom Arancini',
            description: 'black truffle · parmesan · herbs',
            price: '£12',
            image: starter23Img,
            allergens: ['V'],
            signature: false
          },
          {
            id: 'cured-salmon',
            name: 'Cured Salmon',
            description: 'dill · crème fraîche · pickled cucumber',
            price: '£15',
            image: starteryImg,
            allergens: ['GF'],
            signature: false
          },
          {
            id: 'artichoke-veloute',
            name: 'Jerusalem Artichoke Velouté',
            description: 'hazelnut · thyme · aged cheese',
            price: '£13',
            image: starter1Img,
            allergens: ['V'],
            signature: false
          }
        ]
      },
      {
        id: 'mains',
        name: 'MAINS',
        dishCountLabel: '6 DISHES',
        tagline: 'Refined mains · Land & sea',
        coverImage: maindishImg,
        dishes: [
          {
            id: 'sea-bass',
            name: 'Pan-Roasted Sea Bass',
            description: 'Brown Butter · Fennel · Lemon',
            price: '£24',
            image: maindishImg,
            allergens: ['GF'],
            signature: true
          },
          {
            id: 'duck-breast',
            name: 'Roasted Duck Breast',
            description: 'celeriac · blackberry · red wine jus',
            price: '£34',
            image: main1Img,
            allergens: ['GF'],
            signature: false
          },
          {
            id: 'beef-tenderloin',
            name: 'Beef Tenderloin',
            description: 'wild mushroom · shallot · bordelaise',
            price: '£38',
            image: main3Img,
            allergens: ['GF'],
            signature: true
          },
          {
            id: 'truffle-risotto',
            name: 'Truffle Risotto',
            description: 'wild mushroom · parmesan · aged balsamic',
            price: '£26',
            image: main66Img,
            allergens: ['V', 'GF'],
            signature: false
          },
          {
            id: 'lamb',
            name: 'Herb-Crusted Lamb',
            description: 'roasted roots · rosemary · jus',
            price: '£30',
            image: main88Img,
            allergens: [],
            signature: false
          },
          {
            id: 'cauliflower',
            name: 'Roasted Cauliflower',
            description: 'almond cream · herbs · smoked butter',
            price: '£22',
            image: main99Img,
            allergens: ['V', 'VE'],
            signature: false
          }
        ]
      },
      {
        id: 'desserts',
        name: 'DESSERTS',
        dishCountLabel: '5 DISHES',
        tagline: 'Sweet endings · Modern artistry',
        coverImage: dessertttImg,
        dishes: [
          {
            id: 'chocolate-fondant',
            name: 'Dark Chocolate Fondant',
            description: 'Vanilla · Raspberry',
            price: '£9',
            image: dessert1Img,
            allergens: ['V'],
            signature: true
          },
          {
            id: 'panna-cotta',
            name: 'Vanilla Panna Cotta',
            description: 'seasonal berries · basil · citrus',
            price: '£11',
            image: dessert21Img,
            allergens: ['GF'],
            signature: false
          },
          {
            id: 'lemon-tart',
            name: 'Lemon Tart',
            description: 'meringue · lemon curd · verbena',
            price: '£10',
            image: dessert9Img,
            allergens: ['V'],
            signature: false
          },
          {
            id: 'pear-almond',
            name: 'Pear & Almond',
            description: 'caramel · almond cream · vanilla',
            price: '£11',
            image: dessert90Img,
            allergens: ['V'],
            signature: false
          },
          {
            id: 'chocolate-souffle',
            name: 'Chocolate Soufflé',
            description: 'dark chocolate · vanilla ice cream',
            price: '£14',
            image: dessertttImg,
            allergens: ['V'],
            signature: true
          }
        ]
      }
    ]
  },

  experience: {
    title: 'MORE THAN DINNER',
    description: 'From intimate dinners to special celebrations, every detail at LUMIÈRE is designed to make the evening memorable.',
    statements: [
      { id: '01', title: 'SEASONAL INGREDIENTS', desc: 'Picked at their peak flavor profile.' },
      { id: '02', title: 'CONTEMPORARY EUROPEAN CUISINE', desc: 'Classic foundations reimagined with modern artistry.' },
      { id: '03', title: 'INTIMATE DINING', desc: 'Thoughtfully lit spaces designed for meaningful connection.' }
    ]
  },

  chef: {
    name: 'Chef Daniel Laurent',
    title: 'Executive Chef & Creative Director',
    quote: 'Great food begins with exceptional ingredients.',
    text: 'Our kitchen follows the rhythm of the seasons, combining classic European foundations with a modern approach to flavour and presentation.',
    image: chefImg
  },

  testimonials: [
    {
      quote: "The food was outstanding, truly a culinary delight that I would highly recommend to others.",
      author: "Sarah Mitchell",
      location: "Birmingham",
      dish: "Seared Scallops",
      image: starter1Img,
    },
    {
      quote: "The dining experience was truly exceptional, thanks to the incredible food served.",
      author: "James Chen",
      location: "London",
      dish: "Pan-Seared Sea Bass",
      image: maindishImg,
    },
    {
      quote: "Every detail was considered — from the ambience to the plate. A truly memorable evening.",
      author: "Emma Wright",
      location: "Manchester",
      dish: "Chocolate Soufflé",
      image: dessert1Img,
    },
  ],

  reservationOptions: {
    times: [
      '5:30 PM',
      '6:00 PM',
      '6:30 PM',
      '7:00 PM',
      '7:30 PM',
      '8:00 PM',
      '8:30 PM',
      '9:00 PM'
    ],
    guests: ['1', '2', '3', '4', '5', '6+']
  }
};
