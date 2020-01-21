import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Square } from './square/Square';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Hello world
        </div>
        <Square owner="'X'"/>
      </header>
    </div>
  );
}

export default App;
