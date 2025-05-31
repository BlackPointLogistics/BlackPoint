import React from 'react';
import NavBar from '../components/NavBar';

const iconStyles = { width: 20, height: 20, marginRight: 8, verticalAlign: 'middle', fill: '#000' };

const Why = () => (
  <>
    <NavBar />
    <main>
      <h2>Why Us</h2>
      <p>We provide elite operations in Logistics, Security, and Intelligence.</p>
      <div style={{ marginTop: '2rem' }}>
        <button>
          <svg style={iconStyles} viewBox="0 0 24 24">
            <path d="M3 13h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 17h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2z"/>
          </svg>
          Logistics
        </button>
        <button>
          <svg style={iconStyles} viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 7l-8 4.5V17h16v-3.5L12 9z"/>
          </svg>
          Security
        </button>
        <button>
          <svg style={iconStyles} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
          Intelligence
        </button>
      </div>
    </main>
  </>
);

export default Why;
