'use client'
import { useAppContext } from '@/shared/hooks/ThemeContext';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ScalingWrapper({children}) {
   const _ = useAppContext()
   const [loaderState, setLoaderState] = useState(false)
   const location = usePathname()
   useEffect(() => {
      if(!loaderState && location === '/'){
         document.body.style.overflow = 'hidden';
         setTimeout(() => {
         document.body.style.overflow = 'auto';
      }, 6500);
   }
   else{
         document.body.style.overflow = 'hidden';
         setTimeout(() => {
         document.body.style.overflow = 'auto';
      }, 2000);
   }
   }, [location])
   useEffect(() => {
      setLoaderState(true)
   }, [loaderState])
  return (
   <div className={`preloader${_.loeader ? ' instant' : ''}`}>
      {children}
   </div>
  )
}
