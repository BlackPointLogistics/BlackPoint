import React from 'react';
import NavBar from '../components/NavBar';

const Home = () => (
  <>
    <NavBar />
    <main>
      <h1>BlackPointDirective</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Elite Star Citizen Organization — Join us to conquer the stars!
      </p>
      <img
        src="https://robertsspaceindustries.com/media/ship/Anvil-Hawk/Anvil-Hawk_1920x1080_2.jpg"
        alt="Anvil Hawk Star Citizen"
      />
      <br />
      <a href="https://discord.com/invite/TBD" target="_blank" rel="noopener noreferrer">
        <button>Join Us</button>
      </a>
    </main>
  </>
);

export default Home;
