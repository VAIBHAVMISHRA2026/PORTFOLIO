import { Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08080a] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Brand */}
          <div className="text-center md:text-left font-mono">
            <span className="text-sm font-bold bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent uppercase tracking-[0.2em]">
              MISHRA VAIBHAV RAJEEV
            </span>
            <p className="text-[9px] text-white/30 tracking-[0.1em] mt-1 uppercase">
              EXPERIENTIAL DIGITAL PRODUCTS // DEVELOPMENT GATEWAY.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 font-mono text-[10px] tracking-[0.15em] text-white/40">
            <a href="#about" className="hover:text-white transition-colors duration-300">ABOUT</a>
            <a href="#skills" className="hover:text-white transition-colors duration-300">TECH STACK</a>
            <a href="#projects" className="hover:text-white transition-colors duration-300">WORK</a>
            <a href="#experience" className="hover:text-white transition-colors duration-300">EXPERIENCE</a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">CONTACT</a>
          </div>

          {/* Socials & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3 font-mono">
            <div className="flex gap-4">
              <a 
                href="https://github.com/VAIBHAVMISHRA2026" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/30 hover:text-white transition-colors duration-300 border border-white/5 bg-white/[0.01] hover:bg-white/[0.05] p-2 rounded-xl"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vaibhav-mishra-b063163b2/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/30 hover:text-white transition-colors duration-300 border border-white/5 bg-white/[0.01] hover:bg-white/[0.05] p-2 rounded-xl"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a 
                href="mailto:vaibhavmi2026@gmail.com" 
                className="text-white/30 hover:text-white transition-colors duration-300 border border-white/5 bg-white/[0.01] hover:bg-white/[0.05] p-2 rounded-xl"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
            </div>
            <p className="text-[9px] text-white/20 uppercase tracking-[0.1em]">
              &copy; {currentYear} M.V.R. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
