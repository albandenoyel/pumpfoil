
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-slate-900 text-white min-h-[90vh] flex items-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/YBYttOq.jpeg" 
          alt="Pumping foil session" 
          className="w-full h-full object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          loading="eager"
        />
        {/* Dynamic cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase drop-shadow-2xl max-w-4xl">
            Get started with <br className="hidden md:block" /> <span className="text-cyan-400">pump foiling</span>
          </h1>
          
          <div className="max-w-3xl mb-12">
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed font-medium drop-shadow-lg">
              A pumping foil is a hydrofoil connected to a board, powered just by your legs, which lets you fly above water. The feeling of glide is absolutely unique. You can practice this magical sport every day of the year, and anywhere there is water. You will find here ressources about the best foils, boards, tutorials and spots to get started with foil pumping.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <a href="#foils" className="group px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-blue-950 font-black rounded-2xl transition-all text-center shadow-xl shadow-cyan-500/30 uppercase tracking-widest text-xs flex items-center justify-center gap-3 w-full sm:w-auto">
              Find Your Gear
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            <button 
              onClick={() => setShowVideo(true)}
              className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-black rounded-2xl border border-white/20 transition-all text-center uppercase tracking-widest text-xs flex items-center justify-center gap-3 w-full sm:w-auto group"
            >
              <svg className="w-5 h-5 text-cyan-400 fill-current group-hover:scale-125 transition-transform" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              See it in action
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-fadeIn">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={() => setShowVideo(false)}></div>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 animate-scaleIn">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-6 right-6 z-10 p-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl backdrop-blur-md transition-all group"
            >
              <svg className="w-6 h-6 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/7F4LxOjEy8Y?si=a1gvEnTzJl8cD48L&autoplay=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.0); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
