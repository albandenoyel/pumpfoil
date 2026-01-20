import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Foils', href: '#foils' },
    { name: 'Boards', href: '#boards' },
    { name: 'Tutorials', href: '#tutorials' },
    { name: 'Spots', href: '#spots' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#001f3f]/95 backdrop-blur-lg border-b border-blue-900/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 overflow-hidden">
                <img 
                  src="logo.png" 
                  alt="Pumping Foil Logo" 
                  className="w-full h-full object-cover"
                />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter uppercase">PUMPING FOIL .com</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-blue-100/70 hover:text-white hover:bg-white/10 px-4 py-2 rounded-xl text-sm font-bold transition-all uppercase tracking-widest">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-blue-100 hover:text-white focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#001f3f] border-b border-blue-900/50 p-4 animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-blue-100 hover:text-cyan-400 block px-4 py-3 rounded-xl text-lg font-bold uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;