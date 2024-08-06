'use client'
import React, { useEffect } from 'react'
import { gsap } from 'gsap';

export default function Progressbar() {

   useEffect(() => {
      const progressBar = document.querySelector('.progress-bar__filled');
  
      const updateProgressBar = () => {
        const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        gsap.to(progressBar, { top: `${scrollPercentage}%`, duration: 0.2 });
      };
  
      updateProgressBar();
  
      window.addEventListener('scroll', updateProgressBar);
  
      return () => {
        window.removeEventListener('scroll', updateProgressBar);
      };
    }, []);
   
  return (
    <div className='progress-bar'>
      <div className="progress-bar__filled"></div>
    </div>
  )
}
