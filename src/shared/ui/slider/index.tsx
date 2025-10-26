'use client';
import { Swiper, type SwiperProps, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { type SwiperOptions } from 'swiper/types';
import 'swiper/css';
import css from './slider.module.scss';
import cn from 'classnames';
import { BtnNavigation } from './ui/btn-navigation/btn-navigation';
import { useDomRefWithSetter } from './lib/use-dom-ref';
import { useState } from 'react';

type Props<T> = SwiperProps & {
  items: T[];
  options?: SwiperOptions;
  renderItem: (item: T, index: number) => React.ReactNode;
  slideClassName?: string;
  prevBtnClassName?: string;
  nextBtnClassName?: string;
};

export const Slider = <T,>({
  options,
  items,
  renderItem,
  navigation = true,
  slideClassName,
  className,
  prevBtnClassName,
  nextBtnClassName,
  pagination = true,
}: Props<T>) => {
  const [activeSlide, setActiveSlide] = useState(1);

  const [nextEl, nextElRef] = useDomRefWithSetter<HTMLButtonElement>();
  const [prevEl, prevElRef] = useDomRefWithSetter<HTMLButtonElement>();

  const defaultOptions: SwiperOptions = {
    spaceBetween: 30,
    slidesPerView: 1.2,
    speed: 1500,
    ...options,
  };

  return (
    <>
      {(navigation || pagination) && (
        <div className={css.swiper__header}>
          {pagination && (
            <div className={css.pagination}>
              <p className={css.pagination__item}>{activeSlide}</p>
              <p className={css.pagination__item}>/</p>
              <p className={css.pagination__item}>{items.length}</p>
            </div>
          )}
          {navigation && (
            <div className={css.navigation}>
              <BtnNavigation
                ref={prevElRef}
                className={cn(css.prevBtn, prevBtnClassName)}
              />
              <BtnNavigation
                ref={nextElRef}
                className={cn(css.nextBtn, nextBtnClassName)}
              />
            </div>
          )}
        </div>
      )}
      <Swiper
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)}
        className={cn(css.swiper, className)}
        {...defaultOptions}
        modules={[Pagination, Navigation]}
        navigation={{ nextEl, prevEl }}
        pagination={{ clickable: true }}
      >
        {items.map((item, index) => (
          <SwiperSlide className={slideClassName} key={index}>
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
