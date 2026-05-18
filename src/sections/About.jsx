import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Container from '../components/Container';
import Card from '../components/Card';
import { features, stats } from '../data';
import { motion } from 'framer-motion';
import CountUpModule from 'react-countup';

const CountUp = CountUpModule.default ? CountUpModule.default : CountUpModule;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <Container>
        <SectionTitle
          subtitle="Kenapa Memilih Kami"
          title="Keunggulan Layanan Kami"
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants} className="h-full">
              <Card className="p-8 group h-full">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-slate-900 rounded-3xl p-10 lg:p-16 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {stats.map((stat) => {
              // Parse the number from the string (e.g., "150+" -> 150)
              const numMatch = stat.value.match(/\d+/);
              const num = numMatch ? parseInt(numMatch[0], 10) : 0;
              const suffix = stat.value.replace(/\d+/g, '');

              return (
                <div key={stat.id} className="pt-6 md:pt-0">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400 mb-2 flex justify-center items-center">
                    <CountUp end={num} duration={2.5} enableScrollSpy scrollSpyOnce />
                    <span>{suffix}</span>
                  </div>
                  <div className="text-slate-400 font-medium tracking-wide uppercase text-sm mt-2">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
