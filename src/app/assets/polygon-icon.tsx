import { useTheme } from "styled-components";
export const PolygonIcon = () => {
  return (
    <svg
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 5.5L0.5 0.5L10.5 0.5L5.5 5.5Z"
        fill={useTheme()?.color.ON_SURFACE}
      />
    </svg>
  );
};
