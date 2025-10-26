import Image from 'next/image';
import css from './client-card.module.scss';
import Link from 'next/link';

export type ClientCardProps = {
  img: string;
  link: string;
};

export const ClientCard = ({ img, link }: ClientCardProps) => {
  if (!img) return null;

  return (
    <Link href={link} className={css.card}>
      <Image fill src={img} alt="Логотип клиента" />
    </Link>
  );
};
