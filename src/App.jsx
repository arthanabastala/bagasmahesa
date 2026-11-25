import { MotionConfig } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#0F172A] overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Gallery />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
