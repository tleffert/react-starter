import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Square } from './square/Square';
import { Board } from './board/Board';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Hello world
        </div>
        <Board />
      </header>
    </div>
  );
}

export default App;
