import {
  TelegramIcon,
  InstagramIcon,
  BehanceIcon,
  WhatsAppIcon,
  LogoIcon,
  Button,
  ArrowCircleIcon,
} from '@/shared/ui';
import css from './hero.module.scss';
import { Cursor } from '@/shared/ui/cursor';

export const Hero = () => {
  return (
    <section data-speed="0.6" className={css.hero} id="hero-section">
      <video className={css.video} autoPlay muted loop playsInline>
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className={css.wrapper}>
        <div className={css.content__wrapper}>
          <div className={css.socials}>
            <TelegramIcon />
            <WhatsAppIcon />
            <InstagramIcon />
            <BehanceIcon />
          </div>
          <div className={css.content}>
            <h1 className={css.title}>
              Digital веб-студия для <span>бизнеса</span>
            </h1>
            <p className={css.description}>не для всех, но для лучших</p>
          </div>
        </div>
        <Button activeMagnite className={css.btn} asLink to="/">
          Обсудить проект <ArrowCircleIcon />
        </Button>

        <div className={css.logo}>
          <LogoIcon />
        </div>
      </div>
      <Cursor />
    </section>
  );
};
