import './App.css';
import React from 'react'
import BorderedImageFrame from './BorderedImageFrame';
import durian from './durian.jfif'
import SumOfTwo from "./SumOfTwo"
import {Foobar,LuckyNumber} from "./functions"

function App() {
  return (
   <React.Fragment>
     {/* Hands on 2.2 */}
     <BorderedImageFrame img={durian}/>
     <BorderedImageFrame img={require('./merlion.jpg').default}/>
     <img src="ramen.jpg"/>
     <SumOfTwo number1={2} number2={3}/>
   </React.Fragment>
  );
}

export default App;
