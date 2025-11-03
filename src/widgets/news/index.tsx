'use client';
import { Button, ArrowCircleIcon, Slider } from '@/shared/ui';
import css from './news.module.scss';
import { NewsCard } from './ui/news-card/news-card';
import { ITEMS_DATA } from './data';
import { useAnimateTitle } from '@/shared/hooks/use-animate-title';
import { useRef } from 'react';

export const News = () => {
  const refTitle = useRef<HTMLHeadingElement>(null);

  useAnimateTitle({ ref: refTitle });

  return (
    <section className={css.news}>
      <div className={css.header}>
        <h2 ref={refTitle} className={css.title}>
          Creatory News
        </h2>
        <Button activeMagnite>
          Все новости
          <ArrowCircleIcon />
        </Button>
      </div>
      <div className={css.content}>
        <Slider
          options={{
            spaceBetween: 30,
            breakpoints: {
              360: {
                slidesPerView: 1.3,
              },
              768: {
                slidesPerView: 1.8,
              },
              1024: {
                slidesPerView: 2.3,
              },

              1280: {
                slidesPerView: 2.65,
                spaceBetween: 40,
              },
            },
          }}
          navigation
          pagination
          items={ITEMS_DATA}
          renderItem={(item, index) => <NewsCard {...item} key={index} />}
        ></Slider>
      </div>
    </section>
  );
};
