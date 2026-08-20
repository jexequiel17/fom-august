import React from 'react';
import TheColdHardFacts from './components/TheColdHardFacts';
import FavoriteThings from './components/FavoriteThings';
import ClarissaExplainItAll from './components/ClarissaExplainItAll';
import BurnishBook from './components/BurnishBook';
import PhotoGallery from './components/PhotoGallery';
import { Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#2c1e13] bg-[radial-gradient(#3d2919_1px,transparent_1px)] [background-size:24px_24px] p-2 sm:p-4 md:p-6 font-sans w-full overflow-x-hidden">
      
      {/* Wooden Desk Outer Frame - Spans 100% of mobile screen width */}
      <div className="relative w-full bg-[#f4ebd0] rounded-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border-2 sm:border-4 md:border-8 border-[#3b2314] p-3 sm:p-6 md:p-8 overflow-hidden box-border">
        
        {/* Decorative Paper Clips on top left */}
        <div className="absolute top-4 left-6 hidden md:flex gap-2 opacity-60 pointer-events-none z-30">
          <div className="w-4 h-8 border-2 border-slate-400 rounded-full rotate-45"></div>
          <div className="w-4 h-8 border-2 border-slate-400 rounded-full rotate-12"></div>
        </div>

        {/* Inner Paper Page Container */}
        <div className="relative z-10 bg-[#fdfbf7] rounded-lg shadow-inner border-2 border-[#e6dcc3] p-3 sm:p-6 md:p-10 w-full box-border">
          
          {/* Top Washi Tape Decoration */}
          <div className="absolute -top-3 left-1/4 w-36 h-7 bg-yellow-200/95 -rotate-2 shadow-sm border-dashed border border-yellow-400 z-20"></div>
          <div className="absolute -top-3 right-1/4 w-32 h-7 bg-pink-200/95 rotate-3 shadow-sm border-dashed border border-pink-400 z-20"></div>

          {/* Slambook Title Header */}
          <div className="text-center mb-8 md:mb-10 pt-4">
            <span className="inline-flex items-center gap-1 bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs sm:text-sm font-bold mb-3 border border-pink-200">
              <Sparkles size={14} /> CLAssified Chronicles: Unfiltered <Sparkles size={14} />
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight" style={{ fontFamily: 'Caveat, cursive', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
              The Official Burn-ish Slambook
            </h1>
            <p className="text-slate-500 font-medium text-base sm:text-lg mt-1" style={{ fontFamily: 'Caveat, cursive', fontSize: 'clamp(1.3rem, 3vw, 1.6rem)' }}>
              Featuring Maria Clarissa D. Raquinel 📖✨
            </p>
          </div>

          {/* Scrollable Stack of All Sections */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 w-full">
            <TheColdHardFacts />
            <FavoriteThings />
            <ClarissaExplainItAll />
            <BurnishBook />
            <PhotoGallery />
          </div>

          {/* Notebook Footer */}
          <div className="text-center mt-12 sm:mt-16 pb-4 text-slate-400 text-xs sm:text-sm font-serif italic border-t border-slate-200 pt-6">
            - End of the Chronicles. You made it all the way down! 🎉 -
          </div>

        </div>
      </div>
    </div>
  );
}