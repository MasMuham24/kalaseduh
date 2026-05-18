import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Pricing from './sections/Pricing';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  return (
    <div className="relative font-sans text-slate-800 selection:bg-indigo-500 selection:text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Pricing />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
