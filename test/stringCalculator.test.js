const { add } = require('../src/stringCalculator');

test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number for single value', () => {
  expect(add("4")).toBe(4);
});

test('returns sum of two numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('returns sum of multiple numbers', () => {
  expect(add("1,2,3")).toBe(6);
});

test('handles newline as delimiter', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiters', () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//|\n4|5|6")).toBe(15);
});

test('throws error for single negative number', () => {
  expect(() => add("-3")).toThrow("negative numbers not allowed -3");
});

test('throws error listing all negative numbers', () => {
  expect(() => add("-1,-2,3")).toThrow("negative numbers not allowed -1,-2");
});
