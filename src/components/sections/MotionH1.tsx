// MotionH1.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface MotionH1Props {
  children: React.ReactNode;
  delay?: number; // Optional delay for animation
}

const MotionH1: React.FC<MotionH1Props> = ({ children, delay = 0 }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50 }}  // Start below and invisible
      animate={{ opacity: 1, y: 0 }}    // End at normal position
      transition={{ duration: 0.6, ease: 'easeOut', delay }} // Apply transition with delay
      className="z-50"
    >
      {children}
    </motion.h1>
  );
};

export default MotionH1;
