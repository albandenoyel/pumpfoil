import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001f3f] text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/20 overflow-hidden">
               <img 
                  src="logo.png" 
                  alt="Pump Foil Logo" 
                  className="w-full h-full object-cover"
                />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">Pump foil.com</span>
          </div>
          
          <div className="flex gap-10">
            <a href="#" className="text-blue-200/50 hover:text-cyan-400 transition-colors font-bold uppercase tracking-widest text-xs">Privacy</a>
            <a href="#" className="text-blue-200/50 hover:text-cyan-400 transition-colors font-bold uppercase tracking-widest text-xs">Terms</a>
            <a href="#" className="text-blue-200/50 hover:text-cyan-400 transition-colors font-bold uppercase tracking-widest text-xs">Instagram</a>
          </div>
          
          <p className="text-blue-200/30 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2026 pumpfoil.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;