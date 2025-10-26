import { useGSAP } from '@gsap/react';
import { useState, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useServiceScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemListRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (!itemsRef.current) return;

    itemsRef.current.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });
  }, []);

  const addToItems = (el: HTMLDivElement | null) => {
    if (el) {
      itemsRef.current.push(el);
    }
  };

  return {
    itemListRef,
    addToItems,
    activeIndex,
  };
};
