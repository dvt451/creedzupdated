'use client'
import { useAppContext } from '@/shared/hooks/ThemeContext';
import VerticalRunningLine from '@/widgets/components/VerticalRunningLine';
import React, { useState } from 'react'

export default function Letstalk() {
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   const _ = useAppContext()

   const mouseSectionEnter = ()=>{
      _.setLetstalkHover(true)
   }
   const mouseSectionLeave = ()=>{
      _.setLetstalkHover(false)
   }

   const handleMouseMove = (e) => {
      if(window.innerWidth > 991) {
         setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
  return (
    <section onMouseLeave={mouseSectionLeave} onMouseEnter={mouseSectionEnter} onMouseMove={handleMouseMove} id='letstalk' className='letstalk'>
         <div className='letstalk-container'>
            <div style={{
                  transform: `translate(${mousePosition.x / 20}px, ${mousePosition.y / -20}px)`,
            }} className='letstalk__marque'>
               <VerticalRunningLine />
               <VerticalRunningLine direction={' reverse'}/>
            </div>
         </div>
         <div className="letstalk__content">
            <h2><span>Let&apos;s Create</span><br />
                  <span>Magic Together</span></h2>
         </div>
    </section>
  )
}
