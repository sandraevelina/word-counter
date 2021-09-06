import React, { useState, useEffect } from 'react';
import { StockCounterContext } from '../../contexts/stock-counter-context';
import Box from '../../components/BaseComponents/Box/Box';
import NumberInput from '../../components/BaseComponents/Input/NumberInput';
import Switch from '../../components/BaseComponents/Switch/Switch';
import './home.css';
import {
  addition,
  getCourtage,
  getProfitBaseCurrency,
  getSellPoint,
  getTotalPrice,
  getUSDCurrencyCourtage,
} from '../../lib/utils';

const Home = () => {
  const [price, setPrice] = useState(10);
  const [amount, setAmount] = useState(10);
  const [profit, setProfit] = useState(100);
  const [currency, setCurrency] = useState(8.86);
  const [usMarket, setUSMarket] = useState(false);
  const [courtage, setCourtage] = useState(0);
  const [currencyCourtage, setCurencyCourtage] = useState(0);
  const [sellAt, setSellAt] = useState(0);
  const [profitSEK, setProfitSEK] = useState(0);

  useEffect(() => {
    const boughtAt = getTotalPrice(price, amount);
    const soldAt = getTotalPrice(sellAt, amount);

    setCourtage(getCourtage(boughtAt, soldAt));
    setCurencyCourtage(getUSDCurrencyCourtage(boughtAt, soldAt));
  }, [price, amount, sellAt]);

  useEffect(() => {
    const totCourtage = usMarket ? addition([courtage, currencyCourtage]) : courtage;

    setSellAt(getSellPoint(price, amount, profit, totCourtage));
    setProfitSEK(getProfitBaseCurrency(profit, currency));
  });

  return (
    <Box label="Quick test">
      <NumberInput
        identifier="price"
        label="Price"
        value={price}
        handleChange={(value) => setPrice(value)}
      />
      <NumberInput
        identifier="amount"
        label="Amount of stocks"
        value={amount}
        step="5"
        handleChange={(value) => setAmount(value)}
      />
      <NumberInput
        identifier="profit"
        label="Profit"
        value={profit}
        handleChange={(value) => setProfit(value)}
      />
      <Switch
        identifier="us-market"
        label="US market"
        value={usMarket}
        handleChange={() => setUSMarket(!usMarket)}
      />

      <NumberInput
        identifier="courtage"
        label="Courtage"
        value={courtage}
        handleChange={(value) => setCourtage(value)}
      />
      {usMarket && (
        <NumberInput
          identifier="currency-courtage"
          label="Currency courtage"
          value={currencyCourtage}
          handleChange={(value) => setCurencyCourtage(value)}
        />
      )}
      <NumberInput
        identifier="sell-at"
        label="Sell at"
        value={sellAt}
        handleChange={(value) => setSellAt(value)}
      />
      {usMarket && (
        <StockCounterContext.Consumer>
          {({ currencyExchange, setCurrencyExchange }) => (
            <NumberInput
              identifier="currency"
              label="Currency exchange"
              value={currencyExchange}
              handleChange={(value) => setCurrencyExchange(value)}
            />
          )}
        </StockCounterContext.Consumer>
      )}

      {usMarket && (
        <NumberInput
          identifier="profit-sek"
          label="Profit (SEK)"
          value={profitSEK}
          handleChange={(value) => setProfitSEK(value)}
        />
      )}
    </Box>
  );
};

export default Home;
