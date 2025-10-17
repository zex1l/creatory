'use client';
import { ArrowCircleIcon, Button } from '@/shared/ui';
import { data } from './data';
import css from './services.module.scss';
import { useServiceScroll } from './lib/use-service-scroll';
import { ItemService } from './ui/service-item/service-item';

export const Services = () => {
  const { activeIndex, addToItems, itemListRef, } = useServiceScroll();

  return (
    <section className={css.services}>
      <div className={css.header}>
        <h2 className={css.title}>Services</h2>
        <Button>
          Все услуги <ArrowCircleIcon />
        </Button>
      </div>
      <div className={css.items} ref={itemListRef}>
        {data.map((item, index) => (
          <ItemService
            key={index}
            {...item}
            index={index}
            icon={item.icon}
            ref={addToItems}
            isActive={activeIndex === index}
          />
        ))}
      </div>
    </section>
  );
};
