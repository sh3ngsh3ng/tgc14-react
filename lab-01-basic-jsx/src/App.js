import merlion from './merlion.jpg'
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <img src={merlion}/>
      <img src={require('./durian.jfif').default}/>
      </React.Fragment>
  );
}

export default App;
