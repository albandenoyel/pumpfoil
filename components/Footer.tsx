import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001f3f] text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-2xl shadow-cyan-500/20 overflow-hidden">
                <img 
                  src="logo.png" 
                  alt="Pump Foil Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">Pump foil</span>
            </div>
            <p className="text-blue-200/50 text-sm leading-relaxed max-w-xs">
              The place to start your pump foiling journey. Explore gear, master the dockstart, and find your next flight spot.
            </p>
          </div>

          {/* Sitemap: Gear */}
          <div>
            <h4 className="text-cyan-400 font-black uppercase tracking-widest text-xs mb-6">Equipment Guide</h4>
            <ul className="space-y-4">
              <li><a href="#foils" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Pump Foils</a></li>
              <li><a href="#boards" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Pump foil Boards</a></li>
            </ul>
          </div>

          {/* Sitemap: Learning */}
          <div>
            <h4 className="text-cyan-400 font-black uppercase tracking-widest text-xs mb-6">Foil School</h4>
            <ul className="space-y-4">
              <li><a href="#tutorials" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Dockstart Tutorials</a></li>
              <li><a href="#faq" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Beginner FAQ</a></li>
            </ul>
          </div>

          {/* Sitemap: Community */}
          <div>
            <h4 className="text-cyan-400 font-black uppercase tracking-widest text-xs mb-6">Pump foil ecosystem</h4>
            <ul className="space-y-4">
              <li><a href="#spots" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Pump Foil Spots Map</a></li>
              <li><a href="#news" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Pump foil news</a></li>
              <li><a href="#resources" className="text-blue-100/60 hover:text-white transition-colors text-sm font-bold">Community resources</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-10">
            <a href="https://www.instagram.com/pumpfoilnews" target="_blank" rel="noopener noreferrer" className="text-blue-200/30 hover:text-cyan-400 transition-colors font-bold uppercase tracking-widest text-[10px]">Instagram</a>
          </div>
          
          <p className="text-blue-200/20 text-[10px] font-black uppercase tracking-[0.4em]">
            © 2026 pumpfoil.com 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
