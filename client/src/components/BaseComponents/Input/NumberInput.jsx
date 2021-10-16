import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const NumberInput = ({
  identifier,
  label,
  value,
  handleChange,
  step,
  min,
  max,
  readOnly,
  secondary,
}) => (
  <label htmlFor={identifier}>
    {label}
    <input
      className={`${secondary ? 'secondary' : ''}`}
      type="number"
      value={value}
      id={identifier}
      step={step}
      min={min}
      max={max}
      readOnly={readOnly}
      onChange={(e) => handleChange(parseFloat(e.target.value))}
    />
  </label>
);

NumberInput.propTypes = {
  identifier: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  step: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  secondary: PropTypes.bool,
  readOnly: PropTypes.bool,
};

NumberInput.defaultProps = {
  step: 'any',
  min: 'any',
  max: 'any',
  readOnly: false,
  secondary: false,
  handleChange: () => {},
};

export default NumberInput;
