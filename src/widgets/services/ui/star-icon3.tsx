import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  className?: string;
};

export const StarIcon3 = ({ className, ...props }: Props) => {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 23}
      height={props.height || 23}
      viewBox="0 0 23 23"
      fill="none"
    >
      <path
        d="M0.867344 0.871426L11.4739 3.97803L22.0805 0.871426L18.9739 11.478L22.0805 22.0846L11.4739 18.978L0.867344 22.0846L3.97395 11.478L0.867344 0.871426Z"
        fill="currentColor"
      />
    </svg>
  );
};
