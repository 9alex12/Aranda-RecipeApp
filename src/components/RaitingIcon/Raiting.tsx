import React from "react";
import { SvgIconProps } from "../../types/globalTypes";

const StarIcon: React.FC<SvgIconProps> = ({ color = "#f7b90d" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24.109"
      height="24.109"
      viewBox="0 0 24.109 24.109"
    >
      <g id="五角星" transform="translate(0.5 0.5)">
        <rect
          id="Rectangle"
          width="23.109"
          height="23.109"
          fill="none"
          stroke={color}
          strokeWidth="1"
          opacity="0"
        />
        <path
          id="Path"
          d="M20.146,7.649a.693.693,0,0,0-.6-.47l-6.38-.495L10.737.442a.693.693,0,0,0-1.292,0L7.019,6.685l-6.38.495A.693.693,0,0,0,.233,8.388l4.91,4.364L3.608,19.325a.693.693,0,0,0,1.053.738l5.43-3.537,5.43,3.537a.693.693,0,0,0,1.053-.738L15.04,12.751l4.91-4.364A.693.693,0,0,0,20.146,7.649Z"
          transform="translate(1.454 1.457)"
          fill={color}
          stroke={color}
          strokeWidth="1"
        />
      </g>
    </svg>
  );
};

export default StarIcon;
