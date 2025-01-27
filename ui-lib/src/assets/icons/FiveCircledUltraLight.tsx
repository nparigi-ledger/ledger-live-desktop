import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FiveCircledUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21C17.04 21 21 16.896 21 12C21 6.96 17.04 3 12 3C6.96 3 3 6.96 3 12C3 17.04 6.96 21 12 21ZM3.84 12C3.84 7.416 7.44 3.84 12 3.84C16.584 3.84 20.16 7.416 20.16 12C20.16 16.44 16.584 20.16 12 20.16C7.44 20.16 3.84 16.56 3.84 12ZM8.856 13.752C8.856 15.408 10.08 16.704 12 16.704C13.92 16.704 15.144 15.384 15.144 13.608C15.144 11.808 13.896 10.536 12.168 10.536C11.28 10.536 10.56 10.896 10.104 11.496H10.008L10.344 8.352H14.64V7.584H9.648L9.168 12.744H9.96C10.248 11.856 10.896 11.28 12.024 11.28H12.072C13.488 11.28 14.304 12.12 14.304 13.512V13.704C14.304 15.096 13.536 15.936 12.024 15.936H11.976C10.464 15.936 9.696 15.072 9.672 13.752H8.856Z"
        fill={color}
      />
    </svg>
  );
}

export default FiveCircledUltraLight;
