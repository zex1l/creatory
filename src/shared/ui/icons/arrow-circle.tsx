import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  className?: string;
};

export const ArrowCircleIcon = ({ className, ...props }: Props) => {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
    >
      <path
        d="M10.5003 18.8334C15.1027 18.8334 18.8337 15.1025 18.8337 10.5001C18.8337 5.89771 15.1027 2.16675 10.5003 2.16675C5.89795 2.16675 2.16699 5.89771 2.16699 10.5001C2.16699 15.1025 5.89795 18.8334 10.5003 18.8334Z"
        stroke="#0D0C0C"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M13.8406 8.00752C14.0749 7.7732 14.0749 7.3933 13.8406 7.15899C13.6063 6.92467 13.2264 6.92467 12.9921 7.15899L13.4163 7.58325L13.8406 8.00752ZM7.15874 12.9923L6.73448 13.4166L7.58301 14.2651L8.00727 13.8408L7.58301 13.4166L7.15874 12.9923ZM13.4163 7.58325L12.9921 7.15899L7.15874 12.9923L7.58301 13.4166L8.00727 13.8408L13.8406 8.00752L13.4163 7.58325Z"
        fill="#0D0C0C"
      />
      <path
        d="M8.41699 7.5835H13.417V12.5835"
        stroke="#0D0C0C"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
};
