'use client';
import { useEffect, useRef } from 'react';
import css from './cursor.module.scss';
import { gsap } from 'gsap';

export const Cursor = () => {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(cursor.current, 'x', {
      duration: 0.1,
      ease: 'power3',
    });
    const yTo = gsap.quickTo(cursor.current, 'y', {
      duration: 0.1,
      ease: 'power3',
    });

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const clickDown = () => {
      if (cursor.current) cursor.current.style.gap = '8px';
    };
    const clickUp = () => {
      if (cursor.current) cursor.current.style.gap = '16px';
    };

    window.addEventListener('mousedown', clickDown);
    window.addEventListener('mouseup', clickUp);

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div ref={cursor} className={css.cursor}>
      <svg
        className={css.cursor_arrow1}
        xmlns="http://www.w3.org/2000/svg"
        width="4"
        height="8"
        viewBox="0 0 4 8"
        fill="none"
      >
        <path
          d="M0.693375 6.69336L2.69337 3.69336L0.693375 0.693359"
          stroke="#F9F9F9"
          strokeLinecap="square"
        />
      </svg>

      <svg
        className={css.cursor_arrow2}
        xmlns="http://www.w3.org/2000/svg"
        width="4"
        height="8"
        viewBox="0 0 4 8"
        fill="none"
      >
        <path
          d="M0.693375 6.69336L2.69337 3.69336L0.693375 0.693359"
          stroke="#F9F9F9"
          stroke-linecap="square"
        />
      </svg>
    </div>
  );
};
