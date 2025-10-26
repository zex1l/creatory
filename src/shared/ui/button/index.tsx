'use client';
import { ButtonHTMLAttributes, useEffect, useRef, useState } from 'react';
import css from './button.module.scss';
import Link from 'next/link';
import cn from 'classnames';

import { useMagniteBtn } from '@/shared/hooks/use-magnite-btn';

export const Button = ({
  attraction,
  className,
  asLink,
  to,
  children,
  activeMagnite = false,
  ...props
}: Props) => {
  const btnClassName = cn(css.button, className);
  const { btnRef } = useMagniteBtn(activeMagnite);

  if (asLink && to) {
    return (
      <Link
        style={{
          transition: 'transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1)',
        }}
        //@ts-ignore
        ref={btnRef}
        href={to}
        className={btnClassName}
      >
        {children}
      </Link>
    );
  }

  return (
    //@ts-ignore
    <button ref={btnRef} className={btnClassName} {...props}>
      {children}
    </button>
  );
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  attraction?: boolean;
  asLink?: boolean;
  to?: string;
  activeMagnite?: boolean;
};
