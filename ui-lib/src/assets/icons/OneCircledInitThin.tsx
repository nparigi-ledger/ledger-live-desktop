import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function OneCircledInitThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.512 11.904V16.464H13.992V7.584H12.72L9.45598 10.632V11.28L12.912 8.064H13.512V11.904ZM4.03198 12C4.03198 16.968 7.94398 20.88 12.912 20.88H19.968V20.4H12.912C8.20798 20.4 4.51198 16.704 4.51198 12C4.51198 7.416 8.20798 3.6 12.912 3.6H19.968V3.12H12.912C7.94398 3.12 4.03198 7.152 4.03198 12Z"
        fill={color}
      />
    </svg>
  );
}

export default OneCircledInitThin;
