import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'ALL' },
    { id: 'fullstack', name: 'FULL-STACK' },
    { id: 'ai', name: 'AI & SYSTEM' },
  ];

  const projectsData = [
    {
      index: '01.',
      title: 'GRMANAGER.IN',
      description: 'Lead developer and founder node of grmanager.in. Built as a high-fidelity startup platform. Optimizes workspace administration, provides user dashboard metrics, and coordinates real-time client management tools.',
      category: 'fullstack',
      tags: ['Next.js', 'Express.js', 'MongoDB', 'Supabase', 'Redis'],
      github: 'https://github.com/VAIBHAVMISHRA2026',
      demo: 'https://grmanager.in',
      gradient: 'from-blue-500/20 to-indigo-500/10',
      borderGradient: 'from-blue-500/30 to-cyan-500/10',
      glow: 'rgba(59, 130, 246, 0.15)',
      meta: 'STARTUP CORE // FULL-STACK MANAGEMENT'
    },
    {
      index: '02.',
      title: 'AI / ML LAB SANDBOX',
      description: 'Orchestrating model analysis nodes using Python. Custom pipelines analyzing local datasets, testing regression models, and integrating API text models (Gemini API) for automation loops.',
      category: 'ai',
      tags: ['Python', 'TensorFlow', 'Gemini SDK', 'Scikit-Learn'],
      github: 'https://github.com/VAIBHAVMISHRA2026',
      demo: 'https://github.com/VAIBHAVMISHRA2026',
      gradient: 'from-indigo-500/20 to-purple-500/10',
      borderGradient: 'from-indigo-500/30 to-purple-500/10',
      glow: 'rgba(99, 102, 241, 0.15)',
      meta: 'INTELLIGENCE RESEARCH // EXPERIMENTAL NODES'
    },
    {
      index: '03.',
      title: 'CYBERSECURITY LAB NODE',
      description: 'Future trajectory playground analyzing network protocols, auditing package controllers, and setting up encryption layers for local APIs.',
      category: 'ai',
      tags: ['Linux Shell', 'Bash Scripts', 'Wireshark', 'Crypto APIs'],
      github: 'https://github.com/VAIBHAVMISHRA2026',
      demo: 'https://github.com/VAIBHAVMISHRA2026',
      gradient: 'from-purple-500/20 to-pink-500/10',
      borderGradient: 'from-purple-500/30 to-pink-500/10',
      glow: 'rgba(168, 85, 247, 0.15)',
      meta: 'INFRASTRUCTURE DEFENSE // FUTURE LAB'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative w-full py-32 bg-[#08080a] overflow-hidden border-t border-white/5">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_center,rgba(59,130,246,0.03),transparent_80%)] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/5 pb-10" data-aos="fade-up">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-blue-500 uppercase block mb-3 font-semibold">
              // RECENT DEV ARCHIVE
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white/40 max-w-sm tracking-wide leading-relaxed font-mono">
            SHIPPING PRODUCTION CODEBASES BUILT ON FULL-STACK UTILITIES AND CLOUD DEPLOYMENTS.
          </p>
        </div>

        {/* Console-style Filter buttons */}
        <div className="flex justify-start gap-4 mb-16" data-aos="fade-up" data-aos-delay="50">
          <div className="bg-white/[0.01] p-1 border border-white/5 rounded-2xl flex gap-1.5 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 font-mono text-[10px] tracking-widest rounded-xl transition-all duration-300 cursor-pointer ${
                  filter === cat.id 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <SpotlightCard
              key={idx}
              glowColor={project.glow}
              className="group h-[420px]"
            >
              <div 
                className="p-8 md:p-10 flex flex-col justify-between h-full"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                {/* Decorative border glow */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.borderGradient} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br ${project.gradient} rounded-full filter blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />

                {/* Card Top Block */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono tracking-widest text-white/20">
                        {project.index}
                      </span>
                      <span className="text-[9px] font-mono tracking-[0.25em] text-white/40 group-hover:text-white/60 transition-colors duration-300 uppercase">
                        {project.meta}
                      </span>
                    </div>
                    
                    {/* Glowing Link Icon */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-black group-hover:bg-white group-hover:border-white transition-all duration-500 transform group-hover:rotate-45"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mt-6 uppercase group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-white/50 group-hover:text-white/70 font-light mt-4 leading-relaxed transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="text-[9px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white/60 tracking-wider group-hover:bg-white/10 group-hover:text-white transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
