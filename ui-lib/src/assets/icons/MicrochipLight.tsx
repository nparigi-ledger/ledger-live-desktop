import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function MicrochipLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99188 21.12H9.07188V17.76H11.4719V21.12H12.5519V17.76H14.9519V21.12H16.0319V17.76H17.7599V16.008H21.1199V14.928H17.7599V12.528H21.1199V11.448H17.7599V9.04801H21.1199V7.968H17.7599V6.24001H16.0319V2.88H14.9519V6.24001H12.5519V2.88H11.4719V6.24001H9.07188V2.88H7.99188V6.24001H6.23988V7.968H2.87988V9.04801H6.23988V11.448H2.87988V12.528H6.23988V14.928H2.87988V16.008H6.23988V17.76H7.99188V21.12ZM7.39188 16.608V7.368H16.6319V16.608H7.39188ZM10.0319 13.968H13.9919V10.008H10.0319V13.968Z"
        fill={color}
      />
    </svg>
  );
}

export default MicrochipLight;
