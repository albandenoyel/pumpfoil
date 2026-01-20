import React from 'react';
import { GearItem } from '../types';

interface GearGridProps {
  title: string;
  subtitle?: string;
  items: GearItem[];
  id: string;
}

const GearGrid: React.FC<GearGridProps> = ({ title, subtitle, items, id }) => {
  return (
    <section id={id} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{title}</h2>
          {subtitle && (
            <p className="text-lg text-slate-600 mb-6 max-w-3xl leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
          <div className="h-1.5 w-20 bg-cyan-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {items.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full hover:-translate-y-1">
              <div className="relative aspect-square overflow-hidden bg-white p-4 flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-slate-900/90 text-cyan-400 px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg">
                    {item.brand}
                  </span>
                  {item.price && (
                    <span className="bg-cyan-500 text-blue-950 px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider shadow-md w-fit">
                      {item.price}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow text-center">
                <h3 className="text-sm font-black text-slate-900 mb-4 uppercase tracking-tight leading-tight line-clamp-2 min-h-[2.5rem] flex items-center justify-center">
                  {item.name}
                </h3>
                <a 
                  href={item.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block w-full py-2.5 bg-slate-900 text-white text-[9px] font-black rounded-xl hover:bg-cyan-500 hover:text-blue-950 transition-all uppercase tracking-[0.2em] shadow-lg shadow-slate-900/10"
                >
                  View details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GearGrid;