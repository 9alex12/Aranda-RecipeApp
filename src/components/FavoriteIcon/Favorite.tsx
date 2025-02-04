import React from "react";
import { SvgIconProps } from "../../types/globalTypes";

const HeartIcon: React.FC<SvgIconProps> = ({ color = "#d84a4a" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.199"
      height="18.171"
      viewBox="0 0 20.199 18.171"
    >
      <path
        d="M10.612,16.278a1.733,1.733,0,0,1-2.329,0l-.207-.189C3.211,11.674,0,8.765,0,5.195A5.144,5.144,0,0,1,5.195,0a5.656,5.656,0,0,1,4.25,1.974A5.656,5.656,0,0,1,13.7,0,5.144,5.144,0,0,1,18.89,5.195c0,3.57-3.211,6.479-8.076,10.9Z"
        transform="matrix(1, 0.017, -0.017, 1, 0.802, 0.509)"
        fill={color}
        stroke={color}
        strokeWidth="1"
      />
    </svg>
  );
};

export default HeartIcon;
