'use client';
import { ArrowCircleIcon, Button, Slider } from '@/shared/ui';
import css from './projects.module.scss';
import { CardProject } from './ui/card/card';
import { data } from './mock';

export const Projects = () => {
  const items = new Array(2).fill(null);

  return (
    <div className={css.projects}>
      <div className={css.container}>
        <div className={css.header}>
          <h2 className={css.title}>Made by Creatory</h2>
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
            renderItem={(item) => (
              <div className={css.blocks}>
                {data.map((item, index) => {
                  return <CardProject {...item} key={index} />;
                })}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};
