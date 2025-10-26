import Link from 'next/link';
import cn from 'classnames';
import css from './logo.module.scss';
import { LogoWithText } from '@/shared/ui';
import { ROUTES } from '@/shared/config/routes';
type Props = {
  className?: string;
};

export const Logo = ({ className }: Props) => {
  return (
    <Link href={ROUTES.home} className={cn(css.logo, className)}>
      <LogoWithText />
    </Link>
  );
};
