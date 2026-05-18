import React, { useRef } from 'react';
import Button from '../components/Button';
import Container from '../components/Container';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Text Reveal Variants
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section ref={containerRef} id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-soft">
      {/* Background Shapes with Parallax */}
      <motion.div style={{ y: yBg, opacity }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>
      </motion.div>

      <Container className="relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={textContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold text-slate-900 leading-tight mb-6">
            We Build <span className="text-gradient">Modern Websites</span> That Grow Your Business
          </motion.h1>
          <motion.p variants={item} className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Website profesional, cepat, modern, dan siap meningkatkan branding serta konversi bisnis Anda ke level selanjutnya.
          </motion.p>
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">Mulai Project</Button>
            <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4">Lihat Portfolio</Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
