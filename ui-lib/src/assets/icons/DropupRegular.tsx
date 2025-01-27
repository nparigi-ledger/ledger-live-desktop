import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function DropupRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0002 8.65202L17.5922 14.244L16.4882 15.348L12.0002 10.86L7.5122 15.348L6.4082 14.244L12.0002 8.65202Z"
        fill={color}
      />
    </svg>
  );
}

export default DropupRegular;
