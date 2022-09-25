import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgTrash = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M6.67 26.667a2.67 2.67 0 0 0 2.667 2.666h13.334a2.67 2.67 0 0 0 2.666-2.666v-16h2.667V8h-5.333V5.333a2.67 2.67 0 0 0-2.667-2.666h-8a2.67 2.67 0 0 0-2.667 2.666V8H4.004v2.667h2.667v16Zm5.334-21.334h8V8h-8V5.333Zm-1.333 5.334h12l.001 16H9.337v-16h1.334Z"
      fill={props.fill}
    />
    <Path
      d="M12.004 13.333h2.667V24h-2.667V13.333Zm5.333 0h2.667V24h-2.667V13.333Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgTrash;
