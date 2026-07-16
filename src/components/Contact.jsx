import { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, ShieldAlert } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} width="1em" height="1em">
    <path d="M12.012 2c-5.506 0-9.988 4.478-9.988 9.984a9.92 9.92 0 0 0 1.392 5.048L2 22l5.14-1.348a9.882 9.882 0 0 0 4.872 1.28c5.506 0 9.988-4.478 9.988-9.984C22 6.478 17.518 2 12.012 2zm4.736 14.194c-.262.744-1.28 1.348-2.072 1.436-.54.062-1.242.096-3.666-.902-3.096-1.28-5.076-4.428-5.23-4.634-.156-.206-1.272-1.696-1.272-3.23 0-1.536.804-2.29 1.092-2.584.288-.294.63-.368.84-.368.21 0 .42.002.604.01.196.008.462-.074.72.548.266.64.912 2.222.99 2.38.08.158.132.342.026.548-.104.208-.158.334-.316.518-.156.182-.328.406-.468.544-.156.156-.32.326-.138.64.182.312.81 1.336 1.736 2.164.928.828 1.71 1.084 2.024 1.242.312.156.494.13.678-.08.184-.21.802-.93.102-1.244-.7-.314-1.168-.142-1.378.07z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    // Construct mailto link to open in user's default mail client with values filled
    const mailtoLink = `mailto:vaibhavmi2026@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact Form')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // Redirect to open the mail client
    window.location.href = mailtoLink;

    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(''), 4000);
  };

  const contactInfo = [
    { label: 'Email Address', value: 'vaibhavmi2026@gmail.com', href: 'mailto:vaibhavmi2026@gmail.com', icon: Mail, color: 'text-blue-400' },
    { label: 'WhatsApp', value: '+91 7069035478', href: 'https://wa.me/917069035478', icon: WhatsAppIcon, color: 'text-emerald-400' },
    { label: 'Location', value: 'Surat, Gujarat, India', href: null, icon: MapPin, color: 'text-purple-400' },
    { label: 'X (Twitter)', value: '@tech_mishra', href: 'https://x.com/tech_mishra', icon: MessageSquare, color: 'text-cyan-400' },
  ];

  return (
    <section id="contact" className="relative w-full py-32 bg-[#08080a] overflow-hidden border-t border-white/5">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_1000px_at_center,rgba(59,130,246,0.02),transparent_80%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in" data-aos="fade-up">
          <span className="text-xs font-mono tracking-[0.3em] text-blue-500 uppercase block mb-3 font-semibold">
            // CONTACT ME
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            GET IN TOUCH
          </h2>
          <div className="mt-4 h-[1.5px] w-20 bg-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-xs md:text-sm text-white/40 tracking-wide font-mono uppercase">
            Send a message to collaborate or ask a question.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-right">
            <SpotlightCard className="p-8 md:p-10 flex-1 flex flex-col justify-between" glowColor="rgba(59, 130, 246, 0.05)">
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <ShieldAlert className="h-5 w-5 text-blue-400" />
                  <span className="text-xs font-mono tracking-widest text-white/80 uppercase">
                    contact_info.log
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight text-white uppercase leading-snug">
                  Let&apos;s work together!
                </h3>
                
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                  I am open to full-time roles, contract work, and collaboration opportunities. Send a message using the form, or reach out directly via email or social links.
                </p>
              </div>

              {/* Action items list */}
              <div className="space-y-4 mt-8">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  const Component = info.href ? 'a' : 'div';
                  return (
                    <Component
                      key={idx}
                      href={info.href}
                      target={info.href && info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href && info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-4 p-4 bg-white/[0.01] border border-white/5 rounded-2xl transition-all duration-300 ${
                        info.href ? 'hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-0.5 cursor-pointer' : ''
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl bg-slate-950 border border-white/5 ${info.color}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-[9px] font-mono text-white/30 uppercase tracking-[0.15em]">{info.label}</div>
                        <div className="text-xs font-semibold text-white mt-0.5">{info.value}</div>
                      </div>
                    </Component>
                  );
                })}
              </div>
            </SpotlightCard>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 flex" data-aos="fade-left" data-aos-delay="200">
            <SpotlightCard className="p-8 md:p-10 flex-1 flex flex-col justify-between" glowColor="rgba(139, 92, 246, 0.05)">
              <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[9px] font-mono tracking-widest text-white/40 uppercase">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#08080a] border border-white/5 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[9px] font-mono tracking-widest text-white/40 uppercase">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#08080a] border border-white/5 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-[9px] font-mono tracking-widest text-white/40 uppercase">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#08080a] border border-white/5 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Enter subject"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[9px] font-mono tracking-widest text-white/40 uppercase">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-[#08080a] border border-white/5 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                      placeholder="Type your message here"
                      required
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 font-mono text-[10px] font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer tracking-widest"
                  >
                    SEND MESSAGE
                    <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

                {/* Status Notice overlays */}
                {status === 'success' && (
                  <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 font-mono text-[10px] tracking-wide text-center">
                    Message Sent Successfully! I will reply shortly.
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 font-mono text-[10px] tracking-wide text-center">
                    Error: Please fill in all fields.
                  </div>
                )}
              </form>
            </SpotlightCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
