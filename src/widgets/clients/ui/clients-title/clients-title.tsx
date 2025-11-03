'use client';
import { useAnimateTitle } from '@/shared/hooks/use-animate-title';
import { useRef } from 'react';
import css from './clients-title.module.scss';

export const ClientsTitle = () => {
  const refTitle = useRef<HTMLHeadingElement>(null);

  useAnimateTitle({ ref: refTitle });

  return (
    <h2 ref={refTitle} className={css.title}>
      Clients
    </h2>
  );
};
