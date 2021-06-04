import React from 'react';
import Image from 'next/image';
import YouTube from 'react-youtube';
import { asset } from '@utils/imageUtils';
import styles from './BlockBase.module.scss';
import { BlockBaseProps } from '@types-app/index';
import { Col, Container, Row } from 'react-bootstrap';

class BlockBase extends React.Component<BlockBaseProps> {
  videoOptions = {};

  render() {
    return (
      <Container
        fluid
        as={'section'}
        data-testid={'block-base-container'}
        className={styles.blockBase}
      >
        <Row>
          <Col className={'position-relative p-0'}>
            {this.props?.images && (
              <Image
                quality={100}
                layout={'fill'}
                objectFit={'cover'}
                className={styles.image}
                objectPosition={'center'}
                src={asset(this.props.images.desktop.url)}
              />
            )}

            {this.props.videoId && (
              <div
                className={styles.video}
                data-testid="youtube-video-container"
              >
                <YouTube
                  videoId={this.props.videoId}
                  opts={{ playerVars: { rel: 0 } }}
                />
              </div>
            )}

            <div className={styles.content}>
              {this.props.title && (
                <h2 className={'text-capitalize font-weight-bold title'}>
                  {this.props.title}
                </h2>
              )}
              {this.props.body && (
                <div role={'paragraph'}>{this.props.body}</div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default React.memo(BlockBase);
