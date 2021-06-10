import '@testing-library/jest-dom/extend-expect';
/**
 *
 *
 * Importing manual mocking
 */
import '@mocks/next';
import '@mocks/react-device-detect';
import { server } from '@mocks/msw/server';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
