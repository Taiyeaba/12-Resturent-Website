import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgDir = path.join(__dirname, 'src', 'assets', 'images');
const videoDir = path.join(__dirname, 'src', 'assets', 'video');

if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

const assets = [
  {
    path: path.join(imgDir, 'hero-fallback.jpg'),
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop'
  },
  {
    path: path.join(imgDir, 'about.jpg'),
    url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    path: path.join(imgDir, 'menu-01.jpg'),
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'
  },
  {
    path: path.join(imgDir, 'menu-02.jpg'),
    url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop'
  },
  {
    path: path.join(imgDir, 'menu-03.jpg'),
    url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop'
  },
  {
    path: path.join(imgDir, 'menu-04.jpg'),
    url: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop'
  },
  {
    path: path.join(imgDir, 'menu-05.jpg'),
    url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop'
  },
  {
    path: path.join(imgDir, 'menu-06.jpg'),
    url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop'
  },
  {
    path: path.join(imgDir, 'gallery-01.jpg'),
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop'
  },
  {
    path: path.join(imgDir, 'gallery-02.jpg'),
    url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    path: path.join(imgDir, 'gallery-03.jpg'),
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    path: path.join(imgDir, 'gallery-04.jpg'),
    url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop'
  },
  {
    path: path.join(imgDir, 'gallery-05.jpg'),
    url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    path: path.join(imgDir, 'chef.jpg'),
    url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop'
  },
  {
    path: path.join(videoDir, 'hero.mp4'),
    url: 'https://cdn.coverr.co/videos/coverr-chef-preparing-a-gourmet-dish-5394/1080p.mp4'
  }
];

async function download() {
  for (const item of assets) {
    console.log(`Downloading ${path.basename(item.path)}...`);
    try {
      const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      fs.writeFileSync(item.path, Buffer.from(arrayBuffer));
      console.log(`Saved ${path.basename(item.path)} (${(arrayBuffer.byteLength / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Failed to download ${path.basename(item.path)}:`, err.message);
    }
  }
}

download();
