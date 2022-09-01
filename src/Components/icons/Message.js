import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgMessage = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M21.333 2.667H10.667c-4.412 0-8 3.588-8 8v16C2.667 27.403 3.263 28 4 28h17.333c4.412 0 8-3.588 8-8v-9.333c0-4.412-3.588-8-8-8ZM26.667 20a5.339 5.339 0 0 1-5.334 5.333h-16V10.667a5.339 5.339 0 0 1 5.334-5.334h10.666a5.339 5.339 0 0 1 5.334 5.334V20Z"
      fill="#000"
    />
    <Path
      d="M12.667 17.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19.333 17.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#000"
    />
  </Svg>
);

export default SvgMessage;
