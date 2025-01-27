import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function NetworkWiredThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.59991 21.36H11.0399V15.36H7.55991V12.24H16.4399V15.36H12.9599V21.36H20.3999V15.36H16.9199V12.24H21.8399V11.76H12.2399V8.64002H15.7199V2.64001H8.27991V8.64002H11.7599V11.76H2.15991V12.24H7.07991V15.36H3.59991V21.36ZM4.07991 20.88V15.84H10.5599V20.88H4.07991ZM8.75991 8.16002V3.12001H15.2399V8.16002H8.75991ZM13.4399 20.88V15.84H19.9199V20.88H13.4399Z"
        fill={color}
      />
    </svg>
  );
}

export default NetworkWiredThin;
