import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function OthersLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1921 13.104H20.4001V10.896H18.1921V13.104ZM3.6001 13.104H5.8081V10.896H3.6001V13.104ZM10.8961 13.104H13.1041V10.896H10.8961V13.104Z"
        fill={color}
      />
    </svg>
  );
}

export default OthersLight;
