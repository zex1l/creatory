import {
  TelegramIcon,
  WhatsAppIcon,
  InstagramIcon,
  BehanceIcon,
} from '@/shared/ui';
import Link from 'next/link';
import css from './socials.module.scss';

const icons = [TelegramIcon, WhatsAppIcon, InstagramIcon, BehanceIcon];

export const Socials = () => {
  return (
    <div className={css.socials}>
      {icons.map((Icon, index) => (
        <Link key={index} className={css.icon} href="#">
          <Icon />
        </Link>
      ))}
    </div>
  );
};
