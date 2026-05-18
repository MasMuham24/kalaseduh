import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Container from '../components/Container';
import { projects } from '../data';
import { FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(item => item.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-slate-50">
      <Container>
        <SectionTitle
          subtitle="Portfolio"
          title="Project Terbaik Kami"
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                filter === category
                  ? 'text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-indigo-600 border border-slate-200'
              }`}
            >
              {filter === category && (
                <motion.div
                  layoutId="active-filter"
                  className="absolute inset-0 bg-indigo-600 rounded-full shadow-md shadow-indigo-200 z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={project.id} 
                className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <a href={project.link} aria-label={`Lihat project ${project.title}`} className="bg-white text-indigo-600 rounded-full w-14 h-14 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <FiExternalLink size={24} />
                    </a>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    width="800"
                    height="450"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-medium px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
