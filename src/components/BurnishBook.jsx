import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Compass, Plane, Star, AlertTriangle, Clock, ShoppingBag, AlertCircle, Users, Play, Pause, Disc } from 'lucide-react';

export default function BurnishBook() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State for the photo modal viewer

  const slotItems = [
    { id: 1, url: "/images/IMG-458ddbc258ca7631f905f191ccd99e1e-V.jpg" },
    { id: 2, url: "/images/IMG-20250820-WA0001.jpg" },
    { id: 3, url: "/images/IMG_20241211_182234_694.webp" },
    { id: 4, url: "/images/Image_20260731_124320_016.webp" },
    { id: 5, url: "/images/1000016284.jpeg" },
    { id: 6, url: "/images/FB_IMG_1785511724637.jpg" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#FFFDF9] border-4 md:border-8 border-[#3D1E6D] p-4 md:p-10 relative shadow-2xl overflow-hidden font-sans w-full box-border"
    >
      {/* Hidden YouTube Player for Djo - End of Beginning */}
      <div className="hidden">
        {currentTrack === 'soundtrack' && (
          <iframe 
            title="djo-soundtrack"
            src="https://www.youtube.com/embed/oXSw8DGjf5E?autoplay=1&start=3" 
            allow="autoplay"
          />
        )}
      </div>

      {/* Decorative Background Doodles */}
      <div className="absolute top-4 right-8 text-pink-300 text-2xl rotate-12 select-none pointer-events-none opacity-60">❤️</div>
      <div className="absolute top-32 left-2 text-amber-300 text-xl -rotate-12 select-none pointer-events-none opacity-60">⭐</div>
      <div className="absolute bottom-16 right-12 text-sky-300 text-2xl rotate-45 select-none pointer-events-none opacity-60">✨</div>
      <div className="absolute bottom-32 left-6 text-purple-300 text-xl -rotate-12 select-none pointer-events-none opacity-60">🌸</div>

      <div className="relative z-10 space-y-8">
        {/* Header Section */}
        <div className="border-b-2 border-[#3D1E6D]/20 pb-4 relative">
          <span className="absolute -top-3 right-2 text-xs font-bold text-pink-500 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200 rotate-3">
            ✏️ hand-drawn vibes
          </span>

          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-[#00B4D8] font-extrabold text-3xl md:text-4xl italic" style={{ fontFamily: 'Caveat, cursive' }}>
              Burn-ish
            </span>
            <span className="text-3xl md:text-4xl font-black uppercase text-[#3D1E6D] tracking-tight">
              BOOK
            </span>
          </div>
          <p className="text-slate-500 font-medium text-xs mt-1 uppercase tracking-wider">
            All that drama & core memories!
          </p>
        </div>

        {/* Top Layout: Spotlight on top on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8 items-stretch">
          
          {/* SPOTLIGHT */}
          <div className="order-1 md:order-none col-span-1 flex flex-col bg-[#fdfaf3] border-2 border-dashed border-[#3D1E6D]/20 rounded-2xl p-3 md:p-6 w-full relative box-border">
            <span className="absolute top-2 left-3 text-pink-400 text-xs select-none">✿</span>
            <span className="absolute top-2 right-3 text-amber-400 text-xs select-none">✿</span>

            <div className="shrink-0">
              <h3 className="text-sm md:text-xl font-black text-[#3D1E6D] text-center mb-1 uppercase tracking-wide flex items-center justify-center gap-2">
                <Star size={16} className="text-yellow-500 fill-yellow-300" />
                Spotlight
              </h3>
              <p className="text-center text-slate-500 font-medium mb-4 text-[10px] md:text-xs">
                Spinning core memories!
              </p>
            </div>

            {/* Viewport Frame Window */}
            <div className="flex-1 relative w-full overflow-hidden flex flex-col items-center mx-auto rounded-xl bg-transparent box-border px-1 min-h-[380px] md:min-h-[520px]">
              <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#fdfaf3] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#fdfaf3] to-transparent z-10 pointer-events-none"></div>

              <motion.div
                className="absolute w-full flex flex-col items-center gap-8 py-4"
                animate={{ y: ["-33.333%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 24, 
                  ease: "linear",
                }}
              >
                {[...slotItems, ...slotItems, ...slotItems].map((photo, idx) => (
                  <motion.div 
                    key={idx} 
                    onClick={() => setSelectedPhoto(photo)}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                      delay: (idx % slotItems.length) * 0.4,
                    }}
                    className="relative bg-white p-2 md:p-3 pb-4 rounded-xl shadow-xl w-[98%] shrink-0 rotate-1 hover:rotate-0 transition-transform duration-300 mx-auto flex flex-col justify-between my-2 box-border border border-slate-100 cursor-pointer hover:scale-[1.03]"
                  >
                    <div className="w-full h-[180px] md:h-[260px] bg-slate-100 overflow-hidden rounded-lg shrink-0 shadow-inner">
                      <img src={photo.url} alt={`Carousel ${idx}`} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <div className="pt-4 text-center mt-2 border-t border-[#3D1E6D]/10 shrink-0">
              <span className="text-[8px] md:text-[10px] text-slate-400 font-mono tracking-widest uppercase">✨ floating bounce reel ✨</span>
            </div>
          </div>

          {/* CONTENT CARDS */}
          <div className="order-2 md:order-none col-span-2 flex flex-col justify-between gap-4 md:gap-6">
            
            {/* Row 1: Red & Green Flags */}
            <div className="grid grid-cols-2 gap-3 md:gap-6 h-full">
              <div className="relative flex flex-col bg-[#fef2f2] border-2 border-red-300 rotate-1 p-3 md:p-6 pt-5 md:pt-7 rounded-xl shadow-md transition-all duration-300 hover:rotate-0">
                <div className="absolute -top-3 left-2 md:left-4 bg-red-400 text-white text-[8px] md:text-[10px] px-1.5 md:px-2.5 py-0.5 rounded-full font-bold shadow-sm uppercase tracking-wider rotate-[-6deg]">
                  RED FLAG 🚩
                </div>
                <span className="md:text-xl font-bold text-red-700 uppercase tracking-wider block mb-1">Red Flag</span>
                <p className="text-slate-800 font-bold leading-tight italic text-sm md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
                  I can be as direct as I can possibly be, ignoring other’s feelings.
                </p>
              </div>
              <div className="relative flex flex-col bg-[#f0fdf4] border-2 border-green-300 -rotate-1 p-3 md:p-6 pt-5 md:pt-7 rounded-xl shadow-md transition-all duration-300 hover:rotate-0">
                <div className="absolute -top-3 right-2 md:right-4 bg-green-600 text-white text-[8px] md:text-[10px] px-1.5 md:px-2.5 py-0.5 rounded font-mono shadow-sm">
                  GREEN FLAG 💚
                </div>
                <span className="md:text-xl font-bold text-green-700 uppercase tracking-wider block mb-1">Green Flag</span>
                <p className="text-slate-800 font-bold leading-tight italic text-sm md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
                  I am fully aware of my tendency and do my best to carefully choose my words and message delivery.
                </p>
              </div>
            </div>

            {/* Row 2: Roast & Toast */}
            <div className="relative flex flex-col bg-[#f5f3ff] border-2 border-purple-300 rotate-1 p-4 md:p-6 pt-6 md:pt-8 rounded-xl shadow-md transition-all duration-300 hover:rotate-0 h-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-5 bg-purple-400/80 text-white text-[9px] md:text-[11px] flex items-center justify-center font-bold rounded-sm shadow-sm rotate-1">
                ROAST & TOAST 🔥
              </div>
              <h3 title="(One light insult and one sweet compliment for Clarissa)"
              className="font-black md:text-xl uppercase tracking-wider text-purple-900 mb-2 cursor-pointer">Roast & Toast</h3>
              <div className="text-slate-800 font-bold leading-tight italic space-y-2 flex-1 text-sm md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
                <p className='flex gap-2'><span>🔥</span><span>Roast: Masyado kang choosy! (di to work related. haha)</span></p>
                <p className='flex gap-2'><span>🍞</span><span>Toast: Congratulations for always showing up and honoring your commitments.</span></p>
              </div>
            </div>

            {/* Row 3: Soundtrack & Vibe */}
            <div className="grid grid-cols-2 gap-3 md:gap-6 h-full">
              
              {/* Soundtrack Card */}
              <div className="relative flex flex-col justify-between bg-[#e0f2fe] border-2 border-sky-300 -rotate-1 p-3 md:p-6 pt-5 md:pt-7 rounded-xl shadow-md transition-all duration-300 hover:rotate-0">
                <div className="absolute -top-3 right-2 md:right-4 bg-sky-600 text-white text-[8px] md:text-[10px] px-1.5 md:px-2.5 py-0.5 rounded font-mono shadow-sm">
                  SOUNDTRACK 🎶
                </div>
                <div>
                  <h3 
                    title="(The song playing in the background of your life right now)"
                    className="font-black md:text-xl uppercase tracking-wider text-sky-900 mb-1 flex items-center gap-1 cursor-pointer"
                  >
                    <Music size={14} className="inline" /> Life Soundtrack 
                  </h3>
                  <p className="text-slate-800 font-bold leading-tight italic mb-3 text-sm md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
                    "End of Beginning" by Djo
                  </p>
                </div>

                <div className="pt-2 border-t border-sky-300/50 bg-white/50 p-2 rounded-lg flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[9px] md:text-xs font-bold text-sky-900 uppercase flex items-center gap-1">
                    <Disc size={12} className={currentTrack === 'soundtrack' ? "animate-spin text-sky-600" : ""} />
                    Stream:
                  </span>
                  <button
                    onClick={() => setCurrentTrack(currentTrack === 'soundtrack' ? null : 'soundtrack')}
                    className={`flex items-center gap-1 py-1 px-2.5 rounded-md text-[10px] md:text-xs font-bold transition-all cursor-pointer shadow-xs ${
                      currentTrack === 'soundtrack' 
                        ? 'bg-sky-600 text-white shadow-sky-300 ring-2 ring-sky-300' 
                        : 'bg-sky-100 text-sky-900 hover:bg-sky-200'
                    }`}
                  >
                    {currentTrack === 'soundtrack' ? <Pause size={10} /> : <Play size={10} />}
                    <span>{currentTrack === 'soundtrack' ? 'Pause' : 'Play'}</span>
                  </button>
                </div>
              </div>

              {/* Vibe Card */}
              <div className="relative flex flex-col justify-between bg-[#faedcd] border-2 border-[#d4a373] rotate-1 p-3 md:p-6 pt-5 md:pt-7 rounded-xl shadow-md transition-all duration-300 hover:rotate-0">
                <div className="absolute -top-3 right-2 md:right-6 bg-[#d4a373] text-white text-[8px] md:text-[10px] px-1.5 md:px-2.5 py-0.5 rounded font-bold shadow-sm">
                  VIBE 🧭
                </div>
                <div>
                  <h3 title="(If you were an item, a place, or a vibe, what would you be?)" 
                  className="font-black md:text-xl uppercase tracking-wider text-[#6b4226] mb-1 flex items-center gap-1 cursor-pointer">
                    <Compass size={14} className="inline" /> Aesthetic
                  </h3>
                  <p className="text-slate-800 font-bold leading-tight italic text-sm md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
                    BGC—because I am mas gising sa gabi!
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Layout: 2 columns with larger handwriting text */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
          {/* Core Memories */}
          <div className="relative bg-white border-2 border-dashed border-slate-300 -rotate-1 p-3.5 md:p-6 pt-5 md:pt-7 rounded-xl shadow-sm transition-all duration-300 hover:rotate-0">
            <div className="absolute -top-3 left-2 md:left-4 bg-emerald-300 text-emerald-900 text-[8px] md:text-[10px] px-1.5 md:px-2.5 py-0.5 rounded-sm font-bold shadow-sm">
              CORE MEMORIES 💖
            </div>
            <h3 className="font-black md:text-xl uppercase tracking-wider text-indigo-900 mb-1.5">Core Memories</h3>
            <p className="text-slate-800 font-bold leading-snug italic flex items-start gap-2 text-sm md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
              <Plane size={16} className="mt-1.5 text-sky-600 shrink-0 hidden sm:inline" />
              <span>Family trip to Singapore for my sister’s wedding in 2023—bonding and meeting in-laws and friends in person!</span>
            </p>
          </div>

          {/* The Sequel */}
          <div className="relative bg-[#f0f9ff] border-2 border-sky-200 rotate-1 p-3.5 md:p-6 pt-5 md:pt-7 rounded-xl shadow-md transition-all duration-300 hover:rotate-0">
            <div className="absolute -top-3 left-2 md:left-4 bg-sky-500 text-white text-[8px] md:text-[10px] px-1.5 md:px-2.5 py-0.5 rounded-full font-bold shadow-sm uppercase tracking-wider rotate-[-6deg] flex items-center gap-1">
              <Clock size={10} /> THE SEQUEL ⏳
            </div>
            <h3 className="font-black md:text-xl uppercase tracking-wider text-sky-900 mb-1.5">Where will we both be in 5 years?</h3>
            <p className="text-slate-800 font-bold leading-snug italic text-sm md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
              In a different place doing different things, probably with an additional role in life.
            </p>
          </div>

          {/* Emotional Support Items */}
          <div className="relative bg-[#fdf2f8] border-2 border-pink-200 rotate-1 p-3.5 md:p-6 pt-5 md:pt-7 rounded-xl shadow-md transition-all duration-300 hover:rotate-0">
            <div className="absolute -top-3 right-2 md:right-4 bg-pink-500 text-white text-[8px] md:text-[10px] px-1.5 md:px-2.5 py-0.5 rounded-full font-bold shadow-sm uppercase tracking-wider rotate-[-6deg] flex items-center gap-1">
              <ShoppingBag size={10} /> ESSENTIALS 👜
            </div>
            <h3 title=' (3 things you cannot leave the house without)'
            className="font-black md:text-xl uppercase tracking-wider text-pink-900 mb-1.5 cursor-pointer">
              Emotional Support Items (3 things)</h3>
            <p className="text-slate-800 font-bold leading-snug italic text-sm md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
              Eyeglasses, wallet, and cell phone.
            </p>
          </div>

          {/* The Daily Breakdown */}
          <div className="relative bg-[#fffbeb] border-2 border-amber-200 -rotate-1 p-3.5 md:p-6 pt-5 md:pt-7 rounded-xl shadow-md transition-all duration-300 hover:rotate-0">
            <div className="absolute -top-3 right-2 md:right-4 bg-amber-500 text-white text-[8px] md:text-[10px] px-1.5 md:px-2.5 py-0.5 rounded-full font-bold shadow-sm uppercase tracking-wider rotate-[-6deg] flex items-center gap-1">
              <AlertCircle size={10} /> DAILY BREAKDOWN ⚠️
            </div>
            <h3 className="font-black md:text-xl uppercase tracking-wider text-amber-900 mb-1.5">What is most likely to ruin your day?</h3>
            <p className="text-slate-800 font-bold leading-snug italic text-sm md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
              Getting super hungry and unable to find or buy anything to eat!
            </p>
          </div>

          {/* Group Dynamics */}
          <div className="relative bg-[#faf5ff] border-2 border-purple-200 -rotate-1 p-3.5 md:p-6 pt-5 md:pt-7 rounded-xl shadow-md transition-all duration-300 hover:rotate-0">
            <div className="absolute -top-3 left-2 md:left-4 bg-purple-500 text-white text-[8px] md:text-[10px] px-1.5 md:px-2.5 py-0.5 rounded-full font-bold shadow-sm uppercase tracking-wider rotate-[-6deg] flex items-center gap-1">
              <Users size={10} /> GROUP DYNAMICS 🌸
            </div>
            <h3 className="font-black md:text-xl uppercase tracking-wider text-purple-900 mb-1.5">What are your 3 main roles in life?</h3>
            <p className="text-slate-800 font-bold leading-snug italic text-sm md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
              A daughter, sister, and a friend.
            </p>
          </div>

          {/* Emergency */}
          <div className="relative bg-[#fef9c3] border-2 border-yellow-400 rotate-1 p-3.5 md:p-6 pt-5 md:pt-7 rounded-xl shadow-md transition-all duration-300 hover:rotate-0">
            <div className="absolute -top-3 left-2 md:left-4 bg-red-400 text-white text-[8px] md:text-[10px] px-1.5 md:px-2.5 py-0.5 rounded-full font-bold shadow-sm uppercase tracking-wider rotate-[-6deg] flex items-center gap-1">
              <AlertTriangle size={10} /> EMERGENCY 🚨
            </div>
            <h3 title=' (How to bribe or instantly make you happy)'
            className="font-black md:text-xl uppercase tracking-wider text-yellow-900 mb-1.5 cursor-pointer">
              In Case of Emergency (Instant Bribe)</h3>
            <p className="text-slate-800 font-bold leading-snug italic text-sm md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
              A vacation in Switzerland, all expenses paid!
            </p>
          </div>
        </div>

      </div>

      {/* Extra Large Scrapbook Modal Viewer Overlay */}
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

              {/* Extra Large Inner Photo Frame with Dashed Border */}
              <div className="w-full h-[70vh] bg-white p-4 md:p-6 rounded-2xl border-2 border-dashed border-[#3D1E6D]/30 shadow-inner flex items-center justify-center overflow-hidden mb-4 relative">
                <img src={selectedPhoto.url} alt="Expanded Spotlight View" className="w-full h-full object-contain rounded-lg shadow-sm" />
                <span className="absolute bottom-4 right-4 text-pink-500/60 text-xl select-none">✏️💖</span>
              </div>

              {/* Caption */}
              <div className="text-center">
                <p className="font-black text-[#3D1E6D]" style={{ fontFamily: 'Caveat, cursive', fontSize: '2.5rem' }}>
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}