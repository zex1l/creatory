import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  className?: string;
};

export const FooterArrow = ({ className, ...props }: Props) => {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="29"
      viewBox="0 0 50 29"
      fill="none"
    >
      <path
        d="M21.0616 12.8356L11.2438 2.85254M11.2438 2.85254L1.42603 12.8356M11.2438 2.85254L11.2438 26.8525H49.426"
        stroke="#54D084"
        stroke-width="4"
      />
    </svg>
  );
};
