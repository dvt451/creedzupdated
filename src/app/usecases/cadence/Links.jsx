'use client'

import { useAppContext } from "@/shared/hooks/ThemeContext";
import Link from "next/link";

export default function Links() {
   const _ = useAppContext()
  return (
   <div className="usecase__links">
   <Link onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} className='usecase__link-project usecase__link-project_prev' onClick={()=>{
      setTimeout(() => {
          const element = document.querySelector('.usecase');
          element?.scrollIntoView()
         }, 600);
         _.setHoverAnyLink(false)
  }} href={'/usecases/skrex'}>Previous Project</Link>
   <Link onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} onClick={()=>{
      _.setHoverAnyLink(false)
      setTimeout(() => {
         const element = document.querySelector('.usecase');
         element?.scrollIntoView()
        }, 300);
        _.setHoverAnyLink(false)
         }
      } className='usecase__link-project usecase__link-project_next' href={'/usecases/codelab'}>Next Project</Link>
</div>
  )
}
