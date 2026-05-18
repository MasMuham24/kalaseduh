import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', type = "button", ...props }) => {
  const baseStyle = 'inline-flex items-center justify-center font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-500/30 focus:ring-indigo-500 px-6 py-3',
    secondary: 'bg-white text-slate-800 border border-slate-200 shadow-sm focus:ring-slate-500 px-6 py-3',
    outline: 'border-2 border-indigo-600 text-indigo-600 focus:ring-indigo-500 px-6 py-3',
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
