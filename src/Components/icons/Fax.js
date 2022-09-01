import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgFax = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M25.333 9.333H24V2.667H8v6.666H6.667c-2.206 0-4 1.795-4 4v9.334a2.67 2.67 0 0 0 2.666 2.666H8v4h16v-4h2.667a2.67 2.67 0 0 0 2.666-2.666v-9.334c0-2.205-1.794-4-4-4Zm-14.666-4h10.666v4H10.667v-4Zm10.666 21.334H10.667v-5.334h10.666v5.334Zm5.334-4H24v-4H8v4H5.333v-9.334c0-.734.599-1.333 1.334-1.333h18.666c.736 0 1.334.599 1.334 1.333v9.334Z"
      fill="#000"
    />
    <Path d="M18.667 13.333H24V16h-5.333v-2.667Z" fill="#000" />
  </Svg>
);

export default SvgFax;
