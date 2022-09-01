import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgSearch = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.333 24c-5.89 0-10.666-4.776-10.666-10.667 0-5.89 4.775-10.666 10.666-10.666S24 7.442 24 13.333a10.62 10.62 0 0 1-2.24 6.541l7.183 7.183-1.886 1.886-7.183-7.183a10.62 10.62 0 0 1-6.54 2.24Zm8-10.667a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      fill="#000"
    />
  </Svg>
);

export default SvgSearch;
