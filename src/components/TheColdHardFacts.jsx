import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Calendar, GraduationCap } from 'lucide-react';

export default function TheColdHardFacts() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#FFFDF9] border-4 md:border-8 border-[#3D1E6D] p-6 md:p-10 relative shadow-2xl overflow-hidden font-sans w-full"
    >
      {/* Cute Background Floating Doodles */}
      <div className="absolute top-4 right-8 text-pink-300 text-2xl rotate-12 select-none pointer-events-none opacity-60">❤️</div>
      <div className="absolute top-32 left-2 text-amber-300 text-xl -rotate-12 select-none pointer-events-none opacity-60">⭐</div>
      <div className="absolute bottom-16 right-12 text-sky-300 text-2xl rotate-45 select-none pointer-events-none opacity-60">✨</div>
      <div className="absolute bottom-32 left-6 text-purple-300 text-xl -rotate-12 select-none pointer-events-none opacity-60">🌸</div>

      {/* Header Banner Section */}
      <div className="mb-8 border-b-2 border-[#3D1E6D]/20 pb-4 relative">
        <span className="absolute -top-3 right-2 text-xs font-bold text-pink-500 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200 rotate-3">
          ✏️ profile info
        </span>

        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-[#00B4D8] font-extrabold text-3xl md:text-4xl italic" style={{ fontFamily: 'Caveat, cursive' }}>
            Magandang
          </span>
          <span className="text-3xl md:text-4xl font-black uppercase text-[#3D1E6D] tracking-tight">
            SLAM BOOK
          </span>
        </div>
        <div className="flex flex-wrap items-baseline gap-x-2 -mt-1">
          <span className="text-[#FFB703] font-extrabold text-3xl md:text-4xl italic" style={{ fontFamily: 'Caveat, cursive' }}>
            Buhay
          </span>
          <span className="text-2xl md:text-3xl font-black uppercase text-[#3D1E6D] tracking-wider flex items-center gap-2">
            <User className="text-[#3D1E6D]" /> The Cold Hard Facts
          </span>
        </div>
      </div>

      {/* DESKTOP LAYOUT (Hidden on mobile, visible on lg screens and up) */}
      <div className="hidden lg:grid grid-cols-12 gap-5 items-center mb-6">
        <div className="col-span-8 grid grid-cols-2 gap-4">
          
          {/* Card 1: Name */}
          <div className="relative bg-[#fef9c3] border-2 border-yellow-400 p-4 pt-5 rounded-xl shadow-md rotate-1 hover:rotate-0 transition-all duration-300">
            <div className="absolute -top-2.5 left-3 bg-red-400 text-white text-[8px] px-2 py-0.5 rounded-full font-bold shadow-sm uppercase tracking-wider rotate-[-6deg]">
              PIN 📌
            </div>
            <span className="font-black text-yellow-900 text-xl uppercase tracking-wider block mb-1">Name</span>
            <p className="text-slate-800 font-bold leading-snug" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
              Maria Clarissa D. Raquinel
            </p>
          </div>

          {/* Card 2: Nickname */}
          <div className="relative bg-[#e0f2fe] border-2 border-sky-300 p-4 pt-5 rounded-xl shadow-md -rotate-1 hover:rotate-0 transition-all duration-300">
            <div className="absolute -top-2.5 right-3 bg-slate-700 text-slate-100 text-[8px] px-2 py-0.5 rounded font-mono shadow-sm">
              CLIP 📎
            </div>
            <span className="font-black text-sky-900 text-xl uppercase tracking-wider block mb-1">Nickname / Alias</span>
            <p className="text-slate-800 font-bold leading-snug" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
              Clarissa, Clarisse, Cla
            </p>
          </div>

          {/* Card 3: Birthday & Birthplace */}
          <div className="relative bg-[#fce7f3] border-2 border-pink-300 p-4 pt-5 rounded-xl shadow-md rotate-1 hover:rotate-0 transition-all duration-300 col-span-2">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-pink-400/80 text-white text-[7px] flex items-center justify-center font-bold rounded-sm shadow-sm rotate-1">
              WASHI ✨
            </div>
            <span className="font-black text-pink-900 text-xl uppercase tracking-wider block mb-1 flex items-center gap-1">
              <Calendar size={12} /> Birthday & Birthplace
            </span>
            <p className="text-slate-800 font-bold leading-snug" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
              December 18, 1989; Makati City (Sagittarius ♐)
            </p>
          </div>
        </div>

        {/* Desktop Photo Box (Clickable) */}
        <div className="col-span-4 w-full flex flex-col items-center justify-center">
          <div 
            onClick={() => setIsOpen(true)}
            className="relative w-full h-[260px] overflow-hidden rounded-2xl shadow-lg border-2 border-[#3D1E6D]/30 bg-[#fefae0] p-1 rotate-[-2deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
          >
            {/* Magnifying glass hover hint */}
            <div className="absolute inset-0 bg-[#3D1E6D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 rounded-2xl">
              <span className="bg-white/90 text-[#3D1E6D] text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                🔍 Click to View Full
              </span>
            </div>

            {/* Inner frame wrapper */}
            <div className="w-full h-full overflow-hidden rounded-xl border border-dashed border-[#3D1E6D]/30 relative bg-slate-50">
              <img 
                src="./src/assets/FB_IMG_1785405230338.jpg" 
                alt="Maria Clarissa" 
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET LAYOUT (Visible on screens below lg, hidden on lg+) */}
      <div className="lg:hidden grid grid-cols-2 gap-4 mb-6 items-stretch">
        
        {/* Top-Left: Name Card */}
        <div className="relative bg-[#fef9c3] border-2 border-yellow-400 p-3 pt-4 rounded-xl shadow-md rotate-1 flex flex-col justify-center">
          <div className="absolute -top-2.5 left-3 bg-red-400 text-white text-[8px] px-2 py-0.5 rounded-full font-bold shadow-sm uppercase tracking-wider rotate-[-6deg]">
            PIN 📌
          </div>
          <span className="font-black text-yellow-900 text-[10px] uppercase tracking-wider block mb-0.5">Name</span>
          <p className="text-slate-800 font-bold leading-snug" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.2rem' }}>
            Maria Clarissa D. Raquinel
          </p>
        </div>

        {/* Right Side: Photo spanning both Name and Nickname height (Clickable) */}
        <div 
          onClick={() => setIsOpen(true)}
          className="relative w-full h-full overflow-hidden rounded-xl shadow-md border border-black/80 rotate-[-2deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300 bg-white row-span-2 cursor-pointer group"
        >
          {/* Magnifying glass hover hint */}
          <div className="absolute inset-0 bg-[#3D1E6D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
            <span className="bg-white/90 text-[#3D1E6D] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
              🔍 View Full
            </span>
          </div>

          <img 
            src="./src/assets/FB_IMG_1785405230338.jpg" 
            alt="Maria Clarissa" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom-Left: Nickname Card (Sits directly under Name, aligned with bottom of the picture) */}
        <div className="relative bg-[#e0f2fe] border-2 border-sky-300 p-3 pt-4 rounded-xl shadow-md -rotate-1 flex flex-col justify-center">
          <div className="absolute -top-2.5 right-3 bg-slate-700 text-slate-100 text-[8px] px-2 py-0.5 rounded font-mono shadow-sm">
            CLIP 📎
          </div>
          <span className="font-black text-sky-900 text-[10px] uppercase tracking-wider block mb-0.5">Nickname / Alias</span>
          <p className="text-slate-800 font-bold leading-snug" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.2rem' }}>
            Clarissa, Clarisse, Cla
          </p>
        </div>

        {/* Row 3: Birthday Card (Full width across both columns) */}
        <div className="col-span-2 relative bg-[#fce7f3] border-2 border-pink-300 p-4 pt-5 rounded-xl shadow-md rotate-1">
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-pink-400/80 text-white text-[7px] flex items-center justify-center font-bold rounded-sm shadow-sm rotate-1">
            WASHI ✨
          </div>
          <span className="font-black text-pink-900 text-[11px] uppercase tracking-wider block mb-1 flex items-center gap-1">
            <Calendar size={12} /> Birthday & Birthplace
          </span>
          <p className="text-slate-800 font-bold leading-snug" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.3rem' }}>
            December 18, 1989; Makati City (Sagittarius ♐)
          </p>
        </div>

      </div>

      {/* Bottom Fact Row: Education */}
      <div className="relative bg-[#faedcd] border-2 border-[#d4a373] p-4 pt-5 rounded-xl shadow-md hover:rotate-0 transition-all duration-300">
        <div className="absolute -top-2.5 right-6 bg-[#d4a373] text-white text-[8px] px-2 py-0.5 rounded font-bold shadow-sm">
          TAG 🏷️
        </div>
        
        <span className="font-black text-[#6b4226] text-xl uppercase tracking-wider block mb-1 flex items-center gap-1">
          <GraduationCap size={12} /> Education & Degrees
        </span>
        <ul className="text-slate-800 space-y-0.5 mt-1 font-bold leading-snug" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
          <li>• Our Lady of Fatima University & Metro Manila College</li>
          <li>• BS Psychology Master in Business Administration</li>
        </ul>
      </div>

      {/* Full-Screen Modal Viewer with Scrapbook Theme */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative max-w-2xl w-full bg-[#fefae0] border-4 border-[#3D1E6D] rounded-3xl p-4 sm:p-6 shadow-2xl rotate-1 animate-scale-up"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Realistic Washi Tape at top of modal */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-yellow-100/80 backdrop-blur-xs shadow-sm rotate-[-1deg] z-20 border-x border-yellow-200/50"
                 style={{
                   backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(240,230,200,0.6) 50%, rgba(255,255,255,0.4) 100%)',
                 }}
            ></div>

            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute -top-3 -right-3 bg-[#3D1E6D] text-white hover:bg-pink-500 w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-colors z-30 cursor-pointer"
            >
              ✕
            </button>

            {/* Image Container */}
            <div className="w-full h-[70vh] overflow-hidden rounded-2xl border-2 border-dashed border-[#3D1E6D]/30 bg-slate-50 relative flex items-center justify-center">
              <img 
                src="./src/assets/FB_IMG_1785405230338.jpg" 
                alt="Maria Clarissa Full View" 
                className="w-full h-full object-contain p-2"
              />
            </div>

            {/* Footer Tag */}
            <div className="text-center mt-3">
              <span className="text-[#3D1E6D] font-black uppercase tracking-wider" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.5rem' }}>
                ✨ Maria Clarissa — Memory Snapshot ✨
              </span>
            </div>
          </div>
        </div>
      )}

    </motion.div>
  );
}