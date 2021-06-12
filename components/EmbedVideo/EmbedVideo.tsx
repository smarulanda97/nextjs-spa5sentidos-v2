import Image from 'next/image';
import YouTube from 'react-youtube';
import React, { useState } from 'react';
import styles from './EmbedVideo.module.scss';
import { useTranslation } from 'next-i18next';
import { PlayButton } from '@components/index';
import { Button, Modal } from 'react-bootstrap';
import { EmbedVideoProps } from '@types-app/components';

const EmbedVideo: React.FC<EmbedVideoProps> = (props) => {
  const { videoId } = props;
  const { t } = useTranslation();
  const [play, setPlay] = useState(false);

  const handleClose = () => setPlay(false);
  const handleShow = () => setPlay(true);

  const renderThumbnail = () => {
    return (
      <div className={styles.thumbnail} data-testid={'thumbnail-container'}>
        <Image
          layout="fill"
          alt="Thumbnail Youtube video"
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        />
        <Button className={styles.play} onClick={handleShow}>
          <span>{t('play')}</span>
          <PlayButton height={'65px'} width={'65px'} />
        </Button>
      </div>
    );
  };

  const renderVideo = () => {
    return (
      <Modal
        show={play}
        onHide={handleClose}
        backdrop="static"
        className={styles.modal}
        dialogClassName={styles.modalDialog}
        contentClassName={styles.modalContent}
      >
        <Modal.Header closeButton className={styles.modalHeader} />
        <Modal.Body>
          <div className={styles.container} data-testid={'video-container'}>
            <YouTube
              className={styles.video}
              videoId={videoId}
              opts={{ playerVars: { rel: 0, autoplay: 1 } }}
            />
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div className={styles.frame} data-testid={'embed-video-container'}>
      {/**
       *
       * Thumbnail for lazy load of video
       *
       */}
      {renderThumbnail()}
      {/**
       *
       * Render the embed video when the user click on play button
       *
       */}
      {renderVideo()}
    </div>
  );
};

export default React.memo(EmbedVideo);
