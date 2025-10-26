import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import { gsap } from 'gsap';
import { NAV_DATA } from '../data';

export const useAnimationMenu = (open: boolean) => {
  useGSAP(() => {
    const links: SplitText[] = [];
    NAV_DATA.forEach((_, index) => {
      links.push(new SplitText(`.header-link${index + 1}`, { type: 'chars' }));
    });

    let currentLink = 0.2;
    links.forEach((link, index) => {
      gsap.from(link.chars, {
        xPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.06,
        delay: index * 0.1 * currentLink + 0.4,
        ease: 'expo.out',
      });
      currentLink += 0.2;
    });
  }, [open]);
};
