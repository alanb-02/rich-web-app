import './App.css';
import React from 'react';
import Note from './Note';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Notepad</h2>
        {/* note component */}
        <Note/>
      </header>
    </div>
  );
}

export default App;
