// analyzeArray.test.js

import { analyzeArray } from './analyzeArray';

test('Return object with properties for avg, min, max, and length', () => {
  let array = [1,8,3,4,2,6];

  expect(analyzeArray(array)).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
});