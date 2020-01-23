import React from 'react';
import './App.css';

import logo from './spacex.png'

function App() {
  return (
    <div className="App">
      <img src={logo} alt='SpaceX' style={{ width: 300, display: 'block', margin: 'auto', marginTop: '50px' }} />
    </div>
  );
}

export default App;
