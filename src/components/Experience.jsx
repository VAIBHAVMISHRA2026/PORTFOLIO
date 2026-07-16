import { Calendar, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Experience = () => {
  const experiences = [
    {
      role: 'FOUNDER & CHIEF DEVELOPER',
      company: 'GRMANAGER.IN // TECH STARTUP',
      duration: '2024 - PRESENT',
      description: 'Bootstrapped and launched grmanager.in. Designed mobile responsive web dashboard layouts, integrated database relational nodes, optimized express backend controllers, and managed client feedback loops.',
      icon: Briefcase,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]',
    },
    {
      role: 'B.TECH IN COMPUTER ENGINEERING',
      company: 'UNDERGRADUATE PATH // 3RD YEAR',
      duration: '2023 - PRESENT',
      description: 'Acquiring theoretical frameworks in software engineering, database schemas, object-oriented compilation, and network configurations.',
      icon: GraduationCap,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]',
    },
    {
      role: 'EARLY PROGRAMMING EVOLUTION',
      company: 'SELF-DIRECTED SYSTEM NODE',
      duration: '2022 - 2023',
      description: 'Initiated coding journey starting from Web Development architectures. Branched out to mobile app pipelines with Flutter & Dart, and currently learning artificial intelligence applications.',
      icon: GraduationCap,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]',
    },
  ];

  return (
    <section id="experience" className="relative w-full py-32 bg-[#08080a] overflow-hidden border-t border-white/5">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_1000px_at_center,rgba(99,102,241,0.03),transparent_80%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in" data-aos="fade-up">
          <span className="text-xs font-mono tracking-[0.3em] text-blue-500 uppercase block mb-3 font-semibold">
            // TIMELINE NODES REGISTERED
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            MY JOURNEY
          </h2>
          <div className="mt-4 h-[1.5px] w-20 bg-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-xs md:text-sm text-white/40 tracking-wide font-mono uppercase">
            LOGGING PREVIOUS WORK CONTRACTS AND INTELLECTUAL MILESTONES.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/5 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div 
                key={idx} 
                className="relative pl-8 sm:pl-12"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Visual Connector Dot */}
                <div className={`absolute -left-[17px] top-1.5 p-2 rounded-full border bg-[#08080a] ${exp.color} transition-transform duration-300 hover:scale-110`}>
                  <Icon className="h-3.5 w-3.5" />
                </div>

                {/* Cyber Card */}
                <SpotlightCard className="p-6 md:p-8" glowColor="rgba(59, 130, 246, 0.04)">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-white/40 font-mono tracking-wider mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 font-mono text-[9px] text-white/50 w-fit">
                      <Calendar className="h-3 w-3 text-blue-500/60" />
                      {exp.duration}
                    </div>
                  </div>
                  
                  <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light mb-4">
                    {exp.description}
                  </p>

                  <div className="flex items-center gap-1 text-[9px] font-mono text-blue-400/80 group-hover:text-blue-300 transition-colors duration-300">
                    <span>SYS_LOG_OK // VERIFIED</span>
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
