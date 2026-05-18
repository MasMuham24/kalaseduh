import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 15 } } : {}}
      className={`bg-white rounded-2xl border border-slate-100 shadow-sm ${
        hover ? 'hover:shadow-xl hover:border-indigo-100' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
