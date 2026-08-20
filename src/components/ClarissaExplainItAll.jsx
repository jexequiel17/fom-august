import React from 'react';
import { motion } from 'motion/react';

export default function ClarissaExplainItAll() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#FFFDF9] border-4 md:border-8 border-[#3D1E6D] p-6 md:p-10 relative shadow-2xl overflow-hidden font-sans w-full"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(200, 200, 200, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 200, 200, 0.08) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      {/* Decorative butterfly / pink elements */}
      <div className="absolute top-4 left-4 text-pink-300 text-3xl select-none pointer-events-none opacity-40">🦋</div>
      <div className="absolute top-1/3 left-2 text-pink-300 text-2xl select-none pointer-events-none opacity-40">🦋</div>
      <div className="absolute bottom-20 left-4 text-pink-300 text-3xl select-none pointer-events-none opacity-40">🦋</div>
      <div className="absolute top-4 right-12 text-pink-400 text-xl select-none pointer-events-none opacity-60">💋</div>

      <div className="relative z-10 space-y-6">
        
        {/* Header - Clarissa Explains It All */}
        <div className="text-center pb-2 relative mb-1">
          <div className="flex flex-wrap justify-center items-baseline gap-x-2">
            <span className="text-[#00B4D8] font-extrabold text-3xl md:text-5xl italic" style={{ fontFamily: 'Caveat, cursive' }}>
              Clarissa
            </span>
            <span className="text-2xl md:text-4xl font-black uppercase text-[#3D1E6D] tracking-tight" style={{ fontFamily: 'Caveat, cursive' }}>
              Explains It All
            </span>
          </div>
          <div className="w-64 h-0.5 bg-[#b57bee]/30 mx-auto mt-1"></div>
        </div>

        {/* Top Section: Flex layout with items-stretch locks the image height to match the two text cards perfectly on desktop */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          
          {/* Photo Box with a Real Scrapbook Tape Effect */}
<div className="w-full lg:w-1/4 flex flex-col">
  <div className="relative w-full h-72 sm:h-96 lg:h-auto lg:flex-1 overflow-hidden rounded-2xl shadow-md border-2 border-[#3D1E6D]/30 bg-[#fefae0] p-3 pb-8 rotate-[-1deg] lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
    
    {/* Realistic Scrapbook Tape */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-yellow-100/70 backdrop-blur-xs shadow-xs rotate-[-2deg] z-20 pointer-events-none opacity-90 border-x border-yellow-200/50"
         style={{
           backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(240,230,200,0.6) 50%, rgba(255,255,255,0.4) 100%)',
           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
         }}
    ></div>

    <img 
      src="./src/assets/images/1785664921144.png" 
      alt="Clarissa Portrait" 
      className="w-full h-full object-cover absolute inset-0"
    />
  </div>
</div>

          {/* Right side stacked divs for 2 and 3 */}
          <div className="w-full lg:w-3/4 flex flex-col justify-between space-y-5">
            {/* 2. I, ME, AND MYSELF */}
            <div className="bg-white border-2 border-[#3D1E6D]/20 rounded-2xl px-6 py-4 shadow-xs flex flex-col gap-1 rotate-1 lg:rotate-0 transition-transform">
              <span title='(Describe yourself using 3 words and why)' className="font-black text-xl uppercase tracking-wider text-[#3D1E6D] cursor-pointer">I, ME, AND MYSELF:</span>
              <p className="text-slate-800 font-bold leading-snug" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
                <span className="border-b-2 border-dashed border-[#3D1E6D]/30 pb-0.5 leading-relaxed inline-block">
                  I describe myself as observant, tolerant, and a problem solver. I like to observe situations, interactions, surroundings, and other things that catch my interest and curiosity. I am tolerant because I can listen to people with diverse perspectives, stories, and judgements while managing my biases and difference in opinion. I am a problem solver because I like to think and act with solutions. If the problem is unsolvable, then I let the problem solve itself.
                </span>
              </p>
            </div>

            {/* 3. FIRST IMPRESSION */}
            <div className="bg-white border-2 border-[#3D1E6D]/20 rounded-2xl px-6 py-4 shadow-xs flex flex-col gap-1 -rotate-1 lg:rotate-0 transition-transform">
              <span title='(Name & what people notice about you first)'
              className="font-black text-xl uppercase tracking-wider text-[#3D1E6D] cursor-pointer">FIRST IMPRESSION:</span>
              <span className="text-slate-800 font-bold pb-1 leading-tight border-b border-dashed border-slate-300" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
                If I didn’t make the first move to socialize because I am in my energy saving mode, I think people's impressions of me are the following: quiet, nonchalant, and shy. But if I did otherwise, I’ll gain a different impression. It will be warm, friendly, and courteous. What people first notice while interacting with me depends on my social battery in general. I am not surprised if people will have different first impressions of me.
              </span>
            </div>
          </div>

        </div>

        {/* 4. PARTNER IN CRIME POTENTIAL */}
        <div className="bg-white border-2 border-[#3D1E6D]/20 rounded-2xl px-6 py-4 shadow-xs flex flex-col gap-1 rotate-1 lg:rotate-0 transition-transform">
          <span title='(The Person or people you can be with and feel that you can do anything with)' className="font-black text-xl uppercase tracking-wider text-[#3D1E6D] cursor-pointer">
            PARTNER IN CRIME POTENTIAL:
          </span>
          <p className="text-slate-800 font-bold leading-snug" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
            <span className="border-b-2 border-dashed border-[#3D1E6D]/30 pb-0.5 leading-relaxed inline-block">
              My partners in crime are my sisters: Jodi, Karen, Celestine, and Hillary as well as my best friends Noemie and Pamela! We have seen and stood by each other’s versions and seasons in life. I am also blessed to have Amrish, my brother-in-law who acts as a true brother not only to me but also to my sisters. Of course, I would never forget my parents for guiding me through life. Even if I am an adult already, they are my go to people when situations get serious. All of them form part of my core support system. 
              <br/><br/>
              When it comes to DSWD Academy, it's the very supportive CBD-PLDS team starring Ms. Joesa as Division Chief and Ms. Thea as Section Chief along with the entire cast and crew of competent training specialists, project development officers, and administrative staff with special participation of my DA-RSIDG officemates who are ready for their mature roles (mature roles???). Your presence is well appreciated even if I am not around to socialize with sometimes? Haha. Just so you know, I appreciate you all.
            </span>
          </p>
        </div>

        {/* 5. KNOWN ALIBIS */}
        <div className="mt-4 relative">
          <div className="absolute -top-3 left-6 bg-[#00B4D8] text-white text-[9px] px-3 py-0.5 rounded-full font-bold shadow-xs flex items-center gap-1 z-20">
            <span>🎀</span> BOW CLIP
          </div>
          <div className="bg-white border-2 border-[#3D1E6D]/20 rounded-2xl p-5 relative shadow-xs overflow-hidden -rotate-1 lg:rotate-0 transition-transform">
            {/* House Watermark SVG placed on the right side */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-25">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-pink-400">
                <path d="M12 3L2 12h3v8h5v-6h4v6h5v-8h3L12 3zm5 15h-1v-6H8v6H7v-7.81l5-4.5 5 4.5V18z"/>
                <path d="M10 10h4v2h-4z"/>
              </svg>
            </div>
            
            <h3 title=' (Where are you usually found when avoiding responsibilities?)'
            className="font-black text-xl uppercase tracking-wider text-[#3D1E6D] mb-3 cursor-pointer relative z-10">
              KNOWN ALIBIS
            </h3>
            <div className="space-y-3 pt-1 relative z-10">
              <div className="border-b border-dashed border-pink-200 pb-2">
                <p className="text-slate-800 font-bold" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
                  I am nowhere to be found. I won’t even tell where I am! 😂
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6. THE RAP SHEET */}
        <div className="bg-white border-2 border-[#3D1E6D]/20 rounded-2xl px-6 py-4 shadow-xs flex flex-col gap-1 relative overflow-hidden rotate-1 lg:rotate-0 transition-transform">
          <span title='(Your guiltiest pleasures and harmless crimes)'
          className="font-black text-xl uppercase tracking-wider text-[#3D1E6D] cursor-pointer relative z-10">
            THE RAP SHEET:
          </span>
          
          <p className="text-slate-800 font-bold leading-snug relative z-10" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
            <span className="border-b-2 border-dashed border-[#3D1E6D]/30 pb-0.5 leading-relaxed inline-block">
              Listening to music while working, doing academic stuff, or chores! 🎶
            </span>
          </p>

          {/* Right Side Design Element */}
          <div className="absolute right-3 -bottom-3 text-pink-200/80 select-none pointer-events-none z-0">
            <svg 
              width="80" 
              height="80" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
          </div>
        </div>

        {/* 7. PLOT TWIST */}
        <div className="bg-white border-2 border-[#3D1E6D]/20 rounded-2xl px-6 py-4 shadow-xs flex flex-col gap-1 -rotate-1 lg:rotate-0 transition-transform">
          <span 
            title="(Your most embarrassing story or unexpected flex)"
            className="font-black text-xl uppercase tracking-wider text-[#3D1E6D] cursor-pointer"
          > PLOT TWIST: </span>
          <p className="text-slate-800 font-bold leading-snug" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
            <span className="border-b-2 border-dashed border-[#3D1E6D]/30 pb-0.5 leading-relaxed inline-block">
              Back in college, I almost fell asleep in my Statistics class discussion. I think my professor noticed it, that is why she handed me a chalk and told me to solve a data set calculation on the board. I slowly approached the board holding my scientific calculator to buy time in analyzing the formula and example provided. Then, lo and behold, I solved it correctly! I got interested in Statistics after that.
            </span>
          </p>
        </div>

        {/* Two Bottom Cards Grid matching Journal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Bottom Card 1: I just have to say this */}
          <div className="bg-[#fef9c3] border-2 border-yellow-400 rounded-2xl p-5 relative shadow-sm flex flex-col justify-between rotate-1 lg:rotate-0 transition-transform">
            <div className="absolute -top-3 left-6 bg-pink-400 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs flex items-center gap-1">
              <span>📌</span> PIN
            </div>
            <div>
              <h3 className="font-black text-xl uppercase tracking-wider text-yellow-900 mb-2">
                I just have to say this: <span className="font-normal normal-case text-sm text-yellow-800/80">(Your best piece of unsolicited advice)</span>
              </h3>
              <p className="text-slate-800 font-bold leading-tight" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
                To the person reading this, congratulations you made it till the end of this feature. I think, okay na to. hahaha. But seriously, all I can say is that any person can begin achieving their goals in their own timeline since we have different roads to take in life. It's incomparable to anyone else because we have our own story to write. Di ka nahuhuli sa sarili mong buhay. You are just right on time (Raquinel, 2026).
              </p>
            </div>
          </div>

          {/* Bottom Card 2: In Short, I Am */}
          <div className="bg-[#e0f2fe] border-2 border-sky-300 rounded-2xl p-5 relative shadow-sm flex flex-col justify-between -rotate-1 lg:rotate-0 transition-transform">
            <div className="absolute -top-3 left-6 bg-amber-300 text-amber-900 text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs flex items-center gap-1">
              <span>🌸</span> FLOWER TAG
            </div>
            <div>
              <h3 className="font-black text-xl uppercase tracking-wider text-sky-900 mb-2">
                IN SHORT, I AM
              </h3>
              <p className="text-slate-800 font-bold leading-tight" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
                Observant problem-solver managing diverse perspectives with practical solutions and a balanced social battery! 🧩💙
              </p>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}