import { JSX, SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  className?: string;
};

export const StarIcon = ({ className, ...props }: Props) => {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
    >
      <path
        d="M0.474609 15.478L10.1713 10.1747L15.4746 0.478027L20.7779 10.1747L30.4746 15.478L20.7779 20.7813L15.4746 30.478L10.1713 20.7813L0.474609 15.478Z"
        fill="currentColor"
      />
    </svg>
  );
};

export type IconType = ({ className, ...props }: Props) => JSX.Element;
