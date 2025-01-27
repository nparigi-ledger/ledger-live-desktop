import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledNorthWestLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.26388 10.08L15.0959 15.912L15.9359 15.096L10.0799 9.24001C10.8719 9.264 11.6399 9.288 12.4079 9.288L14.3759 9.264V8.208H8.20788V14.352H9.28788V12.384C9.28788 11.64 9.28788 10.848 9.26388 10.08ZM2.87988 12C2.87988 17.088 6.91188 21.12 11.9999 21.12C17.1119 21.12 21.1199 16.968 21.1199 12C21.1199 6.912 17.0879 2.88 11.9999 2.88C6.91188 2.88 2.87988 6.912 2.87988 12ZM4.07988 12C4.07988 7.56 7.55988 4.08 11.9999 4.08C16.4399 4.08 19.9199 7.56 19.9199 12C19.9199 16.32 16.4399 19.92 11.9999 19.92C7.55988 19.92 4.07988 16.44 4.07988 12Z"
        fill={color}
      />
    </svg>
  );
}

export default CircledNorthWestLight;
