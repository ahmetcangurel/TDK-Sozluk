import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgLeft = props => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="m19 7-9 9 9 9 2.23-2.23L14.46 16l6.77-6.77L19 7Z" fill={props.fill} />
  </Svg>
);

export default SvgLeft;
