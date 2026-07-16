import { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Hero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  
  const targetTime = useRef(0);
  const currentTime = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Create and preload the scroll video
    const video = document.createElement('video');
    video.src = '/profile.mp4';
    video.preload = 'auto';
    video.muted = true;
    video.playsInline = true;
    video.load();
    videoRef.current = video;

    let animId;
    let offsetX = 0;
    let offsetY = 0;

    const render = () => {
      if (video.readyState >= 2) {
        // Smoothly interpolate current time to target scrub time (prevent stutter)
        const diff = targetTime.current - currentTime.current;
        if (Math.abs(diff) > 0.005) {
          currentTime.current += diff * 0.12;
          video.currentTime = currentTime.current;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate scale to fit canvas width/height (fullscreen cover)
        const scale = Math.max(canvas.width / video.videoWidth, canvas.height / video.videoHeight);
        const w = video.videoWidth * scale;
        const h = video.videoHeight * scale;
        
        // Draw centered on canvas with hover offset
        const x = (canvas.width - w) / 2 + offsetX;
        const y = (canvas.height - h) / 2 + offsetY;

        ctx.drawImage(video, x, y, w, h);
      }
      animId = requestAnimationFrame(render);
    };

    video.onloadeddata = () => {
      render();
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Scroll mapping
    const onScroll = () => {
      const parent = containerRef.current;
      if (!parent) return;
      
      const parentTop = parent.offsetTop;
      const parentHeight = parent.offsetHeight;
      
      // Calculate scroll coordinates relative to sticky container
      const scrollTop = window.scrollY - parentTop;
      const scrollMax = parentHeight - window.innerHeight;
      
      const fraction = Math.min(1, Math.max(0, scrollTop / scrollMax));
      setScrollProgress(fraction);

      if (video.duration) {
        targetTime.current = fraction * video.duration;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Hover mouse tilt offset drift
    const onMouseMove = (e) => {
      const cx = e.clientX - window.innerWidth / 2;
      const cy = e.clientY - window.innerHeight / 2;
      offsetX = cx * 0.03;
      offsetY = cy * 0.03;
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // Compute opacities and offsets dynamically based on the scroll fraction
  // 1. Centered Hero Text
  const heroOpacity = Math.max(0, 1 - scrollProgress * 5);
  const heroTranslateY = scrollProgress * -80;

  // 2. Vision 01 Card (Left side)
  let visionOpacity = 0;
  if (scrollProgress >= 0.22 && scrollProgress < 0.58) {
    if (scrollProgress < 0.32) {
      visionOpacity = (scrollProgress - 0.22) / 0.1; // Fade-in
    } else if (scrollProgress >= 0.32 && scrollProgress < 0.48) {
      visionOpacity = 1; // Stay
    } else {
      visionOpacity = 1.0 - (scrollProgress - 0.48) / 0.1; // Fade-out
    }
  }
  const visionTranslateY = (0.35 - Math.min(0.48, Math.max(0.22, scrollProgress))) * 150;

  // 3. Fusion 02 Card (Right side)
  let fusionOpacity = 0;
  if (scrollProgress >= 0.60 && scrollProgress < 0.95) {
    if (scrollProgress < 0.70) {
      fusionOpacity = (scrollProgress - 0.60) / 0.1; // Fade-in
    } else if (scrollProgress >= 0.70 && scrollProgress < 0.85) {
      fusionOpacity = 1; // Stay
    } else {
      fusionOpacity = 1.0 - (scrollProgress - 0.85) / 0.1; // Fade-out
    }
  }
  const fusionTranslateY = (0.72 - Math.min(0.85, Math.max(0.60, scrollProgress))) * 150;

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative w-full h-[500vh] bg-[#08080a]"
    >
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Background Canvas (Video scrubbing is rendered here) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <canvas ref={canvasRef} className="w-full h-full object-cover block" />
          
          {/* Cyberpunk overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/30 via-transparent to-[#08080a] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_1000px_at_center,rgba(59,130,246,0.03),transparent_80%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none opacity-20" />
        </div>

        {/* Content Overlays Layer */}
        <div className="absolute inset-0 z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-center pointer-events-none">
          
          {/* Overlay 1: Centered Hero Title */}
          <div 
            className="absolute flex flex-col items-center justify-center text-center select-none w-full"
            style={{ 
              opacity: heroOpacity, 
              transform: `translateY(${heroTranslateY}px)`,
              pointerEvents: heroOpacity > 0.1 ? 'auto' : 'none'
            }}
          >
            <span 
              className="text-[9px] md:text-[10px] font-mono tracking-[0.4em] text-blue-500 uppercase glow-text mb-4 inline-flex items-center gap-2 bg-blue-500/5 px-4 py-1.5 rounded-full border border-blue-500/10"
              style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.3)' }}
            >
              <Sparkles className="h-3.5 w-3.5 animate-spin duration-3000 text-blue-400" />
              Full Stack Developer &amp; AI Enthusiast
            </span>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-none mb-6">
              MISHRA VAIBHAV RAJEEV
            </h1>
            
            <div className="h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent w-48 my-3" />
            
            <p className="text-[10px] md:text-xs tracking-[0.2em] font-mono text-white/40 uppercase animate-pulse">
              SCROLL DOWN TO VIEW MY PORTFOLIO
            </p>
          </div>

          {/* Overlay 2: Left-Aligned Vision 01 Card */}
          <div 
            className="absolute inset-x-6 md:left-12 lg:left-24 md:max-w-lg flex items-center justify-center md:justify-start"
            style={{ 
              opacity: visionOpacity, 
              transform: `translateY(${visionTranslateY}px)`,
              pointerEvents: visionOpacity > 0.1 ? 'auto' : 'none'
            }}
          >
            <SpotlightCard className="group p-8 md:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/5 relative overflow-hidden bg-black/40 backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-500 to-indigo-500" />
              <div className="text-[9px] font-mono tracking-[0.25em] text-blue-500 mb-3 uppercase">// WHAT I BUILD</div>
              <h3 className="text-xl md:text-3xl font-extrabold tracking-tight text-white mb-4 uppercase leading-tight">
                Web &amp; Mobile Development
              </h3>
              <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                Building responsive websites using React and Next.js, and native mobile applications using Flutter. This includes active development on my startup, grmanager.in.
              </p>
            </SpotlightCard>
          </div>

          {/* Overlay 3: Right-Aligned Fusion 02 Card */}
          <div 
            className="absolute inset-x-6 md:right-12 lg:right-24 md:max-w-lg flex items-center justify-center md:justify-end"
            style={{ 
              opacity: fusionOpacity, 
              transform: `translateY(${fusionTranslateY}px)`,
              pointerEvents: fusionOpacity > 0.1 ? 'auto' : 'none'
            }}
          >
            <SpotlightCard className="group p-8 md:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/5 relative overflow-hidden bg-black/40 backdrop-blur-md" glowColor="rgba(139, 92, 246, 0.1)">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-indigo-500 to-purple-500" />
              <div className="text-[9px] font-mono tracking-[0.25em] text-purple-400 mb-3 uppercase">// FOCUS AREA</div>
              <h3 className="text-xl md:text-3xl font-extrabold tracking-tight text-white mb-4 uppercase leading-tight">
                AI Integration &amp; Security
              </h3>
              <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                Integrating AI features to automate tasks in web applications, while learning how to secure servers, APIs, and databases from online threats.
              </p>
            </SpotlightCard>
          </div>

        </div>

        {/* Scroll indicator button (visible only at the beginning) */}
        {scrollProgress < 0.05 && (
          <div className="absolute bottom-10 z-20 flex justify-center w-full animate-bounce">
            <ArrowRight className="h-5 w-5 text-blue-400 rotate-90" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
