import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6c1-1.48 0-3.5-.5-4 0 1.519-.886 2.37-1.5 3-.613.63-1 1.62-1 2.5a3 3 0 1 0 6 0c0-.766-.528-1.97-1-2.5-.893 1.5-1.396 1.5-2 1Z"
    />
  </Svg>
);
export default SvgComponent;
