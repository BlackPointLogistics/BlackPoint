import React from 'react';
import NavBar from '../components/NavBar';

const Home = () => (
  <>
    <NavBar />
    <main style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>BlackPointDirective</h1>
      <img src="https://source.unsplash.com/featured/?space" alt="Star Citizen" style={{ width: '80%', maxWidth: '800px' }} />
      <br /><br />
      <a href="https://discord.com/invite/TBD" target="_blank" rel="noopener noreferrer">
        <button style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>Join Us</button>
      </a>
    </main>
  </>
);

export default Home;
