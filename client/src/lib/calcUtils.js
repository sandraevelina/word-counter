/**
 * Calculates total price all the stocks bought.
 * @param {number} price - Price point per stock.
 * @param {number} amount - Amount of stocks.
 * @returns {number} - Total price of all stocks.
 */
export const getTotalPrice = (price, amount) => price * amount;

/**
 * Returns sum of an array of numbers.
 * @param {numbers[]} numbers - Numbers to add together.
 * @returns {number} - Sum of all numbers in array.
 */
export const addition = (numbers) =>
  numbers.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr));
