import React from 'react';
import NavBar from '../components/NavBar';

const Socials = () => (
  <>
    <NavBar />
    <main style={{ padding: '2rem' }}>
      <h2>Socials</h2>
      <ul>
        <li><a href="https://discord.com/invite/TBD" style={{ color: 'white' }}>Discord</a></li>
        <li><a href="https://twitter.com" style={{ color: 'white' }}>Twitter</a></li>
      </ul>
    </main>
  </>
);

export default Socials;
