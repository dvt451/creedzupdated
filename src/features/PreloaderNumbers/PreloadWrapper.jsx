'use client'
import { useAppContext } from '@/shared/hooks/ThemeContext'

export default function PreloadWrapper({children}) {
      const _ = useAppContext()
  return (
   <div style={{display: _.loeader ? 'none' : 'flex'}} className='home-loader'>
      {children}
   </div>

  )
}
