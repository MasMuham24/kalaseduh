import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Container from '../components/Container';
import Button from '../components/Button';
import { pricingPlans } from '../data';
import { FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <Container>
        <SectionTitle
          subtitle="Paket Harga"
          title="Pilih Paket Sesuai Kebutuhan"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center mt-16">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className={`relative p-8 lg:p-10 rounded-2xl bg-white transition-shadow duration-300 ${
                plan.isPopular 
                  ? 'border-2 border-indigo-600 shadow-2xl shadow-indigo-100 md:-mt-8 md:mb-8 z-10' 
                  : 'border border-slate-100 shadow-sm hover:shadow-xl z-0'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-sky-500 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-slate-500 font-medium pb-2">Rp</span>
                  <span className="text-4xl lg:text-5xl font-heading font-extrabold text-slate-900">{plan.price}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <FiCheck size={12} strokeWidth={3} />
                    </div>
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.isPopular ? 'primary' : 'outline'} 
                className="w-full"
              >
                Pilih Paket
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
