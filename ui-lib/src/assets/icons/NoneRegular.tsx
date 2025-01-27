import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function NoneRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.24C17.184 21.24 21.24 17.04 21.24 12C21.24 6.84001 17.16 2.76001 12 2.76001C6.84001 2.76001 2.76001 6.84001 2.76001 12C2.76001 17.16 6.84001 21.24 12 21.24ZM4.32001 12C4.32001 7.68001 7.70401 4.32001 12 4.32001C13.872 4.32001 15.576 4.94401 16.896 6.02401L6.04801 16.872C4.96801 15.552 4.32001 13.872 4.32001 12ZM7.12801 17.952L17.976 7.10401C19.056 8.42401 19.68 10.128 19.68 12C19.68 16.176 16.32 19.68 12 19.68C10.128 19.68 8.44801 19.032 7.12801 17.952Z"
        fill={color}
      />
    </svg>
  );
}

export default NoneRegular;
