'use client';
import Link from 'next/link';
import { NAV_DATA } from '../../data';
import css from './navigation-menu.module.scss';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { useFixedPosition } from '@/shared/hooks/use-fixed-position';
import { useAnimationMenu } from '../../lib/use-animation-menu';

export const NavigationMenu = ({ open }: { open: boolean }) => {
  const pathname = usePathname();
  useAnimationMenu(open);
  useFixedPosition(open);

  return (
    <div className={cn(css.navigationMenu, { [css.open]: open })}>
      <nav className={css.navigation}>
        <ul className={css.list}>
          {NAV_DATA.map((item, index) => (
            <Link href={item.link} key={index}>
              <li
                className={cn(css.item, `header-link${index + 1}`, {
                  [css.active]: pathname === item.link,
                })}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};
