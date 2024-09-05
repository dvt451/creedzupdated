'use client'
import { useAppContext } from "@/shared/hooks/ThemeContext";
import { ArrowRight } from "@/shared/icons/icons";
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

export default function EmailForm() {
  const _ = useAppContext();
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [disabledButton, setDisabledButton] = useState(false);

  const handleSubmit = async (event) => {
   event.preventDefault(); // Prevent the default form submission
   setDisabledButton(true);

   try {
      const response = await axios.post('https://api.creedz.net/api/send-email', { email });

      if (response.data.status === 'ok') {
         router.push('/bookacall/received');
         // Optionally reset the form or provide feedback to the user
      } else {
         setDisabledButton(false);
         console.error('Unexpected response status:', response.data.status);
      }
      } catch (error) {
        setDisabledButton(false);
        console.error('Error sending email:', error);
      }
   };

  return (
   <form onSubmit={handleSubmit} method="post">
      <div className="footer__send-email">
         <input 
            type="email" 
            placeholder="Your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
         />
         
         <button
            onMouseEnter={()=>{_.setHoverAnyLink(true)}} 
            onMouseLeave={()=>{_.setHoverAnyLink(false)}} 
            type="submit">
            {ArrowRight}
         </button>
      </div>
   </form>
  )
}
