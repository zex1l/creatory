'use client';

import { ArrowCircleIcon, Button, Slider } from '@/shared/ui';
import css from './team.module.scss';
import { useAnimateTitle } from '@/shared/hooks/use-animate-title';
import { useRef } from 'react';
import { TeamCard } from './ui/team-card/team-card';

const data: TeamCardType[] = [
  {
    icons: ['/team/team-lang-1.svg', '/team/team-lang-2.svg'],
    img: '/team/team-card.png',
    name: 'Сергей Петров',
    role: 'Backend разработчик',
  },
  {
    icons: ['/team/team-lang-1.svg', '/team/team-lang-2.svg'],
    img: '/team/team-card.png',
    name: 'Сергей Петров',
    role: 'Backend разработчик',
  },
  {
    icons: ['/team/team-lang-1.svg', '/team/team-lang-2.svg'],
    img: '/team/team-card.png',
    name: 'Сергей Петров',
    role: 'Backend разработчик',
  },
  {
    icons: ['/team/team-lang-1.svg', '/team/team-lang-2.svg'],
    img: '/team/team-card.png',
    name: 'Сергей Петров',
    role: 'Backend разработчик',
  },
];

export const Team = () => {
  const refTitle = useRef<HTMLHeadingElement>(null);

  useAnimateTitle({ ref: refTitle });

  const items = new Array(2).fill(null);

  return (
    <section className={css.team}>
      <div className={css.header}>
        <h2 ref={refTitle} className={css.title}>
          Team
        </h2>
        <Button>
          Все кейсы <ArrowCircleIcon />
        </Button>
      </div>
      <div className={css.content}>
        <Slider
          items={items}
          options={{
            slidesPerView: 1,
            spaceBetween: 60,
          }}
          renderItem={() => (
            <div className={css.blocks}>
              {data.map((item, index) => {
                return <TeamCard {...item} key={index} />;
              })}
            </div>
          )}
        />
      </div>
    </section>
  );
};

export type TeamCardType = {
  role: string;
  name: string;
  icons: string[];
  img: string;
};
