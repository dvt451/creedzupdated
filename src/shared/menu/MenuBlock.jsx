'use client'
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { MenuList } from "./MenuList";
import { useAppContext } from "../hooks/ThemeContext";


export default function Menublock() {
   const _ = useAppContext()
   const location = usePathname()
   const router = useRouter()
  return (
   <>
      {MenuList.map((item, index) => (
         <li className="menu__items" key={index}>
            {
               location === '/' ? (<button className="menu__link" onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} onClick={()=>{
                  _.setBurgerState(false)
                   const element = document.querySelector(item.href);
                   element?.scrollIntoView({
                      behavior: 'smooth'
                   })
              }}>
                {item.title}
              </button>) :
              <button onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} className="menu__link" onClick={(e)=>{
               _.setLoeader(true)
               _.setBurgerState(false)
               _.setColorState(0)
               _.setHoverAnyLink(false)
               router.push('/')
               setTimeout(() => {
                  const element = document.querySelector(item.href);
                  element?.scrollIntoView({
                })
               }, 800);
           }}>
             {item.title}
           </button>
            }
         </li>
       ))}
   </>
  )
}
