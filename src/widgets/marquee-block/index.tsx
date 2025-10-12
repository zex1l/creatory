import { Swiper, SwiperSlide } from 'swiper/react';
import css from './about-slider.module.scss';
import { GreenStar } from '@/shared/ui/icons/green-star';

import 'swiper/css';
import Marquee from 'react-fast-marquee';

const data = [
  '7 лет на рынке',
  '8 стран',
  '200+ проектов',
  '7 лет на рынке',
  '8 стран',
  '200+ проектов',
];

export const MarqueeBlock = () => {
  return (
    <section className={css.aboutSlider}>
      <Marquee
        className={css.marquee}
        speed={50}
        gradient={false}
        direction="left"
      >
        {data.map((item, index) => (
          <div key={index} className={css.item}>
            <GreenStar />
            <p className={css.text}>{item}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};
