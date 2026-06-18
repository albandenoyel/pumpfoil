import React from 'react';
import { TUTORIALS } from '../constants';

const TutorialsSection: React.FC = () => {
  return (
    <section id="tutorials" className="py-16 bg-[#001f3f] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">The pump foil school</h2>
          <p className="text-blue-200/60 text-lg mb-6 max-w-3xl font-medium">Mastering dockstart and sustained pumping takes resilience. These tutorials will guide you from first splash to first minute</p>
          <div className="h-1.5 w-20 bg-cyan-500 rounded-full mx-auto md:mx-0"></div>
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
      </div>
    </section>
  );
};

export default TutorialsSection;