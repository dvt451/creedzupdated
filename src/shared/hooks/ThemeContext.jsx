'use client'
import React, { createContext, useContext, useState } from 'react';

// Create a new context instance
const AppContext = createContext();

// Exported wrapper component to provide context
export function AppWrapper({ children }) {
  // State management within the context
  const [dark, setDark] = useState(false);
  const [burgerState, setBurgerState] = useState(false);
  const [projectHover, setProjectHover] = useState(false)
  const [colorState, setColorState] = useState(0)
  const [loeader, setLoeader] = useState(false)
  const [hoverAnyLink,setHoverAnyLink] = useState(false)
  const [letstalkHover, setLetstalkHover] = useState(false)



  // Object containing values and functions to be shared via context
  const _ = {
    dark,
    setDark,
    burgerState,
    setBurgerState,
    projectHover,
    setProjectHover,
    colorState,
    setColorState,
    setLoeader,
    loeader,
    setHoverAnyLink,
    hoverAnyLink,
    letstalkHover,
    setLetstalkHover,
   //  mousePosition,
   //  setMousePosition,
   //  handleMouseMove,
  };

  // Provide the context value to the children components
  return (
    <AppContext.Provider value={_}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to consume the context
export function useAppContext() {
   return useContext(AppContext);
 }
 