import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FiveCircledFinaLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.764 16.704C12.684 16.704 13.98 15.384 13.98 13.608C13.98 11.856 12.732 10.536 11.004 10.536C10.212 10.536 9.56397 10.848 9.13197 11.376H8.98797L9.29997 8.64001H13.452V7.584H8.33997L7.85997 12.744H8.93997C9.20397 12 9.75597 11.592 10.74 11.592H10.836C12.108 11.592 12.78 12.216 12.78 13.416V13.776C12.78 15 12.156 15.624 10.812 15.624H10.716C9.34797 15.624 8.74797 14.952 8.72397 13.752H7.52397C7.52397 15.408 8.84397 16.704 10.764 16.704ZM4.11597 21.12H10.764C15.876 21.12 19.884 16.968 19.884 12C19.884 6.888 15.876 2.88 10.764 2.88H4.11597V4.08H10.764C15.204 4.08 18.684 7.56 18.684 12C18.684 16.32 15.204 19.92 10.764 19.92H4.11597V21.12Z"
        fill={color}
      />
    </svg>
  );
}

export default FiveCircledFinaLight;
