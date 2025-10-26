'use client';
import { useState } from 'react';
import css from './header.module.scss';
import { Logo } from './ui/logo/logo';
import { MenuBtn } from './ui/menu-btn/menu-btn';
import { Navigation } from './ui/navigation/navigation';
import { NavigationMenu } from './ui/navigation-menu/navigation-menu';
import { useScrollHeader } from './lib/use-scroll-header';
import cn from 'classnames';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { headerVisible, isTransparent } = useScrollHeader();

  return (
    <header
      className={cn(css.header, {
        [css.hidden]: !headerVisible,
        [css.background]: !isTransparent,
        [css.transparent]: isTransparent,
        [css.open]: open,
      })}
    >
      <Logo className={css.logo} />
      <Navigation open={open} />
      <MenuBtn onClick={() => setOpen((prev) => !prev)} open={open} />
      <NavigationMenu open={open} />
    </header>
  );
};
