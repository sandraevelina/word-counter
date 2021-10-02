import { getTotalPrice } from '../calcUtils';

test('checks total price', () => {
  expect(getTotalPrice(2, 2)).toBe(4);
});
