import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <NavLink to="/" end>Home</NavLink>
    <NavLink to="/why">Why Us</NavLink>
    <NavLink to="/contact">Contact Us</NavLink>
    <NavLink to="/socials">Socials</NavLink>
  </nav>
);

export default NavBar;
