import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function NineCircledMediThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.976 16.704C14.136 16.704 15.384 14.832 15.36 11.904C15.336 9.048 14.112 7.344 12.024 7.344C10.272 7.344 9.02401 8.664 9.02401 10.44C9.02401 12.216 10.272 13.536 12.024 13.536C13.44 13.536 14.496 12.672 14.832 11.4H14.856C14.976 13.92 14.448 16.224 11.976 16.224C10.584 16.224 9.74401 15.456 9.52801 14.04H9.04801C9.26401 15.648 10.392 16.704 11.976 16.704ZM5.76001 20.88H18.24V20.4H5.76001V20.88ZM5.76001 3.6H18.24V3.12H5.76001V3.6ZM9.50401 10.464V10.416C9.50401 8.856 10.464 7.824 12 7.824H12.048C13.656 7.824 14.568 9 14.568 10.416V10.464C14.568 12 13.632 13.056 12.048 13.056H12C10.464 13.056 9.50401 12.024 9.50401 10.464Z"
        fill={color}
      />
    </svg>
  );
}

export default NineCircledMediThin;
