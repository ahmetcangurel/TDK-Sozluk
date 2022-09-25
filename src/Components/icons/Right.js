import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgRight = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="m13 7 9 9-9 9-2.23-2.23L17.54 16l-6.77-6.77L13 7Z" fill={props.fill} />
  </Svg>
);

export default SvgRight;
