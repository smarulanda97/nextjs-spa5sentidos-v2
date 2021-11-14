import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { BlockBase } from '@components/index';
import { GET_DATA_VIDEO_BLOCK_COMPONENT } from '@queries/index';
import { Props as BlockProps } from '@components/BlockBase/BlockBase';

const VideoBlock: React.FC = () => {
  const { locale } = useRouter();
  const { loading, data } = useQuery(GET_DATA_VIDEO_BLOCK_COMPONENT, {
    variables: { locale },
  });

  const renderVideo = () => {
    if (loading || !data?.videoBlock) {
      return;
    }

    const { video_id: videoId, ...blockData } = data.videoBlock[0];
    const blockProps: BlockProps = {
      ...blockData,
      videoId,
    };

    return <BlockBase {...blockProps} />;
  };

  return <React.Fragment>{renderVideo()}</React.Fragment>;
};

export default VideoBlock;
