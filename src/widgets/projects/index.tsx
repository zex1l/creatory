'use client';
import { ArrowCircleIcon, Button, Slider } from '@/shared/ui';
import css from './projects.module.scss';
import { CardProject } from './ui/card/card';
import { data } from './mock';
import { useAnimateTitle } from '@/shared/hooks/use-animate-title';
import { useRef } from 'react';

export const Projects = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const items = new Array(2).fill(null);
  useAnimateTitle({ ref: titleRef });

  return (
    <section className={css.projects}>
      <div className={css.container}>
        <div className={css.header}>
          <h2 ref={titleRef} className={css.title}>
            Made by CREAtory
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
                  return <CardProject {...item} key={index} />;
                })}
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
};
