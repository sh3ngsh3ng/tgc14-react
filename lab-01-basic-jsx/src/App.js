import merlion from './merlion.jpg'
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
        <div id="bg">
          <h1>Hello World</h1>
          <img src={merlion}/>
          <img src={require('./durian.jfif').default}/>
      </div>
      </React.Fragment>
  );
}

export default App;
