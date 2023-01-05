import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgX = props => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M22.752 7 16 13.75 9.25 7 7 9.25 13.75 16 7 22.75 9.25 25 16 18.25 22.752 25l2.25-2.25-6.75-6.75 6.75-6.75L22.752 7Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgX;
