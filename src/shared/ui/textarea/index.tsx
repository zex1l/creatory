'use client';
import { FormEventHandler, useId, useRef, useState } from 'react';
import css from './textarea.module.scss';
import cn from 'classnames';

type Props = {
  label?: string;
  error?: boolean;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({ label, error, ...props }: Props) => {
  const [focused, setFocused] = useState(false);
  const refWrapper = useRef<HTMLDivElement | null>(null);
  const id = useId();

  const autoResize: FormEventHandler<HTMLTextAreaElement> = (e) => {
    const element = e.target as HTMLTextAreaElement;
    const wrapper = refWrapper.current;

    const value = element.style;
    value.height = 'auto';
    value.height = element.scrollHeight + 'px';

    if (
      wrapper &&
      wrapper.style.paddingBottom !== '10px' &&
      element.scrollHeight > 30
    ) {
      wrapper.style.paddingBottom = '10px';
    }

    if (wrapper && element.scrollHeight <= 30) {
      wrapper.style.paddingBottom = '0px';
    }
  };

  return (
    <div
      ref={refWrapper}
      className={cn(css.textWrapper, props.className, { [css.error]: error })}
    >
      {label && (
        <label
          htmlFor={id}
          className={cn(css.label, { [css.focused]: focused || props.value })}
        >
          {label}
        </label>
      )}
      <textarea
        {...props}
        id={id}
        rows={1}
        onChange={autoResize}
        onInput={props.onChange}
        value={props.value}
        className={css.textarea}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};
