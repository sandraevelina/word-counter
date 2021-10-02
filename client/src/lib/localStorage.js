import stockSettings from '../configs/defaultStockSettings.json';

const { localStorage } = window;

if (!localStorage.getItem('stockSettings')) {
  localStorage.setItem('minCourtage', stockSettings.minCourtage);
  localStorage.setItem('percentageCourtage', stockSettings.percentageCourtage);
  localStorage.setItem('currencyCourtage', stockSettings.currencyCourtage);
  localStorage.setItem('baseCurrency', stockSettings.baseCurrency);
  localStorage.setItem('currencyExchange', stockSettings.currencyExchange);
}

export const getNumberStoredItem = (name) => parseFloat(localStorage.getItem(name));
export const getStringStoredItem = (name) => localStorage.getItem(name);

export const setLocalStorageItem = (name, value) => {
  localStorage.setItem(name, value);
};
