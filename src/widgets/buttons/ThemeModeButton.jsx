'use client'

import { useAppContext } from "@/shared/hooks/ThemeContext";
import { useLayoutEffect } from "react";

export default function ThemeModeButton() {
  const { dark, setDark, setHoverAnyLink } = useAppContext();

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Effect to apply theme on initial render
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDark(savedTheme === 'dark');
    } else {
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDarkScheme);
      localStorage.setItem('theme', prefersDarkScheme ? 'dark' : 'light');
    }
  }, [setDark]); // Added setDark to dependency array

  // Effect to apply theme whenever `dark` changes
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]); // Correct dependency array

   return (
     <button onMouseEnter={() => setHoverAnyLink(true)} onMouseLeave={() => setHoverAnyLink(false)} onClick={toggleTheme} className='header__theme-mode theme-mode'>
       {dark ? (
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 20 20" fill="none">
           <g clipPath="url(#clip0_705_13624)">
             <path d="M13.545 6.45503C12.6455 5.55555 11.3757 4.97354 10 4.97354C8.62434 4.97354 7.3545 5.5291 6.45503 6.45503C5.55555 7.3545 4.97354 8.62434 4.97354 10C4.97354 11.3757 5.55555 12.6455 6.45503 13.545C7.3545 14.4444 8.62434 15.0265 10 15.0265C11.3757 15.0265 12.6455 14.4709 13.545 13.545C14.4444 12.6455 15.0265 11.3757 15.0265 10C15.0265 8.62434 14.4709 7.3545 13.545 6.45503ZM10 3.4127C10.3704 3.4127 10.6878 3.09524 10.6878 2.72487V0.687831C10.6878 0.31746 10.3704 0 10 0C9.62963 0 9.31217 0.31746 9.31217 0.687831V2.72487C9.31217 3.09524 9.62963 3.4127 10 3.4127ZM15.6349 5.34391L17.0899 3.88889C17.3545 3.62434 17.3545 3.20106 17.0899 2.93651C16.8254 2.67196 16.4021 2.67196 16.1376 2.93651L14.6825 4.39153C14.418 4.65608 14.418 5.07936 14.6825 5.34391C14.9206 5.60847 15.3439 5.60847 15.6349 5.34391ZM19.3122 9.31217H17.2751C16.9048 9.31217 16.5873 9.62963 16.5873 10C16.5873 10.3704 16.9048 10.6878 17.2751 10.6878H19.3122C19.6825 10.6878 20 10.3704 20 10C20 9.62963 19.6825 9.31217 19.3122 9.31217ZM15.6085 14.6561C15.3439 14.3915 14.9206 14.3915 14.6561 14.6561C14.3915 14.9206 14.3915 15.3439 14.6561 15.6085L16.1111 17.0635C16.3757 17.328 16.7989 17.328 17.0635 17.0635C17.328 16.7989 17.328 16.3757 17.0635 16.1111L15.6085 14.6561ZM10 16.5873C9.62963 16.5873 9.31217 16.9048 9.31217 17.2751V19.3122C9.31217 19.6825 9.62963 20 10 20C10.3704 20 10.6878 19.6825 10.6878 19.3122V17.2751C10.6878 16.9048 10.3704 16.5873 10 16.5873ZM4.36508 14.6561L2.91005 16.1111C2.6455 16.3757 2.6455 16.7989 2.91005 17.0635C3.1746 17.328 3.59788 17.328 3.86243 17.0635L5.31746 15.6085C5.58201 15.3439 5.58201 14.9206 5.31746 14.6561C5.07936 14.3915 4.65608 14.3915 4.36508 14.6561ZM3.4127 10C3.4127 9.62963 3.09524 9.31217 2.72487 9.31217H0.687831C0.31746 9.31217 0 9.62963 0 10C0 10.3704 0.31746 10.6878 0.687831 10.6878H2.72487C3.09524 10.6878 3.4127 10.3704 3.4127 10ZM4.36508 5.34391C4.62963 5.60847 5.05291 5.60847 5.31746 5.34391C5.58201 5.07936 5.58201 4.65608 5.31746 4.39153L3.86243 2.93651C3.59788 2.67196 3.1746 2.67196 2.91005 2.93651C2.6455 3.20106 2.6455 3.62434 2.91005 3.88889L4.36508 5.34391Z" fill="white"/>
           </g>
           <defs>
             <clipPath id="clip0_705_13624">
               <rect width="20" height="20" fill="white"/>
             </clipPath>
           </defs>
         </svg>
       ) : (
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
           <path d="M22.3083 14.9025C22.4722 14.7387 22.63 14.5688 22.7813 14.3932C22.3289 16.294 21.3614 18.0969 19.8786 19.5797C15.61 23.8484 8.68891 23.8484 4.42024 19.5797C0.151564 15.3111 0.151611 8.39006 4.42024 4.12139C5.90308 2.63859 7.70594 1.67114 9.60682 1.21875C9.43121 1.37002 9.26131 1.52778 9.09747 1.69172C5.44933 5.33986 5.44933 11.2544 9.09747 14.9025C12.7456 18.5507 18.6602 18.5507 22.3083 14.9025Z" fill="#1D1D1F"/>
         </svg>
       )}
     </button>
   );
}
