'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideUp } from '@/shared/hooks/anim';

export default function TextReveal({ children, duration, ind, char }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  return (
    <motion.span
      ref={containerRef}
      variants={slideUp}
      initial="initial"
      animate={isInView ? "open" : "closed"}
      custom={{ index: ind, duration }}
      className={char === ' ' ? 'space' : '' }
    >
      {children}
    </motion.span>
  );
}
