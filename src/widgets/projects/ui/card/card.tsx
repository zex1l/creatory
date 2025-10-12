import { useRef, useState } from 'react';
import css from './card.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { useTiltCard } from '../../lib/use-tilt-card';

export type ProjectCardType = {
  title: string;
  img: string;
  desciption: string;
  tags: {
    title: string;
    url: string;
  }[];
};

type Props = ProjectCardType;

export const CardProject = ({ desciption, img, tags, title }: Props) => {
  const {
    cardRef,
    setClosing,
    closing,
    handleMouseLeave,
    handleMouseMove,
    open,
  } = useTiltCard();

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={css.card}
      onAnimationEnd={() => setClosing(false)}
    >
      <Image className={css.img} src={img} alt={title} fill />
      {open && (
        <div
          className={cn(css.overlay, {
            [css.open]: open,
            [css.closing]: closing,
          })}
        >
          <h3 className={css.title}>{title}</h3>
          <p className={css.description}>{desciption}</p>
          <div className={css.tags}>
            {tags.map((tag) => (
              <a key={tag.title} href={tag.url}>
                {tag.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
