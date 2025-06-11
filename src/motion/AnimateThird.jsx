'use client'

import { motion } from 'framer-motion';

export default function AnimateThird({children}) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}              // Initial state
    whileInView={{ opacity: 1, y: 0 }}           // Animate when in view
    exit={{ opacity: 0, y: -50 }}                // Exit animation
    transition={{ duration: 0.9, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.2 }}        // smooth transition
    className='flex items-center justify-center w-full h-full'
    >
     {children}
    </motion.div>
  );
}
