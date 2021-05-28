import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { BlockBase } from '@components/index';
import { BlockBaseProps } from '@types-app/components';
import { GET_DATA_VIDEO_BLOCK_COMPONENT } from '@queries/index';

const VideoBlock: React.FC = () => {
  const { locale } = useRouter();
  const { loading, data } = useQuery(GET_DATA_VIDEO_BLOCK_COMPONENT, {
    variables: { locale },
  });

  const renderVideo = () => {
    if (loading || !data?.videoBlock) {
      return;
    }

    const blockData = data.videoBlock[0];
    const blockProps: BlockBaseProps = {
      ...blockData,
      videoId: blockData.video_id,
    };

    return <BlockBase {...blockProps} />;
  };

  return <React.Fragment>{renderVideo()}</React.Fragment>;
};

export default VideoBlock;
