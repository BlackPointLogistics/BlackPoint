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
        src="https://static.invenglobal.com/upload/image/2020/11/25/i1606290080312517.jpeg"
        alt="Star Citizen Fleet"
        style={{ maxWidth: '90%', borderRadius: '15px' }}
      />
      <br />
      <a href="https://discord.com/invite/TBD" target="_blank" rel="noopener noreferrer">
        <button>Join Us</button>
      </a>
    </main>
  </>
);

export default Home;