import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Disc, Play, Pause } from 'lucide-react';

export default function FavoriteThings() {
  const [currentTrack, setCurrentTrack] = useState(null); // '80s', '90s', or null
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State for the photo modal

  const favorites = [
    { label: "COLOR", value: "Beige, brown, black, gray, white, navy blue, cream, etc." },
    { label: "SUBJECT", value: "When I was in college, it was Psychometrics, Neuropsychology, and Comparative Vertebrate Anatomy. When I was in grad school it was Labor Economics and Labor Relations;  Operations and Production Management, and Marketing Management." },
    { label: "HOLIDAY", value: "Christmas season because I get to spend time with family and friends. My introvert self is well rested to socialize" },
    { label: "EMOJI", value: "🥰 😂" },
    { label: "ANIMAL", value: "Dogs and cats" },
    { label: "BOOK", value: "Growth Mindset by Carol Dweck, Grit by Angela Duckworth, Failing Forward by John Maxwell" },
    { label: "FOOD", value: "Kansi(Visayan dish), Hainanese Chicken, Indian Curry, Pan Fried Pork Chop, etc." },
    { label: "DRINK", value: "MILO, latte, spanish latte, pineapple juice, H2O, etc." },
    { label: "RESTAURANT", value: "Nanyang, OldTown White Coffee, Lugang Cafe, Mama Lou's, Din Tai Fung, etc." },
    { label: "TV SHOWS", value: "Abbot Elementary, Young Sheldon, Brooklyn Nine-Nine, The Good Place, etc." },
    { label: "SMELL", value: "Among my likes are Rebel Rosebud by The Body Shop and Pure Wonder by Bath and Body Works" },
    { label: "MOVIE", value: "The Hobbit, Lord of the Rings, Harry Potter, Twilight, Maze Runner, Hunger Games, Wicked" },
    { label: "MUSIC", value: "80's, 90's, 00's music" },
    { label: "CHARACTER", value: "Sanrio characters when I was young. Currently no particular favorite." },
    { label: "WORD", value: "Flourish" },
    { label: "SPORT", value: "I used to play volleyball but I stopped because of my myopia and astigmatism." },
    { label: "CELEBRITY", value: "I have no particular celebrity that I admire right now. But in the past I remember being a fan of the cast of Meteor Garden. haha" },
    { label: "HOBBY", value: "Watching movies or docuseries, going out of town with family or friends, listening to podcasts (sometimes), reading a book, etc." }
  ];

  const allPhotos = [
    { url: "./src/assets/images/m1000000680.webp", caption: "Memory 1 ✨" },
    { url: "./src/assets/images/received_541769165565519.jpeg", caption: "Good times ☕" },
    { url: "./src/assets/images/Messenger_creation_BEC8A9A6-0BA1-4FAD-8DC4-CFEC0B0B3227.jpeg", caption: "Adventure 🌿" },
    { url: "./src/assets/images/IMG_20260327_173120_1.jpg", caption: "Smile always 😊" },
    { url: "./src/assets/images/Image_20260331_123423_780.jpeg", caption: "Chill days 🎧" },
    { url: "./src/assets/images/FB_IMG_1785515996510.jpg", caption: "Favorites 📚" },
    { url: "./src/assets/images/FB_IMG_1785511462327.jpg", caption: "Favorites 📚" }
  ];

  const slotItems = [...allPhotos, ...allPhotos, ...allPhotos];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#FFFDF9] border-4 md:border-8 border-[#3D1E6D] p-4 md:p-10 relative shadow-2xl overflow-hidden font-sans w-full"
    >
      {/* Hidden YouTube Players for 80s and 90s */}
      <div className="hidden">
        {currentTrack === '80s' && (
          <iframe 
            title="80s-track"
            src="https://www.youtube.com/embed/OMOGaugKpzs?autoplay=1&start=13" 
            allow="autoplay"
          />
        )}
        {currentTrack === '90s' && (
          <iframe 
            title="90s-track"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&start=6" 
            allow="autoplay"
          />
        )}
      </div>

      <div className="absolute top-4 right-8 text-pink-300 text-2xl rotate-12 select-none pointer-events-none opacity-60">❤️</div>
      <div className="absolute top-32 left-2 text-amber-300 text-xl -rotate-12 select-none pointer-events-none opacity-60">⭐</div>
      <div className="absolute bottom-16 right-12 text-sky-300 text-2xl rotate-45 select-none pointer-events-none opacity-60">✨</div>
      <div className="absolute bottom-32 left-6 text-purple-300 text-xl -rotate-12 select-none pointer-events-none opacity-60">🌸</div>

      <div className="mb-8 border-b-2 border-[#3D1E6D]/20 pb-4 relative">
        <span className="absolute -top-3 right-2 text-xs font-bold text-pink-500 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200 rotate-3">
          ✏️ hand-drawn vibes
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
          <span className="text-2xl md:text-3xl font-black uppercase text-[#3D1E6D] tracking-wider">
            FAVORITE THINGS
          </span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
        
        {/* Favorites section */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-3 md:gap-6">
          {favorites.map((item, index) => {
            const variant = index % 5;
            let containerStyle = "";
            let ornament = null;
            let labelColor = "";
            let doodleCorner = null;

            switch (variant) {
              case 0:
                containerStyle = "bg-[#fef9c3] border-2 border-yellow-400 rotate-1 shadow-md";
                labelColor = "text-yellow-900";
                ornament = (
                  <div className="absolute -top-3 left-3 bg-red-400 text-white text-[7px] md:text-[9px] px-1.5 md:px-2 py-0.5 rounded-full font-bold shadow-sm uppercase tracking-wider rotate-[-6deg]">
                    PIN 📌
                  </div>
                );
                doodleCorner = <span className="absolute bottom-2 right-2 text-yellow-600/40 text-sm md:text-sm select-none">✏️✨</span>;
                break;
              case 1:
                containerStyle = "bg-[#e0f2fe] border-2 border-sky-300 -rotate-1 shadow-md";
                labelColor = "text-sky-900";
                ornament = (
                  <div className="absolute -top-3 right-3 bg-slate-700 text-slate-100 text-[7px] md:text-[9px] px-1.5 md:px-2 py-0.5 rounded font-mono shadow-sm">
                    CLIP 📎
                  </div>
                );
                doodleCorner = <span className="absolute bottom-2 right-2 text-sky-600/40 text-xs md:text-sm select-none">✏️💙</span>;
                break;
              case 2:
                containerStyle = "bg-[#fce7f3] border-2 border-pink-300 rotate-2 shadow-md";
                labelColor = "text-pink-900";
                ornament = (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 md:w-16 h-3 md:h-4 bg-pink-400/80 text-white text-[7px] md:text-[8px] flex items-center justify-center font-bold rounded-sm shadow-sm rotate-1">
                    WASHI ✨
                  </div>
                );
                doodleCorner = <span className="absolute bottom-2 right-2 text-pink-600/40 text-xs md:text-sm select-none">✏️💖</span>;
                break;
              case 3:
                containerStyle = "bg-white border-2 border-dashed border-slate-300 -rotate-2 shadow-sm";
                labelColor = "text-indigo-900";
                ornament = (
                  <div className="absolute -top-2.5 left-4 bg-emerald-300 text-emerald-900 text-[7px] md:text-[9px] px-1.5 md:px-2 py-0.5 rounded-sm font-bold shadow-sm">
                    TEAR ✂️
                  </div>
                );
                doodleCorner = <span className="absolute bottom-2 right-2 text-emerald-600/40 text-xs md:text-sm select-none">✏️🌿</span>;
                break;
              case 4:
                containerStyle = "bg-[#faedcd] border-2 border-[#d4a373] rotate-1 shadow-md";
                labelColor = "text-[#6b4226]";
                ornament = (
                  <div className="absolute -top-3 right-4 bg-[#d4a373] text-white text-[7px] md:text-[9px] px-1.5 md:px-2 py-0.5 rounded font-bold shadow-sm">
                    TAG 🏷️
                  </div>
                );
                doodleCorner = <span className="absolute bottom-2 right-2 text-amber-700/40 text-xs md:text-sm select-none">✏️⭐</span>;
                break;
            }

            const isMusicCard = item.label === "MUSIC";

            return (
              <div 
                key={index} 
                className={`relative p-3 md:p-5 pt-5 md:pt-6 rounded-xl transition-all duration-300 hover:rotate-0 hover:scale-[1.02] flex flex-col justify-between ${containerStyle}`}
              >
                {ornament}
                {doodleCorner}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className={`font-black text-[10px] md:text-xl uppercase tracking-wider block ${labelColor}`}>
                      {item.label}
                    </label>
                    {isMusicCard && (
                      <span className="text-[9px] md:text-[10px] bg-pink-200 text-pink-800 font-bold px-1.5 py-0.5 rounded animate-pulse">
                        🎧 Jukebox
                      </span>
                    )}
                  </div>

                  <p className="text-slate-800 font-bold leading-tight mb-3" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
                    {item.value}
                  </p>

                  {/* YouTube Jukebox Controls inside the MUSIC card */}
                  {isMusicCard && (
                    <div className="mt-2 pt-3 border-t border-yellow-400/40 bg-white/60 p-2 rounded-lg shadow-inner">
                      <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Disc size={10} className={currentTrack ? "animate-spin text-pink-500" : ""} />
                        <span>Try And Play:</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                        <button
                          onClick={() => setCurrentTrack(currentTrack === '80s' ? null : '80s')}
                          className={`flex items-center justify-center gap-1 py-1 px-1.5 rounded-md text-[10px] font-bold transition-all cursor-pointer shadow-xs ${
                            currentTrack === '80s' 
                              ? 'bg-pink-500 text-white shadow-pink-300 ring-2 ring-pink-300' 
                              : 'bg-pink-100 text-pink-800 hover:bg-pink-200'
                          }`}
                        >
                          {currentTrack === '80s' ? <Pause size={10} /> : <Play size={10} />}
                          <span>{currentTrack === '80s' ? 'Pause 80s' : 'Play 80s ✨'}</span>
                        </button>

                        <button
                          onClick={() => setCurrentTrack(currentTrack === '90s' ? null : '90s')}
                          className={`flex items-center justify-center gap-1 py-1 px-1.5 rounded-md text-[10px] font-bold transition-all cursor-pointer shadow-xs ${
                            currentTrack === '90s' 
                              ? 'bg-purple-500 text-white shadow-purple-300 ring-2 ring-purple-300' 
                              : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                          }`}
                        >
                          {currentTrack === '90s' ? <Pause size={10} /> : <Play size={10} />}
                          <span>{currentTrack === '90s' ? 'Pause 90s' : 'Play 90s 🎸'}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Spotlight container */}
        <div className="col-span-1 flex flex-col justify-between bg-[#fdfaf3] border-2 border-dashed border-[#3D1E6D]/20 rounded-2xl p-4 h-full relative box-border">
          <span className="absolute top-2 left-3 text-pink-400 text-xs select-none">✿</span>
          <span className="absolute top-2 right-3 text-amber-400 text-xs select-none">✿</span>

          <div>
            <h3 className="text-xl font-black text-[#3D1E6D] text-center mb-1 uppercase tracking-wide">
              ✨ Spotlight
            </h3>
            <p className="text-center text-slate-500 font-medium mb-2 text-xs">
              Spinning memories!
            </p>
          </div>

          <div className="relative w-full flex-1 min-h-[500px] overflow-hidden flex flex-col items-center mx-auto my-2 rounded-xl bg-transparent box-border px-1">
            <motion.div
              className="absolute w-full flex flex-col items-center gap-6 py-4"
              animate={{ y: ["0%", "-33.333%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 25, 
                ease: "linear",
              }}
            >
              {slotItems.map((photo, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedPhoto(photo)}
                  className="relative bg-white p-4 pb-7 rounded-lg shadow-lg w-full h-full shrink-0 rotate-1 hover:rotate-0 transition-transform duration-300 flex flex-col justify-between my-1.5 box-border cursor-pointer hover:scale-[1.03]"
                >
                  <div className="w-full h-full bg-slate-100 overflow-hidden rounded-md shrink-0 border border-slate-100 shadow-inner">
                    <img src={photo.url} alt={`Carousel Photo ${idx}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="pt-2 text-center">
            <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">✨ endless reel ✨</span>
          </div>
        </div>

      </div>

      {/* Extra Large Scrapbook Modal Viewer */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 md:p-8" onClick={() => setSelectedPhoto(null)}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, rotate: -1 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
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
            <div className="w-full h-[72vh] bg-white p-4 md:p-6 rounded-2xl border-2 border-dashed border-[#3D1E6D]/30 shadow-inner flex items-center justify-center overflow-hidden mb-4 relative">
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

      {/* The "Paper Cut" Line Footer */}
      <div className="mt-12 pt-8 border-t-4 border-dashed border-[#3D1E6D]/20 relative"></div>
    </motion.div>
  );
}