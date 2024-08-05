'use client'
import { useAppContext } from '@/shared/hooks/ThemeContext'
import Link from 'next/link'
import React from 'react'

export default function AvailableNowButton({className}) {
   const _ = useAppContext()
  return (
      <Link onClick={()=>{
         _.setBurgerState(false)
         _.setHoverAnyLink(false)
      }} onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} href='/bookacall' className={`header__online-button online-button`}><i className='online-button__icon'><span className='shine'></span><span></span></i>
      <span className='online-button__text online-button__text_1'>Book a call</span>
      <span className='online-button__text online-button__text_2'>Book a call</span>
      </Link>
  )
}