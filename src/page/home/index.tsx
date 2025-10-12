'use client';
import { Container, Hero, Projects } from '@/widgets';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useEffect } from 'react';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
};
