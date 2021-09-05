/**
 * Calculates courtage.
 * @param {number} boughtAt - Total price it was bought at.
 * @param {number} soldAt - Total price it was sold at.
 * @returns {number} - Courtage to pay.
 */
export const getCourtage = (boughtAt, soldAt) => {
  const minCourtage = 1;
  const percentageCourtage = 0.0025;
  const valueToCalculate = Math.max(boughtAt || 0, soldAt || 0);
  const courtage = valueToCalculate * percentageCourtage;

  if (courtage < minCourtage) {
    return minCourtage;
  }

  return parseFloat(courtage.toFixed(2));
};

/**
 * Calculates currency courtage when trading on the US market.
 * @param {number} boughtAt - Total price it was bought at.
 * @param {number} soldAt - Total price it was sold at.
 * @returns {number} - Courtage to pay.
 */
export const getUSDCurrencyCourtage = (boughtAt, soldAt) => {
  const percentageCourtage = 0.0025;
  const valueToCalculate = Math.max(boughtAt || 0, soldAt || 0);
  const courtage = valueToCalculate * percentageCourtage;

  return parseFloat(courtage.toFixed(2));
};

/**
 * Calculates total price all the stocks bought.
 * @param {number} price - Price point per stock.
 * @param {number} amount - Amount of stocks.
 * @returns {number} - Total price of all stocks.
 */
export const getTotalPrice = (price, amount) => price * amount;

/**
 * Calculates sell point.
 * @param {number} price - Price point stock was bought at.
 * @param {number} amount - Amount of stocks bought.
 * @param {number} profit - Profit in selected currency user would like to make.
 * @param {number} courtage - Courtage to pay.
 * @returns {number} - Price point to sell at.
 */
export const getSellPoint = (price, amount, profit, courtage) => {
  const buyPrice = price * amount;
  const sellPrice = (buyPrice + profit + courtage) / amount;

  return sellPrice;
};

/**
 * Returns profit in user's base currency.
 * @param {number} profit - Profit in traded currency.
 * @param {number} currency - Currency to update to.
 * @returns {number} - Profits in base currency.
 */
export const getProfitBaseCurrency = (profit, currency) =>
  parseFloat((profit * currency).toFixed(2));

/**
 * Returns sum of an array of numbers.
 * @param {numbers[]} numbers - Numbers to add together.
 * @returns {number} - Sum of all numbers in array.
 */
export const addition = (numbers) =>
  numbers.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr));
