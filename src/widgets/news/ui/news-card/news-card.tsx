import Link from 'next/link';
import css from './news-card.module.scss';
import Image from 'next/image';

type Props = {
  title: string;
  img: string;
  link: string;
};

export const NewsCard = ({ img, link, title }: Props) => {
  if (!img) return null;

  return (
    <Link href={link} className={css.card}>
      <div className={css.picture}>
        <Image src={img} alt={title} fill />
      </div>
      <p className={css.title} dangerouslySetInnerHTML={{ __html: title }}></p>
    </Link>
  );
};
