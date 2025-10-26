import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  className?: string;
};

export const StarIcon2 = ({ className, ...props }: Props) => {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
    >
      <path
        d="M15.4746 0.478027L19.0658 5.61125L25.1164 3.98736L24.5679 10.228L30.2467 12.8733L25.8151 17.3013L28.465 22.978L22.2239 23.5215L20.6049 29.5734L15.4746 25.978L10.3443 29.5734L8.72534 23.5215L2.48423 22.978L5.13413 17.3013L0.702493 12.8733L6.38134 10.228L5.8328 3.98736L11.8834 5.61125L15.4746 0.478027Z"
        fill="currentColor"
      />
    </svg>
  );
};
