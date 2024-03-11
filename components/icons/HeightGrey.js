import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#6B7280"
      d="M10 9a4.402 4.402 0 0 1-3.136-1.318A4.534 4.534 0 0 1 5.565 4.5c0-1.193.468-2.338 1.3-3.182A4.402 4.402 0 0 1 10 0c1.176 0 2.304.474 3.136 1.318A4.534 4.534 0 0 1 14.435 4.5a4.534 4.534 0 0 1-1.3 3.182A4.402 4.402 0 0 1 10 9Zm5.322 4.5V18h-1.774v-4.5c0-4.006 2.345-7.457 5.718-9.014L20 6.124a8.02 8.02 0 0 0-3.408 2.99 8.19 8.19 0 0 0-1.27 4.386Zm-8.87 0V18H4.678v-4.5c0-1.555-.44-3.078-1.27-4.386A8.02 8.02 0 0 0 0 6.124l.734-1.638A9.8 9.8 0 0 1 4.9 8.14a10.008 10.008 0 0 1 1.552 5.36Z"
    />
  </Svg>
)
export default SvgComponent