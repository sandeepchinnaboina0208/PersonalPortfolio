import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
    <ThemeProvider>
      <div className="min-h-screen antialiased dark:bg-black">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
    <Analytics />
    </>
  );
}

export default App;