import { useEffect, useRef, useState } from 'react';

export const useScrollHeader = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);

  const lastScroll = useRef<number>(0);

  useEffect(() => {
    const checkHeaderBg = () => {
      const element = document?.querySelector('section#hero-section');

      if (!element) return;

      const isWindowBelowThenTopBanner =
        window.scrollY > element?.getBoundingClientRect().height - 250;

      setIsTransparent(!isWindowBelowThenTopBanner);
    };

    const handleScroll = () => {
      const currentScroll = document.documentElement.scrollTop;

      if (currentScroll < 60) setHeaderVisible(true);
      else if (document.body.hasAttribute('data-body-scroll-fix'))
        setHeaderVisible(true);
      else {
        setHeaderVisible(
          currentScroll <= lastScroll.current || lastScroll.current === 0
        );
      }

      lastScroll.current = currentScroll;

      checkHeaderBg();
    };

    window.addEventListener('scroll', handleScroll, true);

    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  return { headerVisible, isTransparent };
};
