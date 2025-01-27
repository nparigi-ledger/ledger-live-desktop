import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function BedThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.3999 18.96H2.8799V14.76H21.1199V18.96H21.5999V11.16C21.5999 9.69598 20.4959 8.59198 19.0319 8.59198H11.2559V14.28H2.8799V5.03998H2.3999V18.96ZM4.1759 10.104C4.1759 11.712 5.4719 12.984 7.0559 12.984C8.6639 12.984 9.9599 11.712 9.9599 10.104C9.9599 8.49598 8.6639 7.22398 7.0559 7.22398C5.4719 7.22398 4.1759 8.49598 4.1759 10.104ZM4.6559 10.104C4.6559 8.75998 5.7359 7.70398 7.0559 7.70398C8.3999 7.70398 9.4799 8.75998 9.4799 10.104C9.4799 11.448 8.3999 12.504 7.0559 12.504C5.7359 12.504 4.6559 11.448 4.6559 10.104ZM11.7359 14.28V9.07198H19.0319C20.2799 9.07198 21.1199 9.91198 21.1199 11.16V14.28H11.7359Z"
        fill={color}
      />
    </svg>
  );
}

export default BedThin;
