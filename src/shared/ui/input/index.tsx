'use client';
import { useId, useState } from 'react';
import css from './input.module.scss';
import cn from 'classnames';

type Props = {
  label?: string;
  error?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, error, ...props }: Props) => {
  const [focused, setFocused] = useState(false);

  const id = useId();

  return (
    <div
      className={cn(css.inputWrapper, props.className, { [css.error]: error })}
    >
      {label && (
        <label
          htmlFor={id}
          className={cn(css.label, { [css.focused]: focused || props.value })}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        {...props}
        className={css.input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};
