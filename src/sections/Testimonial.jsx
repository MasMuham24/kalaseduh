import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Container from '../components/Container';
import { testimonials } from '../data';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section id="testimonial" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

      <Container className="relative z-10">
        <SectionTitle
          subtitle="Testimonial"
          title="Apa Kata Klien Kami"
        />

        <div className="max-w-4xl mx-auto mt-16 relative" data-aos="fade-up">
          <div className="glass-card rounded-3xl p-8 md:p-14 text-center">
            <div className="flex justify-center gap-1 mb-8 text-amber-400">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} size={24} />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed italic mb-10 min-h-[100px]">
              "{testimonials[currentIndex].content}"
            </p>
            
            <div className="flex flex-col items-center justify-center">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name} 
                loading="lazy"
                width="64"
                height="64"
                className="w-16 h-16 rounded-full object-cover mb-4 ring-4 ring-white shadow-md"
              />
              <h4 className="text-lg font-heading font-bold text-slate-900">{testimonials[currentIndex].name}</h4>
              <p className="text-slate-500 text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm"
            >
              <FiChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
