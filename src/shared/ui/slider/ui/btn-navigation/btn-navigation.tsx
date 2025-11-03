import { ButtonHTMLAttributes, forwardRef } from 'react';
import css from './btn-navigation.module.scss';
import cn from 'classnames';
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  classNameArrow?: string;
};

export const BtnNavigation = forwardRef<HTMLButtonElement, Props>(
  ({ className, classNameArrow }, ref) => {
    return (
      <button role="button" ref={ref} className={cn(css.button, className)}>
        <svg
          className={classNameArrow}
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
        >
          <path
            d="M18.8 8.0001L1.2 8.0001M1.2 8.0001L7.8 14.6001M1.2 8.0001L7.8 1.4001"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </button>
    );
  }
);

BtnNavigation.displayName = 'BtnNavigation';
