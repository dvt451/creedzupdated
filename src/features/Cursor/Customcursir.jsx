'use client'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useAppContext } from '@/shared/hooks/ThemeContext'

export default function Customcursor() {
   const location = usePathname()
   const _ = useAppContext()
   const cursorRef = useRef(null)
   useEffect(() => {
      const isPcScreen = window.innerWidth > 991.98
      if (isPcScreen) {
         const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
               x: e.clientX,
               y: e.clientY,
               duration: 0.2,
               ease: 'power2.out'
            });
         };
         
         document.addEventListener('mousemove', moveCursor);
         
         return () => {
            document.removeEventListener('mousemove', moveCursor);
         };
      }
      }, []);
      useEffect(() => {
         setTimeout(() => {
            _.setHoverAnyLink(false)
         }, 500);
      }, [location])
      
      return (
         <div ref={cursorRef} className={`cursor${_.projectHover ? ' _active-project' : ''}${_.hoverAnyLink ? ' _active-link' : ''}${_.letstalkHover ? ' _active-letstalk' : ''}`}>
      <div className='cursor__main'>
         {/* <svg className='logo-outter' xmlns="http://www.w3.org/2000/svg" width="46" height="51" viewBox="0 0 46 51" fill="none">
           <path d="M38.9589 17.5984L44.8954 14.171C45.0412 14.6344 45.1413 15.1242 45.1237 15.6211L45.1234 35.9742C45.1173 37.651 44.2313 39.2274 42.77 40.0711L25.1431 50.2479C23.6818 51.0916 21.8736 51.0708 20.4185 50.2377L2.79196 40.0614C1.33677 39.2283 0.440972 37.6767 0.447075 35.9999L0.447406 15.6468C0.453508 13.97 1.33956 12.3936 2.80086 11.55L20.4277 1.37311C21.889 0.529428 23.6972 0.550265 25.1524 1.38337L42.7789 11.5597C43.218 11.7929 43.5921 12.1245 43.9205 12.4825L37.984 15.9099C29.7871 20.6424 19.3093 17.8387 14.58 9.64735L12.8904 10.6229C15.2485 14.7071 15.729 19.3887 14.612 23.6234C13.4591 27.8486 10.7218 31.6498 6.63477 34.0094L7.60961 35.6979C11.6967 33.3383 16.3572 32.8684 20.5928 33.9824C24.8187 35.1325 28.6327 37.8894 30.9908 41.9737L32.6804 40.9982C30.3224 36.9139 29.8419 32.2324 30.9588 27.9976C32.1118 23.7725 34.8718 19.9581 38.9589 17.5984Z" fill="#1D1D1F"/>
         </svg> */}
         <span className='usecase-link'>View project</span>
         <span className='letstalk-link'>Let&apos;s talk</span>
         {/* <svg className='logo-inner' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M5.42339 33.0835L6.91412 34.5743C10.5176 30.9708 15.2697 29.1599 20.0021 29.1414C24.7346 29.1631 29.4677 30.957 33.0737 34.563L34.5634 33.0733C30.9575 29.4673 29.1636 24.7342 29.1418 20.0017C29.1603 15.2692 30.9712 10.5172 34.5747 6.9137L33.084 5.42297C29.4804 9.02649 24.7284 10.8373 19.9959 10.8559C15.65 10.8359 11.2866 9.30446 7.81023 6.26189L6.34198 7.90087C12.6325 15.1759 12.3272 26.1798 5.42339 33.0835Z" fill="#101010"/>
            <path d="M0.036677 1.62447C0.360311 1.9481 6.0473 7.56007 6.34198 7.90087L7.81023 6.26189C7.50101 5.99124 1.82096 0.429301 1.5264 0.134745L0.036677 1.62447Z" fill="#101010"/>
         </svg> */}
      </div>
    </div>
  )
}
