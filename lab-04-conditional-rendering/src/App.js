import './App.css';
import LightBulb from './LightBulb';
import LightBulb2 from './LightBulb2';
import LightBulb3 from './LightBulb3';

function App() {
  return (
    <div>
      <h1>Using variables</h1>
      <LightBulb/>
      <h2>Using functions</h2>
      <LightBulb2/>
      <h2>Using ternary operator</h2>
      <LightBulb3/>
    </div>
  );
}

export default App;
