import {
  LogoIcon,
  Button,
  ArrowCircleIcon,
} from '@/shared/ui';
import css from './hero.module.scss';
import { HeroTitle } from './ui/title/hero-title';
import { Socials } from './ui/socials/socials';

export const Hero = () => {
  return (
    <section data-speed="0.6" className={css.hero} id="hero-section">
      <video className={css.video} autoPlay muted loop playsInline>
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className={css.wrapper}>
        <div className={css.content__wrapper}>
          <Socials />
          <div className={css.content}>
            <HeroTitle />
            <p className={css.description}>не для всех, но для лучших</p>
          </div>
        </div>
        <Button className={css.btn} asLink to="/">
          Обсудить проект <ArrowCircleIcon />
        </Button>

        <div className={css.logo}>
          <LogoIcon />
        </div>
      </div>
    </section>
  );
};
