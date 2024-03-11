import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      fill="#FE6F32"
      d="M12.204 8.53a8.646 8.646 0 0 0-.999-.4 4.512 4.512 0 0 0 1.81-3.614A4.52 4.52 0 0 0 8.5 0a4.52 4.52 0 0 0-4.516 4.516c0 1.477.714 2.791 1.814 3.616a8.63 8.63 0 0 0-2.782 1.53 8.663 8.663 0 0 0-2.973 4.905A2.017 2.017 0 0 0 2.015 17h8.178a.664.664 0 1 0 0-1.328H2.015a.675.675 0 0 1-.531-.253.694.694 0 0 1-.14-.581c.688-3.31 3.608-5.729 6.98-5.81a4.553 4.553 0 0 0 .354 0 7.234 7.234 0 0 1 2.956.702.664.664 0 0 0 .57-1.2ZM8.662 7.7a9.092 9.092 0 0 0-.323 0 3.191 3.191 0 0 1-3.027-3.183A3.191 3.191 0 0 1 8.5 1.328a3.191 3.191 0 0 1 3.188 3.188 3.191 3.191 0 0 1-3.026 3.183Z"
    />
    <Path
      fill="#FE6F32"
      d="M16.335 13.182H14.51v-1.827a.664.664 0 1 0-1.328 0v1.827h-1.826a.664.664 0 1 0 0 1.328h1.826v1.826a.664.664 0 1 0 1.328 0V14.51h1.826a.664.664 0 0 0 0-1.328Z"
    />
  </Svg>
)
export default SvgComponent