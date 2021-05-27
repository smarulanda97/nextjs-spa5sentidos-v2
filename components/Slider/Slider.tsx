import React from 'react';
import Image from 'next/image';
import { asset } from '@utils/imageUtils';
import { StrapiImage } from '@types-app/index';
import { Container, Carousel } from 'react-bootstrap';

type SliderItem = {
  id: string;
  title: string;
  subtitle?: string;
  images: {
    desktop: StrapiImage;
    mobile: StrapiImage;
  };
};

type SliderProps = {
  sliders: SliderItem[];
};

const Slider: React.FC<SliderProps> = (props) => {
  const { sliders } = props;

  return (
    <Container fluid data-testid={'slider-container'}>
      <Carousel indicators={false}>
        {sliders.length &&
          sliders.map((item: SliderItem) => {
            return (
              <Carousel.Item key={item.id} data-testid={'slider-item'}>
                <Image
                  width={item.images.desktop.width}
                  height={item.images.desktop.height}
                  src={asset(item.images.desktop.url)}
                  layout={'responsive'}
                />
                <Carousel.Caption>
                  <h2>{item.title}</h2>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </Container>
  );
};

export default React.memo(Slider);
