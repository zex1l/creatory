'use client';
import { Slider } from '@/shared/ui';
import css from './clients.module.scss';
import { ClientCard } from './ui/client-card/client-card';
import { ITEMS_DATA } from './data';
import { ClientsTitle } from './ui/clients-title/clients-title';

export const Clients = () => {
  return (
    <section className={css.clients}>
      <div className={css.header}>
        <ClientsTitle />
      </div>
      <div className={css.content}>
        <Slider
          options={{
            slidesPerView: 1,
            spaceBetween: 30,
          }}
          pagination
          navigation
          items={ITEMS_DATA}
          nextBtnClassName={css.sliderBtn}
          prevBtnClassName={css.sliderBtn}
          renderItem={(el) => (
            <div className={css.list}>
              {el.map((item, index) => (
                <ClientCard key={index} {...item} />
              ))}
            </div>
          )}
        ></Slider>
      </div>
    </section>
  );
};
