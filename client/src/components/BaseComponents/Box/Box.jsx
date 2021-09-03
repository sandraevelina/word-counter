import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';

const Box = ({ children, label }) => (
  <div className="box">
    <div className="box-label">{label}</div>
    <div className="box-main">{children}</div>
  </div>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
};

Box.defaultProps = {
  label: '',
};

export default Box;
