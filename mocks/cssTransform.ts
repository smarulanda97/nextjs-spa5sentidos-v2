export default {
  process(): string {
    return 'module.exports = {};';
  },
  getCacheKey(): string {
    return 'cssTransform';
  },
};
