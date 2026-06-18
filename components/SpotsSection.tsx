import React from 'react';

const SpotsSection: React.FC = () => {
  return (
    <section id="spots" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-2 uppercase tracking-tighter">Pump foil spots</h2>
        <p className="text-lg text-slate-500 mb-12 font-medium">While you can pump anywhere there is water, you usually need a starting point like a dock or a slipway.<br />Here are some of the best spots for pump foiling around the world, vetted by the community.</p>
        <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-blue-100 min-h-[500px] mt-4">
          <iframe 
            src="https://www.google.com/maps/d/embed?mid=11JFcIB3OIhHayXda8qPC-F1PYzSZE3I&hl" 
            width="100%" 
            height="500" 
            className="border-0"
            title="Pump Foil Spots Map"
            loading="lazy"
          ></iframe>
        </div>
        
        <div className="mt-12 flex flex-col items-center gap-6">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScoBWZayTg0I_BBVrEmTKAtkTTIpE9lIIPDxPBfq9Z-q6HzaA/viewform?usp=header" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-5 bg-[#001f3f] hover:bg-cyan-500 text-white hover:text-blue-950 font-black rounded-2xl transition-all uppercase tracking-widest text-xs shadow-xl shadow-blue-900/20"
          >
            Submit a spot
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpotsSection;