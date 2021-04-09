import { graphql } from 'msw'

export const handlers = [
  graphql.query('getServicesHome', (req, res, ctx) => {
    return res(
      ctx.data({
        services: [
          {
            id: '4',
            title_es: 'Limpieza facial',
            title_en: 'Facial cleansing',
            slug_es: 'limpieza-facial',
            slug_en: 'facial-cleansing'      ,
            summary_es: 'Lorem ipsum',
            summary_en: 'Lorem ipsum',
            images: {
              featured: {
                name: 'facial.jpg',
                ext: '.jpg',
                url: '/uploads/facial_4b4ed17ca5.jpg',
              },
            },
          },
          {
            id: '3',
            title_es: 'Ventosas',
            title_en: 'Suction cups',
            slug_es: 'ventosas',
            slug_en: 'suction-cups',
            summary_es: 'Lorem ipsum',
            summary_en: 'Lorem ipsum',
            images: {
              featured: {
                name: 'ventosas.jpg',
                ext: '.jpg',
                url: '/uploads/ventosas_e996b63215.jpg',
              },
            },
          },
        ],
      }),
    )
  }),
]
