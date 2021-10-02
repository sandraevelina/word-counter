import { getNumberStoredItem, setLocalStorageItem } from './localStorage';
import { addition, getTotalPrice } from './calcUtils';

const getTotalCourtage = (externalMarket, courtage, currencyCourtage) => {
  if (externalMarket) {
    return addition([courtage, currencyCourtage]);
  }

  return courtage;
};

const getSellPrice = (totalBuyPrice, profit, totCourtage, amount) =>
  parseFloat((totalBuyPrice + profit + totCourtage) / amount);

/**
 * Calculates courtage.
 * @param {number} buyAt - Pice to buy at.
 * @param {number} sellAt - Price to sell at.
 * @param {number} amount - Amount of shares.
 * @returns {number} - Courtage to pay.
 */
export const getCourtage = (buyAt, sellAt, amount) => {
  const totalBuyPrice = getTotalPrice(buyAt, amount);
  const totalSellPrice = getTotalPrice(sellAt, amount);
  const minCourtage = getNumberStoredItem('minCourtage');
  const percentageCourtage = getNumberStoredItem('percentageCourtage');
  const valueToCalculate = Math.max(totalBuyPrice || 0, totalSellPrice || 0);
  const courtage = valueToCalculate * percentageCourtage;

  if (courtage < minCourtage) {
    return minCourtage;
  }

  return parseFloat(courtage.toFixed(2));
};

/**
 * Calculates currency courtage when trading on the US market.
 * @param {number} buyAt - Price to buy at.
 * @param {number} sellAt - Price to sell at.
 * @param {number} amount - Amount of shares.
 * @returns {number} - Courtage to pay.
 */
export const getUSDCurrencyCourtage = (buyAt, sellAt, amount) => {
  const totalBuyPrice = getTotalPrice(buyAt, amount);
  const totalSellPrice = getTotalPrice(sellAt, amount);
  const currencyCourtage = getNumberStoredItem('currencyCourtage');
  const valueToCalculate = Math.max(totalBuyPrice || 0, totalSellPrice || 0);
  const courtage = valueToCalculate * currencyCourtage;

  return parseFloat(courtage.toFixed(2));
};

/**
 * Calculates sell point.
 * @param {Object} data - Data to make calculation.
 * @param {number} data.buyAt - Price to buy at.
 * @param {number} data.amount - Amount of shares.
 * @param {number} data.profit - Profit in selected currency user would like to make.
 * @param {boolean} data.externalMarket - If trade isn't in your base currency.
 * @param {number} data.courtage - Base courtage to pay.
 * @param {number} data.currencyCourtage - Currency exchange courtage to pay.
 * @returns {number} - Price point to sell at.
 */
export const getSellPoint = ({
  buyAt,
  amount,
  profit,
  externalMarket,
  courtage,
  currencyCourtage,
}) => {
  let totCourtage = getTotalCourtage(externalMarket, courtage, currencyCourtage);
  const totalBuyPrice = getTotalPrice(buyAt, amount);
  const initialSellPrice = getSellPrice(totalBuyPrice, profit, totCourtage, amount);
  const newCourtage = getCourtage(buyAt, initialSellPrice, amount);
  const newcurrencyCourtage = getUSDCurrencyCourtage(buyAt, initialSellPrice, amount);

  totCourtage = getTotalCourtage(externalMarket, newCourtage, newcurrencyCourtage);
  console.warn(totCourtage);

  return getSellPrice(totalBuyPrice, profit, totCourtage, amount);
};

/**
 * Returns currency exchange.
 * @returns {number} - Currency exchange between US dollars and selected base currency.
 */
export const getCurrency = () => getNumberStoredItem('currencyExchange');

/**
 * Sets currency exchange value in localStorage.
 * @param {number} currencyExchange - New currency exchange.
 */
export const setCurrency = (currencyExchange) =>
  setLocalStorageItem('currencyExchange', currencyExchange);

/**
 * Returns profit in user's base currency.
 * @param {number} profit - Profit in traded currency.
 * @returns {number} - Profits in base currency.
 */
export const getProfitBaseCurrency = (profit) => {
  const currency = getNumberStoredItem('currencyExchange');

  return parseFloat((profit * currency).toFixed(2));
};
