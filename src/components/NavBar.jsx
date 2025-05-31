import React from 'react';

const NavBar = () => (
  <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#111' }}>
    <a href="/" style={{ color: 'white' }}>Home</a>
    <a href="/why" style={{ color: 'white' }}>Why Us</a>
    <a href="/contact" style={{ color: 'white' }}>Contact</a>
    <a href="/socials" style={{ color: 'white' }}>Socials</a>
  </nav>
);

export default NavBar;
