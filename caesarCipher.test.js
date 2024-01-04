// caesarCipher.test.js

import { caesarCipher } from "./caesarCipher";

test('Returns a shifted string', () => {
  expect(caesarCipher('Julius Caesar!', 3)).toBe('Mxolxv Fdhvdu!');
});

