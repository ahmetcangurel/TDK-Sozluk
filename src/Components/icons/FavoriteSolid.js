import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgFavoriteSolid = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M25.333 13.51V5.508a2.67 2.67 0 0 0-2.666-2.666H9.333a2.67 2.67 0 0 0-2.666 2.666V29.333L16 23.112l9.333 6.221V13.51Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgFavoriteSolid;
