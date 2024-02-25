import { FC } from "react";

interface TriangleIconProps {
  color: string;
}

const TriangleIcon: FC<TriangleIconProps> = ({ color }) => {
  return (
    <svg
      width="20"
      height="11"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 0L12.9952 7.5H0.00480938L6.5 0Z"
        stroke={color}
        fill={color}
      />
    </svg>
  );
};

export default TriangleIcon;
