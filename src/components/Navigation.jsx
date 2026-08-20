import React from 'react';
import { motion } from 'motion/react';
import { User, Heart, MessageCircle, Flame, Image as ImageIcon } from 'lucide-react';

export default function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'facts', label: 'The Facts', icon: User, color: 'bg-pink-100 text-pink-700 border-pink-300' },
    { id: 'favorites', label: 'Favorite Things', icon: Heart, color: 'bg-yellow-100 text-yellow-700 border-yellow-300' },
    { id: 'explains', label: 'Explains It All', icon: MessageCircle, color: 'bg-blue-100 text-blue-700 border-blue-300' },
    { id: 'burnish', label: 'Burn-ish Book', icon: Flame, color: 'bg-purple-100 text-purple-700 border-purple-300' },
    { id: 'gallery', label: 'Photo Vault', icon: ImageIcon, color: 'bg-green-100 text-green-700 border-green-300' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <motion.button
            key={tab.id}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl font-bold border-2 transition-all shadow-sm ${
              isActive 
                ? `${tab.color} ring-2 ring-offset-2 ring-pink-400 shadow-md scale-105` 
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
            style={{ fontFamily: 'Caveat, cursive', fontSize: '1.5rem' }}
          >
            <Icon size={18} />
            {tab.label}
          </motion.button>
        );
      })}
    </div>
  );
}