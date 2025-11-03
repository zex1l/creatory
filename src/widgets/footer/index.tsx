'use client';
import {
  BehanceIcon,
  FooterArrow,
  InstagramIcon,
  LogoWithText,
  TelegramIcon,
  WhatsAppIcon,
} from '@/shared/ui';
import css from './footer.module.scss';
import { CONTACTS } from '@/shared/constants/conatcts';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <div className={css.socials}>
          <LogoWithText className={css.logo} />
          <div className={css.links}>
            <Link href="#">
              <TelegramIcon className={css.icon} />
            </Link>
            <Link href="#">
              <WhatsAppIcon className={css.icon} />
            </Link>
            <Link href="#">
              <InstagramIcon className={css.icon} />
            </Link>
            <Link href="#">
              <BehanceIcon className={css.icon} />
            </Link>
          </div>
          <button
            onClick={() => window.scrollTo(0, 0)}
            className={css.btn__top}
          >
            <FooterArrow className={css.arrow} />
          </button>
        </div>
        <div className={css.contacts}>
          <Link className={css.contacts__link} href={`tel:${CONTACTS.tel}`}>
            {CONTACTS.tel}
          </Link>
          <Link className={css.contacts__link} href={`tel:${CONTACTS.tel}`}>
            {CONTACTS.tel2}
          </Link>
          <Link
            className={css.contacts__link}
            href={`mailto:${CONTACTS.email}`}
          >
            {CONTACTS.email}
          </Link>
        </div>
      </div>
      <div className={css.policy}>
        <p className={css.policy__text}>Политика конфиденциальности</p>
        <p className={css.policy__copyright}>© 2025 Creatory</p>
        <p className={css.policy__text}>ООО «Крэатори»</p>
      </div>
    </footer>
  );
};
