'use client'
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function HeaderBlock({children}) {
   const headerRef = useRef(null)
   const [headerShowUp, setHeaderShowUp] = useState(false)
   const location = usePathname()
   useEffect(() => {
      let prevScrollpos = window.pageYOffset;
  
      const handleScroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
         setHeaderShowUp(false)
        } else {
         setHeaderShowUp(true)
        }
        prevScrollpos = currentScrollPos;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    useEffect(() => {
       setTimeout(() => {
         setHeaderShowUp(false)
      }, 800);
    }, [location])

    
  return (
    <header ref={headerRef} className={`header${headerShowUp ? ' hide' : ''}`}>
      {children}
    </header>
  )
}
