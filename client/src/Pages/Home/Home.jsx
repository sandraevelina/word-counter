import React, { useState } from 'react';
import Box from '../../components/BaseComponents/Box/Box';
import NumberInput from '../../components/BaseComponents/Input/NumberInput';
import Switch from '../../components/BaseComponents/Switch/Switch';
import './home.css';

const Home = () => {
  const [price, setPrice] = useState(10);
  const [amount, setAmount] = useState(1);
  const [profit, setProfit] = useState(100);
  const [currency, setCurrency] = useState(8.86);
  const [usMarket, setUSMarket] = useState(false);
  const [courtage, setCourtage] = useState(0);
  const [currencyCourtage, setCurencyCourtage] = useState(0);
  const [sellAt, setSellAt] = useState(0);

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
        label="Profit (SEK)"
        value={profit}
        handleChange={(value) => setProfit(value)}
      />
      <Switch
        identifier="us-market"
        label="US market"
        value={usMarket}
        handleChange={() => setUSMarket(!usMarket)}
      />
      {usMarket && (
        <NumberInput
          identifier="currency"
          label="Currency exchange"
          value={currency}
          handleChange={(value) => setCurrency(value)}
        />
      )}
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
    </Box>
  );
};

export default Home;
