import React from 'react';

export const stockCounterSettings = {
  minCourtage: 1,
  percentageCourtage: 0.0025,
  currencyCourtage: 0.0025,
  baseCurrency: 'SEK',
  currencyExchange: 8.86,
};

export const StockCounterContext = React.createContext({
  settings: stockCounterSettings,
  setCurrencyExchange: (newValue) => newValue,
});
