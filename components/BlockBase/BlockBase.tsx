import React from 'react';
import YouTube from 'react-youtube';
import { asset } from '@utils/imageUtils';
import styles from './BlockBase.module.scss';
import { StrapiImage } from '@types-app/index';
import { Col, Container, Row } from 'react-bootstrap';

type BlockBaseProps = {
  title: string;
  video_id?: any;
  link?: string;
  body?: string;
  images?: {
    desktop?: StrapiImage;
    mobile?: StrapiImage;
  };
};

class BlockBase extends React.Component<BlockBaseProps> {
  videoOptions = {};
  /**
   *
   */
  backgroundProperties = () => {
    return !this.props.images
      ? {}
      : {
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${asset(this.props.images.desktop.url)})`,
        };
  };

  render() {
    return (
      <Container
        fluid
        as={'section'}
        data-testid={'block-base'}
        className={styles.blockBase}
        style={{
          ...this.backgroundProperties(),
        }}
      >
        <Row>
          <Col className={'position-relative'}>
            {this.props.video_id && (
              <div className={styles.video} data-testid="youtube-video">
                <YouTube
                  videoId={this.props.video_id}
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

const BlockBaseComponent = React.memo(BlockBase);

export default BlockBaseComponent;
