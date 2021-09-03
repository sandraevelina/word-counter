import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const TextInput = ({ identifier, label, value, handleChange }) => (
  <label htmlFor={identifier}>
    {label}
    <input
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
};

export default TextInput;
