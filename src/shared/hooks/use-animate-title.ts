import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useEffect, useState } from 'react';

type PropsAnimateTitle = {
  ref: React.RefObject<HTMLHeadingElement | null>;
};
export const useAnimateTitle = ({ ref }: PropsAnimateTitle) => {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    ref.current!.style.opacity = '0';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          ref.current!.style.opacity = '1';
          observer.unobserve(ref.current!);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  useGSAP(() => {
    if (!ref.current || !isInView) return;

    const titleSplit = new SplitText(ref.current, {
      type: 'chars, words',
      charsClass: 'char',
      wordsClass: 'word',
    });

    gsap.fromTo(
      titleSplit.chars,
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        yPercent: 0,

        duration: 1,
        stagger: 0.05,
        ease: 'back.out(1.7)',
      }
    );
  }, [isInView]);
};
