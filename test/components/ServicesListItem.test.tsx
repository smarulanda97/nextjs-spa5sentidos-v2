import { render } from '@lib/jest/testUtils';
import { ServicesListItem } from '@components/index';

const service = {
  id: '10',
  title: 'Facial Cleansing',
  summary:
    'It is a method to pamper your skin; as well as preventing and treating the main signs of aging. This massage helps you relax your facial muscles and show off a smooth, fresh and shiny skin.',
  slug: 'facial-cleansing',
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

    const domainRegex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/i;
    const domainLink: RegExpExecArray = domainRegex.exec(
      bookButton.getAttribute('data-href')
    );
    expect(domainLink[1]).toEqual('api.whatsapp.com');
  });
});
