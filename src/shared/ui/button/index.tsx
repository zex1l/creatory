'use client'
import { ButtonHTMLAttributes, } from 'react';
import css from './button.module.scss';
import Link from 'next/link';
import cn from 'classnames';

export const Button = ({
  attraction,
  className,
  asLink,
  to,
  children,
  ...props
}: Props) => {
  const btnClassName = cn(css.button, className);

  if (asLink && to) {
    return (
      <Link
        href={to}
        className={btnClassName}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={btnClassName} {...props}>
      {children}
    </button>
  );
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  attraction?: boolean;
  asLink?: boolean;
  to?: string;
};
