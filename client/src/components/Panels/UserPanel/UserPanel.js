import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { X } from 'react-feather';
import NumberInput from '../../BaseComponents/Input/NumberInput';
import TextInput from '../../BaseComponents/Input/TextInput';
import './userPanel.css';
import {
  getNumberStoredItem,
  getStringStoredItem,
  setLocalStorageItem,
} from '../../../lib/localStorage';

const UserPanel = ({ panelOpen, closePanel }) => {
  const [minCourtage, setMinCourtage] = useState(getNumberStoredItem('minCourtage'));
  const [percentageCourtage, setPercentageCourtage] = useState(
    getNumberStoredItem('percentageCourtage')
  );
  const [currencyCourtage, setCurrencyCourtage] = useState(getNumberStoredItem('currencyCourtage'));
  const [baseCurrency, setBaseCurrency] = useState(getStringStoredItem('baseCurrency'));
  const [currencyExchange, setCurrencyExchange] = useState(getNumberStoredItem('currencyExchange'));

  return (
    <div className={`panel ${panelOpen ? '' : 'hidden'}`}>
      <div className="panel-heading">
        Heading
        <X size={24} strokeWidth={1.5} role="button" onClick={closePanel} />
      </div>
      <div className="panel-body">
        <NumberInput
          identifier="min-courtage"
          label="Min. courtage"
          value={minCourtage}
          handleChange={(value) => {
            setMinCourtage(value);
            setLocalStorageItem('minCourtage', value);
          }}
          secondary
        />
        <NumberInput
          identifier="percentage-courtage"
          label="Percentage courtage"
          value={percentageCourtage}
          handleChange={(value) => {
            setPercentageCourtage(value);
            setLocalStorageItem('percentageCourtage', value);
          }}
          secondary
        />
        <NumberInput
          identifier="currency-courtage"
          label="Currency courtage"
          value={currencyCourtage}
          handleChange={(value) => {
            setCurrencyCourtage(value);
            setLocalStorageItem('currencyCourtage', value);
          }}
          secondary
        />
        <NumberInput
          identifier="currency-exchange"
          label="Currency exchange"
          value={currencyExchange}
          handleChange={(value) => {
            setCurrencyExchange(value);
            setLocalStorageItem('currencyExchange', value);
          }}
          secondary
        />
        <TextInput
          identifier="base-currency"
          label="Base currency"
          value={baseCurrency}
          handleChange={(value) => {
            setBaseCurrency(value);
            setLocalStorageItem('baseCurrency', value);
          }}
          secondary
        />
      </div>
    </div>
  );
};

UserPanel.propTypes = {
  panelOpen: PropTypes.bool.isRequired,
  closePanel: PropTypes.func.isRequired,
};

export default UserPanel;
