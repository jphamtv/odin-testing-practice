// calculator.test.js

import { calculator } from "./calculator";

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('multiplies 5 * 2 to equal 10', () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test('divides 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});