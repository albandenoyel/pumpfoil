import React from 'react';

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-cyan-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-blue-600 rounded-full blur-[100px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">Pumping <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Updates</span></h2>
            <p className="text-blue-100/60 text-lg leading-relaxed">The latest news from the pump foil community.</p>
          </div>
          <a href="https://www.instagram.com/pumpfoilnews" target="_blank" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 transition-all flex items-center gap-3 font-black text-xs uppercase tracking-widest group">Follow @pumpfoilnews</a>
        </div>
        <div className="relative group bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 p-4 max-w-[100%] mx-auto">
          <iframe 
            src="https://www.instagram.com/pumpfoilnews/embed" 
            frameBorder="0" 
            width="100%" 
            height="480" 
            style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}
            title="Pump Foil News Feed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;