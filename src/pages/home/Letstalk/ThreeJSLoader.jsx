'use client'
// components/ThreeJSLoader.js
import { useEffect } from 'react';

const ThreeJSLoader = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r125/three.min.js';
    script.async = true;
    script.onload = () => {
      console.log('Three.js loaded from CDN');
      // Ваш код, который зависит от Three.js, можно разместить здесь
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ThreeJSLoader;
