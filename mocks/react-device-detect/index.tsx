export const ReactDeviceDetect = jest.requireMock('react-device-detect');

jest.mock('react-device-detect', () => ({
  isMobileOnly: false,
}));
