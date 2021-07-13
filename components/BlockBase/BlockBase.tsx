import React from 'react';
import Image from 'next/image';
import { asset } from '@utils/imageUtils';
import styles from './BlockBase.module.scss';
import { StrapiImage } from '@types-app/index';
import { Col, Container, Row } from 'react-bootstrap';
import { EmbedVideo } from '@components/index';

export interface Props {
  title: string;
  link?: string;
  body?: string;
  videoId?: any;
  images?: {
    desktop?: StrapiImage;
    mobile?: StrapiImage;
  };
}

class BlockBase extends React.Component<Props> {
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
                alt={this.props.images.desktop.alternativeText}
              />
            )}

            <div className={styles.content}>
              {this.props.videoId && (
                <EmbedVideo videoId={this.props.videoId} />
              )}

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
