import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Community from './components/Community';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-cloud border-t-accent rounded-full animate-spin mb-4"></div>
          <h2 className="text-white text-2xl font-heading font-bold animate-pulse">Syed Usman Ahmad</h2>
          <p className="text-accent mt-2">Principal DevOps Engineer</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cloud min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Community />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
