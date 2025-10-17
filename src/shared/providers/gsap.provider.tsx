'use client';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export const GsapProvider = ({ children }: { children: React.ReactNode }) => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true,
    });
  }, []);

  return <>{children}</>;
};
