"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// The user uploaded 15 photos named photo1.jpeg through photo16.jpeg (skipping photo11.jpeg)
const photoFiles = [
  'photo1.jpeg', 'photo2.jpeg', 'photo3.jpeg', 'photo4.jpeg', 
  'photo5.jpeg', 'photo6.jpeg', 'photo7.jpeg', 'photo8.jpeg', 
  'photo9.jpeg', 'photo10.jpeg', 'photo12.jpeg', 'photo13.jpeg', 
  'photo14.jpeg', 'photo15.jpeg', 'photo16.jpeg'
];

const photos = photoFiles.map((filename, i) => ({
  id: i + 1,
  src: `/${filename}`,
  alt: `Beautiful memory ${i + 1}`,
  // Random slight rotations for a natural polaroid stack look
  rotation: Math.random() * 6 - 3,
}));

export default function PhotoGallery() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 0, 
              zIndex: 10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            style={{ 
              rotate: `${photo.rotation}deg`,
              transformOrigin: 'center center'
            }}
            className="relative bg-white p-4 pb-16 md:pb-20 rounded-md shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm">
              {/* Fallback styling in case image doesn't exist yet */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm font-montserrat">
                {photo.src.replace('/', '')}
              </div>
              
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
                onError={(e) => {
                  // Hide broken image icon if file doesn't exist yet, letting the fallback show
                  (e.target as HTMLImageElement).style.opacity = '0';
                }}
                onLoad={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '1';
                }}
              />
            </div>
            
            {/* Polaroid tape effect */}
            <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 backdrop-blur-sm shadow-sm rotate-2 z-20"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
