import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { BlockBase } from '@components/index';
import { GET_VIDEO_BLOCK_DATA } from '@components/queries';

const VideoBlock: React.FC = () => {
  const { locale } = useRouter();
  const { loading, data } = useQuery(GET_VIDEO_BLOCK_DATA, {
    variables: { locale },
  });

  return (
    <React.Fragment>
      {data && !loading && data.videoBlock && (
        <BlockBase {...data.videoBlock[0]} />
      )}
    </React.Fragment>
  );
};

export default VideoBlock;
