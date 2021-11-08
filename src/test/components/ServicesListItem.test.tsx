import { render } from '../../lib/jest/testUtils';
import { ServicesListItem } from '../../components';
import { Service } from '../../types/global';

const service: Service = {
  id: '10',
  title: 'Facial Cleansing',
  summary:
    'It is a method to pamper your skin; as well as preventing and treating the main signs of aging. This massage helps you relax your facial muscles and show off a smooth, fresh and shiny skin.',
  slug: 'facial-cleansing',
  price: 0,
  discount: 0,
  home_service_included: false,
  images: {
    thumbnail: {
      url: '/uploads/facial_4b4ed17ca5.jpg',
      name: 'facial.jpg',
      width: 300,
      height: 200,
      alternativeText: '',
      provider_metadata: null,
    },
  },
};

describe('[Component] ServiceListItem', function () {
  test('Render the service title, summary, book and detail button', () => {
    const { getByRole, getAllByText } = render(
      <ServicesListItem service={service} />
    );

    const title = getByRole('heading', { name: /Facial Cleansing/i });
    expect(title).toBeInTheDocument();

    const image = getByRole('img', { name: /Facial Cleansing service/i });
    expect(image).toBeInTheDocument();

    const summary = getByRole('paragraph');
    expect(summary).toBeInTheDocument();

    const buttons = getAllByText(/(learn_more|book_massage)/i);
    expect(buttons).toHaveLength(2);
  });

  test('Book button to have target _blank attribute and match whatsapp link', () => {
    const { getByText } = render(<ServicesListItem service={service} />);

    const bookButton = getByText(/book_massage/i);
    expect(bookButton).toBeInTheDocument();
    expect(bookButton).toHaveAttribute('target', '_blank');

    const domainRegex =
      /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/i;
    const domainLink: RegExpExecArray = domainRegex.exec(
      bookButton.getAttribute('data-href')
    );
    expect(domainLink[1]).toEqual('api.whatsapp.com');
  });

  test('Render each element for a massage with discount', () => {
    const serviceWithDiscount = {
      ...service,
      price: 40,
      discount: 10,
      homeServiceIncluded: false,
    };

    const { getByText, getAllByTestId } = render(
      <ServicesListItem service={{ ...serviceWithDiscount }} />
    );

    const oldPrice = getByText(/^\$40 USD/i);
    expect(oldPrice).toBeInTheDocument();

    const newPrice = getByText(/^\$36\sUSD/i);
    expect(newPrice).toBeInTheDocument();

    const discount = getByText('with_discount');
    expect(discount).toBeInTheDocument();

    expect(getAllByTestId('service-list-item-price')).toHaveLength(2);
  });

  test("Render only the current price when the massage doesn't have a discount", () => {
    const serviceWithoutDiscount = {
      ...service,
      price: 40,
      discount: 0,
    };

    const { getByText, getAllByTestId, queryByText } = render(
      <ServicesListItem service={{ ...serviceWithoutDiscount }} />
    );

    const oldPrice = getByText(/^\$40\sUSD/i);
    expect(oldPrice).toBeInTheDocument();

    const newPrice = queryByText(/^\$36\sUSD/i);
    expect(newPrice).not.toBeInTheDocument();

    expect(getAllByTestId('service-list-item-price')).toHaveLength(1);
  });
});
