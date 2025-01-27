import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function DevicesRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.52022 21.36H12.2162V19.896H5.64022C5.42421 19.896 5.28022 19.728 5.28022 19.512V4.46401C5.28022 4.24801 5.42421 4.10401 5.64022 4.10401H15.6002C15.8162 4.10401 15.9602 4.24801 15.9602 4.46401V6.57601H17.5202V4.44001C17.5202 3.45601 16.7042 2.64001 15.7202 2.64001H5.52022C4.53621 2.64001 3.72021 3.45601 3.72021 4.44001V19.56C3.72021 20.544 4.53621 21.36 5.52022 21.36ZM14.1602 21.36H20.2802V8.52002H14.1602V21.36ZM15.6242 19.896V9.98402H18.8162V19.896H15.6242Z"
        fill={color}
      />
    </svg>
  );
}

export default DevicesRegular;
