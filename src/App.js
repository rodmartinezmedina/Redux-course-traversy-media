import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className='App-header' >
          <h1> Hello from the app component</h1>
        </header>
        <PostForm />

        <Posts className='posts-list'/>    
      </div>
    </Provider>
  );
}

export default App;
