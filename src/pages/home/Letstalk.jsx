'use client'
import RandomSVGs from '@/features/Bgicons';
import { useAppContext } from '@/shared/hooks/ThemeContext';
import VerticalRunningLine from '@/widgets/components/VerticalRunningLine';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion';
import { slideUp } from '../../shared/hooks/anim';

export default function Letstalk() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const _ = useAppContext();

  const projectsLeft = [
   {
     Picture: "/portfolio/img0.webp",
   },
   {
      Picture: "/portfolio/img2.webp",
    },
      //   {
 //     Video: "/video/Project.mp4",
 //   },
 {
   Picture: "/portfolio/img1.webp",
 },
 {
   Picture: "/portfolio/img15.webp",
 },
 {
   Picture: "/portfolio/img16.webp",
 },
 {
   Picture: "/usecases/skrex/img16.webp",
 },
 {
   Picture: "/usecases/codelab/img3.webp",
 },
 {
   Picture: "/usecases/cadence/img19.webp",
 },
 {
   Picture: "/usecases/creedz/img3.jpeg",
 },
 {
   Picture: "/usecases/skrex/img21.webp",
 },
 {
   Picture: "/usecases/codelab/img13.webp",
 },
 {
   Picture: "/portfolio/img7.webp",
 },
 {
   Picture: "/portfolio/img17.webp",
 },
 {
   Picture: "/usecases/skrex/img23.webp",
 },
          //   {
 //     Video: "/video/Project.mp4",
 //   },
 {
   Picture: "/usecases/codelab/img24.webp",
 },
 {
   Picture: "/portfolio/img18.webp",
 },
 ];
 const projectsRight = [
   {
     Video: "/usecases/skrex/video2.webm",
   },
      {
        Picture: "/usecases/codelab/img9.webp",
      },
      {
        Picture: "/portfolio/img3.webp",
      },
      {
      Picture: "/portfolio/img13.webp",
      },
      {
        Picture: "usecases/skrex/img5.webp",
      },
      {
         Picture: "/portfolio/img8.webp",
      },
      {
         Picture: "/portfolio/img11.webp",
      },
      {
         Picture: "/portfolio/img6.webp",
      },
      {
         Picture: "/portfolio/img19.webp",
      },
      {
         Picture: "/portfolio/img20.webp",
      },
      {
         Picture: "/portfolio/img21.webp",
      },
      {
         Picture: "/portfolio/img22.webp",
      },
      {
         Video: "/usecases/cadence/watch",
       },
      {
         Picture: "/portfolio/img23.webp",
      },
      {
         Picture: "/portfolio/img24.webp",
      },
      {
         Picture: "/portfolio/img25.webp",
      },
      {
         Picture: "/portfolio/img26.webp",
      },
      {
         Picture: "/portfolio/img27.webp",
      },
 ];
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e) => {
    if (isClient && window.innerWidth > 991.98) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    } else {
      setMousePosition({ x: 500, y: e.clientY });
    }
  };

  const mouseSectionEnter = () => {
    _.setLetstalkHover(true);
  };

  const mouseSectionLeave = () => {
    _.setLetstalkHover(false);
  };

  const getLetterStyle = (index) => {
    return {
      animationDelay: `${index * 7}s`,
    };
  };

  const textRow1 = "Let's Create".split('');
  const textRow2 = 'Magic Together'.split('');
  const subTitle = "Is your big idea ready to work its magic?";

  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

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
          <VerticalRunningLine projects={projectsLeft}/>
          <VerticalRunningLine projects={projectsRight} direction={' reverse'} />
        </div>
      </div>
      <div className="letstalk__content">
        <p>{subTitle}</p>
        <Link 
            href={'/bookacall'}
            onMouseLeave={mouseSectionLeave}
            onMouseEnter={mouseSectionEnter}
            onClick={() => {
               mouseSectionLeave();
               setTimeout(() => {
                 const element = document.querySelector('main');
                 element?.scrollIntoView({});
               }, 800);
             }} 
        >
           <h2 ref={containerRef}>
             <span className='letter-row letter-row_1'>
               {textRow1.map((letter, i) => (
                 <motion.span
                   key={i}
                   variants={slideUp}
                   initial="initial"
                   animate={isInView ? "open" : "closed"}
                   custom={{ index: i }}
                   className='mask'
                 >
                   <span className='letter'>
                     <span style={getLetterStyle(i / (1.5 + i))} className='letter_1'>{letter}</span>
                     <span style={getLetterStyle(i / (1.5 + i))} className='letter_2'>{letter}</span>
                   </span>
                 </motion.span>
               ))}
             </span>
             <br />
             <span className='letter-row letter-row_2'>
               {textRow2.map((letter, i) => (
                 <motion.span
                   key={i}
                   variants={slideUp}
                   initial="initial"
                   animate={isInView ? "open" : "closed"}
                   custom={{ index: i }}
                   className='mask'
                 >
                   <span className='letter'>
                     <span style={getLetterStyle(i / (5 + i))} className='letter_1'>{letter}</span>
                     <span style={getLetterStyle(i / (5 + i))} className='letter_2'>{letter}</span>
                   </span>
                 </motion.span>
               ))}
             </span>
           </h2>
        </Link>
      </div>
    </section>
  );
}
