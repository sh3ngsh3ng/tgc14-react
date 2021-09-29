import './App.css';
import React from 'react'
import BorderedImageFrame from './BorderedImageFrame';
import durian from './durian.jfif'

function App() {
  return (
   <React.Fragment>
     {/* Hands on 2.2 */}
     <BorderedImageFrame img={durian}/>
     <BorderedImageFrame img={require('./merlion.jpg').default}/>
   </React.Fragment>
  );
}

export default App;
