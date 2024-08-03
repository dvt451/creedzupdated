'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { slideUp } from '@/pages/home/Letstalk/anim';

export default function TextReveal({children,duration,ind}) {
   const containerRef = useRef(null)
   const isInView = useInView(containerRef)

  return (
   <motion.span ref={containerRef} variants={slideUp} initial="initial" animate={isInView ? "open" : "closed"}  custom={{ index: ind, duration }}>
      {children}
   </motion.span>
  )
}
