'use client'
import RandomSVGs from '@/features/Bgicons';
import { useAppContext } from '@/shared/hooks/ThemeContext';
import VerticalRunningLine from '@/widgets/components/VerticalRunningLine';
import Link from 'next/link';
import React, { useState } from 'react'

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
  return (
    <section onMouseLeave={mouseSectionLeave} onMouseEnter={mouseSectionEnter} onMouseMove={handleMouseMove} id='letstalk' className='letstalk'>
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
            <p>Is your big idea ready to work its magic?</p>
            <h2>
               <span className='letter-row letter-row_1'>
                  {
                     textRow1.map((letter,i)=>{
                        return <span className='letter' key={i}>
                        <span style={getLetterStyle(i/(1.5 + i))} className='letter_1'>{letter}</span>
                        <span style={getLetterStyle(i/(1.5 + i))} className='letter_2'>{letter}</span>
                     </span>
                     })
                  }
               </span>
               <br />
               <span className='letter-row letter-row_2'>{
                  textRow2.map((letter,i)=>{
                     return <span className='letter' key={i}>
                        <span style={getLetterStyle(i/(5+i))} className='letter_1'>{letter}</span>
                        <span style={getLetterStyle(i/(5+i))} className='letter_2'>{letter}</span>
                     </span>
                  })
               }
               </span>
            </h2>
         </Link>
    </section>
  )
}
