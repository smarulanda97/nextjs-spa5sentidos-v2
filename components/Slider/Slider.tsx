import React from 'react';
import Image from 'next/image';
import { asset } from '@utils/imageUtils';
import styles from './Slider.module.scss';
import { Container, Carousel } from 'react-bootstrap';
import { SliderProps, SliderItemProps } from '@types-app/index';

const Slider: React.FC<SliderProps> = (props) => {
  const { sliders } = props;

  return (
    <Container
      fluid
      data-testid={'slider-container'}
      className={styles.container}
    >
      <Carousel indicators={false} controls={false}>
        {sliders.length &&
          sliders.map((item: SliderItemProps) => {
            return (
              <Carousel.Item
                key={item.id}
                data-testid={'slider-item'}
                className={styles.item}
              >
                <Image
                  quality={100}
                  layout={'fill'}
                  src={asset(item.images.desktop.url)}
                />
                <Carousel.Caption className={styles.caption}>
                  <h2>{item.title}</h2>
                  <p>{item.subtitle}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </Container>
  );
};

export default React.memo(Slider);
