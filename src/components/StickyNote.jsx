import React from 'react';
import { motion } from 'motion/react';

export default function StickyNote({ message, rotation = 'rotate-2', color = 'bg-yellow-100', className = '' }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03, rotate: 0 }}
      className={`relative inline-block ${color} p-6 rounded-lg shadow-md border border-yellow-200 transform ${rotation} ${className}`}
    >
      {/* Washi tape strip on top center */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-yellow-300/80 rotate-1 shadow-sm border-dashed border border-yellow-400"></div>

      <p className="text-slate-800 text-xl font-medium tracking-wide" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.8rem' }}>
        {message}
      </p>
    </motion.div>
  );
}