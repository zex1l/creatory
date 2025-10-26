import { useState, useRef, useEffect, useMemo } from 'react';
import { NAV_DATA } from '../data';

export const useCalcBallPosition = (pathname: string) => {
  const [hoverElIndex, setHoverElIndex] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(-1);

  const navRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const handleHover = (index: number) => {
    setHoverElIndex(index);
  };

  useEffect(() => {
    const currentIndex = NAV_DATA.findIndex((item) => item.link === pathname);

    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [pathname]);

  const setItemRef = (index: number) => (el: HTMLLIElement | null) => {
    itemsRef.current[index] = el;
  };

  const ballPosition = useMemo(() => {
    const indexToUse = hoverElIndex !== -1 ? hoverElIndex : activeIndex;

    if (indexToUse === -1) return 0;

    const currentItem = itemsRef.current[indexToUse];
    const navElement = navRef.current;

    if (!currentItem || !navElement) return 0;

    const itemRect = currentItem.getBoundingClientRect();
    const navRect = navElement.getBoundingClientRect();

    // Находим центр элемента относительно viewport
    const itemCenter = itemRect.left + itemRect.width / 2;

    // Находим позицию навигации относительно viewport
    const navLeft = navRect.left;

    const positionPercent = ((itemCenter - navLeft) / navRect.width) * 100;

    return positionPercent;
  }, [hoverElIndex, activeIndex]);

  return {
    navRef,
    itemsRef,
    handleHover,
    setItemRef,
    ballPosition,
    activeIndex,
    hoverElIndex,
  };
};
