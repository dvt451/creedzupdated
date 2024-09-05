'use client'
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Preloadtrigger from './Preloadtrigger';
import { useAppContext } from '@/shared/hooks/ThemeContext'
import PreloaderScaling from '../PreloadScaling/PreloaderScaling';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const _ = useAppContext()
  useEffect(() => {
   _.setLoeader(true);

      setTimeout(() => {
         setIsLoading(false);
         document.body.style.cursor = 'default'
         window.scrollTo(0,0);
       }, 2500)
   }, [])
  return (
   <AnimatePresence mode='wait'>
   {isLoading && <Preloadtrigger />}
 </AnimatePresence>
  )
}