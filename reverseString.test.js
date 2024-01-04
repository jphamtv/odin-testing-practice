// reverseString.test.js

import { reverseString } from "./reverseString";

test('reverses a string', () => {
  expect(reverseString('Hello, world')).toBe('dlrow ,olleH');
});