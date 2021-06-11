jest.mock('next-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: (key: string) => key,
    };
    return Component;
  },
  useTranslation: () => {
    return {
      t: (key) => key,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

export default {};
