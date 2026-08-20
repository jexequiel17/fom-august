import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw } from 'lucide-react';

// 1. FIXED: Moved outside the component so it doesn't recreate on every render
const DEFAULT_PHOTOS = [
  {
    images: [
      { url: "/images/IMG-20231224-WA0000.jpg" },
      { url: "/images/IMG_20260726_160231.jpg"},
      { url: "/images/Image_20260308_213604_045.jpeg" }
    ]
  },
  {
    images: [
      { url: "/images/IMG-20240303-WA0004.jpg" },
      { url: "/images/FB_IMG_1785405256578.jpg" },
      { url: "/images/FB_IMG_1785516058980.jpg" }
    ]
  },
  {
    images: [
      { url: "/images/FB_IMG_1785515357143.jpg" },
      { url: "/images/Messenger_creation_C2A35D79-54F3-497B-A3B5-6DFDC5D5720B.jpeg" },
      { url: "/images/Messenger_creation_978571130354145.jpeg" }
    ]
  }
];

export default function PhotoGallery({ photos = [] }) {
  // 2. FIXED: useMemo ensures this array stays completely stable between renders
  const displayPhotos = useMemo(() => {
    return photos.length > 0 ? photos : DEFAULT_PHOTOS;
  }, [photos]);

  const [activeIndices, setActiveIndices] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Automatically cycle photos every 4 seconds for each card
  useEffect(() => {
    const intervals = displayPhotos.map((item, index) => {
      const imagesList = item.images || [{ url: item.url}];
      if (imagesList.length <= 1) return null;

      return setInterval(() => {
        setActiveIndices(prev => {
          const currentIndex = prev[index] || 0;
          const nextIndex = (currentIndex + 1) % imagesList.length;
          return { ...prev, [index]: nextIndex };
        });
      }, 4000 + index * 500); // Intervals: 4000ms, 4500ms, 5000ms
    });

    return () => {
      intervals.forEach(interval => interval && clearInterval(interval));
    };
  }, [displayPhotos]);

  const handleCardClick = (item, currentImgIdx) => {
    const imagesList = item.images || [{ url: item.url }];
    const currentPhoto = imagesList[currentImgIdx];
    
    setSelectedPhoto({
      url: currentPhoto.url,
    });
  };

  return (
    <div className="bg-[#FFFDF9] border-4 md:border-8 border-[#3D1E6D] p-6 md:p-10 relative shadow-2xl overflow-hidden font-sans w-full">
      {/* Decorative background elements */}
      <div className="absolute top-4 right-8 text-pink-300 text-2xl rotate-12 select-none pointer-events-none opacity-60">❤️</div>
      <div className="absolute top-32 left-2 text-amber-300 text-xl -rotate-12 select-none pointer-events-none opacity-60">⭐</div>
      <div className="absolute bottom-16 right-12 text-sky-300 text-2xl rotate-45 select-none pointer-events-none opacity-60">✨</div>
      <div className="absolute bottom-32 left-6 text-purple-300 text-xl -rotate-12 select-none pointer-events-none opacity-60">🌸</div>

      <div className="relative z-10 space-y-6">
        <div className="mb-8 border-b-2 border-[#3D1E6D]/20 pb-4 relative">
          <span className="absolute -top-3 right-2 text-xs font-bold text-pink-500 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200 rotate-3">
            ✏️ hand-drawn vibes
          </span>

          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-[#00B4D8] font-extrabold text-3xl md:text-4xl italic" style={{ fontFamily: 'Caveat, cursive' }}>
              Polaroid
            </span>
            <span className="text-3xl md:text-4xl font-black uppercase text-[#3D1E6D] tracking-tight">
              VAULT & CORE MEMORIES
            </span>
          </div>
          <p className="text-slate-500 font-medium text-xs mt-1 uppercase tracking-wider flex items-center gap-1.5 flex-wrap">
            <span>Captured moments & scrapbooked memories (auto-cycling)</span>
            <span className="text-pink-500 font-bold bg-pink-100 px-1.5 py-0.5 rounded text-[10px]">(Click any card to open large modal view!)</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-4">
          {displayPhotos.map((item, index) => {
            const bgColors = ['bg-[#fef9c3]', 'bg-[#e0f2fe]', 'bg-[#fce7f3]', 'bg-[#faedcd]'];
            const borderColors = ['border-yellow-400', 'border-sky-300', 'border-pink-300', 'border-[#d4a373]'];
            const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2'];
            
            const cardBg = bgColors[index % bgColors.length];
            const cardBorder = borderColors[index % borderColors.length];
            const cardRotation = rotations[index % rotations.length];

            const imagesList = item.images || [{ url: item.url}];
            const currentImgIdx = activeIndices[index] || 0;
            const currentPhoto = imagesList[currentImgIdx];

            return (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.03, rotate: 0 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCardClick(item, currentImgIdx)}
                className={`${cardBg} border-2 ${cardBorder} ${cardRotation} p-4 pb-6 rounded-xl shadow-md transition-all duration-300 relative cursor-pointer group select-none flex flex-col`}
                title="Click to view larger in modal!"
              >
                {/* Washi tape sticker */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-pink-300/80 rotate-1 shadow-xs border border-pink-400 rounded-sm flex items-center justify-center z-10">
                  <span className="text-[9px] font-bold text-pink-900 tracking-wider">CLICK TO ZOOM 🔍</span>
                </div>

                {/* Photo frame container */}
                <div className="w-full aspect-[3/4] bg-slate-900 overflow-hidden rounded-md border border-slate-200 mb-3 shadow-inner relative flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentImgIdx}
                      src={currentPhoto.url} 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover absolute inset-0" 
                    />
                  </AnimatePresence>

                  {/* Counter badge showing image position */}
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 z-10">
                    <RefreshCw size={9} />
                    <span>{currentImgIdx + 1} / {imagesList.length}</span>
                  </div>
                </div>
                
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Extra Large Scrapbook Modal Viewer */}
      <AnimatePresence>
        {selectedPhoto && (
          <div 
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 md:p-8" 
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, rotate: -1 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-[#fefae0] border-4 md:border-6 border-[#3D1E6D] rounded-3xl p-6 md:p-10 shadow-2xl" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Washi Tape element */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-44 h-7 bg-pink-400/90 text-white text-xs md:text-sm flex items-center justify-center font-bold rounded-sm shadow-sm rotate-1 tracking-widest uppercase">
                ✨ MEMORIES ✨
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedPhoto(null)} 
                className="absolute -top-4 -right-4 bg-[#3D1E6D] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl z-30 cursor-pointer shadow-xl hover:bg-pink-600 transition-colors"
              >
                ✕
              </button>

              {/* Extra Large Inner Photo Frame */}
              <div className="w-full h-[68vh] bg-slate-900 p-2 md:p-4 rounded-2xl border-2 border-dashed border-[#3D1E6D]/30 shadow-inner flex items-center justify-center overflow-hidden mb-4 relative">
                <img src={selectedPhoto.url} alt="Enlarged View" className="w-full h-full object-contain rounded-lg shadow-sm" />
                <span className="absolute bottom-4 right-4 text-pink-300/80 text-xl select-none z-10">✏️💖</span>
              </div>

              {/* Caption & Subtitle */}
              <div className="text-center">
                <p className="font-black text-[#3D1E6D]" style={{ fontFamily: 'Caveat, cursive', fontSize: '2.2rem' }}>
                  {selectedPhoto.caption}
                </p>
                {selectedPhoto.subtitle && (
                  <p className="text-slate-600 italic -mt-1" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
                    "{selectedPhoto.subtitle}"
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}