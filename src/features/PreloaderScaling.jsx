'use client'
import { useAppContext } from '@/shared/hooks/ThemeContext';
import { StarIcon } from '@/shared/icons/icons';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';


const PreloaderScaling = () => {
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
    <>
       <div className={`preloader${_.loeader ? ' instant' : ''}`}>
            <div className='preloader__star-container'>
               <div className='preloader__star preloader__star_1'>{StarIcon}</div>
               <div className='preloader__star preloader__star_2'>{StarIcon}</div>
               <div className='preloader__star preloader__star_3'>{StarIcon}</div>
            </div>
       </div>
    </>
  );
};

export default PreloaderScaling;
