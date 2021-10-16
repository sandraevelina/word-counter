import React from 'react';
import PropTypes from 'prop-types';
import { Menu, User } from 'react-feather';
import './header.css';

const Header = ({ openNav, openPanel }) => (
  <div className="header">
    <Menu
      size={28}
      strokeWidth={1.5}
      role="button"
      onClick={openNav}
      onKeyPress={openNav}
      tabIndex={-1}
    />

    <User
      size={28}
      strokeWidth={1.5}
      role="button"
      onClick={openPanel}
      onKeyPress={openPanel}
      tabIndex={0}
    />
  </div>
);

Header.propTypes = {
  openNav: PropTypes.func.isRequired,
  openPanel: PropTypes.func.isRequired,
};

export default Header;
