import React from 'react';
import { TUTORIALS } from '../constants';

const TutorialsSection: React.FC = () => {
  return (
    <section id="tutorials" className="py-16 bg-[#001f3f] text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">The pump foil school</h2>
            <p className="text-blue-200/60 text-lg leading-relaxed font-medium">
              Mastering dockstart and sustained pumping takes resilience. These tutorials will guide you from first splash to first minute
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-14 h-14 rounded-full border-4 border-[#001f3f] bg-slate-800 overflow-hidden shadow-xl">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-14 h-14 rounded-full border-4 border-[#001f3f] bg-cyan-500 flex items-center justify-center text-blue-950 font-black text-xs">
                +2k
              </div>
            </div>
            <p className="text-[10px] text-blue-300 font-bold uppercase tracking-widest mt-2 text-center">Community Pilots</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {TUTORIALS.map((tut) => (
            <a 
              key={tut.id} 
              href={tut.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <img 
                  src={tut.thumbnail} 
                  alt={tut.title} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-[#001f3f]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 bg-cyan-500 text-blue-950 rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                    <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 bg-black/90 backdrop-blur-md text-white text-[7px] font-black px-1.5 py-0.5 rounded-md border border-white/10 uppercase tracking-widest">
                  {tut.duration}
                </div>
              </div>
              <div className="p-2 flex flex-col flex-grow text-center">
                <h3 className="text-[11px] font-black mb-0.5 group-hover:text-cyan-400 transition-colors leading-tight uppercase tracking-tight line-clamp-2 min-h-[1.5rem] flex items-center justify-center">
                  {tut.title}
                </h3>
                <div className="mt-auto">
                   <div className="w-4 h-0.5 bg-cyan-500/40 mx-auto mb-1"></div>
                   <p className="text-[7px] text-blue-300 font-black uppercase tracking-[0.2em] opacity-80">{tut.author}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-br from-cyan-600 to-blue-900 rounded-[3rem] p-10 md:p-20 text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-3xl -mr-[20rem] -mt-[20rem] group-hover:bg-cyan-400/20 transition-all duration-1000"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-cyan-200 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Weekly Transmission</span>
              <h4 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-none">Stay in the <br /> <span className="text-cyan-300">Infinite Flight</span></h4>
              <p className="text-blue-50 text-xl opacity-90 leading-relaxed font-light">Join the hub to receive the latest foil releases, spot openings, and secret tech tips from professional pumpers.</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
              <input type="email" placeholder="YOUR EMAIL ADDRESS" className="bg-[#001f3f]/40 backdrop-blur-lg border border-white/20 rounded-2xl px-8 py-6 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full lg:w-96 font-bold uppercase tracking-widest text-xs" />
              <button className="bg-white text-blue-950 px-12 py-6 rounded-2xl font-black hover:bg-cyan-400 hover:text-blue-950 transition-all uppercase tracking-widest text-xs shadow-2xl">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;