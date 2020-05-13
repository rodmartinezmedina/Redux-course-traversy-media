import React from 'react';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';


function App() {
  return (
    <div className="App">
      <header className='App-header' >
        <h1> Hello from the app component</h1>
      </header>
      <PostForm />

      <Posts className='posts-list'/>    
    </div>
  );
}

export default App;
