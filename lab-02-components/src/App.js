import React from 'react'
import "./App.css"
import AlertBox from "./AlertBox"

// the foobar function is a NORMAL
// function, not a component
function foobar() {
  return <div>
    Hello there!
  </div>
}

function App() {
  return (
   <React.Fragment>
     <AlertBox message="Hello World" color="green"/>
     <AlertBox message="Caution Caution Cruise Robinson" color="blue"/>
     <AlertBox message="AWAS AWAS" color="pink"/>
     {/* We can call functions that return JSX
     but it is not considered as a component */}
     {foobar()}
   </React.Fragment>
  );
}

export default App;
