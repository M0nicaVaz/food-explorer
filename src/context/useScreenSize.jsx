'use client';
import { createContext, useContext, useEffect, useState } from 'react';

export const ScreenSizeContext = createContext({});

export const ScreenSizeContextProvider = ({
  children,
}) => {
  const [screenSize, setScreenSize] = useState('mobile');

  const Breakpoints = {
    tablet: 640,
    desktop: 1024,
    fullHd: 1530,
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= Breakpoints.fullHd) return setScreenSize('fullHd');
      if (window.innerWidth >= Breakpoints.desktop) return setScreenSize('desktop');
      if (window.innerWidth >= Breakpoints.tablet) return setScreenSize('tablet');
      return setScreenSize('mobile');
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <ScreenSizeContext.Provider value={{ screenSize }}>{children}</ScreenSizeContext.Provider>;
};

export const useScreenSize = () => useContext(ScreenSizeContext);
