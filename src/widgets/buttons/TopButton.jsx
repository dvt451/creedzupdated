'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/shared/hooks/ThemeContext";
import { ArrowUp } from "@/shared/icons/icons";

export default function TopButton() {
   const _ = useAppContext();
   const buttonRef = useRef(null);
   const location = usePathname();

   useLayoutEffect(() => {
      if (typeof window !== 'undefined' && buttonRef.current) {
         gsap.registerPlugin(ScrollTrigger);
         gsap.to(buttonRef.current, {
            scrollTrigger: {
               trigger: document.documentElement,
               start: 0,
               end: window.innerHeight,
               onLeave: () => { gsap.to(buttonRef.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
               onEnterBack: () => { gsap.to(buttonRef.current, { scale: 0, duration: 0.25, ease: "power1.out" }) }
            }
         });
      }
   }, [location]);

   return (
      <button onMouseEnter={() => { _.setHoverAnyLink(true) }} onMouseLeave={() => { _.setHoverAnyLink(false) }} ref={buttonRef} className={`button-to-head${_.burgerState ? ' _active' : ''}`} onClick={() => {
         const element = document.querySelector('main');
         element?.scrollIntoView({
            behavior: 'smooth'
         });
      }}>{ArrowUp}</button>
   );
}
