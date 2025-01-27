import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function OneCircledFinaLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.004 12.72V16.464H12.204V7.584H10.452L7.42797 10.392V11.832L10.572 8.928H11.052C11.052 9.552 11.004 11.016 11.004 12.72ZM4.11597 21.12H10.764C15.876 21.12 19.884 16.968 19.884 12C19.884 6.888 15.876 2.88 10.764 2.88H4.11597V4.08H10.764C15.204 4.08 18.684 7.56 18.684 12C18.684 16.32 15.204 19.92 10.764 19.92H4.11597V21.12Z"
        fill={color}
      />
    </svg>
  );
}

export default OneCircledFinaLight;
