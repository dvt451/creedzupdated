'use client'
import RandomSVGs from '@/features/Bgicons';
import { useAppContext } from '@/shared/hooks/ThemeContext';
import VerticalRunningLine from '@/widgets/components/VerticalRunningLine';
import Link from 'next/link';
import React, { useState } from 'react'

export default function Letstalk() {

   const {setLetstalkHover,handleMouseMove,mousePosition} = useAppContext()

   const mouseSectionEnter = ()=>{
      setLetstalkHover(true)
   }
   const mouseSectionLeave = ()=>{
      setLetstalkHover(false)
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
      <RandomSVGs />
         <div className='letstalk-container'>
            <div style={{
                  transform: `translate(${mousePosition.x / 20}px, ${mousePosition.y / -20}px)`,
            }} className='letstalk__marque'>
               <VerticalRunningLine />
               <VerticalRunningLine direction={' reverse'}/>
            </div>
         </div>
         <Link href={'/bookacall'} onClick={()=>{
            setTimeout(() => {
               const element = document.querySelector('main');
               element?.scrollIntoView({})
               mouseSectionLeave()
            }, 800);
         }} className="letstalk__content">
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
