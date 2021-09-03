import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'react-feather';
import './header.css';

const Header = ({ openNav }) => (
  <div className="header">
    <Menu
      size={28}
      strokeWidth={2}
      role="button"
      onClick={openNav}
      onKeyPress={openNav}
      tabIndex={0}
    />
  </div>
);

Header.propTypes = {
  openNav: PropTypes.func.isRequired,
};

export default Header;
