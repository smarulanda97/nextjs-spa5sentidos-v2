import { graphql } from 'msw';

export const handlers = [
  graphql.query('GET_DATA_APP_CONFIG_CONTEXT', (req, res, ctx) => {
    return res(
      ctx.data({
        config: {
          system: {
            site_name: 'Spa 5 Sentidos',
            email: 'leidymejia17@gmail.com',
            phone_number: '+57 301 4808380',
            address: 'Cra 90 # 43-57',
            logo: {
              url: '/uploads/logo_b896676e1c.png',
              name: 'logo.png',
              width: 250,
              height: 60,
              alternativeText: 'Spa 5 Sentidos logo',
              provider_metadata: null,
            },
            logo_footer: {
              url: '/uploads/logo_footer_c7e33bbcf4.png',
              name: 'logo_footer.png',
              width: 250,
              height: 60,
              alternativeText: 'Spa 5 Sentidos logo',
              provider_metadata: null,
            },
            favicon: {
              url: '/uploads/favicon_f4c102cac2.ico',
              name: 'favicon.ico',
              width: null,
              height: null,
              alternativeText: '',
              provider_metadata: null,
            },
          },
          app: {
            elfsight_token: 'elfsight-app-cbdcfb04-79f1-478c-b662-23542ada80d4',
          },
        },
      })
    );
  }),
  graphql.query('GET_DATA_VIDEO_BLOCK_COMPONENT', (req, res, ctx) => {
    return res(
      ctx.data({
        videoBlock: [
          {
            id: '2',
            title: 'Spa Overview',
            machine_name: 'block-overview',
            video_id: 'MFROybUazN4',
            body:
              '*Lorem ipsum ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.*',
            images: {
              desktop: {
                url: '/uploads/backround_block_overview_cd75fa1c81.jpg',
                name: 'backround_block_overview.jpg',
                width: 1680,
                height: 800,
                alternativeText: '',
                provider_metadata: null,
              },
              mobile: null,
            },
          },
        ],
      })
    );
  }),
  graphql.query('GET_DATA_LAYOUT_COMPONENT', (req, res, ctx) => {
    return res(
      ctx.data({
        mainMenu: [
          {
            id: '2',
            name: 'main-navigation',
            machine_name: 'main-navigation-en',
            items: [
              {
                id: '6',
                title: 'Home',
                link: '/',
              },
              {
                id: '7',
                title: 'About us',
                link: '/about-us',
              },
              {
                id: '8',
                title: 'Services',
                link: '/services',
              },
              {
                id: '9',
                title: 'Gallery',
                link: '/gallery',
              },
              {
                id: '10',
                title: 'Contact us',
                link: '/contact-us',
              },
            ],
          },
        ],
        socialMenu: [
          {
            id: '4',
            name: 'social-navigation',
            machine_name: 'social-navigation-en',
            items: [
              {
                id: '13',
                title: 'Instagram',
                link: 'https://www.instagram.com/spa5sentidos_medellin/',
                icon: {
                  url: '/uploads/instagram_ba8c4f6fbf.svg',
                  name: 'instagram.svg',
                  width: 448,
                  height: 448,
                  alternativeText: '',
                  provider_metadata: null,
                },
              },
              {
                id: '14',
                title: 'Whatsapp',
                link: 'https://api.whatsapp.com/send?phone=573014808380',
                icon: {
                  url: '/uploads/whatsapp_bb5d1863fb.svg',
                  name: 'whatsapp.svg',
                  width: 512,
                  height: 512,
                  alternativeText: '',
                  provider_metadata: null,
                },
              },
            ],
          },
        ],
        sliders: [
          {
            id: '2',
            title: 'Spa 5 Sentidos - Home service in Mellin ',
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
        ],
      })
    );
  }),
  graphql.query('GET_DATA_SERVICES_HOME_COMPONENT', (req, res, ctx) => {
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
                url: '/uploads/facial_4b4ed17ca5.jpg',
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
                url: '/uploads/ventosas_e996b63215.jpg',
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
                url: '/uploads/piedras_e480a7949f.jpg',
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
                url: '/uploads/relajante_0bdc85cbc9.jpg',
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
