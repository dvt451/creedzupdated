'use client'
import RandomSVGs from '@/features/Bgicons';
import React, { useState, useEffect } from 'react'
import Content from './Content';

export default function LetstalkBlock({children}) {
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   const [isClient, setIsClient] = useState(false);
 
  const handleMouseMove = (e) => {
   if (isClient && window.innerWidth > 991.98) {
     setMousePosition({ x: e.clientX, y: e.clientY });
   } else {
     setMousePosition({ x: 500, y: e.clientY });
   }
 };
 useEffect(() => {
   setIsClient(true);
 }, []);

  return (
   <section
   onMouseMove={handleMouseMove}
   id='letstalk'
   className='letstalk'
 >
      <div className="letstalk__pluses">
        <div className="letstalk__plus">+</div>
        <div className="letstalk__plus">+</div>
      </div>
      {isClient && window.innerWidth > 767.98 ? <RandomSVGs logoCount={15} mousePosition={mousePosition} /> : null}
      <div className='letstalk-container'>
        <div
          style={{
            transform: isClient && window.innerWidth > 767.98
              ? `translate(${mousePosition.x / 20}px, ${mousePosition.y / -20}px)`
              : 'none',
          }}
          className='letstalk__marque'
        >
         {children}
        </div>
      </div>
         <Content />
   </section>
  )
}
