import React from 'react';
import Image from 'next/image';
import styles from './Slider.module.scss';
import { asset } from '@utils/imageUtils';
import { isMobileOnly } from 'react-device-detect';
import { Container, Carousel } from 'react-bootstrap';
import {
  SliderProps,
  SliderItemProps,
  ResponsiveImages,
} from '@types-app/index';

const Slider: React.FC<SliderProps> = (props) => {
  const { sliders } = props;

  /**
   *
   * @param images
   * @returns
   */
  function renderImage(images: ResponsiveImages): JSX.Element {
    if (!images?.mobile || !images?.desktop) {
      return null;
    }

    const image = isMobileOnly ? images.mobile : images.desktop;

    return <Image quality={100} layout={'fill'} src={asset(image.url)} />;
  }

  return (
    <Container
      fluid
      className={styles.container}
      data-testid={'slider-container'}
    >
      <Carousel indicators={false} controls={false}>
        {sliders.length &&
          sliders.map((item: SliderItemProps) => (
            <Carousel.Item
              key={item.id}
              data-testid={'slider-item'}
              className={styles.item}
            >
              {renderImage(item.images)}
              <Carousel.Caption className={styles.caption}>
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </Container>
  );
};

export default React.memo(Slider);
