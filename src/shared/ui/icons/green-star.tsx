import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  className?: string;
};

export const GreenStar = ({ className, ...props }: Props) => {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M-6.55671e-07 15L9.6967 9.6967L15 -6.55671e-07L20.3033 9.6967L30 15L20.3033 20.3033L15 30L9.6967 20.3033L-6.55671e-07 15Z"
        fill="#54D084"
      />
    </svg>
  );
};
