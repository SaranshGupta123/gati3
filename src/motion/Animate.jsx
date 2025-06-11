'use client'

import { motion } from 'framer-motion';

export default function Animate({children}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}       // start faded out and lower
      animate={{ opacity: 1, y: 0 }}        // animate to visible and normal position
      exit={{ opacity: 0, y: -50 }}         // fade out and move up when unmounting
      transition={{ duration: 0.5 }}        // smooth transition
      className='sticky top-0 z-[100]'
    >
     {children}
    </motion.div>
  );
}
