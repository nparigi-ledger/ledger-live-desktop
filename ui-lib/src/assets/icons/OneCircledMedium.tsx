import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function OneCircledMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9999 21.3599C17.2559 21.3599 21.3599 17.0879 21.3599 11.9999C21.3599 6.76789 17.2319 2.63989 11.9999 2.63989C6.76789 2.63989 2.63989 6.76789 2.63989 11.9999C2.63989 17.2319 6.76789 21.3599 11.9999 21.3599ZM4.55989 11.9999C4.55989 7.82389 7.82389 4.55989 11.9999 4.55989C16.1759 4.55989 19.4399 7.82389 19.4399 11.9999C19.4399 16.0559 16.1759 19.4399 11.9999 19.4399C7.82389 19.4399 4.55989 16.1759 4.55989 11.9999ZM8.78389 12.4079L11.6159 9.81589H11.9519C11.9519 9.81589 11.8799 11.3999 11.8799 13.5359V16.4639H13.7999V7.58389H11.5679L8.78389 10.1519V12.4079Z"
        fill={color}
      />
    </svg>
  );
}

export default OneCircledMedium;
