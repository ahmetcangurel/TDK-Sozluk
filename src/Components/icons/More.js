import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgMore = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16 13c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3Zm9 0c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3ZM7 13c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgMore;
