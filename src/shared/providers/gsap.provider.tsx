'use client'
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const GsapProvider = ({ children }: { children: React.ReactNode }) => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true
    })
  }, []);

  return <>{children}</>;
};
