'use client'
import { useAppContext } from '@/shared/hooks/ThemeContext'
import Link from 'next/link'

export default function PolicyLinks() {
   const _ = useAppContext()
  return (
   <div><Link  onClick={()=>{
      _.setHoverAnyLink(false)
      _.setBurgerState(false)
   }} onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} href="/policy" >Privacy Policy</Link> | <Link onClick={()=>{
      _.setHoverAnyLink(false)
      _.setBurgerState(false)
   }}  onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} href={'/terms'}>Terms & Conditions</Link>
   </div>

  )
}
