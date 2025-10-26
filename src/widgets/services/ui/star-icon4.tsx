import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  className?: string;
};

export const StarIcon4 = ({ className, ...props }: Props) => {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
    >
      <circle cx="10" cy="10.478" r="10" fill="currentColor" />
    </svg>
  );
};
