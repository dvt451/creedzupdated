'use client'
import RandomSVGs from '@/features/Bgicons';
import { useAppContext } from '@/shared/hooks/ThemeContext';
import VerticalRunningLine from '@/widgets/components/VerticalRunningLine';
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion';
import slideUp from './anim';
import TextReveal from '@/features/TextReveal';

export default function Letstalk() {

   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   const _ = useAppContext()
   const handleMouseMove = (e) => {
         setMousePosition({ x: e.clientX, y: e.clientY });
    };
   const mouseSectionEnter = ()=>{
      _.setLetstalkHover(true)
   }
   const mouseSectionLeave = ()=>{
      _.setLetstalkHover(false)
   }
    const getLetterStyle = (index) => {
      return {
        animationDelay: `${index * 7}s`
      };
    };
    const textRow1 = "Let's Create".split('');
    const textRow2 = 'Magic Together'.split('');
    const subTitle = "Is your big idea ready to work its magic?".split('');

    const containerRef = useRef(null)
    const isInView = useInView(containerRef)
  return (
    <section  onMouseLeave={mouseSectionLeave} onMouseEnter={mouseSectionEnter} onMouseMove={handleMouseMove} id='letstalk' className='letstalk'>
      <div className="letstalk__pluses">
         <div className="letstalk__plus">+</div>
         <div className="letstalk__plus">+</div>
      </div>
      <RandomSVGs logoCount={15} mousePosition={mousePosition}/>
         <div className='letstalk-container'>
            <div style={{
                  transform: `translate(${mousePosition.x / 20}px, ${mousePosition.y / -20}px)`,
            }} className='letstalk__marque'>
               <VerticalRunningLine />
               <VerticalRunningLine direction={' reverse'}/>
            </div>
         </div>
         <Link href={'/bookacall'} onClick={()=>{
               mouseSectionLeave()
            setTimeout(() => {
               const element = document.querySelector('main');
               element?.scrollIntoView({})
            }, 800);
         }} className="letstalk__content">
            <p>
               {
                  subTitle.map((letter,i)=>{
                     return <TextReveal key={i} ind={i/6} duration={0.3}>{letter}</TextReveal>
                  })
               }
            </p>
            <h2 ref={containerRef}>
               <span className='letter-row letter-row_1'>
                  {
                     textRow1.map((letter,i)=>{
                        return <motion.span  key={i} variants={slideUp} initial="initial" animate={isInView ? "open" : "closed"} custom={{ index: i,}} className='mask'>
                        <span className='letter'>
                           <span style={getLetterStyle(i/(1.5 + i))} className='letter_1'>{letter}</span>
                           <span style={getLetterStyle(i/(1.5 + i))} className='letter_2'>{letter}</span>
                        </span>
                        </motion.span>
                     })
                  }
               </span>
               <br />
               <span className='letter-row letter-row_2'>{
                  textRow2.map((letter,i)=>{
                     return <motion.span  key={i} variants={slideUp} initial="initial" animate={isInView ? "open" : "closed"} custom={{ index: i,}} className='mask'>
                      <span className='letter'>
                           <span style={getLetterStyle(i/(5+i))} className='letter_1'>{letter}</span>
                           <span style={getLetterStyle(i/(5+i))} className='letter_2'>{letter}</span>
                        </span>
                     </motion.span>
                  })
               }
               </span>
            </h2>
         </Link>
    </section>
  )
}
