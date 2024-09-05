'use client'
import { useAppContext } from '@/shared/hooks/ThemeContext'
import Link from 'next/link'

export default function Links() {
   const _ = useAppContext()
  return (
   <div className='usecase__links'>
      <Link onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} className='usecase__link-project usecase__link-project_next' onClick={()=>{
         setTimeout(() => {
             const element = document.querySelector('.usecase');
             element?.scrollIntoView()
            }, 600);
            _.setHoverAnyLink(false)
     }} href={'/usecases/applexnike'}>Next Project</Link>
   </div>
  )
}