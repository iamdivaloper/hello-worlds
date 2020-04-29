import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const value = 'World';
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello {value}!</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
