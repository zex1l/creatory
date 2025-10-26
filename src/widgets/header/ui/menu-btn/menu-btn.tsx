'use client';
import css from './menu-btn.module.scss';
import cn from 'classnames';

type Props = {
  open: boolean;
  onClick: () => void;
};

export const MenuBtn = ({ onClick, open }: Props) => {
  return (
    <div className={css.menuBtn}>
      <Burger onClick={onClick} open={open} />
    </div>
  );
};



type BurgerProps = {
  open: boolean;
  onClick: () => void;
};
const Burger = ({ onClick, open }: BurgerProps) => {
  return (
    <button onClick={onClick} role="button" className={cn(css.burger)}>
      <span className={cn(css.open_icon, { [css.open]: open })}>
        <span className={css.open_line}></span>
        <span className={css.open_line}></span>
      </span>

      <span
        className={cn(css.close_icon, css.close_icon1, { [css.open]: open })}
      >
        <span className={css.close_line}></span>
      </span>
      <span
        className={cn(css.close_icon, css.close_icon2, { [css.open]: open })}
      >
        <span className={css.close_line}></span>
      </span>
    </button>
  );
};
