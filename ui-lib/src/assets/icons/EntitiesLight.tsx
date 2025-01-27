import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function EntitiesLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.68018 21.36H7.68018V15.36H5.23218V12.528H11.4722V15.36H9.00018V21.36H15.0002V15.36H12.5522V12.528H18.7922V15.36H16.3202V21.36H22.3202V15.36H19.8722V11.448H12.5522V8.64002H15.0002V2.64001H9.00018V8.64002H11.4722V11.448H4.15218V15.36H1.68018V21.36ZM2.76018 20.304V16.392H6.60018V20.304H2.76018ZM10.0802 20.304V16.392H13.9202V20.304H10.0802ZM10.0802 7.58401V3.67201H13.9202V7.58401H10.0802ZM17.4002 20.304V16.392H21.2402V20.304H17.4002Z"
        fill={color}
      />
    </svg>
  );
}

export default EntitiesLight;
