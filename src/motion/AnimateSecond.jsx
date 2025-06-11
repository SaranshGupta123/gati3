'use client'

import { motion } from 'framer-motion';

export default function AnimateSecond({children}) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}              // Initial state
    whileInView={{ opacity: 1, y: 0 }}           // Animate when in view
    exit={{ opacity: 0, y: -50 }}                // Exit animation
    transition={{ duration: 1, ease: 'easeOut' }}
    viewport={{ once: false}}        // smooth transition
    className='flex flex-col items-center justify-center w-full my-10 '
    >
     {children}
    </motion.div>
  );
}
