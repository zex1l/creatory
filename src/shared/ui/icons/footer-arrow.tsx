import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  className?: string;
};

export const FooterArrow = ({ className, ...props }: Props) => {
  return (
    <svg
      className={className}
      {...props}
      width="50"
      height="29"
      viewBox="0 0 50 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.7486 11.492L19.8639 14.3111L13.397 7.77685V24.9796H50V29H9.35055V7.77783L2.88469 14.3111L0 11.492L11.3738 0L22.7486 11.492Z"
        fill="#54D084"
      />
    </svg>
  );
};
