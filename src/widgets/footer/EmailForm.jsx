'use client'
import { useAppContext } from "@/shared/hooks/ThemeContext";
import { ArrowRight } from "@/shared/icons/icons";

export default function EmailForm() {
   const _ = useAppContext()
  return (
   <form action="get" method="post">
   <div className="footer__send-email">
      <input type="email" placeholder="Your email"/>
      <button onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} type="submit">{ArrowRight}</button>
   </div>
</form>
  )
}
