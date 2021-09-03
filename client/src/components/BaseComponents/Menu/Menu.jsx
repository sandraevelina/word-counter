import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './menu.css';

const Menu = ({ navOpen }) => (
  <div className={`menu-container ${navOpen ? '' : 'hidden'}`}>
    <NavLink className="menu-item" to="/home">
      Home
    </NavLink>
  </div>
);

Menu.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Menu;
