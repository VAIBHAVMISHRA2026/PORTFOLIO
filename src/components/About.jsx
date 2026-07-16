import { GraduationCap, Milestone, Code2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const About = () => {
  const stats = [
    { label: 'ACADEMIC_YEAR', value: 'B.Tech 3rd Yr', desc: 'Computer Engineering student' },
    { label: 'STARTUPS BUILT', value: '1 Active', desc: 'Founder of grmanager.in' },
    { label: 'SPECTRUM MODULES', value: '10+ Techs', desc: 'Languages, Databases, Frameworks' },
  ];

  return (
    <section id="about" className="relative w-full py-32 bg-[#08080a] overflow-hidden border-t border-white/5">
      {/* Visual background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6" data-aos="fade-up">
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-[0.35em] text-blue-500 uppercase font-semibold block">
              // MY BACKGROUND
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
              ABOUT ME
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white/40 max-w-sm font-mono tracking-wide leading-relaxed">
            A quick overview of my education, startups, and coding interest areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Text bio console */}
          <div className="lg:col-span-7 flex" data-aos="fade-right">
            <SpotlightCard className="p-8 md:p-10 flex-1 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <Code2 className="h-5 w-5 text-blue-400" />
                  <span className="text-xs font-mono tracking-widest text-white/80 uppercase">
                    my_story.log
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight text-white leading-snug">
                  Full Stack Developer &amp; Startup Founder.
                </h3>
                
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                  I started my coding journey in Web Development, building clean layouts and server APIs. Later, I expanded into mobile app development using Flutter and Dart to build custom mobile solutions.
                </p>
                
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                  Currently, I am learning AI and Machine Learning models while focusing on my long-term goal of building secure applications in Cybersecurity.
                </p>
              </div>

              {/* Education section inside card */}
              <div className="border-t border-white/5 pt-6 mt-8 space-y-4">
                <h4 className="text-xs font-mono tracking-widest text-white/80 uppercase flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-blue-400" />
                  Education &amp; Milestones
                </h4>
                <div className="space-y-3 pl-6 relative before:absolute before:left-1 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                  <div>
                    <div className="text-xs font-bold text-white uppercase">B.Tech in Computer Engineering</div>
                    <div className="text-[10px] text-white/40 font-mono mt-0.5">3rd Year Student // Currently Studying</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase">My Startup</div>
                    <div className="text-[10px] text-white/40 font-mono mt-0.5">Founded grmanager.in // Active Development</div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Photo & Stats Column */}
          <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-left" data-aos-delay="200">
            {/* Profile Picture Card */}
            <SpotlightCard className="p-4 flex items-center justify-center overflow-hidden h-80 group" glowColor="rgba(59, 130, 246, 0.05)">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5">
                <img 
                  src="/profile.jpg" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                  alt="Mishra Vaibhav Rajeev" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 font-mono text-[9px] tracking-widest text-white/50">
                  SYS.USER_PHOTO // ONLINE
                </div>
              </div>
            </SpotlightCard>

            {/* Stats List */}
            <div className="flex flex-col gap-4">
              {stats.map((stat, idx) => (
                <SpotlightCard 
                  key={idx} 
                  className="p-5 group"
                  glowColor="rgba(59, 130, 246, 0.03)"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em] block mb-1">
                        {stat.label}
                      </span>
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 uppercase tracking-tight">
                        {stat.value}
                      </h4>
                      <p className="text-[9px] text-white/40 font-mono mt-0.5">
                        {stat.desc}
                      </p>
                    </div>
                    <Milestone className="h-4 w-4 text-blue-500/20 group-hover:text-blue-400/60 transition-colors duration-300" />
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
