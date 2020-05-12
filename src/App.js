import React from 'react';
import './App.css';
import Posts from './components/Posts';


function App() {
  return (
    <div className="App">
    <header className='App-header' >
      <h1> Hello from the app component</h1>
    </header>

    <Posts />
    
    </div>
  );
}

export default App;
