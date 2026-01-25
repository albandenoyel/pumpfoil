import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-slate-900 text-white min-h-[90vh] flex items-center">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://i.imgur.com/YBYttOq.jpeg"
          className="w-full h-full object-cover object-center scale-[1.12] origin-center"
        >
          <source src="https://player.vimeo.com/external/517614057.hd.mp4?s=4b136894054a8e0f9b0c7a4d5d4d3c6a4e3b1c2d&profile_id=174" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Cinematic overlays for better text readability and hiding watermarks */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Aggressive bottom gradient to mask any low-positioned watermarks and transition to next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase drop-shadow-2xl max-w-4xl">
            Get started with <br className="hidden md:block" /> <span className="text-cyan-400">pump foiling</span>
          </h1>
          
          <div className="max-w-3xl mb-12">
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed font-medium drop-shadow-lg">
              A pump foil is a hydrofoil connected to a board, powered just by your legs, which lets you fly above water. The feeling of glide is absolutely unique. You can practice this magical sport every day of the year, and anywhere there is water. You will find here resources about the best foils, boards, tutorials and spots to get started with foil pumping. This site is a resource to help people find everything they need to get started: gears, spots, tutorials and more
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <a href="#foils" className="group px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-blue-950 font-black rounded-2xl transition-all text-center shadow-xl shadow-cyan-500/30 uppercase tracking-widest text-xs flex items-center justify-center gap-3 w-full sm:w-auto">
              Find Your Gear
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            <a 
              href="#tutorials"
              className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-black rounded-2xl border border-white/20 transition-all text-center uppercase tracking-widest text-xs flex items-center justify-center gap-3 w-full sm:w-auto group"
            >
              <svg className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Check tutorials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;