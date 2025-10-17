import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

export const useServiceItemTurn = (index: number) => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    const titles = gsap.utils.toArray(`#title${index}`) as HTMLDivElement[];

    timelineRef.current = gsap.timeline({
      paused: true,
    });

    const splitText1 = new SplitText(titles[0], {
      type: 'chars',
    });

    const splitText2 = new SplitText(titles[1], {
      type: 'chars',
    });

    gsap.set(splitText1.chars, {
      opacity: 1,
      rotationX: 0,
      transformOrigin: '50% 50% -20px',
      z: 0,
    });

    gsap.set(splitText2.chars, {
      opacity: 0,
      rotationX: 90,
      transformOrigin: '50% 50% -20px',
      z: 0,
    });

    timelineRef.current
      .to(splitText1.chars, {
        rotationX: -90,
        opacity: 0,
        stagger: 0.02,
        duration: 0.4,
        ease: 'power2.inOut',
        z: -20,
      })
      .to(
        splitText2.chars,
        {
          rotationX: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 0.4,
          ease: 'power2.inOut',
          z: 0,
        },
        '<0.2'
      );

    return () => {
      splitText1.revert();
      splitText2.revert();
      timelineRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    timelineRef.current?.play();
  };

  const handleMouseLeave = () => {
    console.log('dwadwa');
    timelineRef.current?.reverse();
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
  };
};
