import logo from './logo.svg';
import './App.css';
import { NotFoundError } from 'rxjs';
import { ReactDOM } from 'react';
import React from 'react';
import Note from './Note';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Notepad</h2>
        <Note/>
      </header>
    </div>
  );
}

export default App;
