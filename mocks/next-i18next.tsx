export const mockNextI18Next = jest.requireMock('next-i18next');

jest.mock('next-i18next', () => ({
  withTranslation: () => (Component) => <Component />,
}));
