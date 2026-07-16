import { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} width="1em" height="1em">
    <path d="M12.012 2c-5.506 0-9.988 4.478-9.988 9.984a9.92 9.92 0 0 0 1.392 5.048L2 22l5.14-1.348a9.882 9.882 0 0 0 4.872 1.28c5.506 0 9.988-4.478 9.988-9.984C22 6.478 17.518 2 12.012 2zm4.736 14.194c-.262.744-1.28 1.348-2.072 1.436-.54.062-1.242.096-3.666-.902-3.096-1.28-5.076-4.428-5.23-4.634-.156-.206-1.272-1.696-1.272-3.23 0-1.536.804-2.29 1.092-2.584.288-.294.63-.368.84-.368.21 0 .42.002.604.01.196.008.462-.074.72.548.266.64.912 2.222.99 2.38.08.158.132.342.026.548-.104.208-.158.334-.316.518-.156.182-.328.406-.468.544-.156.156-.32.326-.138.64.182.312.81 1.336 1.736 2.164.928.828 1.71 1.084 2.024 1.242.312.156.494.13.678-.08.184-.21.802-.93.102-1.244-.7-.314-1.168-.142-1.378.07z"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'TECH STACK', href: '#skills' },
    { name: 'WORK', href: '#projects' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-5 ${
        isScrolled 
          ? 'bg-[#08080a]/80 backdrop-blur-md border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between relative z-50">
          
          {/* Logo Brand */}
          <a 
            href="#" 
            className="font-mono text-xs md:text-sm tracking-[0.25em] text-white hover:text-blue-400 transition-colors duration-300 font-black uppercase"
            style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.1)' }}
          >
            VAIBHAV MISHRA // DEV
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-[0.2em] text-white/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-300 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right WhatsApp Overlay (Desktop only) */}
          <a 
            href="https://wa.me/917069035478" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 font-mono text-[9px] text-white/40 hover:text-emerald-400 tracking-[0.15em] border-l border-white/10 pl-6 transition-colors duration-300 select-none cursor-pointer"
          >
            <WhatsAppIcon className="h-4.5 w-4.5 text-emerald-500 animate-pulse" />
            <span>+91 7069035478</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="md:hidden relative flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/[0.02] backdrop-blur-md hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col gap-1.5 justify-center items-center w-5 h-5">
              <span className={`w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center ${
                isOpen ? 'rotate-45 translate-y-[4.5px]' : ''
              }`} />
              <span className={`w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center ${
                isOpen ? '-rotate-45 -translate-y-[4.5px]' : ''
              }`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`fixed inset-0 z-30 md:hidden bg-[#08080a]/98 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center gap-8 font-mono tracking-[0.25em] text-sm">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors duration-300 py-2 border-b border-transparent hover:border-blue-500"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8 flex items-center gap-3 text-[10px] text-white/30 tracking-[0.15em] border border-white/5 bg-white/[0.01] px-5 py-3 rounded-full">
            <Activity className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
            SYS_ONLINE // ENGINES_ON
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
