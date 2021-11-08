import { asset } from '../../utils/imageUtils';
import { Slider } from '../../components';
import { render, ReactDeviceDetect } from '../../lib/jest/testUtils';

const sliders = [
  {
    id: '2',
    title: 'Spa 5 Sentidos - Home service in Mellin',
    subtitle: 'Wellbeing for your body and mind',
    images: {
      desktop: {
        url: '/uploads/banner_spa_5_sentidos_desktop_798a38688e.jpg',
        name: 'banner_spa_5_sentidos_desktop.jpg',
        width: 1493,
        height: 800,
        alternativeText: '',
        provider_metadata: null,
      },
      mobile: {
        url: '/uploads/banner_spa_5_sentidos_mobile_d83958c0f0.jpg',
        name: 'banner_spa_5_sentidos_mobile.jpg',
        width: 500,
        height: 526,
        alternativeText: '',
        provider_metadata: null,
      },
    },
  },
];

describe('[Component] Slider', function () {
  test('Render the title and subtitle', () => {
    const { getAllByRole, getAllByText, getAllByTestId } = render(
      <Slider sliders={sliders} />
    );

    const sliderContainer = getAllByTestId('slider-item');
    expect(sliderContainer.length).toBeGreaterThanOrEqual(1);

    const title = getAllByRole('heading', {
      name: /Spa 5 Sentidos - Home service in Mellin/i,
    });
    expect(title).toHaveLength(1);

    const subtitle = getAllByText(/Wellbeing for your body and mind/i);
    expect(subtitle).toHaveLength(1);
  });

  test('Render the slider with an image for desktop', () => {
    ReactDeviceDetect.isMobileOnly = false;

    const { getAllByRole } = render(<Slider sliders={sliders} />);

    const desktopImage = getAllByRole('img');
    expect(desktopImage.length).toBeGreaterThanOrEqual(1);

    const imageUrl = desktopImage[0].getAttribute('src');
    expect(imageUrl).toEqual(
      asset('/uploads/banner_spa_5_sentidos_desktop_798a38688e.jpg')
    );
  });

  test('Render the slider with an image for mobile', async () => {
    ReactDeviceDetect.isMobileOnly = true;

    const { getAllByRole } = render(<Slider sliders={sliders} />);

    const desktopImage = getAllByRole('img');
    expect(desktopImage.length).toBeGreaterThanOrEqual(1);

    const imageUrl = desktopImage[0].getAttribute('src');
    expect(imageUrl).toEqual(
      asset('/uploads/banner_spa_5_sentidos_mobile_d83958c0f0.jpg')
    );
  });
});
