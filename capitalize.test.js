// capitalize.test.js

import { capitalize } from './capitalize';

test('capitalize first letter', () => {
  expect(capitalize('hello, world')).toBe('Hello, world');
});

