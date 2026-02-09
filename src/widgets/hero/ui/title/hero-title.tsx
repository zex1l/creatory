'use client';

import { useGSAP } from '@gsap/react';
import css from './hero-title.module.scss';
import { useRef, useState } from 'react';
import { gsap } from 'gsap';

const texts = ['бизнеса', 'человека', 'государства'];

export const HeroTitle = () => {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const text = texts[index];
    const el = textRef.current;
    if (!el) return;

    el.textContent = '';

    const tl = gsap.timeline({
      onComplete: () => {
        if (textRef.current) {
          textRef.current!.style.width = '0';
        }

        // После завершения всей анимации переходим к следующему тексту
        setIndex((prev) => (prev === texts.length - 1 ? 0 : prev + 1));
      },
    });

    gsap.set(textRef.current, { width: 'auto' });

    for (let i = 0; i < text.length; i++) {
      tl.to(
        {},
        {
          duration: 0.2,
          onComplete: () => {
            if (el) el.textContent = text.slice(0, i + 1);
          },
        },
        '+=0',
      );
    }

    tl.to({}, { duration: 2 });

    for (let i = text.length - 1; i >= 0; i--) {
      tl.to(
        {},
        {
          duration: 0.2,
          onComplete: () => {
            if (el) el.textContent = text.slice(0, i - 1);
          },
        },
        '+=0',
      );
    }

    return () => tl.kill();
  }, [index]);

  return (
    <h1 className={css.title}>
      Digital веб-студия для{' '}
      <span ref={textRef} key={index} className={css.printedText}></span>
    </h1>
  );
};
