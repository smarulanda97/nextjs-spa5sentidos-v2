import { graphql } from 'msw';

export const handlers = [
  graphql.query('GetServicesHomes', (req, res, ctx) => {
    return res(
      ctx.data({
        services: [
          {
            id: '10',
            title: 'Facial Cleansing',
            summary:
              'It is a method to pamper your skin; as well as preventing and treating the main signs of aging. This massage helps you relax your facial muscles and show off a smooth, fresh and shiny skin.',
            slug: 'facial-cleansing',
            images: {
              thumbnail: {
                url: '/facial_4b4ed17ca5.jpg',
                name: 'facial.jpg',
                width: 300,
                height: 200,
                alternativeText: '',
                provider_metadata: null,
              },
            },
          },
          {
            id: '8',
            title: 'Suction cups',
            summary:
              'When using the suction cups, they stick to the body, they are of different sizes and the suction brings blood to the surface of the skin. This is why the marks that look like bruises.\\n\\nThe treatment is said to improve blood circulation, thereby speeding up healing, reducing pain, relieving muscle discomfort, detoxifying the body, and draining toxins. ',
            slug: 'suction-cups',
            images: {
              thumbnail: {
                url: '/ventosas_e996b63215.jpg',
                name: 'ventosas.jpg',
                width: 255,
                height: 170,
                alternativeText: '',
                provider_metadata: null,
              },
            },
          },
          {
            id: '6',
            title: 'Volcanic rocks',
            summary:
              'Chocolate therapy combines traditional therapeutic massage with the application of hot stones to the skin, to facilitate the flow of vital energy and relieve physical pain.',
            slug: 'volcanic-rocks',
            images: {
              thumbnail: {
                url: '/piedras_e480a7949f.jpg',
                name: 'piedras.jpg',
                width: 300,
                height: 200,
                alternativeText: '',
                provider_metadata: null,
              },
            },
          },
          {
            id: '4',
            title: 'Relaxing massage',
            summary:
              'Relaxing massage is a therapy for your body and mind, it helps to eliminate muscle tension and acts on different systems such as: circulatory, muscular, lymphatic, nervous, among others',
            slug: 'relaxing-massage',
            images: {
              thumbnail: {
                url: '/relajante_0bdc85cbc9.jpg',
                name: 'relajante.jpg',
                width: 300,
                height: 200,
                alternativeText: '',
                provider_metadata: null,
              },
            },
          },
        ],
      })
    );
  }),
];
