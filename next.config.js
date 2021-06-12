const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  images: {
    domains: ['localhost', 'img.youtube.com'],
  },
  future: {
    webpack5: true,
  },
};
