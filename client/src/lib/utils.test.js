import { getCourtage, getTotalPrice } from './utils';

test('checks total price', () => {
  expect(getTotalPrice(2, 2)).toBe(4);
});

test('checks courtage', () => {
  expect(getCourtage(10, 20)).toBe(1);
  expect(getCourtage(1000, 1000)).toBe(2.5);
  expect(getCourtage(1000)).toBe(2.5);
  expect(getCourtage(null, 1000)).toBe(2.5);
});
