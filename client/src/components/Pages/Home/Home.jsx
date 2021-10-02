import React, { useEffect, useState } from 'react';
import Box from '../../BaseComponents/Box/Box';
import NumberInput from '../../BaseComponents/Input/NumberInput';
import Switch from '../../BaseComponents/Switch/Switch';
import './home.css';
import {
  getCourtage,
  getProfitBaseCurrency,
  getSellPoint,
  getUSDCurrencyCourtage,
  getCurrency,
  setCurrency,
} from '../../../lib/stockUtils';

const Home = () => {
  const [buyAt, setBuyAt] = useState(10);
  const [amount, setAmount] = useState(10);
  const [profit, setProfit] = useState(100);
  const [externalMarket, setExternalMarket] = useState(false);
  const [courtage, setCourtage] = useState(0);
  const [currencyCourtage, setCurencyCourtage] = useState(0);
  const [sellAt, setSellAt] = useState(0);
  const [profitSEK, setProfitSEK] = useState(0);
  let currency = getCurrency();

  useEffect(() => {
    console.warn(buyAt);
    setCourtage(getCourtage(buyAt, sellAt, amount));
    setCurencyCourtage(getUSDCurrencyCourtage(buyAt, sellAt, amount));
    setSellAt(getSellPoint({ buyAt, amount, profit, externalMarket, courtage, currencyCourtage }));
    setProfitSEK(getProfitBaseCurrency(profit));
  }, [buyAt, amount, profit]);

  const updateCurrencyExchange = () => {
    currency = getCurrency();
  };

  return (
    <Box label="Check profit">
      <NumberInput
        identifier="price"
        label="Price"
        value={buyAt}
        handleChange={(value) => setBuyAt(value)}
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
        value={externalMarket}
        handleChange={() => setExternalMarket(!externalMarket)}
      />
      <NumberInput identifier="courtage" label="Courtage" value={courtage} readOnly />
      {externalMarket && (
        <NumberInput
          identifier="currency-courtage"
          label="Currency courtage"
          value={currencyCourtage}
          readOnly
        />
      )}
      <NumberInput identifier="sell-at" label="Sell at" value={sellAt} readOnly />
      {externalMarket && (
        <NumberInput
          identifier="currency"
          label="Currency exchange"
          value={currency}
          handleChange={(value) => {
            setCurrency(value);
            updateCurrencyExchange();
          }}
        />
      )}
      {externalMarket && (
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
