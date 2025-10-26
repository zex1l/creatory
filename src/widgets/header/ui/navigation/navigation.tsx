'use client';
import css from './navigation.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { NAV_DATA } from '../../data';
import { useCalcBallPosition } from '../../lib/use-calc-ball-position';

type Props = {
  open: boolean;
};

export const Navigation = ({ open }: Props) => {
  const pathname = usePathname();
  const {
    ballPosition,
    handleHover,
    navRef,
    setItemRef,
    activeIndex,
    hoverElIndex,
  } = useCalcBallPosition(pathname);

  return (
    <nav className={cn(css.navigation, { [css.open]: open })} ref={navRef}>
      <ul
        className={css.list}
        style={{ gridTemplateColumns: `repeat(${NAV_DATA.length}, 1fr)` }}
      >
        {NAV_DATA.map((item, index) => (
          <Link className={css.link} href={item.link} key={index}>
            <li
              ref={setItemRef(index)}
              onMouseMove={() => handleHover(index)}
              onMouseLeave={() => handleHover(-1)}
              className={cn(css.item, {
                [css.active]: pathname === item.link,
              })}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
      {(activeIndex !== -1 || hoverElIndex !== -1) && (
        <div
          className={css.ball}
          style={{
            left: `${ballPosition}% `,
            transform: 'translateX(-50%)',
          }}
        />
      )}
    </nav>
  );
};
