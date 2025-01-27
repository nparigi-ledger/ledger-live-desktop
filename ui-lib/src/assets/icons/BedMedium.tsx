import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function BedMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.22021 18.72H4.02022V15.96H19.9802V18.72H21.7802V12.096C21.7802 9.88803 20.1002 8.20803 17.8922 8.20803H12.0602V14.04H4.02022V5.28003H2.22021V18.72ZM5.02822 10.08C5.02822 11.736 6.37222 13.08 8.02822 13.08C9.68422 13.08 11.0282 11.736 11.0282 10.08C11.0282 8.42403 9.68422 7.08003 8.02822 7.08003C6.37222 7.08003 5.02822 8.42403 5.02822 10.08ZM6.58822 10.08C6.58822 9.28803 7.23622 8.64003 8.02822 8.64003C8.82022 8.64003 9.46822 9.28803 9.46822 10.08C9.46822 10.872 8.82022 11.52 8.02822 11.52C7.23622 11.52 6.58822 10.872 6.58822 10.08ZM13.8602 14.04V10.008H18.4682C19.5002 10.008 19.9802 10.488 19.9802 11.52V14.04H13.8602Z"
        fill={color}
      />
    </svg>
  );
}

export default BedMedium;
