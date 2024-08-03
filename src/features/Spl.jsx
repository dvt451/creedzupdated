'use client'
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Spl() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on initial load
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <Spline scene="https://prod.spline.design/BkevOD8xS0-ueq-f/scene.splinecode" />
      ) : (
        <Spline scene="https://prod.spline.design/7y4WihuHOycttXWj/scene.splinecode" />
      )}
    </>
  );
}
