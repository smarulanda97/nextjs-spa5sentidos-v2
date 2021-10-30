const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  images: {
    domains: ['localhost', 'img.youtube.com'],
  },
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/servicios',
        destination: '/services',
      },
      {
        source: '/masajes',
        destination: '/services',
      },
    ];
  },
};
