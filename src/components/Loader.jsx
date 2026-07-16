import { useState, useEffect } from 'react';

const loadingLogs = [
  'ESTABLISHING SECURE PROTOCOLS...',
  'CONNECTING TO SYSTEM HOST // ACTIVE...',
  'LOADING HIGH-FIDELITY ASSETS...',
  'COMPILING TAILWIND STYLING UTILITIES...',
  'INITIALIZING LENIS SMOOTH SCROLLER...',
  'OPTIMIZING CANVAS RENDER GRID...',
  'PREPARING EXPERIENTIAL INTERFACE...',
  'SYSTEM READY // EXECUTING CORE V1.0...'
];

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logText, setLogText] = useState('INITIATING BOOT SEQUENCE...');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    let currentProgress = 0;
    
    // Smooth progress tick
    const timer = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 2;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 800); // Small pause at 100%
      }
      setProgress(currentProgress);
      
      // Update logs based on progress threshold
      const logIdx = Math.floor((currentProgress / 100) * loadingLogs.length);
      if (loadingLogs[logIdx] && loadingLogs[logIdx] !== logText) {
        setLogText(loadingLogs[logIdx]);
        setLogs(prev => [...prev.slice(-3), loadingLogs[logIdx]]); // Keep last 4 logs
      }
    }, 120);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-[#08080a] p-8 md:p-12 select-none text-white font-mono transition-opacity duration-700">
      {/* Top Header */}
      <div className="flex w-full items-center justify-between text-[10px] md:text-xs tracking-[0.25em] text-white/30 uppercase">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-blue-500 rounded-full animate-ping"></span>
          SYS_STATUS // BOOTING
        </div>
        <div>M.V.R.DEV // CREATIVE STUDIO</div>
      </div>

      {/* Main Spinner & Progress */}
      <div className="flex flex-col items-start justify-center max-w-5xl mx-auto w-full flex-1">
        <div className="text-[10px] md:text-xs tracking-[0.3em] text-blue-500 font-semibold mb-2 uppercase">
          LOADING EXPERIENTIAL MEDIA SEQUENCE
        </div>
        <div className="overflow-hidden w-full relative">
          <h1 
            className="text-[14vw] font-black leading-none tracking-tighter text-white/90 select-none font-sans"
            style={{ textShadow: '0 0 40px rgba(59, 130, 246, 0.2)' }}
          >
            {progress}%
          </h1>
        </div>
        
        {/* Progress Bar Container */}
        <div className="relative mt-4 h-[2px] w-full max-w-xl overflow-hidden rounded bg-white/5">
          <div 
            className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_15px_rgba(59,130,246,0.7)] transition-transform duration-100 ease-out origin-left"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>

        {/* Live Terminal logs */}
        <div className="mt-8 space-y-1.5 text-[9px] md:text-[10px] text-white/40 tracking-wider">
          {logs.map((log, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-blue-500/60">&gt;&gt;</span>
              <span>{log}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 text-white/80 font-bold">
            <span className="text-blue-500">&gt;&gt;</span>
            <span>{logText}</span>
            <span className="h-3 w-1.5 bg-blue-400 animate-pulse ml-0.5"></span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="flex w-full flex-col gap-4 md:flex-row items-start md:items-center justify-between text-[10px] md:text-xs tracking-[0.2em] text-white/30 uppercase border-t border-white/5 pt-6">
        <div>REAL-TIME CANVAS GRID PREPARATION</div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-blue-500/50"></span>
            ENGINE_OK
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-cyan-500/50"></span>
            AOS_ON
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
