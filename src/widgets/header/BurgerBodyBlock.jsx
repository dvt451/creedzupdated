'use client'

import { useAppContext } from "@/shared/hooks/ThemeContext"

export default function BurgerBodyBlock({children}) {
   const _ = useAppContext()
  return (
   <div className={`burger-body ${_.burgerState ? ' _active' : ''}`}>
      {children}
   </div>
  )
}
