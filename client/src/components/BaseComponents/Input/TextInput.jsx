import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const TextInput = ({ identifier, label, value, handleChange, secondary }) => (
  <label htmlFor={identifier}>
    {label}
    <input
      className={`${secondary ? 'secondary' : ''}`}
      type="text"
      value={value}
      id={identifier}
      onChange={(e) => handleChange(e.target.value)}
    />
  </label>
);

TextInput.propTypes = {
  identifier: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
};

TextInput.defaultProps = {
  secondary: false,
};

export default TextInput;
