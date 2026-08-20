import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, BookOpen } from 'lucide-react';

export default function Hero({ onOpen }) {
  return (
    <div className="min-h-screen bg-amber-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] flex items-center justify-center p-6">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative max-w-xl w-full bg-pink-50 border-4 border-dashed border-pink-300 rounded-3xl p-8 shadow-2xl text-center transform -rotate-1"
      >
        {/* Washi tape header */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-yellow-200/90 rotate-2 shadow-sm border border-yellow-400"></div>

        <span className="inline-flex items-center gap-1 bg-pink-200 text-pink-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
          <Sparkles size={14} /> Confidential & Special <Sparkles size={14} />
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
          CLAssified Chronicles: Unfiltered 📖
        </h1>
        <p className="text-slate-600 font-medium mb-8">
          The Official Burn-ish Slambook of Maria Clarissa D. Raquinel
        </p>

        <motion.button
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="px-8 py-3 bg-pink-500 text-white font-bold rounded-xl shadow-lg hover:bg-pink-600 transition flex items-center justify-center gap-2 mx-auto text-lg"
          style={{ fontFamily: 'Caveat, cursive', fontSize: '1.8rem' }}
        >
          <BookOpen size={22} /> Open The Slambook
        </motion.button>
      </motion.div>
    </div>
  );
}