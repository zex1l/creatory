'use client';
import { useEffect, useRef } from 'react';
import css from './slogan-block.module.scss';
import cn from 'classnames';

export const SloganBlock = () => {
  const ref = useRef<HTMLDivElement>(null);
  const refObserver = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    if (!ref.current) return;

    refObserver.current = new IntersectionObserver((entries) => {
      const section = entries[0];
      if (section.isIntersecting) {
        const blockItem = section.target.childNodes;

        const arrows: SVGSVGElement[] = [];

        blockItem.forEach((item) => {
          arrows.push(item.childNodes[1] as SVGSVGElement);
        });

        if (arrows.length > 0) {
          arrows[0].classList.add(css.arrow_left_animate);
          arrows[1].classList.add(css.arrow_right_animate);
        }
      }
    });
    refObserver.current.observe(ref.current);

    return () => {
      if (refObserver.current) {
        refObserver.current.disconnect();
      }
    };
  }, []);

  return (
    <section ref={ref} className={css.slogan}>
      <div className={cn(css.slogan__item, css.first)}>
        <p className={cn(css.text, css.left)}>не для всех</p>
        <ArrowGreen className={css.arrow__right} />
      </div>
      <div className={cn(css.slogan__item, css.second)}>
        <p className={cn(css.text, css.right)}>но для лучших</p>
        <ArrowGreen className={css.arrow__left} />
      </div>
    </section>
  );
};

const ArrowGreen = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn(css.arrow, className)}
      xmlns="http://www.w3.org/2000/svg"
      width="985"
      height="55"
      viewBox="0 0 985 57"
      fill="none"
    >
      <path
        d="M27.654 3.22656L6.54395 28.2266M6.54395 28.2266L27.654 53.2266M6.54395 28.2266H96.5439"
        stroke="#54D084"
        strokeWidth="10"
        height={55}
      />
      <path d="M96.5439 28.2266H2097.54" stroke="#54D084" strokeWidth="10" />
    </svg>
  );
};
