import React from 'react';
import Image from 'next/image';
import { isMobileOnly } from 'react-device-detect';
import { Container, Carousel } from 'react-bootstrap';

import { asset } from '@utils/index';
import { StrapiImage, ResponsiveImages } from '@types-app/index';

import styles from './Slider.module.scss';

type SliderItem = {
  id: string;
  title: string;
  subtitle?: string;
  images: {
    mobile: StrapiImage;
    desktop: StrapiImage;
  };
};

type Props = {
  sliders: SliderItem[];
};

const Slider: React.FC<Props> = (props) => {
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

    return (
      <Image
        quality={100}
        layout={'fill'}
        src={asset(image.url)}
        alt={image.alternativeText}
      />
    );
  }

  return (
    <Container
      fluid
      className={styles.container}
      data-testid={'slider-container'}
    >
      <Carousel indicators={false} controls={false}>
        {sliders.length &&
          sliders.map((item: SliderItem) => (
            <Carousel.Item
              key={item.id}
              data-testid={'slider-item'}
              className={styles.item}
            >
              {renderImage(item.images)}
              <Carousel.Caption className={styles.caption}>
                <h1>{item.title}</h1>
                <h2>{item.subtitle}</h2>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </Container>
  );
};

export default React.memo(Slider);
