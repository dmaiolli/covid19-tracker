import React, { useState, useEffect } from 'react';
import './App.css';
import api from './services/api';

function App() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    async function getCurrentData() {
      const response = await api.get('/v2/current');
      console.log(response.data)
    }
    getCurrentData();
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
