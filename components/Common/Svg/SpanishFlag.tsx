import React from 'react';
import { SvgProps } from '@types-app/index';

const SpanishFlag: React.FC<SvgProps> = ({ width, height }) => (
  <svg
    role={'img'}
    aria-labelledby={'flag_language_spanish'}
    style={{ height, width }}
    viewBox="0 -41 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#ff337a"
      d="M407 0H105C47.102 0 0 47.102 0 105v168.945c0 57.899 47.102 105 105 105h15.582l36.52 46.332a15.001 15.001 0 0023.563 0l36.519-46.332H407c57.898 0 105-47.101 105-105V105C512 47.102 464.898 0 407 0zm0 0"
    />
    <path fill="#ffe95c" d="M0 117.957h512v143.074H0zm0 0" />
    <path
      fill="#d1005b"
      d="M407 0H256v378.945h151c57.898 0 105-47.101 105-105V105C512 47.102 464.898 0 407 0zm0 0"
    />
    <path fill="#fcc733" d="M256 117.957h256v143.074H256zm0 0" />
  </svg>
);

export default React.memo(SpanishFlag);
