import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ClipboardListCheckMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.6001 21.8399H20.4001V3.95991H15.8401V2.15991H8.1601V3.95991H3.6001V21.8399ZM5.5201 20.0159V5.75991H18.4801V20.0159H5.5201ZM6.7201 9.62391L8.9041 11.8319L12.0961 8.63991L10.9921 7.53591L8.9041 9.62391L7.8241 8.51991L6.7201 9.62391ZM7.6801 17.0399H10.0801V14.6399H7.6801V17.0399ZM12.0001 16.7999H16.6801V14.8799H12.0001V16.7999ZM12.9601 11.3279H16.6801V9.40791H12.9601V11.3279Z"
        fill={color}
      />
    </svg>
  );
}

export default ClipboardListCheckMedium;
