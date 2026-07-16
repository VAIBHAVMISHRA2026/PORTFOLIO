import { useState } from 'react';
import { Code2, Globe, Database, Activity } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const categories = [
    { id: 'languages', name: 'Languages', icon: Code2, subtext: 'Programming' },
    { id: 'frameworks', name: 'Frameworks & SDKs', icon: Globe, subtext: 'Development' },
    { id: 'databases', name: 'Databases & BaaS', icon: Database, subtext: 'Storage' },
  ];

  const techItems = {
    languages: [
      { name: 'C / C++', desc: 'High performance data structures & algorithms', level: 'Advanced', tier: 'System Core', color: 'rgba(59, 130, 246, 0.08)' },
      { name: 'Java', desc: 'Object-oriented programming & robust software structures', level: 'Advanced', tier: 'System Core', color: 'rgba(59, 130, 246, 0.08)' },
      { name: 'JavaScript', desc: 'Core web script executor for browsers & NodeJS engines', level: 'Advanced', tier: 'Dynamic Core', color: 'rgba(59, 130, 246, 0.08)' },
      { name: 'TypeScript', desc: 'Type-safe strict static compilation schemas (basic)', level: 'Intermediate', tier: 'Types Core', color: 'rgba(59, 130, 246, 0.08)' },
      { name: 'Dart', desc: 'Optimized language structures behind Flutter engines', level: 'Advanced', tier: 'Mobile Native', color: 'rgba(59, 130, 246, 0.08)' },
      { name: 'Python', desc: 'Data parsing libraries, automation scripts & ML scripts', level: 'Intermediate', tier: 'AI/ML Core', color: 'rgba(59, 130, 246, 0.08)' },
      { name: 'Go (Golang)', desc: 'Concurrency-first compiled services & backend systems', level: 'Intermediate', tier: 'Systems Engine', color: 'rgba(59, 130, 246, 0.08)' },
    ],
    frameworks: [
      { name: 'Express.js', desc: 'HTTP router engine for REST endpoints & APIs', level: 'Advanced', tier: 'API Engine', color: 'rgba(139, 92, 246, 0.08)' },
      { name: 'Next.js', desc: 'React framework for server-rendered UI models', level: 'Advanced', tier: 'UI Framework', color: 'rgba(139, 92, 246, 0.08)' },
      { name: 'Flutter', desc: 'Cross-platform native compiler for iOS & Android', level: 'Advanced', tier: 'Mobile Engine', color: 'rgba(139, 92, 246, 0.08)' },
    ],
    databases: [
      { name: 'PostgreSQL', desc: 'Relational ACID SQL data rows & query clusters', level: 'Advanced', tier: 'Relational DB', color: 'rgba(16, 185, 129, 0.08)' },
      { name: 'MongoDB', desc: 'Document model NoSQL datastore nodes', level: 'Advanced', tier: 'Document DB', color: 'rgba(16, 185, 129, 0.08)' },
      { name: 'MySQL', desc: 'Structured database systems for secure datasets', level: 'Advanced', tier: 'Relational DB', color: 'rgba(16, 185, 129, 0.08)' },
      { name: 'Supabase', desc: 'PostgreSQL database backend engine with real-time sync', level: 'Advanced', tier: 'Database BaaS', color: 'rgba(16, 185, 129, 0.08)' },
      { name: 'Redis', desc: 'In-memory fast structural cache key values', level: 'Intermediate', tier: 'Memory Cache', color: 'rgba(16, 185, 129, 0.08)' },
    ],
  };

  return (
    <section id="skills" className="relative w-full py-32 bg-[#08080a] overflow-hidden border-t border-white/5">
      {/* Visual background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 relative" data-aos="fade-up">
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-[0.35em] text-blue-500 uppercase font-semibold block">
              // MY SKILLS
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
              TECH STACK
            </h2>
          </div>
          <div className="flex items-center gap-3 self-start md:self-auto px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 font-mono text-[10px] text-emerald-400">
            <Activity className="h-3 w-3 animate-pulse text-emerald-500" />
            LANGUAGES, FRAMEWORKS &amp; DATABASES
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative">
          
          {/* Left Navigation Console */}
          <div className="lg:col-span-4 flex flex-col gap-3 relative z-10 border-b lg:border-b-0 lg:border-r border-white/5 pb-8 lg:pb-0 lg:pr-8" data-aos="fade-right">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em] block">
                Categories
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-ping"></span>
            </div>
            
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2.5 pb-3 lg:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center justify-between gap-4 px-5 py-4 rounded-2xl transition-all duration-300 text-left cursor-pointer min-w-[170px] lg:min-w-0 flex-shrink-0 relative overflow-hidden group ${
                      isActive 
                        ? 'bg-white/[0.04] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
                        : 'bg-white/[0.005] border border-white/5 hover:bg-white/[0.015] hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 relative z-10">
                      <div className={`p-2 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? 'bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                          : 'bg-white/5 border-white/5 text-white/40 group-hover:text-white/70'
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-xs font-bold uppercase tracking-tight transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-white/50 group-hover:text-white/80'
                        }`}>
                          {cat.name}
                        </span>
                        <span className="text-[8px] font-mono text-white/20 mt-0.5 group-hover:text-white/40 transition-colors duration-300">
                          {cat.subtext}
                        </span>
                      </div>
                    </div>
                    {isActive && (
                      <>
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,1)] hidden lg:block relative z-10" />
                        <div className="absolute left-0 right-0 bottom-0 h-[2px] lg:h-auto lg:top-0 lg:bottom-0 lg:w-[3px] bg-blue-500" />
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Tech Badges Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5" data-aos="fade-left" data-aos-delay="100">
            {techItems[activeTab].map((item, idx) => (
              <SpotlightCard
                key={idx}
                glowColor={item.color}
                className="group p-6"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                      </span>
                      <span className="text-sm font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300 uppercase">
                        {item.name}
                      </span>
                    </div>
                    <p className="text-[10px] text-white/40 group-hover:text-white/60 font-light transition-colors duration-300 leading-normal pl-5">
                      {item.desc}
                    </p>
                  </div>
                  <span className="text-[8px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white/40 uppercase tracking-widest flex-shrink-0 group-hover:bg-blue-500/10 group-hover:text-blue-400 group-hover:border-blue-500/15 transition-all duration-300">
                    {item.tier}
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
