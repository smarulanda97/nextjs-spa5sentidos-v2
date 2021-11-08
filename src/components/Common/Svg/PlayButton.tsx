import React from 'react';
import { Svg } from '../../../types';

const PlayButton: React.FC<Svg> = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{ height, width }}
  >
    <link
      type="text/css"
      rel="stylesheet"
      id="prefix__dark-mode-general-link"
    />
    <style type="text/css" id="dark-mode-custom-style" />
    <style type="text/css" id="dark-mode-native-style" />
    <linearGradient
      xmlns="http://www.w3.org/2000/svg"
      id="prefix__SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1={256}
      y1={514}
      x2={256}
      y2={2}
      gradientTransform="matrix(1 0 0 -1 0 514)"
    >
      <stop stopColor="#1bdacc" offset={1} />
      <stop stopColor="#42445a" offset={1} />
    </linearGradient>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M256 512c-68.38 0-132.667-26.629-181.02-74.98C26.629 388.667 0 324.38 0 256S26.629 123.333 74.98 74.98C123.333 26.629 187.62 0 256 0s132.667 26.629 181.02 74.98C485.371 123.333 512 187.62 512 256s-26.629 132.667-74.98 181.02C388.667 485.371 324.38 512 256 512zm0-472C136.897 40 40 136.897 40 256s96.897 216 216 216 216-96.897 216-216S375.103 40 256 40zm-91 350.562V121.438L399.138 256 165 390.562zm40-200v130.877L318.862 256 205 190.562z"
      fill="url(#prefix__SVGID_1_)"
    />
  </svg>
);

export default React.memo(PlayButton);
