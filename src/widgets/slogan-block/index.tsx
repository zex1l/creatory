'use client';
import { useEffect, useRef } from 'react';
import css from './slogan-block.module.scss';
import cn from 'classnames';
import { useAnimateTitle } from '@/shared/hooks/use-animate-title';

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
        <TextBlock text="не для всех" className={css.left} />
        <ArrowGreen className={css.arrow__right} />
      </div>
      <div className={cn(css.slogan__item, css.second)}>
        <TextBlock text="но для лучших" className={css.right} />
        <ArrowGreen className={css.arrow__left} />
      </div>
    </section>
  );
};

const TextBlock = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  useAnimateTitle({ ref: titleRef });

  return (
    <p ref={titleRef} className={cn(css.text, className)}>
      {text}
    </p>
  );
};

const ArrowGreen = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn(css.arrow, className)}
      xmlns="http://www.w3.org/2000/svg"
      width="1071"
      height="57"
      viewBox="0 0 1071 57"
      fill="none"
    >
      <path
        d="M31.4658 6.45117L17.3076 23.2256H1070.54V33.2256H17.3076L31.4658 50L23.8242 56.4512L0 28.2256L23.8242 0L31.4658 6.45117Z"
        fill="#54D084"
      />
    </svg>
  );
};
