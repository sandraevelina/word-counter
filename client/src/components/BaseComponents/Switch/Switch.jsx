import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css';

const Switch = ({ identifier, label, value, handleChange }) => (
  <label htmlFor={identifier}>
    {label}
    <div className="switch">
      <input type="checkbox" value={value} id={identifier} onChange={() => handleChange()} />
      <span className="slider round" />
    </div>
  </label>
);

Switch.propTypes = {
  identifier: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Switch;
