import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component imports
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="bg-[#08080a] text-slate-100 min-h-screen font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 animate-fade-in duration-700 relative">
          <Navbar />
          
          <main className="relative z-10">
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Experience />
            <Contact />
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
