import React from 'react';
import NavBar from '../components/NavBar';

const Why = () => (
  <>
    <NavBar />
    <main style={{ padding: '2rem' }}>
      <h2>Why Us</h2>
      <p>We provide elite operations in Logistics, Security, and Intelligence.</p>
      <div style={{ marginTop: '2rem' }}>
        <button>Logistics</button>
        <button>Security</button>
        <button>Intelligence</button>
      </div>
    </main>
  </>
);

export default Why;
