import React from 'react';
import { NextPage } from 'next';

import { App } from '../components';
import { PageProps } from '../types/pages';
import { renderPageComponents } from '../utils/pageUtils';

const LinkTree: NextPage<PageProps> = (props) => {
  return (
    <App layout={false} url={props.url}>
      {renderPageComponents('socialPage')}
    </App>
  );
};

export default LinkTree;
